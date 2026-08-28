/**
 * COMPLIANCE POSTURE — regime strip, rendered from `content/compliance.js`.
 *
 * Two exports because the same data appears in two places at two weights:
 *
 *   `RegimeStrip`       the rows on their own, for embedding above the
 *                       due-diligence detail on the fintech page.
 *   `CompliancePosture` the full section, for the homepage.
 *
 * ## Why it is laid out as a register rather than as badges
 *
 * The row is doing a badge's job — a visitor scanning the homepage should read
 * "GDPR ✓, AML ✓, crypto ✓" without stopping. But a badge carries an implicit
 * claim to hold a status, and the whole point of this block is that the status
 * belongs to the client. A three-column register row — code, whose scope,
 * what we actually do — reads at a glance and still fits a sentence of truth
 * next to each code.
 *
 * The disclaimer is not small print. It sits in the same type size as the rows
 * because it is the sentence that makes the rows accurate.
 */

import Link from 'next/link';
import { Container, Eyebrow, Headline, Lead, Section } from '@/design-system';
import { compliancePosture } from '@/content/compliance';

export function RegimeStrip({ regimes = compliancePosture.regimes }) {
  return (
    <ul className="flex flex-col">
      {regimes.map((regime) => (
        <li
          key={regime.code}
          className="group border-paper-edge grid gap-2 border-t py-6 last:border-b md:grid-cols-[13rem_1fr] md:gap-10"
        >
          <div className="flex flex-col gap-1">
            <span className="text-h4 font-mono font-medium tracking-tight text-[var(--accent)]">
              {regime.code}
            </span>
            <span className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
              {regime.scope}
            </span>
          </div>
          <p className="measure text-micro text-prose-soft leading-relaxed">{regime.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function CompliancePosture() {
  return (
    <Section>
      <Container>
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Eyebrow>{compliancePosture.eyebrow}</Eyebrow>
            <span className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
              {compliancePosture.question}
            </span>
          </div>
          <Headline level={2} headline={compliancePosture.headline} className="max-w-4xl" />
          <Lead>{compliancePosture.lead}</Lead>
        </header>

        <div className="mt-12 flex flex-col gap-8 md:mt-16">
          <RegimeStrip />

          <p className="measure text-micro text-prose-soft border-l-2 border-[var(--accent)] py-1 pl-6 leading-relaxed">
            {compliancePosture.disclaimer}
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {compliancePosture.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-micro text-prose-soft hover:text-prose decoration-paper-edge underline underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
