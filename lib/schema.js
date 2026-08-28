/**
 * SHARED SCHEMA BUILDERS.
 *
 * Structured data assembled from the same content the page renders, so markup
 * and visible text cannot drift apart — which is the failure that gets
 * structured data ignored rather than rewarded.
 *
 * ## Breadcrumbs
 *
 * The site had no `BreadcrumbList` on any page. It is the one piece of schema
 * that reliably changes what a search result looks like, and it costs nothing:
 * the trail is already implied by the URL, so it is derived from the path
 * rather than declared per page and forgotten on the next one.
 *
 * ## areaServed
 *
 * Three markets, not one. An SEO package written without access to this site
 * assumed a US-only business; the company has an Australian office, US search
 * demand, and European clients. Getting this wrong in schema tells search
 * engines to place the business somewhere it does not operate.
 */

import { company } from '@/content/company';

/** The three markets, in schema.org shape. */
export const areaServed = company.markets.map((m) => ({
  '@type': m.type,
  name: m.name,
}));

/** The Organization block, referenced by @id from every other block. */
export const ORG_ID = `${company.url}/#organization`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: company.name,
  alternateName: company.short,
  url: company.url,
  email: company.email,
  areaServed,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
  sameAs: company.socials.map((s) => s.href),
};

/**
 * Build a BreadcrumbList from a path.
 *
 * @param {Array<{name: string, path: string}>} trail  Home is added automatically.
 */
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${company.url}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  };
}

/** A Service block that always carries the provider and the three markets. */
export function serviceSchema({ name, serviceType, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: `${company.url}${path}`,
    provider: { '@id': ORG_ID },
    areaServed,
  };
}

/**
 * FAQPage from the same question objects the page renders.
 *
 * Worth knowing what this is now for: Google retired FAQ rich results, so this
 * earns no SERP feature. It is kept because answer engines still use it to
 * decide what a page can be quoted as saying, which is the whole point of the
 * AEO work — but nobody should expect a visual change in search from it.
 */
export function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
