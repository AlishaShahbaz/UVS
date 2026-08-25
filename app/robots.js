/**
 * ROBOTS.
 *
 * AI crawlers are allowed deliberately. A site whose content strategy is built
 * around being cited by answer engines cannot coherently block the crawlers
 * that produce those citations.
 *
 * ## How "is this production" is decided, and why it is decided this way
 *
 * An earlier version of this file keyed off `VERCEL_ENV === 'production'`. That
 * is a live footgun: on any host that does not set that variable — a self-hosted
 * Node server, Netlify, Cloudflare, a container, or Vercel with the variable
 * absent — the production site would serve `Disallow: /` and quietly deindex
 * itself. Blocking every crawler on the real domain is the single most damaging
 * thing this file can do, so it must not depend on one vendor's variable.
 *
 * The rule now is origin-based and host-agnostic: **the resolved base URL is
 * compared against the canonical origin in `content/company.js`.** If the site
 * is being served from its own canonical domain, it is production and it is
 * indexable. A preview or demo deployment resolves to a different origin — a
 * `*.vercel.app` URL or whatever `NEXT_PUBLIC_SITE_URL` is set to there — and
 * is excluded.
 *
 * That also removes the need for the previous site's workaround of pointing a
 * demo deployment's canonical tags at the production domain, which told
 * crawlers the content they had just read lived somewhere else.
 *
 * Two explicit overrides exist for the cases the rule cannot know about:
 *   ROBOTS_ALLOW=1     force indexable (e.g. a staging domain you do want indexed)
 *   ROBOTS_DISALLOW=1  force blocked (takes precedence over everything)
 */

import { BASE_URL } from './sitemap';
import { company } from '@/content/company';

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
];

const normalise = (url) => (url ?? '').trim().replace(/\/+$/, '').toLowerCase();

export function isIndexable() {
  if (process.env.ROBOTS_DISALLOW === '1') return false;
  if (process.env.ROBOTS_ALLOW === '1') return true;
  return normalise(BASE_URL) === normalise(company.url);
}

export default function robots() {
  if (!isIndexable()) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
      /* Declines to crawl at a rate that has caused problems for other sites. */
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
