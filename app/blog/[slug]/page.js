/**
 * BLOG POST.
 *
 * Same three registers as the rest of the site — ink hero, editorial body,
 * ink close — so a guide does not read as a bolt-on to a different website.
 *
 * The FAQ carries FAQPage schema. Google retired FAQ rich results in May 2026,
 * so this earns no blue-link decoration; it is here because answer engines
 * still read it, and a question-and-answer block is the format they quote from.
 */

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { postBySlug, postSlugs } from '@/content/blog';
import { operationBySlug } from '@/content/operations';
import { serviceBySlug } from '@/content/services/index.js';
import { company } from '@/content/company';
import { breadcrumbSchema, faqSchema, ORG_ID } from '@/lib/schema';
import { Button, Container, Eyebrow, Headline, Lead, Section } from '@/design-system';
import { HeroField } from '@/components/bento/hero-field';
import { RichText, renderInline } from '@/components/blog/rich-text';

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = postBySlug[params.slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
  };
}

const longDate = (iso) =>
  new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPostPage({ params }) {
  const post = postBySlug[params.slug];
  if (!post) notFound();

  const desks = (post.related?.operations ?? []).map((s) => operationBySlug[s]).filter(Boolean);
  const builds = (post.related?.services ?? []).map((s) => serviceBySlug[s]).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${company.url}/blog/${post.slug}#post`,
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.published,
        dateModified: post.updated,
        url: `${company.url}/blog/${post.slug}`,
        mainEntityOfPage: `${company.url}/blog/${post.slug}`,
        publisher: { '@id': ORG_ID },
        author: { '@id': ORG_ID },
        image: `${company.url}${post.image.src}`,
        keywords: post.keywords.join(', '),
        articleSection: 'Operations',
        inLanguage: 'en',
      },
      breadcrumbSchema([
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      faqSchema(post.faq.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  };

  return (
    <div data-accent={post.accent}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section register="ink" size="loose" overlap className="border-ink-edge border-b">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <Eyebrow>{post.eyebrow}</Eyebrow>
              <span className="text-eyebrow text-prose-inv-faint font-mono tracking-[0.14em] uppercase">
                {post.question}
              </span>
            </div>
            <Headline level={1} headline={post.headline} className="max-w-[22ch]" />
            <Lead className="text-prose-inv-soft">{post.excerpt}</Lead>
            <p className="text-eyebrow text-prose-inv-faint font-mono tracking-[0.16em] uppercase">
              {longDate(post.published)} · {post.readingMinutes} min read
            </p>
          </div>
        </Container>
      </Section>

      <Section size="tight">
        <Container>
          <figure className="flex flex-col gap-3">
            <Image
              src={post.image.src}
              width={post.image.width}
              height={post.image.height}
              alt={post.image.alt}
              priority
              className="rounded-panel border-paper-edge w-full border"
            />
            <figcaption className="text-eyebrow text-prose-faint font-mono tracking-[0.14em] uppercase">
              {post.eyebrow} — {post.title}
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* Body. One column at reading measure — a guide is read, not scanned. */}
      <Section size="tight">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-20">
            <article className="flex flex-col gap-14">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="flex flex-col gap-5">
                  <h2 className="text-h3 font-medium [text-wrap:balance]">{section.heading}</h2>
                  {section.body.map((para, i) => (
                    <RichText key={i} className="measure text-prose-soft leading-relaxed">
                      {para}
                    </RichText>
                  ))}
                  {section.list && (
                    <ul className="flex flex-col">
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className="border-paper-edge flex items-start gap-4 border-t py-4 last:border-b"
                        >
                          <span
                            aria-hidden
                            className="mt-3 h-px w-4 shrink-0 bg-[var(--accent)]"
                          />
                          <span className="text-micro text-prose-soft leading-relaxed">
                            {renderInline(item)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>

            {/* Contents. Sticky on wide screens, plain list on narrow. */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-eyebrow text-prose-faint font-mono tracking-[0.16em] uppercase">
                On this page
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-micro text-prose-soft hover:text-prose decoration-paper-edge underline underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      {/* The desks this guide describes. Every item is an in-content internal
          link with the desk's own name as the anchor. */}
      {(desks.length > 0 || builds.length > 0) && (
        <Section register="sunk" className="border-paper-edge border-t">
          <Container>
            <header className="flex flex-col gap-5">
              <Eyebrow>The desks behind this</Eyebrow>
              <Headline
                level={2}
                headline={{ lead: 'What this looks like', accent: 'when we run it.' }}
                className="max-w-3xl"
              />
            </header>
            <ul className="rounded-panel border-paper-edge bg-paper-edge mt-12 grid gap-px overflow-hidden border md:grid-cols-2">
              {[
                ...desks.map((d) => ({ ...d, href: `/operations/${d.slug}` })),
                ...builds.map((b) => ({ ...b, href: `/services/${b.slug}` })),
              ].map((item) => (
                <li key={item.href} data-accent={item.accent} className="bg-paper">
                  <Link
                    href={item.href}
                    className="group hover:bg-paper-sunk flex h-full flex-col gap-2 p-7 transition-colors"
                  >
                    <span className="text-eyebrow font-mono tracking-[0.14em] text-[var(--accent)] uppercase">
                      {item.eyebrow}
                    </span>
                    <span className="text-h4 font-medium">{item.title}</span>
                    <span className="text-micro text-prose-soft leading-relaxed">
                      {item.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <header className="flex flex-col gap-5">
            <Eyebrow>Questions</Eyebrow>
            <Headline
              level={2}
              headline={{ lead: 'The ones people', accent: 'actually search for.' }}
              className="max-w-3xl"
            />
          </header>
          <dl className="mt-12 flex flex-col">
            {post.faq.map((item) => (
              <div
                key={item.q}
                className="border-paper-edge grid gap-4 border-t py-8 last:border-b md:grid-cols-[1fr_1.4fr] md:gap-10"
              >
                <dt className="text-h4 font-medium [text-wrap:balance]">{item.q}</dt>
                <dd className="measure text-micro text-prose-soft leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section register="ink">
        <Container>
          <div className="flex flex-col gap-8">
            <Eyebrow>Start</Eyebrow>
            <Headline
              level={2}
              headline={{ lead: 'Bring a week of real numbers', accent: 'and we will be specific.' }}
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
              <Button href="/blog" variant="outline">
                More guides
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
