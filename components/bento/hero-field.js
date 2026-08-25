'use client';

/**
 * HERO FIELD — the immersive moment's background.
 *
 * The brief was "eye-catching and memorable", and the honest constraint is that
 * eye-catching backgrounds are usually where marketing sites spend their entire
 * performance budget. WebGL was available here — the old repository carried
 * three.js and react-three-fiber — and it is not used, because a hero that
 * costs 600KB of JavaScript to look alive fails the performance budget this
 * site sells to clients. Refusing to ship what we tell clients not to ship is
 * the whole point.
 *
 * So: two composited layers, no canvas, no JavaScript animation loop.
 *
 *   1. A static dot lattice — the instrument grid.
 *   2. One slow CSS-animated radial sweep, compositor-only (transform and
 *      opacity), which reads as a signal moving across the field.
 *
 * The sweep inherits `--accent`, so every service hero is visibly a different
 * page while sharing one component. Under reduced motion the sweep holds still
 * at its resting position rather than disappearing, which keeps the composition
 * intact instead of leaving a bare grid.
 */

export function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* The lattice. */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-prose-inv-faint) 45%, transparent) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 75%)',
        }}
      />

      {/* The sweep. Compositor-only properties, so it does not cost layout. */}
      <div
        className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[drift_28s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 55%)',
        }}
      />

      {/* A second, offset sweep at a different period, so the motion never
          resolves into an obvious loop. */}
      <div
        className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 opacity-60 motion-safe:animate-[drift-alt_41s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 60%)',
        }}
      />

      {/* Grounding gradient, so headline contrast never depends on where the
          sweep happens to be. This is what keeps the hero WCAG-safe. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(-62%, -55%) scale(1); }
          50%      { transform: translate(-38%, -45%) scale(1.12); }
        }
        @keyframes drift-alt {
          0%, 100% { transform: translate(-30%, -40%) scale(1.05); }
          50%      { transform: translate(-70%, -60%) scale(0.92); }
        }
      `}</style>
    </div>
  );
}
