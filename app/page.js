/**
 * HOMEPAGE.
 *
 * The job of this page is to make one structural claim legible in under thirty
 * seconds: there are two halves, we do both, and the seam between them is the
 * thing nobody else has a reason to get right.
 *
 * Section order follows the same intent ladder as every other page, with one
 * addition — the handoff figure sits third, immediately after the two halves
 * are named. That placement is deliberate: the positioning is the differentiator
 * and burying it below a services grid would be leading with the commodity.
 */

import Link from 'next/link';
import { services, serviceGroups } from '@/content/services';
import { operations } from '@/content/operations';
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
  Datum,
} from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HandoffFigure } from '@/components/sections/handoff-figure';
import { HeroField } from '@/components/bento/hero-field';
import { CompliancePosture } from '@/components/sections/compliance-posture';
import { areaServed } from '@/lib/schema';
import { spell } from '@/lib/words';

export const metadata = {
  title: 'Universal Virtual Support — we build the system, then we run it',
  description:
    'AI engineering, software and campaigns — plus the staffed desks that hold the queues they create. Chat, voice, email, orders, sales and back office, to a service level you set.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      alternateName: company.short,
      url: company.url,
      email: company.email,
      foundingDate: String(company.founded),
      description:
        'Support and AI engineering. We build the systems — AI, software and campaigns — then staff the queues those systems create.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 500,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: company.email,
        availableLanguage: 'English',
      },
      /* Corroborates that this domain and these profiles are one entity — the
         cheapest identity signal available to a company with no client logos. */
      sameAs: company.socials.map((s) => s.href),
      areaServed,
      knowsAbout: niches.map((n) => n.label),
      makesOffer: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${company.url}/services/${s.slug}`,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: company.url,
      publisher: { '@type': 'Organization', name: company.name },
    },
  ];

  return (
    <div data-accent="iris">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── ORIENT ─────────────────────────────────────────────────────── */}
      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container size="wide" className="relative">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="flex flex-col gap-8">
              {/* The company name sits here rather than only in the header.
                  "UVS" is a short form nobody arriving from an ad has seen
                  before, and the headline is a positioning line rather than an
                  introduction — so without this, a first-time visitor did not
                  learn the actual name until the footer. It stands alone: the
                  headline and lead directly beneath already say what the
                  company does, so a category label here only competes with them. */}
              <Eyebrow>{company.name}</Eyebrow>

              <h1 className="text-h1 font-medium [text-wrap:balance]">
                We build the system.
                <br />
                <span className="accent-phrase">Then we run it.</span>
              </h1>

              <Lead className="text-prose-inv-soft">
                Most vendors sell you one half. An agency builds the system and hands you
                the queue it creates. A BPO staffs the queue and has no way to reduce it. We
                do both — which is why the seam between them is the part we care most about.
              </Lead>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="accent">
                  Start a conversation
                </Button>
                <Button href="/industries" variant="outline">
                  Find your business type
                </Button>
              </div>
            </div>

            {/* The two halves, stated as an index. */}
            <div className="rounded-panel border-paper-edge bg-paper-edge flex flex-col gap-px overflow-hidden border">
              {company.halves.map((half) => (
                <Link
                  key={half.id}
                  href={half.href}
                  className="group bg-ink hover:bg-ink-lift flex flex-col gap-2 p-6 transition-colors"
                >
                  <span className="text-eyebrow flex items-center gap-3 font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
                    {half.label}
                    <span
                      aria-hidden
                      className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-h4 font-medium">{half.title}</span>
                  <span className="text-micro text-prose-inv-faint leading-relaxed">
                    {half.body}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── UNDERSTAND — the seam. The claim, drawn. ───────────────────── */}
      <IntentSection
        intent="understand"
        eyebrowOverride="The handoff"
        headline={{ lead: 'The interesting part is', accent: 'where the two halves meet.' }}
        lead="A system built honestly will refuse, escalate and hold things at a gate. That produces a queue of exactly the work it decided not to handle — and a vendor who only sells software has every incentive to make that queue somebody else's problem."
        containerSize="wide"
        register="sunk"
      >
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <HandoffFigure />

          <div className="flex flex-col gap-8 lg:pt-4">
            <p className="measure text-lead text-prose-soft leading-relaxed">
              {company.positioning.body}
            </p>

            <ul className="flex flex-col">
              {[
                {
                  t: 'A threshold set too low costs us the review work',
                  b: 'So we set it where the error cost says it belongs, not where it flatters a demo.',
                },
                {
                  t: 'A chatbot that deflects badly costs us the escalation',
                  b: 'So deflection is measured against resolution, not against ticket count.',
                },
                {
                  t: 'A campaign we cannot answer costs us the queue',
                  b: 'So spend is planned against response capacity before it is planned against channels.',
                },
              ].map((item) => (
                <li
                  key={item.t}
                  className="border-paper-edge flex flex-col gap-1 border-t py-4 last:border-b"
                >
                  <span className="text-micro text-prose font-medium">{item.t}</span>
                  <span className="text-micro text-prose-faint leading-relaxed">
                    {item.b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </IntentSection>

      {/* ── QUALIFY — the niche layer, on the homepage. ────────────────── */}
      <IntentSection
        intent="qualify"
        headline={{ lead: 'Start with your business,', accent: 'not our service list.' }}
        lead="Every service page names the business types it was built for, and says who it is not for. If your week is described on one of these pages, the rest of the site will make sense. If it is not, we would rather you found out here."
        containerSize="wide"
      >
        <ul className="rounded-panel border-paper-edge bg-paper-edge grid grid-cols-2 gap-px overflow-hidden border sm:grid-cols-3 lg:grid-cols-4">
          {niches.map((niche) => (
            <li key={niche.slug} data-accent={niche.accent} className="bg-paper">
              <Link
                href={`/industries/${niche.slug}`}
                className="group hover:bg-paper-sunk flex h-full flex-col gap-2 p-5 transition-colors"
              >
                <span
                  aria-hidden
                  className="h-1 w-6 rounded-full bg-[var(--accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-micro text-prose leading-snug font-medium">
                  {niche.label}
                </span>
                <span className="text-prose-faint mt-auto pt-2 font-mono text-[10px] tracking-[0.12em] uppercase">
                  {niche.services.length} build · {niche.operations.length} run
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </IntentSection>

      {/* ── EVALUATE — Run. The primary offer, so it leads and it gets the
             prominent ink treatment and the full headline per desk. ──────── */}
      <Section register="ink">
        <Container size="wide">
          <header className="flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <Eyebrow>Run</Eyebrow>
              <span className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
                What exactly would I be buying?
              </span>
            </div>
            <Headline
              level={2}
              headline={{
                lead: `${spell(operations.length, true)} desks.`,
                accent: 'Each one a queue with a number on it.',
              }}
              className="max-w-4xl"
            />
            <Lead className="text-prose-inv-soft">
              What you buy is a response window that holds under load — not a headcount. The
              AI layer takes the repetitive share, trained people take the rest, and the
              split between them is measured and reported weekly rather than asserted here.
            </Lead>
          </header>

          <ul className="rounded-panel border-paper-edge bg-paper-edge mt-12 grid gap-px overflow-hidden border md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {operations.map((operation) => (
              <li key={operation.slug} data-accent={operation.accent} className="bg-ink">
                <Link
                  href={`/operations/${operation.slug}`}
                  className="group hover:bg-ink-lift flex h-full flex-col gap-3 p-7 transition-colors"
                >
                  <span className="text-eyebrow flex items-center gap-2 font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                    {operation.eyebrow}
                    <span
                      aria-hidden
                      className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-h4 leading-snug font-medium [text-wrap:balance]">
                    {operation.headline.lead}{' '}
                    <span className="accent-phrase text-prose-inv-soft">
                      {operation.headline.accent}
                    </span>
                  </span>
                  <span className="text-micro text-prose-inv-faint leading-relaxed">
                    {operation.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button href="/operations" variant="outline">
              All operations desks
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── DERISK — the regimes the desks are worked to. Sits directly
             after Run because it is the first question a regulated buyer has
             about a staffed desk, and before Build because it qualifies the
             desks rather than the systems. ─────────────────────────────── */}
      <CompliancePosture />

      {/* ── EVALUATE — Build. Second, and framed as what makes the desk
             cheaper to run rather than as a separate product line. ───────── */}
      <IntentSection
        intent="evaluate"
        eyebrowOverride="Build"
        headline={{ lead: 'And the systems that', accent: 'make the desk cheaper to run.' }}
        lead="Every desk above gets more affordable as more of its volume is absorbed automatically. That is what this half builds — plus the campaigns that fill the queue in the first place."
        containerSize="wide"
        register="sunk"
      >
        <div className="flex flex-col gap-10">
          {serviceGroups.map((group) => (
            <div key={group.name} className="flex flex-col gap-4">
              <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                {group.name}
              </p>
              <ul className="rounded-tile border-paper-edge bg-paper-edge grid gap-px overflow-hidden border md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <li key={service.slug} data-accent={service.accent} className="bg-paper">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group hover:bg-paper-sunk flex h-full flex-col gap-3 p-6 transition-colors"
                    >
                      <span className="text-eyebrow flex items-center gap-2 font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                        {service.eyebrow}
                        <span
                          aria-hidden
                          className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        >
                          →
                        </span>
                      </span>
                      <span className="text-micro text-prose-soft leading-relaxed">
                        {service.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Button href="/services" variant="outline">
              All build services
            </Button>
          </div>
        </div>
      </IntentSection>

      {/* ── DERISK — commitments as the proof strategy ─────────────────── */}
      <IntentSection
        intent="derisk"
        eyebrowOverride="What we commit to"
        headline={{
          lead: 'Ten thousand clients is a number.',
          accent: 'These are the commitments behind it.',
        }}
        lead="A track record tells you we have done this before. It does not tell you how we will work with you. Everything below is checkable during an engagement rather than asserted on a homepage."
      >
        <ul className="rounded-panel border-paper-edge bg-paper-edge grid gap-px overflow-hidden border md:grid-cols-2 lg:grid-cols-3">
          {company.commitments.map((commitment, i) => (
            <li key={commitment.title} className="bg-paper flex flex-col gap-3 p-7">
              <span className="text-eyebrow font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-h4 font-medium">{commitment.title}</h3>
              <p className="text-micro text-prose-soft leading-relaxed">
                {commitment.body}
              </p>
            </li>
          ))}
        </ul>
      </IntentSection>

      {/* ── DERISK — process ──────────────────────────────────────────── */}
      <IntentSection
        intent="derisk"
        eyebrowOverride="How an engagement runs"
        headline={company.process.headline}
        lead={company.process.body}
        register="sunk"
        containerSize="wide"
      >
        <ol className="rounded-panel border-paper-edge bg-paper-edge grid gap-px overflow-hidden border md:grid-cols-2 lg:grid-cols-3">
          {company.process.stages.map((stage) => (
            <li key={stage.n} className="bg-paper flex flex-col gap-3 p-7">
              <span className="text-eyebrow font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
                {stage.n}
              </span>
              <h3 className="text-h4 font-medium">{stage.step}</h3>
              <p className="text-micro text-prose-soft leading-relaxed">{stage.body}</p>
            </li>
          ))}
        </ol>
      </IntentSection>

      {/* ── ACT ───────────────────────────────────────────────────────── */}
      <Section register="ink">
        <Container>
          <div className="flex flex-col gap-8">
            <Eyebrow>Start</Eyebrow>
            <Headline
              level={2}
              headline={{ lead: 'Tell us the problem,', accent: 'not the specification.' }}
              className="max-w-3xl"
            />
            <Lead className="text-prose-inv-soft">{company.contact.body}</Lead>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="/about" variant="outline">
                How we work
              </Button>
            </div>

            <dl className="border-paper-edge mt-8 grid gap-8 border-t pt-10 sm:grid-cols-4">
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
