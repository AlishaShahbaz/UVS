/**
 * FOOTER — the site index, and the last statement of the model.
 *
 * Deliberately large. On a site where the value is in twenty-one specific pages
 * rather than one general one, the footer is a real navigation surface and a
 * real internal-linking surface. Hiding it behind four columns of "Company"
 * links wastes both.
 */

import Link from 'next/link';
import { footerNav } from '@/content/navigation';
import { company } from '@/content/company';
import { Container } from '@/design-system';
import { Mark } from '@/components/brand/logo';
import { SocialLinks } from '@/components/brand/socials';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-register="ink" className="border-t border-ink-edge">
      <Container size="wide" className="py-16 md:py-24">
        {/* The model, restated. */}
        <div className="grid gap-10 border-b border-paper-edge pb-14 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <Mark size={40} />
            <p className="text-h2 font-medium leading-[1.05] [text-wrap:balance]">
              We build the system.{' '}
              <span className="accent-phrase text-prose-soft">Then we run it.</span>
            </p>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-micro leading-relaxed text-prose-soft measure">
              {company.positioning.body}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-prose px-6 py-3 text-micro font-medium text-paper transition-opacity hover:opacity-90"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* The index. */}
        <nav aria-label="Footer" className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {footerNav.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-micro text-prose-soft transition-colors hover:text-prose"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Contact block. A real postal address is a trust signal for a company
            that publishes no client logos, and it is what local search reads. */}
        <div className="grid gap-8 border-t border-paper-edge pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              Office
            </p>
            <address className="not-italic text-micro leading-relaxed text-prose-soft">
              <a
                href={company.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-prose"
              >
                {company.address.street}
                <br />
                {company.address.locality} {company.address.region} {company.address.postalCode}
                <br />
                {company.address.country}
              </a>
            </address>
          </div>

          {company.emails.map((route) => (
            <div key={route.key} className="flex flex-col gap-2">
              <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                {route.label}
              </p>
              <a
                href={`mailto:${route.address}`}
                className="break-all text-micro text-prose-soft transition-colors hover:text-prose"
              >
                {route.address}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-paper-edge pt-8 text-micro text-prose-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>

          <SocialLinks size={19} />

          <p className="font-mono text-eyebrow uppercase tracking-[0.16em]">
            Built to WCAG 2.2 AA · Performance budgeted
          </p>
        </div>
      </Container>
    </footer>
  );
}
