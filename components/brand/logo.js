/**
 * THE UVS MARK — "The Seam".
 *
 * A ring split into two half-rings that step past each other instead of meeting.
 * The two halves are the two halves of the business; the offset is the handoff.
 * The left arc is structure, the right arc is the accent — which is the same
 * rule the rest of the site follows: ink carries the form, accent marks the seam.
 *
 * ## Why it takes no colour props
 *
 * The left arc paints with `currentColor` and the right with `var(--accent)`.
 * Both are already flipped by the register system in `globals.css`, so the mark
 * adapts on its own: light arc on ink, dark arc on paper, and the accent picks
 * up whichever hue the page it sits on is using. Dropping it into a service page
 * tints it to that service without a single prop.
 *
 * ## Optical sizing, and why the cut is automatic
 *
 * The offset IS the mark. Scale it down far enough and the two arc ends close
 * optically, the step disappears, and what is left is a plain ring — the one
 * shape this category is most crowded with.
 *
 * So the mark has two cuts: the display cut, and a `compact` cut with a wider
 * stroke and double the offset. The threshold is 40px, established by rendering
 * it rather than guessed — at 26px in the header the display cut had already
 * lost its step.
 *
 * The cut is chosen from `size` automatically. Leaving that to the caller is
 * exactly the kind of thing that gets forgotten in one place and quietly ships
 * a worse mark; pass `cut` only to override deliberately.
 *
 * The favicon is drawn separately again at its own weights — see `app/icon.svg`.
 */

import Link from 'next/link';
import { company } from '@/content/company';
import { cn } from '@/design-system';

/** Below this, the display cut's offset closes up. Measured, not assumed. */
const COMPACT_BELOW = 40;

/**
 * The mark alone.
 *
 * @param {number} size            Rendered px. Decides the cut.
 * @param {'display'|'compact'} [cut]  Override. Normally leave unset.
 */
export function Mark({ size = 28, cut, className, ...props }) {
  const compact = cut ? cut === 'compact' : size < COMPACT_BELOW;

  /* Two semicircles on one vertical axis, centred 4 (or 8) units apart. The
     offset is the whole idea, so it is the one number that changes per cut. */
  const w = compact ? 7.5 : 6;
  const gap = compact ? 8 : 4;
  const r = 15;
  const top = 24 - r + (compact ? 1 : 0);
  const bottom = 24 + r - (compact ? 1 : 0);

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      role="presentation"
      className={cn('shrink-0 overflow-visible', className)}
      {...props}
    >
      {/* Build — structure, carried by the surrounding text colour. */}
      <path
        d={`M24 ${top - gap / 2} A${r} ${r} 0 0 0 24 ${bottom - gap / 2}`}
        stroke="currentColor"
        strokeWidth={w}
        strokeLinecap="round"
      />
      {/* Run — the accent half, and the one that moves on hover. */}
      <path
        className="uvs-seam"
        d={`M24 ${top + gap / 2} A${r} ${r} 0 0 1 24 ${bottom + gap / 2}`}
        stroke="var(--accent)"
        strokeWidth={w}
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * The lockup — mark plus wordmark. `descriptor` adds the full company name
 * beneath, which is only legible above roughly 32px so it is off by default.
 */
export function Logo({
  size = 28,
  descriptor = false,
  className,
  markClassName,
  ...props
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} {...props}>
      <Mark size={size} className={markClassName} />
      <span className="flex flex-col">
        <span
          className="font-mono font-semibold leading-none tracking-[0.2em] text-prose"
          style={{ fontSize: Math.max(11, size * 0.46) }}
        >
          UVS
        </span>
        {descriptor && (
          <span className="mt-1 font-mono text-[0.5rem] uppercase leading-none tracking-[0.22em] text-prose-faint">
            Universal Virtual Support
          </span>
        )}
      </span>
    </span>
  );
}

/**
 * The clickable brand in the header. Hovering widens the seam by a hair — the
 * one piece of motion the mark gets, and it says the right thing.
 */
export function LogoLink({ size = 28, descriptor = false, className }) {
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className={cn('group shrink-0', className)}
    >
      <Logo
        size={size}
        descriptor={descriptor}
        markClassName="[&_.uvs-seam]:transition-transform [&_.uvs-seam]:duration-300 [&_.uvs-seam]:ease-[var(--ease-out-quint)] motion-safe:group-hover:[&_.uvs-seam]:translate-y-[1.5px]"
      />
    </Link>
  );
}
