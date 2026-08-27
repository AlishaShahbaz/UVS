/**
 * THE ORIGIN THIS BUILD PUBLISHES AS.
 *
 * One resolver, imported by `app/sitemap.js`, `app/robots.js` and the build
 * gate. It lives in plain JavaScript with relative imports so a Node script can
 * load it without the Next alias resolver.
 *
 * ## Why this file exists
 *
 * The logic was duplicated in two places and both used `??`, which only falls
 * through on null/undefined. A hosting environment that declared
 * `NEXT_PUBLIC_SITE_URL` and left the value blank produced an empty string —
 * not nullish, so it won.
 *
 * The result reached production: every sitemap entry became a relative path,
 * and `robots.js` compared "" against the canonical origin, failed, and served
 * `Disallow: /` on the live domain. A complete deindex, with a clean build log
 * and nothing on the page to show for it.
 *
 * Two lessons are encoded here. Empty strings are unset. And a value this
 * consequential gets validated, not just defaulted — `resolveOrigin` cannot
 * return an empty or relative value, and `verify:content` asserts it.
 */

import { company } from '../content/company.js';

/** An absolute http(s) origin with no path and no trailing slash. */
const ORIGIN = /^https?:\/\/[^/\s]+$/i;

function clean(value) {
  return typeof value === 'string' ? value.trim().replace(/\/+$/, '') : '';
}

export function resolveOrigin(env = process.env) {
  const candidates = [
    env.NEXT_PUBLIC_SITE_URL,
    env.VERCEL_ENV === 'production' ? company.url : null,
    env.VERCEL_URL ? `https://${env.VERCEL_URL}` : null,
    company.url,
  ];

  for (const candidate of candidates) {
    const value = clean(candidate);
    if (ORIGIN.test(value)) return value;
  }

  /* Unreachable while company.url is a valid origin, which the gate checks. */
  return clean(company.url);
}

/**
 * Why a given environment resolved the way it did — used by the gate so its
 * message names the real cause instead of re-deriving it and getting it wrong.
 */
export function explainOrigin(env = process.env) {
  const raw = env.NEXT_PUBLIC_SITE_URL;
  const resolved = resolveOrigin(env);
  const canonical = clean(company.url);

  return {
    resolved,
    canonical,
    isCanonical: resolved.toLowerCase() === canonical.toLowerCase(),
    envDeclared: typeof raw === 'string',
    envBlank: typeof raw === 'string' && raw.trim() === '',
    envMalformed: typeof raw === 'string' && raw.trim() !== '' && !ORIGIN.test(clean(raw)),
  };
}
