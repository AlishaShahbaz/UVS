/**
 * SERVICES — single source of truth.
 *
 * Everything downstream derives from this array: the header menu, the mobile
 * drawer, the footer, the services hub, every service page, the sitemap and the
 * JSON-LD. Adding a service is a content change in one of the group files, and
 * nothing else needs editing. That property is the reason the content lives in
 * data rather than in JSX, and it is worth protecting.
 */

import { aiEngineering } from './ai-engineering.js';
import { development } from './development.js';
import { marketing } from './marketing.js';
import { nicheBySlug } from '../niches.js';

export const services = [...aiEngineering, ...development, ...marketing];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export const serviceSlugs = services.map((s) => s.slug);

/** Groups, in the order they should be presented. Derived, not hand-listed. */
export const serviceGroups = services.reduce((groups, service) => {
  const existing = groups.find((g) => g.name === service.group);
  if (existing) existing.services.push(service);
  else groups.push({ name: service.group, services: [service] });
  return groups;
}, []);

/**
 * Resolve a service's `builtFor.segments` against the niche taxonomy.
 *
 * The segment carries the service-specific writing — the trigger, what gets
 * built, the edge — and the niche carries the shared identity. Joining them
 * here means a niche can be renamed in one place without nine service files
 * disagreeing about what it is called.
 *
 * A segment naming an unknown niche is dropped rather than rendered blank, and
 * `verify:content` fails the build on it.
 */
export function resolveBuiltFor(service) {
  if (!service?.builtFor) return null;
  const segments = service.builtFor.segments
    .map((segment) => {
      const niche = nicheBySlug[segment.niche];
      if (!niche) return null;
      return { ...segment, href: `/industries/${niche.slug}`, accent: niche.accent, nicheLabel: niche.label };
    })
    .filter(Boolean);
  return { ...service.builtFor, segments };
}

/** Services a given niche claims, resolved to full service objects. */
export function servicesForNiche(niche) {
  return (niche?.services ?? []).map((slug) => serviceBySlug[slug]).filter(Boolean);
}

export function relatedServices(service) {
  return (service?.related ?? []).map((slug) => serviceBySlug[slug]).filter(Boolean);
}
