/**
 * ABOUT — how we work, rather than who we are.
 *
 * Deliberately not a team page with headshots and founding-story prose. The
 * questions a buyer actually has at this point are about method, incentives and
 * what happens when things go wrong, so those are the sections.
 */

import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button, Datum } from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HandoffFigure } from '@/components/sections/handoff-figure';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'How we work',
  description:
    'Two halves of the same business, the commitments we hold ourselves to, and the six stages an engagement runs through — including the ones where you can stop.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div data-accent="slate">
      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <Eyebrow>How we work</Eyebrow>
            <Headline
              level={1}
              headline={{ lead: 'Two halves of', accent: 'the same problem.' }}
              className="max-w-[16ch]"
            />
            <Lead className="text-prose-inv-soft">{company.positioning.body}</Lead>
          </div>
        </Container>
      </Section>

      <IntentSection
        intent="understand"
        eyebrowOverride="The model"
        headline={{ lead: 'The seam is', accent: 'the whole argument.' }}
        lead="A system built honestly refuses, escalates and holds things at a gate. Someone has to be on the other side of that. When the same company is on both sides, the thresholds get set where the error cost says they belong."
        containerSize="wide"
        register="sunk"
      >
        <HandoffFigure />
      </IntentSection>

      {/* The one place the site speaks about a person rather than the company.
          In regulated operations the buyer's real question is whether anyone
          here has run a desk, and that is answered by a person. */}
      <IntentSection
        intent="recognise"
        eyebrowOverride={company.founder.eyebrow}
        headline={company.founder.headline}
        lead={company.founder.body}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ul className="flex flex-col">
            {company.founder.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 border-t border-paper-edge py-4 last:border-b"
              >
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[var(--accent)]" />
                <span className="text-micro leading-relaxed text-prose-soft">{point}</span>
              </li>
            ))}
          </ul>
          <aside className="flex h-fit flex-col gap-3 rounded-panel border border-paper-edge bg-paper-sunk p-7">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
              {company.founder.name}
            </p>
            <p className="text-micro leading-relaxed text-prose-soft">{company.founder.note}</p>
          </aside>
        </div>
      </IntentSection>

      <IntentSection
        intent="derisk"
        eyebrowOverride="Commitments"
        headline={{ lead: 'Six things we hold ourselves to,', accent: 'and you can check all of them.' }}
        lead="Not values. Commitments — each one observable during an engagement rather than asserted on a website."
      >
        <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge md:grid-cols-2 lg:grid-cols-3">
          {company.commitments.map((commitment, i) => (
            <li key={commitment.title} className="flex flex-col gap-3 bg-paper p-7">
              <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-h4 font-medium">{commitment.title}</h2>
              <p className="text-micro leading-relaxed text-prose-soft">{commitment.body}</p>
            </li>
          ))}
        </ul>
      </IntentSection>

      <IntentSection
        intent="derisk"
        eyebrowOverride="The engagement"
        headline={company.process.headline}
        lead={company.process.body}
        register="sunk"
      >
        <ol className="flex flex-col">
          {company.process.stages.map((stage) => (
            <li
              key={stage.n}
              className="group grid gap-4 border-t border-paper-edge py-8 last:border-b md:grid-cols-[6rem_10rem_1fr] md:gap-8"
            >
              <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint transition-colors group-hover:text-[var(--accent)]">
                {stage.n}
              </span>
              <h2 className="text-h4 font-medium">{stage.step}</h2>
              <p className="measure text-micro leading-relaxed text-prose-soft">{stage.body}</p>
            </li>
          ))}
        </ol>
      </IntentSection>

      <Section register="ink">
        <Container>
          <div className="flex flex-col gap-8">
            <Eyebrow>Start</Eyebrow>
            <Headline
              level={2}
              headline={{ lead: 'The first call is thirty minutes', accent: 'and there is no deck.' }}
              className="max-w-3xl"
            />
            <Lead className="text-prose-inv-soft">{company.contact.body}</Lead>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="/faq" variant="outline">
                Read the awkward questions
              </Button>
            </div>
            <dl className="mt-8 grid gap-8 border-t border-paper-edge pt-10 sm:grid-cols-4">
              {company.figures.map((figure) => (
                <Datum key={figure.label} value={figure.value} label={figure.label} />
              ))}
            </dl>
          </div>
        </Container>
      </Section>
    </div>
  );
}
