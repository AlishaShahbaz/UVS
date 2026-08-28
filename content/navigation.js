/**
 * NAVIGATION — derived, never hand-maintained.
 *
 * Every menu on the site is computed from the content files. Adding a service,
 * an operation or a niche updates the header, the mega menu, the mobile drawer,
 * the footer and the sitemap with no edit here. The old site kept these in five
 * places and they had already drifted.
 */

import { serviceGroups } from './services/index.js';
import { operationGroups } from './operations.js';
import { niches } from './niches.js';

/**
 * ORDER IS THE POSITIONING. Run leads, Build follows.
 *
 * Operations is the primary commercial offer, so it holds the first slot in
 * every menu on the site. Build sits second and is framed as what makes the
 * desk cheaper to run rather than as a separate product line.
 */
export const primaryNav = [
  {
    label: 'Run',
    href: '/operations',
    summary: 'The desks — staffed queues with a service level you set.',
    columns: operationGroups.map((group) => ({
      title: group.name,
      links: group.operations.map((o) => ({
        label: o.title,
        href: `/operations/${o.slug}`,
        accent: o.accent,
      })),
    })),
  },
  {
    label: 'Build',
    href: '/services',
    summary: 'The systems that absorb the repetitive share of those queues.',
    columns: serviceGroups.map((group) => ({
      title: group.name,
      links: group.services.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}`,
        note: s.eyebrow === s.title ? undefined : s.eyebrow,
        accent: s.accent,
      })),
    })),
  },
  {
    label: 'Industries',
    href: '/industries',
    summary: 'Who the work is built for, and the pressure behind it.',
    columns: [
      {
        title: 'By business type',
        links: niches
          .slice(0, 6)
          .map((n) => ({
            label: n.label,
            href: `/industries/${n.slug}`,
            accent: n.accent,
          })),
      },
      {
        title: ' ',
        links: niches
          .slice(6)
          .map((n) => ({
            label: n.label,
            href: `/industries/${n.slug}`,
            accent: n.accent,
          })),
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    summary: 'How we work, and what we will not do.',
    columns: [
      {
        title: 'About',
        links: [
          { label: 'How we work', href: '/about' },
          { label: 'Technologies', href: '/technologies' },
          { label: 'Questions', href: '/faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/legal/privacy' },
          { label: 'Terms', href: '/legal/terms' },
          { label: 'Accessibility', href: '/legal/accessibility' },
          { label: 'Security', href: '/legal/security' },
        ],
      },
    ],
  },
];

export const footerNav = [
  {
    title: 'Run',
    links: operationGroups
      .flatMap((g) => g.operations)
      .map((o) => ({ label: o.title, href: `/operations/${o.slug}` })),
  },
  {
    title: 'Build',
    links: serviceGroups
      .flatMap((g) => g.services)
      .map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: 'Industries',
    links: niches.map((n) => ({ label: n.label, href: `/industries/${n.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'How we work', href: '/about' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Questions', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Accessibility', href: '/legal/accessibility' },
      { label: 'Security', href: '/legal/security' },
    ],
  },
];
