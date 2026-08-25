/**
 * NUMBERS AS WORDS.
 *
 * This file exists because of a real defect. The homepage said "Six desks."
 * while the grid beneath it listed eight, because the sentence was written
 * once and the data grew afterwards. The industries page said "Twelve business
 * types" against thirteen for the same reason.
 *
 * Counts in prose are a maintenance liability: they read as copy, they live
 * nowhere near the array they describe, and nothing fails when they diverge —
 * a visitor just finds a page that contradicts itself, which costs more trust
 * than the sentence was ever worth.
 *
 * So every count in visible copy is now derived. `spell(operations.length)`
 * cannot drift from `operations`.
 */

const WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
];

/**
 * Spell a small number. Above twenty, digits read better in prose anyway —
 * "twenty-seven desks" is worse than "27 desks" — so it returns the numeral.
 *
 * @param {number} n
 * @param {boolean} [capital] Capitalise, for the start of a sentence.
 */
export function spell(n, capital = false) {
  const word = WORDS[n] ?? String(n);
  return capital ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

/** `plural(3, 'desk')` → "3 desks". Spelled variant for prose is `spell`. */
export function plural(n, singular, pluralForm) {
  return `${n} ${n === 1 ? singular : (pluralForm ?? `${singular}s`)}`;
}
