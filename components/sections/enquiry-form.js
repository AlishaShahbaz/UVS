'use client';

/**
 * ENQUIRY FORM.
 *
 * ## Two delivery paths, and why
 *
 * The form posts to `/api/enquiry` first. If that succeeds, the enquiry was
 * delivered server-side and the visitor is done.
 *
 * If it cannot — because SMTP is not configured yet, or delivery failed, or the
 * network dropped — the form composes the same message and hands it to the
 * visitor's own mail client instead. Nothing is lost and nothing is invented.
 *
 * This ordering matters. `mailto:` alone is the common shortcut and it has one
 * serious failure mode: a visitor on a desktop using webmail often has no mail
 * client registered, so the link does nothing and the enquiry evaporates
 * silently. That is why it is the fallback rather than the mechanism.
 *
 * The upgrade path is automatic. The moment SMTP credentials exist in the
 * environment, the POST starts succeeding and the fallback simply stops being
 * reached — no code change, no redeploy of this component.
 *
 * Client-side validation here is for fast feedback only; the server repeats
 * every check, because the client can be bypassed.
 *
 * The form never claims success it did not get. A handed-off enquiry is
 * reported as handed off, not as sent.
 *
 * Accessibility decisions that are easy to get wrong and are handled here:
 *   — Every field has a real <label>, not a placeholder standing in for one.
 *   — Errors are linked with aria-describedby and summarised in a live region.
 *   — Focus moves to the summary on a failed submit, so a keyboard user is not
 *     left at the bottom of the form wondering what happened.
 *   — The radio group is a <fieldset> with a <legend>.
 *   — Both end states are announced via role="status", not by colour alone.
 */

import { useRef, useState } from 'react';
import { company } from '@/content/company';
import { Button, cn } from '@/design-system';

/* Run first, matching the ordering the rest of the site uses. Operations is the
   primary offer, so it is the first option a visitor reads here too. */
const HALVES = [
  { value: 'run', label: 'Run — a queue to hold', hint: 'chat, voice, email, orders, data' },
  { value: 'build', label: 'Build — a system to make', hint: 'AI, software or campaigns' },
  { value: 'unsure', label: 'Not sure yet', hint: 'that is a normal answer' },
];

const EMPTY = { name: '', email: '', company: '', half: '', message: '', website: '' };

export function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | handoff
  const summaryRef = useRef(null);
  const doneRef = useRef(null);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'We need a name to reply to.';
    if (!values.email.trim()) next.email = 'We need an email address to reply to.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'That address does not look right — check it for us?';
    if (!values.message.trim()) next.message = 'Tell us what is going wrong, in your own words.';
    else if (values.message.trim().length < 20)
      next.message = 'A little more detail helps us give you a useful answer.';
    return next;
  }

  /* The fallback. Composes the enquiry as a plain-text email and hands it to
     whatever the visitor's device has registered for mail. */
  function handOffToMailClient() {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company && `Company: ${values.company}`,
      values.half && `Half: ${HALVES.find((h) => h.value === values.half)?.label}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(`Website enquiry — ${values.name}`)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e) {
    e.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus('sent');
        setValues(EMPTY);
        setErrors({});
        requestAnimationFrame(() => doneRef.current?.focus());
        return;
      }

      /* Server-side validation disagreed with the client. Surface its errors —
         handing a malformed enquiry to a mail client would only move the
         problem into the visitor's outbox. */
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus('idle');
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }

      /* 503 — SMTP not configured. 502 — delivery failed. Either way the
         enquiry is valid and we simply cannot post it ourselves, so it goes to
         the visitor's mail client rather than nowhere. */
      handOffToMailClient();
      setStatus('handoff');
      requestAnimationFrame(() => doneRef.current?.focus());
    } catch {
      /* Network or CORS failure. Same reasoning. */
      handOffToMailClient();
      setStatus('handoff');
      requestAnimationFrame(() => doneRef.current?.focus());
    }
  }

  if (status === 'sent') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-4 rounded-panel border border-paper-edge bg-paper-sunk p-8"
      >
        <p className="rule-eyebrow">Received</p>
        <p className="text-h3 font-medium [text-wrap:balance]">
          That is with us.{' '}
          <span className="accent-phrase text-prose-soft">We reply within one business day.</span>
        </p>
        <p className="measure text-micro leading-relaxed text-prose-soft">
          A person reads every enquiry. If we are the wrong fit for what you described, we will say
          so — and point you at who is not, where we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="w-fit text-micro text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          Send another
        </button>
      </div>
    );
  }

  /* Handed to the visitor's mail client. Deliberately not worded as "sent" —
     the message is sitting in their outbox until they press send, and some
     desktop browsers will not have opened anything at all. Both cases are
     covered here rather than assumed away. */
  if (status === 'handoff') {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-4 rounded-panel border border-paper-edge bg-paper-sunk p-8"
      >
        <p className="rule-eyebrow">One more step</p>
        <p className="text-h3 font-medium [text-wrap:balance]">
          Your email app should have opened.{' '}
          <span className="accent-phrase text-prose-soft">Press send and it reaches us.</span>
        </p>
        <p className="measure text-micro leading-relaxed text-prose-soft">
          Everything you typed is already in the message, addressed to us. Nothing else is needed.
        </p>

        <div className="flex flex-col gap-2 border-t border-paper-edge pt-5">
          <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
            Nothing opened?
          </p>
          <p className="measure text-micro leading-relaxed text-prose-soft">
            Some desktop browsers have no mail app registered. Email us directly at{' '}
            <a
              href={`mailto:${company.email}`}
              className="font-medium text-prose underline decoration-paper-edge underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              {company.email}
            </a>{' '}
            — your message is still below if you need to copy it.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handOffToMailClient}
            className="text-micro text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            Try opening it again
          </button>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-micro text-prose-faint underline decoration-paper-edge underline-offset-4 transition-colors hover:text-prose"
          >
            Back to the form
          </button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors);
  const sending = status === 'sending';

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex flex-col gap-2 rounded-tile border border-paper-edge bg-paper-sunk p-5"
        >
          <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
            {errorList.length} thing{errorList.length > 1 ? 's' : ''} to fix
          </p>
          <ul className="flex flex-col gap-1">
            {errorList.map(([field, message]) => (
              <li key={field}>
                <a
                  href={`#${field}`}
                  className="text-micro text-prose-soft underline decoration-paper-edge underline-offset-4"
                >
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          value={values.name}
          onChange={set('name')}
          error={errors.name}
          required
          autoComplete="name"
          disabled={sending}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={set('email')}
          error={errors.email}
          required
          autoComplete="email"
          disabled={sending}
        />
      </div>

      <Field
        id="company"
        label="Company"
        hint="Optional"
        value={values.company}
        onChange={set('company')}
        error={errors.company}
        autoComplete="organization"
        disabled={sending}
      />

      <fieldset className="flex flex-col gap-4" disabled={sending}>
        <legend className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
          Which half is this? — optional
        </legend>
        <div className="grid gap-px overflow-hidden rounded-tile border border-paper-edge bg-paper-edge sm:grid-cols-3">
          {HALVES.map((half) => (
            <label
              key={half.value}
              className={cn(
                'group flex cursor-pointer flex-col gap-1 bg-paper p-5 transition-colors',
                values.half === half.value ? 'bg-paper-sunk' : 'hover:bg-paper-sunk/60',
              )}
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="half"
                  value={half.value}
                  checked={values.half === half.value}
                  onChange={set('half')}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors',
                    values.half === half.value
                      ? 'border-[var(--accent)]'
                      : 'border-paper-edge group-hover:border-prose-faint',
                  )}
                >
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full bg-[var(--accent)] transition-transform duration-200',
                      values.half === half.value ? 'scale-100' : 'scale-0',
                    )}
                  />
                </span>
                <span className="text-micro font-medium text-prose">{half.label}</span>
              </span>
              <span className="pl-[1.625rem] text-micro text-prose-faint">{half.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        id="message"
        label="What is going wrong?"
        hint="Plain language is better than a specification."
        as="textarea"
        rows={7}
        value={values.message}
        onChange={set('message')}
        error={errors.message}
        required
        disabled={sending}
      />

      {/* Honeypot. Hidden from people and from assistive technology; bots fill
          it in and are silently discarded server-side. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set('website')}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" disabled={sending}>
          {sending ? 'Sending…' : 'Send it'}
        </Button>
        <p aria-live="polite" className="text-micro text-prose-faint">
          {sending
            ? 'Sending your enquiry…'
            : `We reply within ${company.contact.responseWindow.toLowerCase()}.`}
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, hint, error, as = 'input', className, ...props }) {
  const Tag = as;
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ');

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint"
      >
        {label}
        {props.required && (
          <span aria-hidden className="ml-1 text-[var(--accent)]">
            *
          </span>
        )}
      </label>

      {hint && (
        <p id={`${id}-hint`} className="text-micro text-prose-faint">
          {hint}
        </p>
      )}

      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy || undefined}
        className={cn(
          'w-full rounded-tile border bg-paper px-4 py-3 text-body text-prose transition-colors placeholder:text-prose-faint focus:outline-none focus-visible:border-[var(--accent)] disabled:opacity-60',
          error ? 'border-[var(--accent)]' : 'border-paper-edge hover:border-prose-faint',
          as === 'textarea' && 'resize-y leading-relaxed',
          className,
        )}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} className="text-micro text-[var(--accent)]">
          {error}
        </p>
      )}
    </div>
  );
}
