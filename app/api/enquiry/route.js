/**
 * ENQUIRY HANDLER.
 *
 * Replaces the `mailto:` fallback. Enquiries are validated on the server and
 * delivered by SMTP to the address in `content/company.js`.
 *
 * ## Why SMTP rather than a transactional API
 *
 * The company already owns mail on its own domain, so SMTP works with the
 * mailbox that exists rather than requiring a new vendor account. Any provider
 * — Google Workspace, Microsoft 365, Fastmail, a host's own server — is a
 * matter of four environment variables.
 *
 * ## Failure policy
 *
 * If SMTP is not configured or delivery fails, this returns 5xx and the form
 * tells the visitor to email directly. It never returns success for a message
 * it did not send. A contact form that appears to submit and silently drops the
 * enquiry is the worst available outcome, and it is the specific thing this
 * route exists to prevent.
 *
 * ## Required environment
 *
 *   SMTP_HOST      e.g. smtp.gmail.com
 *   SMTP_PORT      465 (implicit TLS) or 587 (STARTTLS)
 *   SMTP_USER      the mailbox that authenticates
 *   SMTP_PASSWORD  an app password, not the account password
 *   SMTP_FROM      optional; defaults to SMTP_USER
 *   ENQUIRY_TO     optional; defaults to company.email
 *
 * In development with no SMTP configured, the enquiry is logged to the server
 * console and returns success, so the form can be exercised locally.
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { company } from '@/content/company';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/* ── Rate limiting ─────────────────────────────────────────────────────────
   In-memory and therefore per-instance. It stops casual form hammering, which
   is what it is for. Genuine abuse protection belongs at the edge (WAF or
   platform rate limiting) — this is not a substitute and does not pretend to
   be one. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  /* Keep the map from growing without bound on a long-lived instance. */
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

/* ── Validation ───────────────────────────────────────────────────────────
   Mirrors the client-side rules. The client copy exists for fast feedback;
   this one is the one that counts, because the client can be bypassed. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, company: 200, message: 5000 };

function validate(body) {
  const errors = {};
  const clean = (v) => (typeof v === 'string' ? v.trim() : '');

  const name = clean(body.name);
  const email = clean(body.email);
  const org = clean(body.company);
  const message = clean(body.message);
  const half = clean(body.half);

  if (!name) errors.name = 'We need a name to reply to.';
  else if (name.length > LIMITS.name) errors.name = 'That name is too long.';

  if (!email) errors.email = 'We need an email address to reply to.';
  else if (!EMAIL.test(email)) errors.email = 'That address does not look right.';
  else if (email.length > LIMITS.email) errors.email = 'That address is too long.';

  if (org.length > LIMITS.company) errors.company = 'That company name is too long.';

  if (!message) errors.message = 'Tell us what is going wrong, in your own words.';
  else if (message.length < 20) errors.message = 'A little more detail helps us give you a useful answer.';
  else if (message.length > LIMITS.message) errors.message = 'That message is too long — send us the short version.';

  if (half && !['run', 'build', 'unsure'].includes(half)) errors.half = 'Unrecognised option.';

  return { errors, values: { name, email, company: org, message, half } };
}

const HALF_LABEL = {
  run: 'Run — a queue to hold',
  build: 'Build — a system to make',
  unsure: 'Not sure yet',
};

/* Header injection guard for anything interpolated into a header value. */
const headerSafe = (s) => s.replace(/[\r\n]+/g, ' ').trim();

function transport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;

  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function POST(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many enquiries from this connection. Please email us directly.' },
      { status: 429 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request.' }, { status: 400 });
  }

  /* Honeypot. A real visitor never sees this field, so anything in it is a bot.
     Returns success so the bot does not learn it was caught. */
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const to = process.env.ENQUIRY_TO || company.email;
  const subject = headerSafe(
    `Website enquiry — ${values.name}${values.company ? ` (${values.company})` : ''}`,
  );

  const lines = [
    `Name:    ${values.name}`,
    `Email:   ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    values.half ? `Half:    ${HALF_LABEL[values.half]}` : null,
    '',
    values.message,
    '',
    '—',
    `Sent from the enquiry form at ${company.url}/contact`,
    `Received: ${new Date().toISOString()}`,
  ].filter((l) => l !== null);

  const mailer = transport();

  if (!mailer) {
    /* Unconfigured. In development that is expected; in production it is a
       deployment fault and must not look like a delivered message. */
    if (process.env.NODE_ENV !== 'production') {
      console.info('\n─── ENQUIRY (SMTP not configured — logged only) ───');
      console.info(lines.join('\n'));
      console.info('───────────────────────────────────────────────────\n');
      return NextResponse.json({ ok: true, delivered: false, dev: true });
    }

    console.error('Enquiry received but SMTP is not configured. Enquiry was NOT delivered.');
    return NextResponse.json(
      { ok: false, error: 'We could not send that just now. Please email us directly.' },
      { status: 503 },
    );
  }

  try {
    await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      /* Reply-To carries the enquirer so a reply goes to them, while From stays
         on an authenticated domain — spoofing the sender in From is what gets
         mail rejected by SPF and DMARC. */
      replyTo: `${headerSafe(values.name)} <${headerSafe(values.email)}>`,
      subject,
      text: lines.join('\n'),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error('Enquiry delivery failed:', error?.message ?? error);
    return NextResponse.json(
      { ok: false, error: 'We could not send that just now. Please email us directly.' },
      { status: 502 },
    );
  }
}
