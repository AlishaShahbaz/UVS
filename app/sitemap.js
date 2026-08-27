/**
 * SITEMAP — generated from content, so it cannot list a page that does not
 * exist or omit one that does.
 *
 * This is a direct fix for a real defect on the previous site: its sitemap
 * listed 28 URLs while the homepage linked to three service pages that were
 * missing from it (`/services/automation`, `/services/cloud-engineering`,
 * `/services/devops`) and to `/case-studies`, which returned 404. Both classes
 * of error are structurally impossible here — the sitemap and the navigation
 * read from the same arrays.
 *
 * The base URL is read from the environment so a preview deployment does not
 * publish a sitemap pointing at production. That was the other defect on the
 * old site: the demo deployment's canonical tags, og:url and sitemap all named
 * a production domain, which tells a crawler the content it just read lives
 * somewhere else.
 */

import { serviceSlugs } from '@/content/services';
import { operationSlugs } from '@/content/operations';
import { nicheSlugs } from '@/content/niches';
import { legalSlugs } from '@/content/legal';
import { resolveOrigin } from '@/lib/origin';

/* One resolver, shared with robots.js and the build gate — see lib/origin.js
   for the production defect that made it a separate, validated module. */
export const BASE_URL = resolveOrigin();

export default function sitemap() {
  const now = new Date();

  const entry = (path, priority, changeFrequency = 'monthly') => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry('/', 1.0, 'weekly'),
    entry('/services', 0.9, 'weekly'),
    entry('/operations', 0.9, 'weekly'),
    entry('/industries', 0.9, 'weekly'),
    ...serviceSlugs.map((slug) => entry(`/services/${slug}`, 0.8)),
    ...operationSlugs.map((slug) => entry(`/operations/${slug}`, 0.8)),
    ...nicheSlugs.map((slug) => entry(`/industries/${slug}`, 0.7)),
    entry('/about', 0.6),
    entry('/technologies', 0.5),
    entry('/faq', 0.6),
    entry('/contact', 0.7),
    ...legalSlugs.map((slug) => entry(`/legal/${slug}`, 0.2, 'yearly')),
  ];
}
