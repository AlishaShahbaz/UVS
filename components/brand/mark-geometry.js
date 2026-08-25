/**
 * MARK GEOMETRY — the two arcs of the UVS mark, as pure numbers.
 *
 * Separated from `logo.js` for one practical reason: the build gate has to
 * assert the invariant below, and a Node script cannot import a file containing
 * JSX. Keeping the maths in plain JavaScript means the thing that can silently
 * break is also the thing that can be tested.
 *
 * ## The invariant
 *
 * Each arc is a true semicircle, so the distance between its endpoints must
 * equal the diameter. The offset that makes the mark is created by moving the
 * two circles' **centres** apart on the vertical axis — never by moving the arc
 * endpoints.
 *
 * This is written down because getting it wrong is invisible in review and
 * obvious on screen. An earlier version widened the offset by shifting the
 * endpoints; the chord stopped matching the diameter, the arcs became shallow
 * segments instead of semicircles, and the two halves merged into a blob that
 * shipped to the header. `verify:content` now asserts it on every build.
 */

/**
 * Two cuts. They must read as the same mark — the compact cut exists to hold
 * the offset open at small sizes, not to be a different drawing.
 */
export const CUTS = {
  display: { r: 15, w: 6, gap: 4 },
  compact: { r: 14, w: 7, gap: 6 },
};

/** Below this size the compact cut is used. */
export const COMPACT_BELOW = 20;

export function arcGeometry(cut = 'display') {
  const { r, w, gap } = CUTS[cut] ?? CUTS.display;
  const cy = 24;
  const leftCy = cy - gap / 2;
  const rightCy = cy + gap / 2;

  return {
    r,
    w,
    gap,
    /* Build — the structural half, painted in the surrounding text colour. */
    left: {
      from: leftCy - r,
      to: leftCy + r,
      d: `M24 ${leftCy - r} A${r} ${r} 0 0 0 24 ${leftCy + r}`,
    },
    /* Run — the accent half, and the one that moves on hover. */
    right: {
      from: rightCy - r,
      to: rightCy + r,
      d: `M24 ${rightCy - r} A${r} ${r} 0 0 1 24 ${rightCy + r}`,
    },
  };
}

export function cutForSize(size) {
  return size < COMPACT_BELOW ? 'compact' : 'display';
}
