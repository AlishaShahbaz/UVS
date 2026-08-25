/**
 * OPERATIONS PAGE.
 *
 * Deliberately identical in structure to a service page. The two halves of the
 * business are presented as peers rather than as a product and its support
 * afterthought — a visitor who lands on Live Chat Support should get the same
 * depth, the same intent ladder and the same "is this for me" answer as one who
 * lands on AI Agents. Treating the operations pages as thin was the old site's
 * other structural mistake; they were three hundred words each.
 */

import { notFound } from 'next/navigation';
import {
  operationBySlug,
  operationSlugs,
  relatedOperations,
  staffingModel,
} from '@/content/operations';
import { serviceBySlug } from '@/content/services';
import { nicheBySlug } from '@/content/niches';
import { company } from '@/content/company';
import { BuiltFor } from '@/components/sections/built-for';
import {
  ServiceHero,
  ProblemSection,
  SolutionSection,
  MechanismSection,
  OutcomesSection,
  ProcessSection,
  StaffingSection,
  FaqSection,
  HandoffSection,
  CtaSection,
} from '@/components/sections/service-sections';

export function generateStaticParams() {
  return operationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const operation = operationBySlug[slug];
  if (!operation) return {};
  return {
    title: operation.metaTitle ?? operation.title,
    description: operation.metaDescription,
    keywords: operation.keywords,
    alternates: { canonical: `/operations/${operation.slug}` },
    openGraph: {
      title: operation.metaTitle ?? operation.title,
      description: operation.metaDescription,
      url: `/operations/${operation.slug}`,
      type: 'website',
    },
  };
}

/** Local resolver — operations join the niche taxonomy the same way services do. */
function resolveBuiltFor(operation) {
  if (!operation?.builtFor) return null;
  const segments = operation.builtFor.segments
    .map((segment) => {
      const niche = nicheBySlug[segment.niche];
      if (!niche) return null;
      return {
        ...segment,
        href: `/industries/${niche.slug}`,
        accent: niche.accent,
        nicheLabel: niche.label,
      };
    })
    .filter(Boolean);
  return { ...operation.builtFor, segments };
}

export default async function OperationPage({ params }) {
  const { slug } = await params;
  const operation = operationBySlug[slug];
  if (!operation) notFound();

  const builtFor = resolveBuiltFor(operation);
  const related = relatedOperations(operation);
  const handoffTarget = operation.handoff?.service
    ? serviceBySlug[operation.handoff.service]
    : null;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: operation.title,
      serviceType: operation.eyebrow,
      description: operation.metaDescription,
      url: `${company.url}/operations/${operation.slug}`,
      provider: { '@type': 'Organization', name: company.name, url: company.url },
      areaServed: builtFor?.segments?.map((s) => ({ '@type': 'Audience', audienceType: s.label })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: operation.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <div data-accent={operation.accent}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero service={operation} kind="operation" />
      <BuiltFor builtFor={builtFor} />
      <ProblemSection problem={operation.problem} />
      <SolutionSection solution={operation.solution} />
      <MechanismSection mechanism={operation.mechanism} />
      <OutcomesSection outcomes={operation.outcomes} />
      <ProcessSection process={operation.process} />
      <StaffingSection staffing={staffingModel} />
      <FaqSection faq={operation.faq} />
      <HandoffSection handoff={operation.handoff} target={handoffTarget} />
      <CtaSection
        related={related}
        relatedBase="/operations"
        relatedLabel="Related desks"
        headline={{ lead: 'Tell us the volume,', accent: 'we will tell you the shape.' }}
        body="Send us a week of real numbers — calls, chats, tickets, documents — and we will come back with a coverage model and what it would cost."
      />
    </div>
  );
}
