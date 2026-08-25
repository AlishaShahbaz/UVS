'use client';

/**
 * MECHANISM — the bento module that shows how a service actually works.
 *
 * One component serves all fifteen mechanisms on the site. That is a deliberate
 * choice over fifteen bespoke diagrams: the shapes genuinely are the same —
 * a sequence of stages with one point where work can leave the main path — and
 * fifteen hand-built variants would drift in styling within a month.
 *
 * ## Why the stages light in sequence rather than all at once
 *
 * A row of lit nodes is a diagram of a system you own. A row where light
 * *moves* is a diagram of work being done. The second is what the page is
 * actually claiming, so it is what the figure should show.
 *
 * ## The branch is the honest part
 *
 * Every mechanism on this site has an exit — a refusal, an escalation, a gate,
 * an exception. Rendering that exit as a first-class part of the diagram rather
 * than a footnote is the visual equivalent of the writing rule: describe the
 * failure path, because that is where the buyer's real question is.
 *
 * ## Motion policy
 *
 * Animation runs only when the figure is on screen, and stops when it is not.
 * Under `prefers-reduced-motion` every stage renders lit — the process,
 * complete — which is a finished picture rather than a frozen one.
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/design-system';

const STAGE_MS = 1150;

export function Mechanism({ nodes = [], branchAt, branchLabel, notes = [], className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  /* The still frame: everything lit. Used for reduced motion and while the
     figure is off screen, so it is never caught mid-animation on first paint. */
  const still = reduced || !inView;

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setActive((i) => (i + 1) % nodes.length), STAGE_MS);
    return () => clearInterval(id);
  }, [still, nodes.length]);

  const branchIndex = branchAt ? nodes.indexOf(branchAt) : -1;

  return (
    <figure ref={ref} className={cn('flex flex-col gap-8', className)}>
      <div className="relative rounded-panel border border-paper-edge bg-paper-sunk/60 p-6 sm:p-10">
        {/* The rail. Horizontal on desktop, vertical on small screens — a
            six-stage horizontal diagram is unreadable at 360px. */}
        <ol className="flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-0">
          {nodes.map((node, i) => {
            const lit = still || i <= active;
            const isBranch = i === branchIndex;
            const isLast = i === nodes.length - 1;

            return (
              <li key={node} className="relative flex flex-1 gap-4 sm:flex-col sm:gap-3">
                {/* Connector + marker */}
                <div className="relative flex flex-col items-center sm:h-6 sm:w-full sm:flex-row">
                  {/* Rail segment behind the dot */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-3 hidden h-px w-full bg-paper-edge sm:block"
                    />
                  )}
                  {!isLast && (
                    <motion.span
                      aria-hidden
                      className="absolute left-1/2 top-3 hidden h-px bg-[var(--accent)] sm:block"
                      initial={false}
                      animate={{ width: lit && (still || i < active) ? '100%' : '0%' }}
                      transition={{ duration: STAGE_MS / 1600, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  {/* Vertical rail for mobile */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-3 top-6 h-full w-px bg-paper-edge sm:hidden"
                    />
                  )}

                  <motion.span
                    aria-hidden
                    className={cn(
                      'relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-500',
                      lit
                        ? 'border-[var(--accent)] bg-[var(--accent)]'
                        : 'border-paper-edge bg-paper',
                    )}
                    animate={
                      !still && i === active
                        ? { scale: [1, 1.18, 1] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className={cn(
                        'font-mono text-[9px] font-semibold leading-none',
                        lit ? 'text-paper' : 'text-prose-faint',
                      )}
                    >
                      {i + 1}
                    </span>
                  </motion.span>
                </div>

                {/* Label */}
                <div className="flex-1 pb-6 sm:pb-0 sm:pr-4">
                  <p
                    className={cn(
                      'font-mono text-eyebrow uppercase tracking-[0.12em] transition-colors duration-500',
                      lit ? 'text-prose' : 'text-prose-faint',
                    )}
                  >
                    {node}
                  </p>

                  {/* The exit path, rendered where it actually happens. */}
                  {isBranch && branchLabel && (
                    <div className="mt-3 flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 block h-4 w-3 shrink-0 rounded-bl-sm border-b border-l border-dashed border-paper-edge"
                      />
                      <span className="inline-flex items-center rounded-full border border-dashed border-paper-edge px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-prose-faint">
                        {branchLabel}
                      </span>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {notes.length > 0 && (
        <figcaption className="grid gap-x-8 gap-y-4 sm:grid-cols-3">
          {notes.map((note, i) => (
            <p key={i} className="text-micro leading-relaxed text-prose-soft">
              <span aria-hidden className="mr-2 font-mono text-eyebrow text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {note}
            </p>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
