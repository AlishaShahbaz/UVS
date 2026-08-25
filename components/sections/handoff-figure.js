'use client';

/**
 * THE HANDOFF — the site's signature figure.
 *
 * Everything else here could appear on a competitor's site in some form. This
 * cannot, because it draws the one structural claim we make: two halves of the
 * same business, and a seam between them that nobody selling only one half has
 * a reason to get right.
 *
 * ## The shape
 *
 * Two lanes, offset. Work runs left to right along the system lane; at the seam
 * a share of it drops into the desk lane and continues to the same destination.
 * Both lanes end at one outcome, because the customer never experiences a
 * handoff — they experience an answer.
 *
 * The offset matters. Stacking the lanes flush would read as two parallel
 * services; offsetting the desk lane so it begins where the system lane's exit
 * occurs makes the causal relationship the picture's main statement.
 *
 * ## Why the desk lane is the emphasised one
 *
 * Operations is the primary commercial offer, so the desk lane carries the
 * accent and the solid nodes while the system lane is drawn quieter. A figure
 * that gave both equal visual weight would contradict the ordering the rest of
 * the site now uses.
 *
 * ## Honesty
 *
 * Two of six tokens divert. That ratio is illustrative and the caption says so
 * — an invented deflection percentage would be exactly the unevidenced number
 * the rest of this site refuses to print.
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/design-system';

const SYSTEM = ['Arrives', 'Classified', 'Handled or refused'];
const DESK = ['Escalated with context', 'Judgement applied', 'Resolved'];

/* Fixed rather than random: the figure must be deterministic so server and
   client agree on first paint, and so it reads the same on every visit. */
const TOKENS = [
  { id: 0, diverts: false },
  { id: 1, diverts: true },
  { id: 2, diverts: false },
  { id: 3, diverts: true },
  { id: 4, diverts: false },
  { id: 5, diverts: false },
];

const STEP_MS = 780;
const TOTAL_STEPS = 6;

export function HandoffFigure({ className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduced = useReducedMotion();
  const [tick, setTick] = useState(0);

  const running = inView && !reduced;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTick((t) => t + 1), STEP_MS);
    return () => clearInterval(id);
  }, [running]);

  return (
    <figure ref={ref} className={cn('flex flex-col gap-6', className)}>
      <div className="relative overflow-hidden rounded-panel border border-paper-edge bg-paper-sunk/50 px-5 py-8 sm:px-8 sm:py-10">
        {/* The seam. Vertical, centred, and the most prominent line here. */}
        <div
          aria-hidden
          className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-70"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-3 -translate-x-1/2 bg-paper-sunk px-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--accent)]"
        >
          the seam
        </div>

        <div className="flex flex-col gap-9">
          {/* ── Lane 1: the system. Quieter — it is the supporting half. ── */}
          <Lane
            label="Build — the system"
            dotClass="bg-prose-faint"
            stages={SYSTEM}
            offset={false}
            tick={tick}
            running={running}
            tokens={TOKENS}
            laneIndex={0}
          />

          {/* The crossing. Drawn as a real elbow so the causality is visible. */}
          <div aria-hidden className="relative -my-5 h-10">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-[var(--accent)]" />
            <div className="absolute left-1/2 top-1/2 flex -translate-y-1/2 translate-x-3 items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent)]">
                refusals, escalations, gates
              </span>
            </div>
          </div>

          {/* ── Lane 2: the desk. The emphasised half. ── */}
          <Lane
            label="Run — the desk"
            dotClass="bg-[var(--accent)]"
            stages={DESK}
            offset
            tick={tick}
            running={running}
            tokens={TOKENS}
            laneIndex={1}
            emphasised
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 border-t border-paper-edge pt-5">
          <span aria-hidden className="h-px w-6 bg-[var(--accent)]" />
          <span className="text-center font-mono text-eyebrow uppercase tracking-[0.16em] text-prose">
            One outcome for the customer
          </span>
          <span aria-hidden className="h-px w-6 bg-[var(--accent)]" />
        </div>
      </div>

      <figcaption className="measure text-micro leading-relaxed text-prose-faint">
        Proportions here are illustrative, not a claim. The share of work that crosses the seam
        depends on your volume and your escalation rules — we measure it during a pilot and report
        it weekly rather than quoting an industry figure.
      </figcaption>
    </figure>
  );
}

function Lane({ label, stages, offset, emphasised, tick, running, tokens, laneIndex, dotClass }) {
  return (
    <div className={cn('flex flex-col gap-3', offset && 'sm:pl-[18%]')}>
      <div className="flex items-center gap-2.5">
        <span aria-hidden className={cn('h-1.5 w-1.5 rounded-full', dotClass)} />
        <span
          className={cn(
            'font-mono text-eyebrow uppercase tracking-[0.16em]',
            emphasised ? 'text-prose' : 'text-prose-faint',
          )}
        >
          {label}
        </span>
      </div>

      <ol className="relative flex items-center">
        {/* The rail */}
        <span
          aria-hidden
          className={cn(
            'absolute left-2 right-2 top-2 h-px',
            emphasised ? 'bg-[var(--accent)] opacity-40' : 'bg-paper-edge',
          )}
        />

        {stages.map((stage, i) => (
          <li key={stage} className="relative flex flex-1 flex-col gap-2.5">
            <span
              aria-hidden
              className={cn(
                'relative z-10 block h-4 w-4 rounded-full border-2',
                emphasised
                  ? 'border-[var(--accent)] bg-paper-sunk'
                  : 'border-paper-edge bg-paper-sunk',
              )}
            >
              <span
                className={cn(
                  'absolute inset-0.5 rounded-full',
                  emphasised ? 'bg-[var(--accent)]' : 'bg-prose-faint opacity-40',
                )}
              />
            </span>
            <span
              className={cn(
                'pr-3 text-[10px] uppercase leading-tight tracking-[0.1em]',
                emphasised ? 'font-mono text-prose-soft' : 'font-mono text-prose-faint',
              )}
            >
              {stage}
            </span>
          </li>
        ))}

        {/* Moving work. Each token walks the rail; those that divert leave the
            system lane at the seam and appear on the desk lane instead. */}
        {running &&
          tokens.map((token) => {
            const age = tick - token.id;
            if (age < 0 || age > TOTAL_STEPS) return null;

            const onThisLane = laneIndex === 0 ? age <= 2 || !token.diverts : token.diverts && age > 2;
            if (!onThisLane) return null;

            const pos = laneIndex === 0 ? Math.min(age, 3) : Math.min(age - 2, 3);

            return (
              <motion.span
                key={token.id}
                aria-hidden
                className={cn(
                  'absolute top-0 z-20 h-4 w-4 rounded-full',
                  token.diverts ? 'bg-[var(--accent)]' : 'bg-prose-faint',
                )}
                initial={{ opacity: 0 }}
                animate={{ left: `${pos * 33}%`, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: STEP_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
      </ol>
    </div>
  );
}
