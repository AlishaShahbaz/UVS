/**
 * CONTACT.
 *
 * One decision worth defending: the form asks which half of the business the
 * problem belongs to, and then asks for the problem in prose. It does not ask
 * for budget range, company size or how you heard about us. Those fields exist
 * to qualify the buyer for the seller's benefit, and they cost more enquiries
 * than they save calls.
 */

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
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
    },
  };

  return (
    <div data-accent="iris">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
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
                <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                  Response time
                </p>
                <p className="text-h4 font-medium">{company.contact.responseWindow}</p>
                <p className="text-micro leading-relaxed text-prose-soft">
                  Every enquiry is read by a person. If we are the wrong fit we will say so and,
                  where we can, point you at who is not.
                </p>
              </div>

              <div className="flex flex-col gap-5 border-t border-paper-edge pt-8">
                <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                  Prefer email
                </p>
                {company.emails.map((route) => (
                  <div key={route.key} className="flex flex-col gap-1">
                    <a
                      href={`mailto:${route.address}`}
                      className="w-fit break-all text-micro font-medium text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                    >
                      {route.address}
                    </a>
                    <span className="text-micro text-prose-faint">
                      {route.label} — {route.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-paper-edge pt-8">
                <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                  Office
                </p>
                <address className="not-italic leading-relaxed text-prose-soft">
                  {company.address.street}
                  <br />
                  {company.address.locality} {company.address.region} {company.address.postalCode}
                  <br />
                  {company.address.country}
                </address>
                <a
                  href={company.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-micro text-prose underline decoration-paper-edge underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="flex flex-col gap-4 border-t border-paper-edge pt-8">
                <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                  Elsewhere
                </p>
                <SocialList />
              </div>

              <div className="flex flex-col gap-4 border-t border-paper-edge pt-8">
                <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                  What helps most
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'A week of real numbers — calls, chats, tickets or documents, by hour.',
                    'What happens to an enquiry today, and how long it takes.',
                    'What you have already tried, including what did not work.',
                    'The deadline, if there is a real one.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-micro leading-relaxed text-prose-soft">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                      {item}
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
