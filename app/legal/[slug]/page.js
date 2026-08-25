/**
 * LEGAL PAGES.
 *
 * Rendered from `content/legal.js`. The draft notice is shown on the page while
 * unresolved `[OPERATOR_INPUT]` tokens remain, because a privacy notice that
 * looks finished but says "[RETENTION_PERIOD]" is worse than one that admits it
 * is a draft.
 */

import { notFound } from 'next/navigation';
import { legalBySlug, legalSlugs, legalNotice } from '@/content/legal';
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
      <Section register="ink" size="tight" overlap className="border-b border-ink-edge">
        <Container size="narrow">
          <div className="flex flex-col gap-5">
            <Eyebrow>Legal</Eyebrow>
            <Headline level={1} headline={{ lead: page.title }} />
            <Lead className="text-prose-inv-soft">{page.summary}</Lead>
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
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
            <p className="rounded-tile border border-dashed border-[var(--accent)] bg-paper-sunk p-5 text-micro leading-relaxed text-prose-soft">
              <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
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
                <p className="leading-relaxed text-prose-soft">{withPlaceholders(section.body)}</p>
                {section.list && (
                  <ul className="flex flex-col gap-2 pt-1">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-micro leading-relaxed text-prose-soft">
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                        <span>{withPlaceholders(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="border-t border-paper-edge pt-8 text-micro text-prose-faint">
              Questions about this page? Email{' '}
              <a
                href={`mailto:${company.email}`}
                className="underline decoration-paper-edge underline-offset-4 hover:text-[var(--accent)]"
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
