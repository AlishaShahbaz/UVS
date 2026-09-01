/**
 * CONTACT.
 *
 * One decision worth defending: the form asks which half of the business the
 * problem belongs to, and then asks for the problem in prose. It does not ask
 * for budget range, company size or how you heard about us. Those fields exist
 * to qualify the buyer for the seller's benefit, and they cost more enquiries
 * than they save calls.
 */

import Link from 'next/link';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section } from '@/design-system';
import { EnquiryForm } from '@/components/sections/enquiry-form';
import { SocialList } from '@/components/brand/socials';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Start a conversation',
  description:
    'Tell us what is going wrong. Thirty minutes, no deck — we will say which half of the business it belongs to, roughly what it costs, and whether it is worth doing.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${company.url}/contact`,
    name: 'Contact Universal Virtual Support',
    mainEntity: {
      '@type': 'Organization',
      name: company.name,
      email: company.email,
      url: company.url,
      sameAs: company.socials.map((s) => s.href),
    },
  };

  return (
    <div data-accent="iris">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <Eyebrow>Start</Eyebrow>
            <Headline
              level={1}
              headline={{ lead: 'Tell us the problem,', accent: 'not the specification.' }}
              className="max-w-[18ch]"
            />
            <Lead className="text-prose-inv-soft">{company.contact.body}</Lead>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <EnquiryForm />

            <aside className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Response time
                </p>
                <p className="text-h4 font-medium">{company.contact.responseWindow}</p>
                <p className="text-micro text-prose-soft leading-relaxed">
                  Every enquiry is read by a person. If we are the wrong fit we will say so
                  and, where we can, point you at who is not.
                </p>
              </div>

              <div className="border-paper-edge flex flex-col gap-5 border-t pt-8">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Prefer email
                </p>
                {company.emails.map((route) => (
                  <div key={route.key} className="flex flex-col gap-1">
                    <a
                      href={`mailto:${route.address}`}
                      className="text-micro text-prose decoration-paper-edge w-fit font-medium break-all underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                    >
                      {route.address}
                    </a>
                    <span className="text-micro text-prose-faint">
                      {route.label} — {route.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-paper-edge flex flex-col gap-4 border-t pt-8">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Elsewhere
                </p>
                <SocialList />
              </div>

              <div className="border-paper-edge flex flex-col gap-4 border-t pt-8">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  What helps most
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'A week of real numbers — calls, chats, tickets or documents, by hour.',
                    'What happens to an enquiry today, and how long it takes.',
                    'What you have already tried, including what did not work.',
                    'The deadline, if there is a real one.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-micro text-prose-soft flex gap-3 leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Naming the thing you want speeds the reply up, and this page
                  previously had no in-content links at all — a visitor who
                  landed here from an ad could not reach a single page that
                  explained what they were enquiring about. */}
              <div className="border-paper-edge flex flex-col gap-4 border-t pt-8">
                <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                  Not sure which one you need?
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    {
                      href: '/operations',
                      label: 'All staffed desks',
                      note: 'chat, voice, email, orders, compliance',
                    },
                    {
                      href: '/operations/answering-service',
                      label: 'Answering service',
                      note: 'every call answered',
                    },
                    {
                      href: '/operations/virtual-assistant',
                      label: 'Virtual assistant',
                      note: 'admin, inbox, data',
                    },
                    {
                      href: '/services',
                      label: 'Systems we build',
                      note: 'AI, software, campaigns',
                    },
                    {
                      href: '/industries',
                      label: 'Find your business type',
                      note: '13 of them, named',
                    },
                    {
                      href: '/faq',
                      label: 'Questions',
                      note: 'including the awkward ones',
                    },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group text-micro text-prose-soft hover:text-prose flex items-baseline gap-2 transition-colors"
                      >
                        <span className="decoration-paper-edge underline underline-offset-4 group-hover:decoration-[var(--accent)]">
                          {item.label}
                        </span>
                        <span className="text-prose-faint">{item.note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
