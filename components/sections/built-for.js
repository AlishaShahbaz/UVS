'use client';

/**
 * BUILT FOR — the section this rebuild exists to add.
 *
 * The old site listed twelve industries on one page and nine services on
 * another and never joined them, so a roofing contractor could read the entire
 * voice agents page without being told it was built for someone like them.
 *
 * ## The shape, and why it is this shape
 *
 * Each segment is three sentences doing three different jobs:
 *
 *   TRIGGER  — the situation, described from inside the reader's week. This is
 *              the line that makes someone recognise themselves. It is written
 *              as an observation, never as a pain-point pitch.
 *   BUILT    — what we would actually build for that business. Concrete enough
 *              that it could be wrong, which is what makes it worth reading.
 *   EDGE     — the detail a generalist vendor would get wrong. This is the
 *              paragraph that separates us from a competitor who has never run
 *              the operation, and it is why the section cannot be written by
 *              someone who has only sold the software.
 *
 * ## `notFor` is not modesty
 *
 * Naming who this is not for is the single most credible thing on the page. It
 * is also useful: a reader who does not fit finds out on the second section
 * instead of the ninth, and the readers who do fit trust the rest of the page
 * more because the claims are visibly bounded.
 *
 * ## Interaction
 *
 * Segments expand on selection rather than all being open. Five open segments
 * is a wall of text nobody reads; five closed ones is a list of business types
 * where the reader finds theirs in about two seconds, which is the actual job.
 * The first is open by default so the pattern is legible without a click, and
 * every panel stays in the DOM so the content is crawlable and findable in-page.
 */

import { useState } from 'react';
import Link from 'next/link';
import { Container, Eyebrow, Headline, Lead, Section, cn } from '@/design-system';

export function BuiltFor({ builtFor, intent = 'qualify' }) {
  const [open, setOpen] = useState(0);
  if (!builtFor?.segments?.length) return null;

  return (
    <Section register="sunk" id="built-for">
      <Container>
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Eyebrow>Who it is for</Eyebrow>
            <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-prose-faint">
              Is this built for a business like mine?
            </span>
          </div>
          <Headline level={2} headline={builtFor.headline} className="max-w-4xl" />
          {builtFor.intro && <Lead>{builtFor.intro}</Lead>}
        </header>

        <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge md:mt-16">
          {builtFor.segments.map((segment, i) => {
            const isOpen = open === i;
            return (
              <div
                key={segment.niche}
                data-accent={segment.accent}
                className={cn('bg-paper transition-colors duration-300', isOpen && 'bg-paper')}
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`segment-${segment.niche}`}
                    className="group flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        'h-2 w-2 shrink-0 rounded-full transition-all duration-300',
                        isOpen
                          ? 'scale-125 bg-[var(--accent)]'
                          : 'bg-paper-edge group-hover:bg-[var(--accent)]',
                      )}
                    />
                    <span
                      className={cn(
                        'flex-1 text-h4 font-medium transition-colors duration-300',
                        isOpen ? 'text-prose' : 'text-prose-soft group-hover:text-prose',
                      )}
                    >
                      {segment.label}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        'shrink-0 font-mono text-micro text-prose-faint transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>

                {/* Kept in the DOM at zero height: crawlable, and findable with
                    in-page search, which a conditionally rendered panel is not. */}
                <div
                  id={`segment-${segment.niche}`}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-quint)]',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 px-6 pb-8 pl-12 sm:px-8 sm:pl-14 lg:grid-cols-3">
                      <Field label="What we see">{segment.trigger}</Field>
                      <Field label="What we build">{segment.built}</Field>
                      <Field label="The detail that matters" accent>
                        {segment.edge}
                      </Field>
                      {segment.href && (
                        <div className="lg:col-span-3">
                          <Link
                            href={segment.href}
                            className="inline-flex items-center gap-2 text-micro text-prose transition-colors hover:text-[var(--accent)]"
                          >
                            <span className="underline decoration-paper-edge underline-offset-4">
                              More on {segment.nicheLabel?.toLowerCase()}
                            </span>
                            <span aria-hidden>→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {builtFor.notFor && (
          <div className="mt-10 flex flex-col gap-3 border-l-2 border-paper-edge py-1 pl-6 md:mt-12">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              And who it is not for
            </p>
            <p className="measure text-lead leading-relaxed text-prose-soft">{builtFor.notFor}</p>
          </div>
        )}
      </Container>
    </Section>
  );
}

function Field({ label, children, accent = false }) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={cn(
          'font-mono text-eyebrow uppercase tracking-[0.14em]',
          accent ? 'text-[var(--accent)]' : 'text-prose-faint',
        )}
      >
        {label}
      </p>
      <p className="text-micro leading-relaxed text-prose-soft">{children}</p>
    </div>
  );
}
