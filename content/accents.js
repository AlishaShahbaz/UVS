/**
 * ACCENT PALETTE — the JavaScript side of it.
 *
 * The CSS custom properties in `app/globals.css` remain what the site renders
 * from; this file exists because Open Graph images are generated in JavaScript
 * and cannot read a stylesheet.
 *
 * Two sources of the same values is exactly the kind of drift this codebase
 * avoids elsewhere, so `verify:contrast` cross-checks the two and fails the
 * build if they disagree. Change a hue here and the gate will tell you the
 * stylesheet still has the old one.
 *
 * `accent` is tuned for the paper ground, `lift` for ink. Both are verified at
 * 4.5:1 against the ground they are painted on.
 */

export const ACCENTS = {
  iris: { accent: '#4b47c4', lift: '#a5a2f5' },
  teal: { accent: '#0a7768', lift: '#4fd7c0' },
  ember: { accent: '#b03d0b', lift: '#ff9457' },
  azure: { accent: '#1d5fd6', lift: '#7db1ff' },
  violet: { accent: '#6d33c9', lift: '#bd97ff' },
  magenta: { accent: '#b5216a', lift: '#ff8bc0' },
  moss: { accent: '#2e6b21', lift: '#86d16e' },
  amber: { accent: '#925c05', lift: '#e8b23c' },
  deep: { accent: '#0a6291', lift: '#5cb9ec' },
  cyan: { accent: '#056b80', lift: '#4fcbe8' },
  clay: { accent: '#8a4a2f', lift: '#e0a081' },
  slate: { accent: '#3f4a5c', lift: '#a3b0c4' },
};

/** Surface tokens, mirrored from globals.css for the same reason. */
export const SURFACE = {
  ink: '#0a0b0d',
  inkLift: '#141619',
  inkEdge: '#24272c',
  paper: '#fbfaf8',
  proseInv: '#f4f4f2',
  proseInvSoft: '#a9aeb6',
  proseInvFaint: '#7d838c',
};

export const accentLift = (name) => (ACCENTS[name] ?? ACCENTS.iris).lift;
