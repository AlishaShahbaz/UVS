/**
 * OPERATIONS HUB — the Run half.
 *
 * This is the site's primary commercial page, so it carries three things the
 * services hub does not:
 *
 *   1. The Desk Explorer. Eight desks is past the point where a card grid is
 *      scannable, and this page's visitor is comparing rather than reading.
 *   2. The staffing model. "Who are these people and who is watching them" is
 *      the question every buyer of outsourced operations has and few pages
 *      answer. Ours is the differentiator, so it goes above the fold of the
 *      second screen rather than into a contract schedule.
 *   3. The cost position, with its basis attached.
 */

import Link from 'next/link';
import { operationGroups, operations, staffingModel, costPosition } from '@/content/operations';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button, Badge } from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { DeskExplorer } from '@/components/sections/desk-explorer';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Run — staffed desks with a service level',
  description:
    'Eight operations desks across conversation, transaction and compliance: live chat, voice, email, orders, B2B sales, data entry, KYC onboarding and transaction monitoring. Every desk ships with a Team Lead and QA.',
  alternates: { canonical: '/operations' },
};

export default function OperationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Operations desks',
    url: `${company.url}/operations`,
    itemListElement: operations.map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: o.title,
        description: o.summary,
        url: `${company.url}/operations/${o.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── ORIENT ─────────────────────────────────────────────────────── */}
      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Run</Eyebrow>
              <Badge>{operations.length} desks</Badge>
            </div>
            <Headline
              level={1}
              headline={{ lead: 'Every system creates a queue.', accent: 'We hold it.' }}
              className="max-w-[18ch]"
            />
            <Lead className="text-prose-inv-soft">
              What you buy is a response window that holds under load — not a headcount. The AI
              layer takes the repetitive share, trained people take the rest, and every desk ships
              with a Team Lead and an independent QA function.
            </Lead>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="/services" variant="outline">
                See the Build half
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── EVALUATE — the explorer ───────────────────────────────────── */}
      <IntentSection
        intent="evaluate"
        eyebrowOverride="The desks"
        headline={{ lead: 'Eight desks.', accent: 'Each one a queue with a number on it.' }}
        lead="Conversation, transaction and compliance. Preview any of them here; each links through to the full page."
        containerSize="wide"
      >
        <DeskExplorer groups={operationGroups} />
      </IntentSection>

      {/* ── DERISK — the staffing model. The differentiator. ──────────── */}
      <IntentSection
        intent="derisk"
        eyebrowOverride="How a desk is staffed"
        headline={staffingModel.headline}
        lead={staffingModel.body}
        register="sunk"
        containerSize="wide"
      >
        <div className="flex flex-col gap-8">
          <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge md:grid-cols-2 lg:grid-cols-4">
            {staffingModel.roles.map((role, i) => (
              <li key={role.role} className="flex flex-col gap-3 bg-paper p-7">
                <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h4 font-medium">{role.role}</h3>
                <p className="text-micro leading-relaxed text-prose-soft">{role.body}</p>
              </li>
            ))}
          </ul>
          <p className="measure border-l-2 border-paper-edge py-1 pl-6 text-micro leading-relaxed text-prose-soft">
            {staffingModel.note}
          </p>
        </div>
      </IntentSection>

      {/* ── JUSTIFY — the cost position, with its basis ───────────────── */}
      <Section register="ink">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Eyebrow>Cost</Eyebrow>
              <Headline level={2} headline={costPosition.headline} />
              <p className="text-h3 font-medium leading-tight text-prose-inv">
                <span className="text-[var(--accent)]">{costPosition.claim}</span>{' '}
                <span className="text-prose-inv-soft">{costPosition.basis}.</span>
              </p>
              <p className="measure text-lead leading-relaxed text-prose-inv-soft">
                {costPosition.body}
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:pt-4">
              <ul className="flex flex-col">
                {costPosition.reasons.map((reason) => (
                  <li
                    key={reason.title}
                    className="flex flex-col gap-1.5 border-t border-paper-edge py-5 last:border-b"
                  >
                    <span className="text-h4 font-medium text-prose-inv">{reason.title}</span>
                    <span className="text-micro leading-relaxed text-prose-inv-soft">
                      {reason.body}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="measure text-micro leading-relaxed text-prose-inv-faint">
                <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                  The honest caveat ·{' '}
                </span>
                {costPosition.caveat}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ACT ───────────────────────────────────────────────────────── */}
      <IntentSection
        intent="act"
        headline={{ lead: 'Send us a week', accent: 'of real numbers.' }}
        lead="Calls, chats, tickets, documents or alerts — actual volume, by hour. We will come back with a coverage model, an automated share we think is realistic, and what it costs."
        register="sunk"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/industries/fintech" variant="outline">
            Fintech &amp; neobanks
          </Button>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-3 py-3 text-micro text-prose-soft transition-colors hover:text-prose"
          >
            All business types
            <span aria-hidden>→</span>
          </Link>
        </div>
      </IntentSection>
    </>
  );
}
