/**
 * SERVICE PAGE.
 *
 * The section order is not chosen here — it comes from `INTENT_LADDER`, so all
 * nine service pages and all six operations pages climb the same ladder. What
 * changes between them is the accent, the mechanism and the words.
 *
 * `data-accent` is set once on the wrapper. Every descendant reads the accent
 * through CSS custom properties, which is why no component on this page takes
 * a colour prop and why one service's hue can never leak into another's.
 */

import { notFound } from 'next/navigation';
import {
  serviceBySlug,
  serviceSlugs,
  resolveBuiltFor,
  relatedServices,
} from '@/content/services';
import { operationBySlug } from '@/content/operations';
import { company } from '@/content/company';
import { breadcrumbSchema, areaServed, ORG_ID } from '@/lib/schema';
import { BuiltFor } from '@/components/sections/built-for';
import {
  ServiceHero,
  ProblemSection,
  SolutionSection,
  MechanismSection,
  OutcomesSection,
  ProcessSection,
  FaqSection,
  HandoffSection,
  CtaSection,
} from '@/components/sections/service-sections';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};
  return {
    /* absolute: the metaTitle already carries the brand, so the layout template
       must not append it again — that produced 95-character titles Google cut off. */
    title: { absolute: service.metaTitle ?? `${service.title} | ${company.name}` },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle ?? service.title,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();

  const builtFor = resolveBuiltFor(service);
  const related = relatedServices(service);
  const handoffTarget = service.handoff?.operation
    ? operationBySlug[service.handoff.operation]
    : null;

  /* Two schema blocks: the Service itself, and the FAQ. The FAQ questions are
     the same strings rendered on the page — generated from one source so the
     markup cannot drift from the visible content, which is the failure mode
     that gets structured data ignored. */
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.eyebrow,
      description: service.metaDescription,
      url: `${company.url}/services/${service.slug}`,
      provider: { '@id': ORG_ID },
      areaServed,
      audience: builtFor?.segments?.map((s) => ({
        '@type': 'Audience',
        audienceType: s.label,
      })),
    },
    breadcrumbSchema([
      { name: 'Build', path: '/services' },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <div data-accent={service.accent}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero service={service} kind="service" />
      <BuiltFor builtFor={builtFor} />
      <ProblemSection problem={service.problem} />
      <SolutionSection solution={service.solution} />
      <MechanismSection mechanism={service.mechanism} />
      <OutcomesSection outcomes={service.outcomes} />
      <ProcessSection process={service.process} />
      <FaqSection faq={service.faq} />
      <HandoffSection handoff={service.handoff} target={handoffTarget} />
      <CtaSection
        related={related}
        relatedBase="/services"
        relatedLabel="Related services"
      />
    </div>
  );
}
