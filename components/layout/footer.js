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
import { Logo } from '@/components/brand/logo';
import { SocialLinks } from '@/components/brand/socials';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-register="ink" className="border-t border-ink-edge">
      <Container size="wide" className="pt-16 pb-10 md:pt-24 md:pb-12">
        {/* The model, restated. */}
        <div className="grid gap-10 border-b border-paper-edge pb-14 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="flex flex-col gap-6">
            {/* Full lockup here — 40px is the size at which the descriptor is
                legible, so the footer is where the company name is spelled out. */}
            <Logo size={40} descriptor />
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

        {/* Contact routes, and the social links alongside them.

            No postal address, here or anywhere else on the site — it was pulled
            from the footer, then the contact page, then the Organization JSON-LD
            and llms.txt. See the note in content/company.js before re-adding it.

            The socials sit in this row rather than in the bar below, which left
            the bar carrying nothing but the copyright line.

            Flex with space-around rather than the four-column grid used above:
            the grid put both emails in columns one and two and pushed the
            socials to the far right edge, leaving a void across the middle.
            Three blocks of unequal width read better evenly distributed than
            snapped to a column track. */}
        <div className="flex flex-col gap-8 border-t border-paper-edge pt-10 lg:flex-row lg:items-start lg:justify-around lg:gap-10">
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

          <div className="flex flex-col gap-2">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              Elsewhere
            </p>
            <SocialLinks size={19} />
          </div>
        </div>

        {/* Copyright alone, centred — the only thing left in the bottom bar. */}
        <div className="mt-10 border-t border-paper-edge pt-8 text-micro text-prose-faint">
          <p className="text-center">
            © {year} {company.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
