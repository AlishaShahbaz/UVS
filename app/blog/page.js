/**
 * BLOG INDEX.
 *
 * One post today. The layout is built for a list rather than for a single
 * entry, because a guides section that reads as "we wrote one thing once" is
 * worse than not having one.
 *
 * The index carries its own search vocabulary — the head terms the guides
 * exist to reach — so it is not a bare list of links to a crawler.
 */

import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/content/blog';
import { company } from '@/content/company';
import { breadcrumbSchema, ORG_ID } from '@/lib/schema';
import { Button, Container, Eyebrow, Headline, Lead, Section } from '@/design-system';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Guides to outsourcing operations',
  description:
    'Practical guides to outsourcing operations — back office, customer support and compliance desks. What moves well, what breaks, and the questions that separate providers.',
  alternates: { canonical: '/blog' },
};

const longDate = (iso) =>
  new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndexPage() {
  const ordered = [...posts].sort((a, b) => b.published.localeCompare(a.published));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${company.url}/blog#blog`,
        url: `${company.url}/blog`,
        name: 'Guides to outsourcing operations',
        description: metadata.description,
        publisher: { '@id': ORG_ID },
        blogPost: ordered.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${company.url}/blog/${p.slug}`,
          datePublished: p.published,
          dateModified: p.updated,
          description: p.metaDescription,
        })),
      },
      breadcrumbSchema([{ name: 'Blog', path: '/blog' }]),
    ],
  };

  return (
    <div data-accent="slate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <Eyebrow>Blog</Eyebrow>
              <span className="text-eyebrow text-prose-inv-faint font-mono tracking-[0.14em] uppercase">
                How does this actually work?
              </span>
            </div>
            <Headline
              level={1}
              headline={{ lead: 'What we know about', accent: 'running other people’s queues.' }}
              className="max-w-[18ch]"
            />
            <Lead className="text-prose-inv-soft">
              Guides to outsourcing operations — back office, customer support and compliance
              desks. Written from running them rather than from a category overview, which means
              they name the things that break as well as the things that work.
            </Lead>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className="flex flex-col">
            {ordered.map((post) => (
              <li key={post.slug} data-accent={post.accent}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group border-paper-edge grid gap-5 border-t py-10 last:border-b md:grid-cols-[9rem_1fr] md:gap-8 lg:grid-cols-[9rem_1fr_20rem] lg:gap-10"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-eyebrow font-mono tracking-[0.16em] text-[var(--accent)] uppercase">
                      {post.eyebrow}
                    </span>
                    <span className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
                      {longDate(post.published)}
                    </span>
                    <span className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
                      {post.readingMinutes} min
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="text-h3 font-medium [text-wrap:balance] transition-colors group-hover:text-[var(--accent)]">
                      {post.title}
                    </h2>
                    <p className="measure text-micro text-prose-soft leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                      Read the post{' '}
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>

                  <Image
                    src={post.image.src}
                    width={post.image.width}
                    height={post.image.height}
                    alt={post.image.alt}
                    className="rounded-panel border-paper-edge order-first w-full border lg:order-none"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* A one-post index would otherwise be a dead end for both readers
              and crawlers. These are the pages the guides argue for. */}
          <div className="border-paper-edge mt-14 border-t pt-10">
            <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
              While we write more
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                ['/operations', 'All staffed desks'],
                ['/operations/data-entry', 'Data entry outsourcing'],
                ['/operations/kyc-onboarding', 'KYC outsourcing'],
                ['/industries', 'Business types we build for'],
                ['/faq', 'The awkward questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-micro text-prose-soft hover:text-prose decoration-paper-edge underline underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section register="ink">
        <Container>
          <div className="flex flex-col gap-8">
            <Eyebrow>Start</Eyebrow>
            <Headline
              level={2}
              headline={{ lead: 'Reading is cheaper than a pilot,', accent: 'but slower.' }}
              className="max-w-3xl"
            />
            <Lead className="text-prose-inv-soft">{company.contact.body}</Lead>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
              <Button href="/operations" variant="outline">
                All staffed desks
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
