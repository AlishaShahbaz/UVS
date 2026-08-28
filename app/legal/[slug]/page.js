/**
 * LEGAL PAGES.
 *
 * Rendered from `content/legal.js`. The draft notice is shown on the page while
 * unresolved `[OPERATOR_INPUT]` tokens remain, because a privacy notice that
 * looks finished but says "[RETENTION_PERIOD]" is worse than one that admits it
 * is a draft.
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { legal, legalBySlug, legalSlugs, legalNotice } from '@/content/legal';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section } from '@/design-system';

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = legalBySlug[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: `/legal/${page.slug}` },
    robots: { index: true, follow: true },
  };
}

const PLACEHOLDER = /\[([A-Z_]+)\]/g;

/** Render bracketed operator inputs visibly rather than letting them read as copy. */
function withPlaceholders(text) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(PLACEHOLDER)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <mark
        key={`${match.index}-${match[1]}`}
        className="rounded-sm bg-[var(--accent)]/15 px-1 font-mono text-[0.85em] text-[var(--accent)]"
      >
        {match[1]}
      </mark>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default async function LegalPage({ params }) {
  const { slug } = await params;
  const page = legalBySlug[slug];
  if (!page) notFound();

  const hasPlaceholders = page.sections.some((s) =>
    PLACEHOLDER.test(`${s.body} ${(s.list ?? []).join(' ')}`),
  );

  return (
    <div data-accent="slate">
      {/* Ink, like every other page on the site. The floating header takes the
          ink register at rest, so a page opening on paper would render the
          navigation invisible — this is a structural requirement, not styling. */}
      <Section register="ink" size="tight" overlap className="border-ink-edge border-b">
        <Container size="narrow">
          <div className="flex flex-col gap-5">
            <Eyebrow>Legal</Eyebrow>
            <Headline level={1} headline={{ lead: page.title }} />
            <Lead className="text-prose-inv-soft">{page.summary}</Lead>
            <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
              Last updated{' '}
              <time dateTime={page.updated}>
                {new Date(page.updated).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </p>
          </div>
        </Container>
      </Section>

      {hasPlaceholders && (
        <Section size="tight" className="py-8">
          <Container size="narrow">
            <p className="rounded-tile bg-paper-sunk text-micro text-prose-soft border border-dashed border-[var(--accent)] p-5 leading-relaxed">
              <span className="text-eyebrow font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
                Draft ·{' '}
              </span>
              {legalNotice} Highlighted tokens are facts the operator still needs to supply.
            </p>
          </Container>
        </Section>
      )}

      <Section size="tight">
        <Container size="narrow">
          <div className="flex flex-col gap-12">
            {page.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-h3 font-medium">{section.heading}</h2>
                <p className="text-prose-soft leading-relaxed">
                  {withPlaceholders(section.body)}
                </p>
                {section.list && (
                  <ul className="flex flex-col gap-2 pt-1">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="text-micro text-prose-soft flex gap-3 leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]"
                        />
                        <span>{withPlaceholders(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* The other legal pages.
             *
             * These five had no in-content links at all — a reader who arrived
             * on Privacy from a search result had nowhere to go except back.
             * Someone reading one of these is usually checking two or three of
             * them, so the sibling list is genuinely the most useful thing to
             * put at the bottom rather than link filler. */}
            <nav
              aria-label="Other legal pages"
              className="border-paper-edge flex flex-col gap-4 border-t pt-8"
            >
              <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                Also here
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legal
                  .filter((other) => other.slug !== page.slug)
                  .map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/legal/${other.slug}`}
                        className="text-micro text-prose-soft decoration-paper-edge underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                      >
                        {other.title}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link
                    href="/about"
                    className="text-micro text-prose-soft decoration-paper-edge underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                  >
                    How we work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-micro text-prose-soft decoration-paper-edge underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <p className="text-micro text-prose-faint">
              Questions about this page? Email{' '}
              <a
                href={`mailto:${company.email}`}
                className="decoration-paper-edge underline underline-offset-4 hover:text-[var(--accent)]"
              >
                {company.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
