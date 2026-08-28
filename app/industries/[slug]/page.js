/**
 * INDUSTRY PAGE — the other end of the join.
 *
 * A service page asks "is this for a business like mine?". This page answers
 * the reverse: "I am this kind of business — what applies to me?" The two are
 * generated from the same data, so they cannot disagree, and every service
 * listed here is a service that named this niche rather than a list someone
 * maintained separately.
 *
 * The `signals` block does the work here. A page that opens with "we serve the
 * healthcare industry" tells a reader nothing they can act on. A list of four
 * observable symptoms lets them count how many they recognise, which is a much
 * better qualification mechanism than any amount of sector language.
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { nicheBySlug, nicheSlugs } from '@/content/niches';
import { servicesForNiche } from '@/content/services';
import { operationBySlug } from '@/content/operations';
import { company } from '@/content/company';
import { breadcrumbSchema } from '@/lib/schema';
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
import { DueDiligence } from '@/components/sections/due-diligence';

export function generateStaticParams() {
  return nicheSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const niche = nicheBySlug[slug];
  if (!niche) return {};
  const title = `${niche.label} — systems and staffed desks`;
  return {
    title,
    description: `${niche.who} ${niche.pressure.slice(0, 110)}…`,
    alternates: { canonical: `/industries/${niche.slug}` },
    openGraph: { title, description: niche.who, url: `/industries/${niche.slug}` },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const niche = nicheBySlug[slug];
  if (!niche) notFound();

  const services = servicesForNiche(niche);
  const operations = (niche.operations ?? [])
    .map((s) => operationBySlug[s])
    .filter(Boolean);

  /* Pull the service-specific writing back out for this niche, so the page can
     show what each service actually said about this business type rather than
     repeating a generic summary. This is the join running in reverse. */
  const segmentsForNiche = services
    .map((service) => {
      const segment = service.builtFor?.segments?.find((s) => s.niche === niche.slug);
      return segment ? { service, segment } : null;
    })
    .filter(Boolean);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Industries', path: '/industries' },
      { name: niche.label, path: `/industries/${niche.slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${niche.label} — ${company.name}`,
      description: niche.who,
      url: `${company.url}/industries/${niche.slug}`,
      about: { '@type': 'Audience', audienceType: niche.label },
      hasPart: services.map((s) => ({
        '@type': 'Service',
        name: s.title,
        url: `${company.url}/services/${s.slug}`,
      })),
    },
  ];

  return (
    <div data-accent={niche.accent}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ORIENT */}
      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Industry</Eyebrow>
                <Badge>{services.length + operations.length} offerings apply</Badge>
              </div>
              <Headline
                level={1}
                headline={{ lead: niche.label }}
                className="max-w-[14ch]"
              />
              <Lead className="text-prose-inv-soft">{niche.who}</Lead>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="accent">
                  Start a conversation
                </Button>
                <Button href="#built-for" variant="outline">
                  What applies here
                </Button>
              </div>
            </div>

            {/* The index for this business type, as an instrument readout. It
                also earns the space the old hero left empty. */}
            <div
              id="built-for"
              className="border-paper-edge flex flex-col gap-5 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            >
              <div className="flex flex-col gap-3">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Desks that apply
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {operations.map((operation) => (
                    <li key={operation.slug}>
                      <Link
                        href={`/operations/${operation.slug}`}
                        className="text-micro text-prose-inv-soft decoration-ink-edge font-mono underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                      >
                        {operation.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Systems that apply
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-micro text-prose-inv-soft decoration-ink-edge font-mono underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* RECOGNISE — the pressure */}
      <IntentSection
        intent="recognise"
        eyebrowOverride="The pressure"
        headline={{ lead: 'What makes this business type', accent: 'hard to run.' }}
        lead={niche.pressure}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
              Signals — recognise two and it is worth a conversation
            </p>
            <ul className="flex flex-col">
              {niche.signals.map((signal, i) => (
                <li
                  key={i}
                  className="border-paper-edge flex items-start gap-4 border-t py-4 last:border-b"
                >
                  <span
                    aria-hidden
                    className="border-paper-edge mt-1.5 h-3 w-3 shrink-0 rounded-[3px] border"
                  />
                  <span className="text-micro text-prose-soft leading-relaxed">
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-panel border-paper-edge bg-paper-sunk flex h-fit flex-col gap-3 border p-7">
            <p className="text-eyebrow font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
              The constraint we design around
            </p>
            <p className="text-micro text-prose-soft leading-relaxed">{niche.constraint}</p>
          </aside>
        </div>
      </IntentSection>

      <DueDiligence dueDiligence={niche.dueDiligence} />

      {/* EVALUATE — what each service says about this niche */}
      {segmentsForNiche.length > 0 && (
        <IntentSection
          intent="evaluate"
          eyebrowOverride="What we build"
          headline={{ lead: 'What we would build', accent: 'for a business like this.' }}
          lead="Each of these is written for this business type specifically. If a line reads like it could apply to any sector, it should not be here."
          register="sunk"
        >
          <div className="rounded-panel border-paper-edge bg-paper-edge grid gap-px overflow-hidden border">
            {segmentsForNiche.map(({ service, segment }) => (
              <article
                key={service.slug}
                data-accent={service.accent}
                className="bg-paper grid gap-6 p-7 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10 md:p-8"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-eyebrow font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                    {service.group}
                  </p>
                  <h3 className="text-h4 font-medium">
                    <Link
                      href={`/services/${service.slug}`}
                      className="decoration-paper-edge underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                    >
                      {service.title}
                    </Link>
                  </h3>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
                      What we see
                    </p>
                    <p className="text-micro text-prose-soft leading-relaxed">
                      {segment.trigger}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
                      What we build
                    </p>
                    <p className="text-micro text-prose-soft leading-relaxed">
                      {segment.built}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <p className="text-eyebrow font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                      The detail that matters
                    </p>
                    <p className="text-micro text-prose-soft leading-relaxed">
                      {segment.edge}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </IntentSection>
      )}

      {/* EXTEND — the desks */}
      {operations.length > 0 && (
        <Section register="ink">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div className="flex flex-col gap-5">
                <Eyebrow>The other half</Eyebrow>
                <Headline
                  level={2}
                  headline={{ lead: 'And the desks that', accent: 'run alongside them.' }}
                />
                <p className="text-lead text-prose-inv-soft leading-relaxed">
                  Building the system creates the queue. These are the desks that hold it,
                  staffed to a service level you set.
                </p>
              </div>
              <ul className="rounded-panel border-paper-edge bg-paper-edge grid gap-px self-start overflow-hidden border sm:grid-cols-2">
                {operations.map((operation) => (
                  <li
                    key={operation.slug}
                    data-accent={operation.accent}
                    className="bg-ink"
                  >
                    <Link
                      href={`/operations/${operation.slug}`}
                      className="group hover:bg-ink-lift flex h-full flex-col gap-2 p-6 transition-colors"
                    >
                      <span className="text-eyebrow font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                        {operation.group}
                      </span>
                      <span className="text-h4 font-medium">{operation.title}</span>
                      <span className="text-micro text-prose-inv-faint leading-relaxed">
                        {operation.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      )}

      {/* ACT */}
      <IntentSection
        intent="act"
        headline={{ lead: 'Recognise two signals?', accent: 'That is enough to talk.' }}
        lead={company.contact.body}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Start a conversation
          </Button>
          <Button href="/industries" variant="outline">
            Other business types
          </Button>
        </div>
      </IntentSection>
    </div>
  );
}
