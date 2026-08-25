/**
 * SERVICES HUB — the Build half.
 *
 * Grouped by discipline rather than listed flat, and each card carries the
 * headline rather than a generic one-liner. The headlines were written to be
 * legible on their own, so the hub reads as nine distinct positions rather than
 * nine variations on "we do X well".
 */

import Link from 'next/link';
import { serviceGroups, services } from '@/content/services';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button, Badge } from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Build — AI engineering, software and campaigns',
  description:
    'Nine services across AI engineering, development and digital marketing. Each one built for named business types, with the systems handed over as code you own.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services',
    url: `${company.url}/services`,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.summary,
        url: `${company.url}/services/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Build</Eyebrow>
              <Badge>{services.length} services</Badge>
            </div>
            <Headline
              level={1}
              headline={{ lead: 'We build the system.', accent: 'Then we run it.' }}
              className="max-w-[16ch]"
            />
            <Lead className="text-prose-inv-soft">
              This is the first half. AI engineering, software and campaigns — the systems that
              answer, act and generate demand. Every one of them creates a queue, and the second
              half is where we staff it.
            </Lead>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="/operations" variant="outline">
                See the Run half
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {serviceGroups.map((group, gi) => (
        <IntentSection
          key={group.name}
          intent="evaluate"
          eyebrowOverride={group.name}
          headline={{ lead: group.name }}
          containerSize="wide"
          register={gi % 2 === 1 ? 'sunk' : 'paper'}
          size={gi === 0 ? 'default' : 'tight'}
          headingLevel={2}
        >
          <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge lg:grid-cols-3">
            {group.services.map((service) => (
              <li key={service.slug} data-accent={service.accent} className="bg-paper">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-5 p-7 transition-colors hover:bg-paper-sunk md:p-8"
                >
                  <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--accent)]">
                    {service.eyebrow}
                  </p>

                  <h3 className="text-h3 font-medium leading-[1.15] [text-wrap:balance]">
                    {service.headline.lead}{' '}
                    <span className="accent-phrase text-prose-soft transition-colors group-hover:text-[var(--accent)]">
                      {service.headline.accent}
                    </span>
                  </h3>

                  <p className="text-micro leading-relaxed text-prose-soft">{service.summary}</p>

                  <p className="mt-auto flex items-center gap-2 border-t border-paper-edge pt-4 font-mono text-eyebrow uppercase tracking-[0.12em] text-prose-faint">
                    {service.builtFor.segments.length} business types
                    <span
                      aria-hidden
                      className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </IntentSection>
      ))}

      <IntentSection
        intent="act"
        headline={{ lead: 'Not sure which half', accent: 'your problem belongs to?' }}
        lead={company.contact.body}
        register="sunk"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/industries" variant="outline">
            Find your business type
          </Button>
        </div>
      </IntentSection>
    </>
  );
}
