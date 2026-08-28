/**
 * DUE DILIGENCE — the vendor-assessment block on a regulated niche page.
 *
 * Rendered from `niche.dueDiligence`, so a niche without one simply has no
 * block rather than an empty heading.
 *
 * ## Why the "what we do not have" panel is styled as the strongest element
 *
 * It is the strongest element. An operations lead at a supervised firm spends
 * their week reading vendor answers that are all yes. The vendor who writes a
 * plain no — and then says exactly what they will show instead — is the one
 * that gets remembered and the one whose other answers become believable.
 *
 * So it is not buried at the bottom in small grey text. It sits in its own
 * panel with the accent on it.
 *
 * ## Placeholders render visibly
 *
 * Unresolved `[TOKEN]` markers are highlighted rather than silently printed,
 * using the same treatment as the legal pages. A production build fails while
 * any remain, so the visible marker is a development aid rather than the last
 * line of defence.
 */

import Link from 'next/link';
import { Container, Eyebrow, Headline, Lead, Section } from '@/design-system';
import { RegimeStrip } from '@/components/sections/compliance-posture';

const PLACEHOLDER = /\[([A-Z_]+)\]/g;

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

export function DueDiligence({ dueDiligence }) {
  if (!dueDiligence) return null;

  return (
    <Section id="due-diligence" className="border-paper-edge border-t">
      <Container>
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Eyebrow>Vendor due diligence</Eyebrow>
            <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-prose-faint">
              Can I put them in my outsourcing register?
            </span>
          </div>
          <Headline level={2} headline={dueDiligence.headline} className="max-w-4xl" />
          <Lead>{dueDiligence.intro}</Lead>
        </header>

        <div className="mt-12 flex flex-col gap-8 md:mt-16">
          {/* The same regime rows the homepage carries. Repeated here rather
              than linked because this is the page where the reader is holding
              a questionnaire, and sending them elsewhere loses them. */}
          <RegimeStrip />

          <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge md:grid-cols-2">
            {dueDiligence.points.map((point, i) => (
              <li key={point.title} className="flex flex-col gap-3 bg-paper p-7">
                <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h4 font-medium">{point.title}</h3>
                <p className="text-micro leading-relaxed text-prose-soft">
                  {withPlaceholders(point.body)}
                </p>
              </li>
            ))}
          </ul>

          {/* The honest panel. Deliberately the loudest thing in the section. */}
          {dueDiligence.notYet && (
            <div className="flex flex-col gap-3 rounded-panel border-2 border-[var(--accent)] bg-paper p-7">
              <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                {dueDiligence.notYet.title}
              </p>
              <p className="measure text-lead leading-relaxed text-prose">
                {withPlaceholders(dueDiligence.notYet.body)}
              </p>
            </div>
          )}

          {dueDiligence.note && (
            <p className="measure border-l-2 border-paper-edge py-1 pl-6 text-micro leading-relaxed text-prose-soft">
              {withPlaceholders(dueDiligence.note)}
            </p>
          )}

          <p className="text-micro leading-relaxed text-prose-faint">
            The underlying documents live with the engagement, not on this page. Our{' '}
            <Link
              href="/legal/security"
              className="text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              security practices
            </Link>{' '}
            and{' '}
            <Link
              href="/legal/privacy"
              className="text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              privacy notice
            </Link>{' '}
            set out the standing position; the DPA, sub-processor list and transfer documentation are
            shared during due diligence.
          </p>
        </div>
      </Container>
    </Section>
  );
}
