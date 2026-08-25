/**
 * SOCIAL LINKS.
 *
 * Drawn as stroke glyphs at the same weight as everything else in the system
 * rather than dropped in as the platforms' own filled badges. A row of official
 * brand colours in a footer built from two neutrals and one accent is the
 * fastest way to make a considered page look assembled from parts.
 *
 * They still read instantly — these shapes are among the most recognised marks
 * in existence, and a monochrome outline of each is unambiguous.
 *
 * Every link carries `rel="me"`, which is the machine-readable half of the same
 * claim the `sameAs` JSON-LD makes: this site and that profile are one entity.
 */

import { company } from '@/content/company';
import { cn } from '@/design-system';

const ICONS = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10.5v6.5" />
      <path d="M11 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
      <path d="M7 7.2v.1" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.1" />
    </>
  ),
  facebook: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M15.2 8.2h-1.6a1.9 1.9 0 0 0-1.9 1.9V21" />
      <path d="M9.4 13.2h5" />
    </>
  ),
};

export function SocialLinks({ size = 20, showLabels = false, className }) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-5 gap-y-3', className)}>
      {company.socials.map((social) => (
        <li key={social.key}>
          <a
            href={social.href}
            target="_blank"
            rel="me noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-prose-soft transition-colors hover:text-[var(--accent)]"
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              {ICONS[social.key]}
            </svg>
            {showLabels ? (
              <span className="text-micro">{social.label}</span>
            ) : (
              <span className="sr-only">{social.label}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** The fuller treatment for the contact page, where the handle is useful. */
export function SocialList({ className }) {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {company.socials.map((social) => (
        <li key={social.key}>
          <a
            href={social.href}
            target="_blank"
            rel="me noopener noreferrer"
            className="group inline-flex items-center gap-3 text-prose-soft transition-colors hover:text-prose"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0 text-[var(--accent)]"
            >
              {ICONS[social.key]}
            </svg>
            <span className="text-micro">
              {social.label}
              <span className="ml-2 text-prose-faint">{social.handle}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
