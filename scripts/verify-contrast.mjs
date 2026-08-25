/**
 * CONTRAST GATE.
 *
 * The site tells clients that accessibility is a build gate rather than a
 * paragraph in a proposal. This is that gate for colour.
 *
 * Every accent has two tones because one hue cannot stay legible on both
 * grounds: `--accent` is used on paper, `--accent-lift` on ink. Both are
 * checked against the ground they are actually painted on, at the size they are
 * actually used — accents appear as small text (eyebrows, labels), so the
 * normal-text 4.5:1 threshold applies, not the 3:1 large-text one.
 *
 * Run: node scripts/verify-contrast.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(root, 'app', 'globals.css'), 'utf8');

/* ── Colour maths (WCAG 2.x relative luminance) ───────────────────────── */

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/* ── Parse the tokens straight out of the stylesheet ──────────────────── */

function token(name) {
  const match = css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8})`));
  if (!match) throw new Error(`token ${name} not found in globals.css`);
  return match[1];
}

const PAPER = token('--color-paper');
const INK = token('--color-ink');

const accents = [];
const blockRe = /\[data-accent='([a-z]+)'\]\s*\{([^}]+)\}/g;
for (const [, name, body] of css.matchAll(blockRe)) {
  const accent = body.match(/--accent:\s*(#[0-9a-fA-F]{3,8})/)?.[1];
  const lift = body.match(/--accent-lift:\s*(#[0-9a-fA-F]{3,8})/)?.[1];
  if (accent && lift) accents.push({ name, accent, lift });
}

if (!accents.length) {
  console.error('verify:contrast failed — no accent blocks parsed from globals.css');
  process.exit(1);
}

/* ── The palette exists twice, so check the two agree ─────────────────────
   `content/accents.js` carries the same hues in JavaScript because Open Graph
   images are generated in JS and cannot read a stylesheet. Two sources of one
   truth is exactly the drift this codebase avoids elsewhere, so it is gated
   rather than trusted. */
const { ACCENTS } = await import('../content/accents.js');
const drift = [];

for (const { name, accent, lift } of accents) {
  const js = ACCENTS[name];
  if (!js) {
    drift.push(`"${name}" is in globals.css but missing from content/accents.js`);
    continue;
  }
  if (js.accent.toLowerCase() !== accent.toLowerCase())
    drift.push(`"${name}".accent — css ${accent}, js ${js.accent}`);
  if (js.lift.toLowerCase() !== lift.toLowerCase())
    drift.push(`"${name}".lift — css ${lift}, js ${js.lift}`);
}
for (const name of Object.keys(ACCENTS)) {
  if (!accents.some((a) => a.name === name)) {
    drift.push(`"${name}" is in content/accents.js but missing from globals.css`);
  }
}

if (drift.length) {
  for (const d of drift) console.error(`  FAIL  palette drift: ${d}`);
  console.error(`\nverify:contrast failed — ${drift.length} palette mismatch(es)`);
  process.exit(1);
}

/* ── Text tokens on their grounds ─────────────────────────────────────── */

const TEXT_CHECKS = [
  ['prose on paper', token('--color-prose'), PAPER, 4.5],
  ['prose-soft on paper', token('--color-prose-soft'), PAPER, 4.5],
  ['prose-faint on paper', token('--color-prose-faint'), PAPER, 4.5],
  ['prose-inv on ink', token('--color-prose-inv'), INK, 4.5],
  ['prose-inv-soft on ink', token('--color-prose-inv-soft'), INK, 4.5],
  ['prose-inv-faint on ink', token('--color-prose-inv-faint'), INK, 4.5],
];

const failures = [];
const rows = [];

for (const [label, fg, bg, min] of TEXT_CHECKS) {
  const r = ratio(fg, bg);
  rows.push([label, r, min]);
  if (r < min) failures.push(`${label} is ${r.toFixed(2)}:1, needs ${min}:1`);
}

for (const { name, accent, lift } of accents) {
  const onPaper = ratio(accent, PAPER);
  const onInk = ratio(lift, INK);
  rows.push([`accent "${name}" on paper`, onPaper, 4.5]);
  rows.push([`accent "${name}" on ink`, onInk, 4.5]);
  if (onPaper < 4.5) failures.push(`accent "${name}" on paper is ${onPaper.toFixed(2)}:1, needs 4.5:1`);
  if (onInk < 4.5) failures.push(`accent "${name}" on ink is ${onInk.toFixed(2)}:1, needs 4.5:1`);

  /* Accent buttons paint paper-coloured text on an accent fill. */
  const buttonPaper = ratio(PAPER, accent);
  if (buttonPaper < 4.5) {
    failures.push(
      `accent "${name}" as a button fill gives ${buttonPaper.toFixed(2)}:1 against paper text, needs 4.5:1`,
    );
  }
}

/* ── Mark-specific: the two arcs against each other ───────────────────────
   The mark is a ring split into two arcs — one painted in the surrounding text
   colour, one in the accent. They are separated by a physical offset, so the
   gap is what makes the mark read; the colour difference only reinforces it.
   That is why this floor is 1.5:1 rather than 4.5:1 — it is a distinguishability
   check between two adjacent shapes, not a text-legibility check.

   It exists so that adding an accent whose value sits on top of the text colour
   fails the build instead of quietly shipping a mark whose two halves are
   indistinguishable. Both arcs are separately checked against their ground
   above, at the full 4.5:1. */
const ARC_FLOOR = 1.5;
const arcRows = [];

for (const { name, accent, lift } of accents) {
  const onPaper = ratio(token('--color-prose'), accent);
  const onInk = ratio(token('--color-prose-inv'), lift);
  arcRows.push([`${name} · paper`, onPaper], [`${name} · ink`, onInk]);
  if (onPaper < ARC_FLOOR)
    failures.push(`mark arcs for "${name}" on paper separate by only ${onPaper.toFixed(2)}:1, needs ${ARC_FLOOR}:1`);
  if (onInk < ARC_FLOOR)
    failures.push(`mark arcs for "${name}" on ink separate by only ${onInk.toFixed(2)}:1, needs ${ARC_FLOOR}:1`);
}

const worstArc = arcRows.reduce((a, b) => (a[1] < b[1] ? a : b));
console.log(
  `mark: ${arcRows.length} arc pairings checked; tightest is ${worstArc[0]} at ${worstArc[1].toFixed(2)}:1 (floor ${ARC_FLOOR}:1)`,
);

const worst = rows.reduce((a, b) => (a[1] < b[1] ? a : b));

console.log(`contrast: ${rows.length} pairings checked across ${accents.length} accents`);
console.log(`  lowest passing-or-failing pairing: ${worst[0]} at ${worst[1].toFixed(2)}:1`);

if (failures.length) {
  for (const f of failures) console.error(`  FAIL  ${f}`);
  console.error(`\nverify:contrast failed — ${failures.length} pairing(s) below threshold`);
  process.exit(1);
}

console.log('verify:contrast passed — every pairing meets WCAG 2.2 AA for normal text');
