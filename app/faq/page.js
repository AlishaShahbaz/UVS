/**
 * FAQ.
 *
 * Two sources, one page: the company-level questions written for this page, and
 * every service and operations question aggregated underneath. The aggregation
 * matters for two reasons — it gives this page real depth without writing
 * anything twice, and it means the FAQ schema emitted here covers the whole
 * site rather than a handful of general questions.
 */

import Link from 'next/link';
import { companyFaq, flatCompanyFaq } from '@/content/faq';
import { services } from '@/content/services';
import { operations } from '@/content/operations';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button } from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Questions',
  description:
    'How engagements work, who owns the code, how we price, and the awkward questions — including why we have no case studies to show you.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const offerings = [
    ...services.map((s) => ({ ...s, base: '/services' })),
    ...operations.map((o) => ({ ...o, base: '/operations' })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${company.url}/faq`,
    mainEntity: [
      ...flatCompanyFaq,
      ...offerings.flatMap((o) => o.faq),
    ].map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div data-accent="slate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <Eyebrow>Questions</Eyebrow>
            <Headline
              level={1}
              headline={{ lead: 'Including the ones', accent: 'you would rather not ask.' }}
              className="max-w-[18ch]"
            />
            <Lead className="text-prose-inv-soft">
              Engagement shape, ownership, money, and the awkward section — why we have no case
              studies, and whether the AI is going to replace the people on your account.
            </Lead>
          </div>
        </Container>
      </Section>

      {companyFaq.map((group, gi) => (
        <IntentSection
          key={group.group}
          intent="object"
          eyebrowOverride={group.group}
          headline={{ lead: group.group }}
          register={gi % 2 === 1 ? 'sunk' : 'paper'}
          size={gi === 0 ? 'default' : 'tight'}
        >
          <div className="flex flex-col">
            {group.questions.map((item) => (
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
      ))}

      <IntentSection
        intent="extend"
        eyebrowOverride="Per service"
        headline={{ lead: 'Every service page carries', accent: 'its own five questions.' }}
        lead="Answered in the context of that specific work, which is usually where the question you actually have is answered."
        containerSize="wide"
      >
        <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <li key={offering.slug} data-accent={offering.accent} className="bg-paper">
              <Link
                href={`${offering.base}/${offering.slug}#faq`}
                className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-paper-sunk"
              >
                <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-[var(--accent)]">
                  {offering.base === '/services' ? 'Build' : 'Run'}
                </span>
                <span className="text-h4 font-medium">{offering.title}</span>
                <span className="mt-auto flex items-center gap-2 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-prose-faint">
                  {offering.faq.length} questions
                  <span
                    aria-hidden
                    className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </IntentSection>

      <IntentSection
        intent="act"
        headline={{ lead: 'Question not answered?', accent: 'Ask it directly.' }}
        lead={company.contact.body}
        register="sunk"
      >
        <Button href="/contact" variant="primary">
          Start a conversation
        </Button>
      </IntentSection>
    </div>
  );
}
