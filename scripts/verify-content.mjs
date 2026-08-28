/**
 * CONTENT INTEGRITY GATE.
 *
 * The site's whole architecture rests on joins between content files: a service
 * names niches, a niche names services, a handoff names its counterpart, a
 * related list names slugs. Every one of those is a string that can be wrong,
 * and a wrong one degrades silently — a dropped segment, an empty section, a
 * dead internal link.
 *
 * This is the check the previous site did not have, and it had exactly these
 * defects in production: a homepage linking to `/case-studies`, which 404'd,
 * and a sitemap missing three service pages that existed. Both are the same
 * class of error and both are caught here.
 *
 * Run: node scripts/verify-content.mjs
 * Exits non-zero on any failure, so it can gate a build.
 */

import { services, serviceBySlug } from '../content/services/index.js';
import { operations, operationBySlug } from '../content/operations.js';
import {
  niches,
  nicheBySlug,
  DISPLAY_ORDER as nicheOrder,
  orphanedOrderSlugs,
  nichePlaceholders,
} from '../content/niches.js';
import { legal as legalPages, legalPlaceholders } from '../content/legal.js';
import { company, unverifiedFigures } from '../content/company.js';
import { INTENT_LADDER } from '../content/intent.js';
import { compliancePosture } from '../content/compliance.js';
import { arcGeometry } from '../components/brand/mark-geometry.js';
import { explainOrigin } from '../lib/origin.js';

const errors = [];
const warnings = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

/* ── 1. Service → niche joins ─────────────────────────────────────────── */
for (const service of services) {
  if (!service.builtFor?.segments?.length) {
    fail(
      `service "${service.slug}" has no builtFor segments — the qualify rung would render empty`,
    );
    continue;
  }
  for (const segment of service.builtFor.segments) {
    if (!nicheBySlug[segment.niche]) {
      fail(`service "${service.slug}" names unknown niche "${segment.niche}"`);
    }
    for (const field of ['label', 'trigger', 'built', 'edge']) {
      if (!segment[field]?.trim()) {
        fail(`service "${service.slug}" segment "${segment.niche}" is missing "${field}"`);
      }
    }
  }
  if (!service.builtFor.notFor?.trim()) {
    fail(
      `service "${service.slug}" has no notFor — naming who it is not for is a stated commitment`,
    );
  }
}

/* ── 2. Operation → niche joins ───────────────────────────────────────── */
for (const operation of operations) {
  if (!operation.builtFor?.segments?.length) {
    fail(`operation "${operation.slug}" has no builtFor segments`);
    continue;
  }
  for (const segment of operation.builtFor.segments) {
    if (!nicheBySlug[segment.niche]) {
      fail(`operation "${operation.slug}" names unknown niche "${segment.niche}"`);
    }
  }
  if (!operation.builtFor.notFor?.trim()) {
    fail(`operation "${operation.slug}" has no notFor`);
  }
}

/* ── 3. Niche → offering joins, both directions ───────────────────────── */
for (const niche of niches) {
  for (const slug of niche.services) {
    if (!serviceBySlug[slug]) fail(`niche "${niche.slug}" names unknown service "${slug}"`);
  }
  for (const slug of niche.operations) {
    if (!operationBySlug[slug])
      fail(`niche "${niche.slug}" names unknown operation "${slug}"`);
  }
  if (!niche.services.length && !niche.operations.length) {
    fail(
      `niche "${niche.slug}" claims no services or operations — its page would be empty`,
    );
  }
}

/* Niche-page depth.
 *
 * A niche's `services` list is "what genuinely applies", and a service's
 * `builtFor` is "the business types that page leads with". Those are different
 * granularities on purpose — an accordion listing twelve business types is
 * worse for a reader than one listing five — so a niche claiming a service that
 * did not write a segment for it is expected, not a defect.
 *
 * What *is* a defect is a thin industry page. Every niche page renders a
 * detailed block per service that wrote about it, so a niche below three is a
 * page with almost nothing specific on it. Three is the floor, and it is
 * enforced rather than watched. */
const MIN_DETAILED = 3;
const coverage = [];

for (const niche of niches) {
  const detailed = niche.services.filter((slug) =>
    serviceBySlug[slug]?.builtFor?.segments?.some((s) => s.niche === niche.slug),
  );
  coverage.push({
    niche: niche.slug,
    detailed: detailed.length,
    claimed: niche.services.length,
  });

  if (detailed.length < MIN_DETAILED) {
    fail(
      `niche "${niche.slug}" has only ${detailed.length} service(s) with bespoke writing ` +
        `(minimum ${MIN_DETAILED}). Its industry page would be thin — either add a segment for it ` +
        `to a relevant service, or drop the niche.`,
    );
  }
}

/* ── 4. Handoffs and related links ────────────────────────────────────── */
for (const service of services) {
  const target = service.handoff?.operation;
  if (!target)
    fail(`service "${service.slug}" has no handoff — the extend rung would not render`);
  else if (!operationBySlug[target])
    fail(`service "${service.slug}" hands off to unknown operation "${target}"`);

  for (const slug of service.related ?? []) {
    if (!serviceBySlug[slug])
      fail(`service "${service.slug}" relates to unknown service "${slug}"`);
    if (slug === service.slug) fail(`service "${service.slug}" relates to itself`);
  }
}

for (const operation of operations) {
  const target = operation.handoff?.service;
  if (!target) fail(`operation "${operation.slug}" has no handoff`);
  else if (!serviceBySlug[target])
    fail(`operation "${operation.slug}" hands off to unknown service "${target}"`);

  for (const slug of operation.related ?? []) {
    if (!operationBySlug[slug])
      fail(`operation "${operation.slug}" relates to unknown operation "${slug}"`);
    if (slug === operation.slug) fail(`operation "${operation.slug}" relates to itself`);
  }
}

/* ── 5. Required shape for every page-rendering section ───────────────── */
const REQUIRED = [
  'problem',
  'solution',
  'mechanism',
  'outcomes',
  'process',
  'faq',
  'stack',
];
for (const item of [...services, ...operations]) {
  for (const key of REQUIRED) {
    if (!item[key] || (Array.isArray(item[key]) && item[key].length === 0)) {
      fail(`"${item.slug}" is missing required section "${key}"`);
    }
  }
  if (item.mechanism && !item.mechanism.nodes?.length) {
    fail(`"${item.slug}" mechanism has no nodes — the bento module would render empty`);
  }
  if (item.faq?.length < 3) {
    warn(
      `"${item.slug}" has only ${item.faq.length} FAQ entries — three is the practical minimum for the schema to be useful`,
    );
  }
  if (!item.headline?.lead) {
    fail(`"${item.slug}" has no headline.lead`);
  }
}

/* Title and description length.
 *
 * Google truncates a title around 60 characters and a description around 160.
 * Both shipped over: every service and desk page carried a metaTitle that
 * already contained the brand, and the layout template appended it a second
 * time — producing a 95-character title whose visible half was duplicated
 * branding.
 *
 * These are warnings rather than failures because the cut-off is soft and
 * varies by device. Silently drifting past it is the thing to prevent. */
const TITLE_MAX = 60;
const DESC_MAX = 160;

for (const item of [...services, ...operations]) {
  const title = item.metaTitle ?? '';
  const desc = item.metaDescription ?? '';

  if (title.length > TITLE_MAX) {
    warn(
      `"${item.slug}" metaTitle is ${title.length} chars (target ${TITLE_MAX}); Google will truncate it.`,
    );
  }
  if (desc.length > DESC_MAX) {
    warn(`"${item.slug}" metaDescription is ${desc.length} chars (target ${DESC_MAX}).`);
  }
  if (title.toLowerCase().split(company.name.toLowerCase()).length > 2) {
    fail(`"${item.slug}" metaTitle contains the company name twice.`);
  }
}

/* ── 6. Accent uniqueness within a group ──────────────────────────────── */
const seen = new Map();
for (const service of services) {
  const key = `${service.group}:${service.accent}`;
  if (seen.has(key)) {
    warn(
      `services "${seen.get(key)}" and "${service.slug}" share accent "${service.accent}" within ` +
        `group "${service.group}" — each service is supposed to own a hue`,
    );
  }
  seen.set(key, service.slug);
}

/* ── 7. Intent ladder must cover what pages render ────────────────────── */
const LADDER_IDS = new Set(INTENT_LADDER.map((i) => i.id));
for (const id of [
  'orient',
  'qualify',
  'recognise',
  'evaluate',
  'understand',
  'justify',
  'derisk',
  'object',
  'extend',
  'act',
]) {
  if (!LADDER_IDS.has(id))
    fail(`intent ladder is missing rung "${id}", which pages render`);
}

/* Niche display order.
 *
 * DISPLAY_ORDER drives the header dropdown, the industries hub, the homepage
 * grid, the footer column and the sitemap from one list. Two ways it can rot:
 * a slug in the list that no longer exists (silently ignored by the sort), and
 * a niche missing from the list (silently dropped to the end). The first is a
 * defect; the second is only a defect if nobody meant it. */
if (orphanedOrderSlugs().length) {
  fail(
    `DISPLAY_ORDER in content/niches.js names ${orphanedOrderSlugs().length} slug(s) that no ` +
      `longer exist: ${orphanedOrderSlugs().join(', ')}`,
  );
}
{
  const unordered = niches.filter((n) => !nicheOrder.includes(n.slug));
  if (unordered.length) {
    warn(
      `${unordered.length} niche(s) not named in DISPLAY_ORDER and sorted to the end: ` +
        `${unordered.map((n) => n.slug).join(', ')}`,
    );
  }
}

/* Mark geometry.
 *
 * Each arc of the logo must be a true semicircle: the distance between its
 * endpoints has to equal the diameter. Break that and the arc silently becomes
 * a shallow segment, the two halves merge, and the mark stops being the mark —
 * which is exactly what shipped once, when the offset was widened by moving the
 * endpoints instead of the centres.
 *
 * It is a one-line assertion guarding a defect that is invisible in code review
 * and obvious on screen. */
for (const cut of ['display', 'compact']) {
  const g = arcGeometry(cut);
  const diameter = g.r * 2;
  for (const side of ['left', 'right']) {
    const chord = g[side].to - g[side].from;
    if (Math.abs(chord - diameter) > 0.001) {
      fail(
        `mark "${cut}" cut, ${side} arc: endpoints are ${chord} apart but the diameter is ` +
          `${diameter}. The arc is not a semicircle and the mark will render malformed.`,
      );
    }
  }
  /* And it has to fit the 48-unit box once the stroke is accounted for. */
  const top = Math.min(g.left.from, g.right.from) - g.w / 2;
  const bottom = Math.max(g.left.to, g.right.to) + g.w / 2;
  if (top < 0 || bottom > 48) {
    fail(`mark "${cut}" cut overflows its 48-unit box (${top} to ${bottom}).`);
  }
}

/* ── 8. Launch requirements ───────────────────────────────────────────── */

/* Open Graph coverage. Every share of a page without one renders blank, which
   was true of all 29 pages on the previous site. */
const { existsSync } = await import('node:fs');
const { join, dirname } = await import('node:path');
const { fileURLToPath } = await import('node:url');
const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..', 'app');

const OG_ROUTES = [
  ['site-wide', 'opengraph-image.js'],
  ['services', 'services/[slug]/opengraph-image.js'],
  ['operations', 'operations/[slug]/opengraph-image.js'],
  ['industries', 'industries/[slug]/opengraph-image.js'],
];
for (const [label, rel] of OG_ROUTES) {
  if (!existsSync(join(appRoot, rel))) {
    fail(`no Open Graph image for ${label} (${rel}) — shares of those pages render blank`);
  }
}

/* Company identity fields that must be real before launch. */
if (!company.address?.street || !company.address?.postalCode) {
  fail(
    'company.address is incomplete — the footer, contact page and JSON-LD all read from it',
  );
}
if (!/^https:\/\//.test(company.url)) {
  fail(`company.url must be an absolute https origin, got "${company.url}"`);
}
if (company.url.endsWith('/')) {
  fail(`company.url must not have a trailing slash, got "${company.url}"`);
}

/* The enquiry route must exist, or the form posts into nothing. */
if (!existsSync(join(appRoot, 'api', 'enquiry', 'route.js'))) {
  fail('no /api/enquiry route — the contact form has nowhere to post');
}

/* Origin resolution — the check that would have caught a live deindex.
 *
 * `NEXT_PUBLIC_SITE_URL` was declared in the hosting environment with a blank
 * value. `??` does not fall through on an empty string, so the base URL became
 * `""`, every sitemap entry became a relative path, and `robots.js` served
 * `Disallow: /` on the live domain. The build log was clean throughout.
 *
 * This reads the same resolver the app uses, so it reports the origin that was
 * actually resolved rather than re-deriving it and repeating the bug. */
{
  const origin = explainOrigin();
  const ABSOLUTE_ORIGIN = /^https?:\/\/[^/\s]+$/i;

  if (origin.envBlank) {
    warn(
      'NEXT_PUBLIC_SITE_URL is declared but empty. It is ignored and the canonical origin is ' +
        'used instead — but set it properly or remove it. An empty value is what deindexed ' +
        'the live site once.',
    );
  }

  if (origin.envMalformed) {
    fail(
      `NEXT_PUBLIC_SITE_URL is not an absolute origin: "${process.env.NEXT_PUBLIC_SITE_URL}". ` +
        'It must look like https://www.example.com — scheme, host, no path.',
    );
  }

  if (!ABSOLUTE_ORIGIN.test(origin.resolved)) {
    fail(
      `resolved origin is not an absolute URL: "${origin.resolved}". The sitemap and robots.txt ` +
        'both depend on it, and a relative value silently breaks each.',
    );
  }

  if (!origin.isCanonical) {
    warn(
      `robots will serve "Disallow: /" — resolved origin "${origin.resolved}" is not the ` +
        `canonical "${origin.canonical}". Correct for a preview deployment; set ` +
        `NEXT_PUBLIC_SITE_URL=${origin.canonical} for production.`,
    );
  }
}

/* SMTP is required in production; without it the route returns 503. */
if (process.env.NODE_ENV === 'production' || process.argv.includes('--production')) {
  const missing = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD'].filter(
    (k) => !process.env[k],
  );
  if (missing.length) {
    warn(
      `SMTP is not configured (${missing.join(', ')}). The build is fine, but enquiries will ` +
        `return 503 until these are set in the deployment environment.`,
    );
  }
}


/* ── 8.5 Regulatory-claim gate ────────────────────────────────────────── */
/**
 * Certain sentences are not marketing copy and must never be written casually.
 *
 * "ACPR compliant" is the clearest example. The ACPR authorises banks, payment
 * institutions and insurers — it does not authorise their vendors, so no
 * outsourcing provider can hold that status. The same is true of PSD2, MiCA and
 * the AML directives: they bind the regulated firm, and there is no general
 * GDPR certificate a processor can hold either. Writing any of it would be a
 * claim we could not evidence, which breaks commitment 06 on the About page.
 *
 * ISO 27001, SOC 2 and PCI DSS are different — they are real, holdable
 * certificates. They are gated because naming one without saying whether we
 * hold it reads as a claim to the person skimming, and that is precisely the
 * reader this copy exists for.
 *
 * ## Why it walks the exported objects rather than the files
 *
 * Doc comments discuss these terms at length — this one does. Walking the
 * exports means the gate sees only strings that can reach a page, so a comment
 * explaining the rule cannot trip the rule.
 */
const CLAIM_RULES = [
  {
    id: 'regime-compliant',
    // "GDPR compliant", "ACPR-compliant", "compliant with PSD2"
    test: /(?:\b(?:ACPR|PSD2|MiCA|AMLD[56]?|DORA|EBA|GDPR|FCA|AUSTRAC)\b[\s-]*complian|complian\w*\s+with\s+(?:the\s+)?\b(?:ACPR|PSD2|MiCA|AMLD[56]?|DORA|EBA|GDPR|FCA|AUSTRAC)\b)/i,
    why: 'these regimes bind the regulated firm, not its vendor — describe the contract terms instead',
  },
  {
    id: 'certification',
    test: /\b(?:ISO[\s-]?27001|SOC\s?2|PCI[\s-]?DSS)\b/i,
    why: 'name a certificate only where the copy states plainly whether we hold it',
  },
];

/* A negation immediately before the match is the one legitimate use: copy that
   exists to tell the reader the claim is impossible. Kept narrow on purpose. */
const NEGATED = /\b(?:no|not|never|cannot|can't|nobody|neither)\b[^.]{0,60}$/i;

const seenStrings = new Set();
function walkStrings(value, path, visit) {
  if (typeof value === 'string') return visit(value, path);
  if (Array.isArray(value)) {
    value.forEach((v, i) => walkStrings(v, `${path}[${i}]`, visit));
    return;
  }
  if (value && typeof value === 'object') {
    if (seenStrings.has(value)) return;
    seenStrings.add(value);
    for (const [k, v] of Object.entries(value)) walkStrings(v, `${path}.${k}`, visit);
  }
}

const claimHits = [];
for (const [label, corpus] of [
  ['services', services],
  ['operations', operations],
  ['niches', niches],
  ['company', company],
  ['legal', legalPages],
  ['compliance', compliancePosture],
]) {
  walkStrings(corpus, label, (text, path) => {
    for (const rule of CLAIM_RULES) {
      const match = rule.test.exec(text);
      if (!match) continue;
      if (NEGATED.test(text.slice(0, match.index))) continue;
      claimHits.push({ path, rule: rule.id, why: rule.why, quote: text.slice(Math.max(0, match.index - 40), match.index + 60).trim() });
    }
  });
}

for (const hit of claimHits) {
  fail(`unevidenced compliance claim (${hit.rule}) at ${hit.path} — ${hit.why}\n          …${hit.quote}…`);
}

/* ── 9. Production-only gates ─────────────────────────────────────────── */
const isProduction =
  process.env.NODE_ENV === 'production' || process.argv.includes('--production');
const allowUnresolved = process.env.ALLOW_UNVERIFIED === '1';

const placeholders = [...legalPlaceholders(), ...nichePlaceholders()];
const unverified = unverifiedFigures();

if (placeholders.length) {
  const msg = `${placeholders.length} unresolved copy placeholder(s): ${placeholders
    .map((p) => `${p.page}/${p.token}`)
    .join(', ')}`;
  if (isProduction && !allowUnresolved) fail(msg);
  else warn(msg);
}

if (unverified.length) {
  const msg = `${unverified.length} unverified figure(s) on the site: ${unverified
    .map((f) => f.label)
    .join(', ')}`;
  if (isProduction && !allowUnresolved) fail(msg);
  else warn(msg);
}

/* ── Report ───────────────────────────────────────────────────────────── */
const counts = {
  services: services.length,
  operations: operations.length,
  niches: niches.length,
  segments:
    services.reduce((n, s) => n + s.builtFor.segments.length, 0) +
    operations.reduce((n, o) => n + o.builtFor.segments.length, 0),
};

console.log(
  `content: ${counts.services} services, ${counts.operations} operations, ` +
    `${counts.niches} niches, ${counts.segments} niche segments`,
);

const thinnest = coverage.reduce((a, b) => (a.detailed < b.detailed ? a : b));
const totalDetailed = coverage.reduce((n, c) => n + c.detailed, 0);
console.log(
  `  niche depth: ${totalDetailed} detailed service blocks across ${coverage.length} industry ` +
    `pages; thinnest is "${thinnest.niche}" with ${thinnest.detailed} of ${thinnest.claimed} claimed`,
);

for (const w of warnings) console.warn(`  warn  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);

if (errors.length) {
  console.error(
    `\nverify:content failed — ${errors.length} error(s), ${warnings.length} warning(s)`,
  );
  process.exit(1);
}

console.log(
  `verify:content passed${warnings.length ? ` (${warnings.length} warning(s))` : ''}`,
);
