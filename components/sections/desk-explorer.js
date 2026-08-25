'use client';

/**
 * DESK EXPLORER — a rail of desks, and a detail panel that wipes in from the
 * left across the main area.
 *
 * ## What it is for
 *
 * The Run hub is a comparison page: a visitor arrives knowing they have a queue
 * problem and not which desk it is. Eight cards make them read eight summaries
 * in sequence. A rail plus a panel lets them sweep the list and read only the
 * one that matches, which is what they were going to do anyway.
 *
 * ## Hover is an accelerator, never the only path
 *
 * Every rail item is a real link to the full desk page, and every panel is in
 * the DOM whether or not it is showing. Two consequences, both deliberate:
 * crawlers and in-page search find the content without dispatching a pointer
 * event, and a visitor who never hovers loses nothing but speed.
 *
 * A hover-only interface that hides content behind a pointer is an interface
 * that does not exist for touch users, keyboard users, or search engines. This
 * one opens four ways:
 *
 *   pointer   — after a 120ms intent delay, so crossing the rail on the way
 *               somewhere else does not fire it
 *   focus     — immediately, for keyboard navigation
 *   click/tap — toggles, and is the only path on a coarse pointer
 *   default   — the first desk is open on load, so the pattern is legible
 *               before anyone interacts with it
 *
 * ## The intent delay is the whole trick
 *
 * Without it, dragging the pointer from the top of the rail to the bottom fires
 * seven panel changes and reads as a flicker. 120ms is long enough to ignore a
 * pass-through and short enough to feel immediate on a deliberate hover.
 *
 * ## Motion
 *
 * The panel wipes left-to-right: content translates in from its left edge while
 * an accent rule grows down the seam. Under `prefers-reduced-motion` the panel
 * swaps instantly — a reduced-motion user gets the same information, not a
 * slower animation.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/design-system';

const OPEN_DELAY_MS = 120;
const CLOSE_DELAY_MS = 220;

export function DeskExplorer({ groups }) {
  const flat = groups.flatMap((g) => g.operations);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const rootRef = useRef(null);

  /* Hover only drives the panel where a real pointer exists. On touch the
     media query is false and the component becomes tap-to-open. */
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setCanHover(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(openTimer.current);
      clearTimeout(closeTimer.current);
    },
    [],
  );

  const open = useCallback(
    (index, immediate = false) => {
      clearTimeout(closeTimer.current);
      clearTimeout(openTimer.current);
      if (immediate) setActive(index);
      else openTimer.current = setTimeout(() => setActive(index), OPEN_DELAY_MS);
    },
    [],
  );

  /* Leaving the component returns to the first desk rather than emptying the
     panel. An empty panel is a hole in the layout; a resting state is not. */
  const rest = useCallback(() => {
    if (pinned) return;
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setActive(0), CLOSE_DELAY_MS);
  }, [pinned]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPinned(false);
        setActive(0);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const current = flat[active];
  if (!current) return null;

  return (
    <div
      ref={rootRef}
      className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-0"
      onMouseLeave={canHover ? rest : undefined}
    >
      {/* ── The rail ─────────────────────────────────────────────────── */}
      <div
        className="flex flex-col gap-6 lg:border-r lg:border-paper-edge lg:pr-8"
        role="tablist"
        aria-orientation="vertical"
        aria-label="Operations desks"
      >
        {groups.map((group) => (
          <div key={group.name} className="flex flex-col gap-1.5">
            <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
              {group.name}
            </p>
            <ul className="flex flex-col">
              {group.operations.map((operation) => {
                const index = flat.indexOf(operation);
                const isActive = index === active;
                return (
                  <li key={operation.slug} data-accent={operation.accent}>
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="desk-panel"
                      onMouseEnter={canHover ? () => open(index) : undefined}
                      onFocus={() => open(index, true)}
                      onClick={() => {
                        open(index, true);
                        setPinned(true);
                      }}
                      className={cn(
                        'group flex w-full items-center gap-3 py-2.5 text-left transition-colors',
                        isActive ? 'text-prose' : 'text-prose-soft hover:text-prose',
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300',
                          isActive
                            ? 'scale-125 bg-[var(--accent)]'
                            : 'bg-paper-edge group-hover:bg-[var(--accent)]',
                        )}
                      />
                      <span className="text-h4 font-medium leading-tight">{operation.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <p className="hidden text-micro leading-relaxed text-prose-faint lg:block">
          Hover or focus a desk to preview it. Select one to open the full page.
        </p>
      </div>

      {/* ── The panel ────────────────────────────────────────────────── */}
      <div className="relative lg:pl-8">
        {/* The seam. Grows down as the panel wipes in. */}
        <span
          aria-hidden
          key={`seam-${active}`}
          className="absolute left-0 top-0 hidden h-full w-px origin-top animate-[seam_500ms_var(--ease-out-quint)] bg-[var(--accent)] lg:block"
          style={{ '--accent': undefined }}
          data-accent={current.accent}
        />

        {/* Every panel stays mounted. Only the active one is visible, so the
            content is crawlable and findable with in-page search. */}
        {flat.map((operation, index) => (
          <DeskPanel
            key={operation.slug}
            operation={operation}
            active={index === active}
            id={index === active ? 'desk-panel' : undefined}
          />
        ))}
      </div>

      <style>{`
        @keyframes seam { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes wipe {
          from { opacity: 0; transform: translateX(-2rem); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-desk-panel] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

function DeskPanel({ operation, active, id }) {
  const niches = (operation.builtFor?.segments ?? []).slice(0, 4);

  return (
    <div
      id={id}
      role="tabpanel"
      data-accent={operation.accent}
      data-desk-panel
      aria-hidden={!active}
      /* Inactive panels are collapsed to zero height rather than unmounted:
         still in the document for crawlers and in-page search, and inert for
         pointer and keyboard. */
      className={cn(
        'flex-col gap-7',
        active ? 'flex animate-[wipe_420ms_var(--ease-out-quint)]' : 'hidden',
      )}
      /* React 19 renders `inert` only when the value is true. Belt and braces
         alongside `hidden` — display:none already removes it from the tab order
         and the accessibility tree. */
      inert={!active}
    >
      <div className="flex flex-col gap-4">
        <p className="rule-eyebrow">{operation.eyebrow}</p>
        <h3 className="text-h2 font-medium leading-[1.06] [text-wrap:balance]">
          {operation.headline.lead}{' '}
          <span className="accent-phrase text-prose-soft">{operation.headline.accent}</span>
        </h3>
        <p className="measure text-lead leading-relaxed text-prose-soft">{operation.summary}</p>
      </div>

      {/* The mechanism, compressed to its stages. */}
      {operation.mechanism?.nodes?.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
            How it works
          </p>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {operation.mechanism.nodes.map((node, i) => (
              <li key={node} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-prose-faint">
                    →
                  </span>
                )}
                <span className="rounded-full border border-paper-edge px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-prose-soft">
                  {node}
                </span>
              </li>
            ))}
          </ol>
          {operation.mechanism.branchLabel && (
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">
              exit — {operation.mechanism.branchLabel}
            </p>
          )}
        </div>
      )}

      {/* Who it is for. The qualify rung, in miniature. */}
      {niches.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
            Built for
          </p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {niches.map((segment) => (
              <li
                key={segment.niche}
                className="flex items-start gap-2.5 text-micro leading-relaxed text-prose-soft"
              >
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
                {segment.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 border-t border-paper-edge pt-6">
        <Link
          href={`/operations/${operation.slug}`}
          tabIndex={active ? undefined : -1}
          className="group inline-flex items-center gap-2 rounded-full bg-prose px-6 py-3 text-micro font-medium text-paper transition-opacity hover:opacity-90"
        >
          Open the {operation.title} desk
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-prose-faint">
          {operation.faq.length} questions · {operation.process.length} stages
        </span>
      </div>
    </div>
  );
}
