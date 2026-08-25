/**
 * SERVICE SECTIONS — the rungs of the intent ladder, rendered.
 *
 * These are server components. Only the two sections that genuinely need state
 * — `BuiltFor` and `Mechanism` — are client components, which keeps the
 * JavaScript sent to a service page to roughly the header, the accordion and
 * the one animated figure.
 */

import Link from 'next/link';
import { Container, Eyebrow, Headline, Lead, Prose, Section, Badge, Button, cn } from '@/design-system';
import { IntentSection } from './intent-section';
import { Mechanism } from '@/components/bento/mechanism';
import { HeroField } from '@/components/bento/hero-field';

/* ==========================================================================
   ORIENT — the immersive moment. One per page.
   ========================================================================== */

export function ServiceHero({ service, kind = 'service' }) {
  return (
    <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
      <HeroField />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>{service.eyebrow}</Eyebrow>
              <Badge>{kind === 'service' ? 'Build' : 'Run'}</Badge>
            </div>
            <Headline level={1} headline={service.headline} className="max-w-[18ch]" />
            <Lead className="text-prose-inv-soft">{service.summary}</Lead>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="#built-for" variant="outline">
                Is this for us?
              </Button>
            </div>
          </div>

          {/* The stack, as an instrument readout rather than a logo wall. */}
          <div className="flex flex-col gap-4 border-t border-paper-edge pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              Typical stack
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {service.stack.map((tool) => (
                <li key={tool} className="font-mono text-micro text-prose-inv-soft">
                  {tool}
                </li>
              ))}
            </ul>
            {service.intent?.primary && (
              <p className="mt-2 measure text-micro leading-relaxed text-prose-faint">
                <span className="text-[var(--accent)]">Written for:</span> {service.intent.primary}
              </p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ==========================================================================
   RECOGNISE
   ========================================================================== */

export function ProblemSection({ problem }) {
  return (
    <IntentSection intent="recognise" headline={problem.headline} lead={problem.body}>
      <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge sm:grid-cols-2">
        {problem.points.map((point, i) => (
          <li key={i} className="flex gap-4 bg-paper px-6 py-6">
            <span
              aria-hidden
              className="mt-0.5 font-mono text-eyebrow text-prose-faint"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-micro leading-relaxed text-prose-soft">{point}</p>
          </li>
        ))}
      </ul>
    </IntentSection>
  );
}

/* ==========================================================================
   EVALUATE
   ========================================================================== */

export function SolutionSection({ solution }) {
  return (
    <IntentSection intent="evaluate" headline={solution.headline} lead={solution.body}>
      <div className="grid gap-8 sm:grid-cols-2">
        {solution.pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className="group relative flex flex-col gap-3 rounded-tile border border-paper-edge p-7 transition-colors duration-300 hover:border-[var(--accent)]"
          >
            <span
              aria-hidden
              className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-h4 font-medium">{pillar.title}</h3>
            <p className="text-micro leading-relaxed text-prose-soft">{pillar.body}</p>
          </article>
        ))}
      </div>
    </IntentSection>
  );
}

/* ==========================================================================
   UNDERSTAND — the bento cluster. One per page.
   ========================================================================== */

export function MechanismSection({ mechanism }) {
  if (!mechanism) return null;
  return (
    <IntentSection
      intent="understand"
      headline={mechanism.headline}
      lead={mechanism.body}
      containerSize="wide"
      register="sunk"
    >
      <Mechanism
        nodes={mechanism.nodes}
        branchAt={mechanism.branchAt}
        branchLabel={mechanism.branchLabel}
        notes={mechanism.notes}
      />
    </IntentSection>
  );
}

/* ==========================================================================
   JUSTIFY
   ========================================================================== */

export function OutcomesSection({ outcomes, headline = { lead: 'What is different', accent: 'afterwards.' } }) {
  return (
    <IntentSection intent="justify" headline={headline}>
      <div className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge lg:grid-cols-3">
        {outcomes.map((outcome) => (
          <article key={outcome.title} className="flex flex-col gap-4 bg-paper p-7">
            <h3 className="text-h4 font-medium">{outcome.title}</h3>
            <p className="flex-1 text-micro leading-relaxed text-prose-soft">{outcome.body}</p>
            <p className="border-t border-paper-edge pt-4 font-mono text-eyebrow uppercase leading-relaxed tracking-[0.1em] text-[var(--accent)]">
              {outcome.measure}
            </p>
          </article>
        ))}
      </div>
    </IntentSection>
  );
}

/* ==========================================================================
   DERISK
   ========================================================================== */

export function ProcessSection({ process }) {
  return (
    <IntentSection
      intent="derisk"
      headline={{ lead: 'Six stages, and every one', accent: 'has an exit.' }}
      lead="You can stop after any stage with something useful in hand. That is the point of naming the artefacts rather than the activities."
    >
      <ol className="flex flex-col">
        {process.map((stage, i) => (
          <li
            key={stage.step}
            className="group grid gap-4 border-t border-paper-edge py-8 last:border-b md:grid-cols-[6rem_1fr_1.1fr] md:gap-10"
          >
            <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint transition-colors group-hover:text-[var(--accent)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-h4 font-medium">{stage.step}</h3>
              <p className="text-micro leading-relaxed text-prose-soft">{stage.body}</p>
            </div>
            <ul className="flex flex-col gap-2 md:pt-1">
              {stage.artifacts.map((artifact) => (
                <li key={artifact} className="flex gap-2.5 text-micro text-prose-faint">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                  {artifact}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </IntentSection>
  );
}

/* ==========================================================================
   DERISK — how the desk is staffed. Operations pages only.

   Sits directly after the process, because the process describes how the desk
   is set up and this describes who runs it afterwards — which is the question
   a buyer of outsourced operations is actually holding at that point.
   ========================================================================== */

export function StaffingSection({ staffing }) {
  if (!staffing) return null;
  return (
    <IntentSection
      intent="derisk"
      eyebrowOverride="Who runs the desk"
      headline={staffing.headline}
      lead={staffing.body}
      register="sunk"
    >
      <div className="flex flex-col gap-8">
        <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge sm:grid-cols-2 lg:grid-cols-4">
          {staffing.roles.map((role, i) => (
            <li key={role.role} className="flex flex-col gap-3 bg-paper p-6">
              <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-h4 font-medium">{role.role}</h3>
              <p className="text-micro leading-relaxed text-prose-soft">{role.body}</p>
            </li>
          ))}
        </ul>
        <p className="measure border-l-2 border-paper-edge py-1 pl-6 text-micro leading-relaxed text-prose-soft">
          {staffing.note}
        </p>
      </div>
    </IntentSection>
  );
}

/* ==========================================================================
   OBJECT — question-shaped headings, answered directly. Also the AEO surface.
   ========================================================================== */

export function FaqSection({ faq, headline = { lead: 'The questions', accent: 'people actually ask.' } }) {
  return (
    <IntentSection intent="object" headline={headline} containerSize="default">
      <div className="flex flex-col">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group border-t border-paper-edge py-6 last:border-b [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-start gap-5">
              <h3 className="flex-1 text-h4 font-medium transition-colors group-hover:text-[var(--accent)]">
                {item.q}
              </h3>
              <span
                aria-hidden
                className="mt-1 shrink-0 font-mono text-micro text-prose-faint transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="measure mt-4 text-micro leading-relaxed text-prose-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </IntentSection>
  );
}

/* ==========================================================================
   EXTEND — the handoff. The second dark band, deliberately static.
   ========================================================================== */

export function HandoffSection({ handoff, target }) {
  if (!handoff || !target) return null;
  const href = handoff.service ? `/services/${handoff.service}` : `/operations/${handoff.operation}`;

  return (
    <Section register="ink" data-accent={target.accent}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>The other half</Eyebrow>
            <Headline level={2} headline={handoff.headline} />
          </div>
          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="text-lead leading-relaxed text-prose-inv-soft">{handoff.body}</p>
            <Link
              href={href}
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-paper-edge px-6 py-3 text-micro transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {target.title}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ==========================================================================
   ACT
   ========================================================================== */

export function CtaSection({
  headline = { lead: 'Tell us the problem,', accent: 'not the specification.' },
  body = 'A short call is usually enough to say which half of the business your problem belongs to, roughly what it costs, and whether it is worth doing at all.',
  related = [],
  relatedLabel = 'Related services',
  relatedBase = '/services',
}) {
  return (
    <IntentSection intent="act" headline={headline} lead={body}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/industries" variant="outline">
            Find your business type
          </Button>
        </div>

        {related.length > 0 && (
          <div className="flex flex-col gap-5 border-t border-paper-edge pt-10">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              {relatedLabel}
            </p>
            <ul className="grid gap-px overflow-hidden rounded-tile border border-paper-edge bg-paper-edge sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} data-accent={item.accent} className="bg-paper">
                  <Link
                    href={`${relatedBase}/${item.slug}`}
                    className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-paper-sunk"
                  >
                    <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--accent)]">
                      {item.group}
                    </span>
                    <span className="text-h4 font-medium">{item.title}</span>
                    <span className="text-micro leading-relaxed text-prose-faint">
                      {item.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </IntentSection>
  );
}
