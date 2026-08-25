/**
 * INDUSTRIES HUB.
 *
 * Presented as a self-selection tool rather than a list of logos. Each row
 * leads with the business type and the pressure, because a reader scanning this
 * page is doing exactly one thing: looking for themselves.
 */

import Link from 'next/link';
import { niches } from '@/content/niches';
import { company } from '@/content/company';
import {
  Container,
  Eyebrow,
  Headline,
  Lead,
  Section,
  Button,
  Badge,
} from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HeroField } from '@/components/bento/hero-field';
import { spell } from '@/lib/words';

export const metadata = {
  title: 'Industries — who the work is built for',
  description: `${spell(niches.length, true)} business types, the operational pressure behind each, and the systems and desks that apply. Named business types, not sectors.`,
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries',
    url: `${company.url}/industries`,
    hasPart: niches.map((n) => ({
      '@type': 'WebPage',
      name: n.label,
      url: `${company.url}/industries/${n.slug}`,
      description: n.who,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Industries</Eyebrow>
              <Badge>{niches.length} business types</Badge>
            </div>
            <Headline
              level={1}
              headline={{
                lead: 'A sector tells you nothing.',
                accent: 'A business type does.',
              }}
              className="max-w-[20ch]"
            />
            <Lead className="text-prose-inv-soft">
              &ldquo;Healthcare&rdquo; describes an industry. &ldquo;Multi-site clinics
              running their own front desk&rdquo; describes a business, and either it is
              yours or it is not. Find the one that reads like your week.
            </Lead>
          </div>
        </Container>
      </Section>

      <IntentSection
        intent="qualify"
        eyebrowOverride="Find yours"
        headline={{
          lead: `${spell(niches.length, true)} business types,`,
          accent: 'and the pressure behind each.',
        }}
        lead="Each page names the operational pressure, the signals that indicate it, and the specific constraint we design around. If the pressure does not describe you, the services underneath it will not either."
        containerSize="wide"
      >
        <ul className="rounded-panel border-paper-edge bg-paper-edge grid gap-px overflow-hidden border md:grid-cols-2">
          {niches.map((niche) => (
            <li key={niche.slug} data-accent={niche.accent} className="bg-paper">
              <Link
                href={`/industries/${niche.slug}`}
                className="group hover:bg-paper-sunk flex h-full flex-col gap-4 p-7 transition-colors md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-h3 font-medium transition-colors group-hover:text-[var(--accent)]">
                    {niche.label}
                  </h2>
                  <span
                    aria-hidden
                    className="text-prose-faint shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  >
                    →
                  </span>
                </div>

                <p className="text-micro text-prose-soft leading-relaxed">{niche.who}</p>

                <p className="border-paper-edge text-eyebrow text-prose-faint mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t pt-4 font-mono tracking-[0.12em] uppercase">
                  <span className="text-[var(--accent)]">
                    {niche.services.length} build
                  </span>
                  <span aria-hidden>·</span>
                  <span>{niche.operations.length} run</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </IntentSection>

      <IntentSection
        intent="act"
        headline={{ lead: 'Not on the list?', accent: 'Tell us anyway.' }}
        lead="These are the business types we have the most specific knowledge of. It is not a boundary — it is where we can be most useful fastest."
        register="sunk"
      >
        <Button href="/contact" variant="primary">
          Start a conversation
        </Button>
      </IntentSection>
    </>
  );
}
