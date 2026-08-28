/**
 * INTERNAL LINK GATE.
 *
 * Runs against a *running* build rather than the content files, because the
 * thing being measured is what a crawler actually receives — links live in JSX,
 * not in the content model, so no amount of static analysis sees them.
 *
 *   npm run build && npm start &
 *   node scripts/verify-links.mjs
 *
 * ## Why it counts only inside <main>
 *
 * The header and footer link to every service, desk and industry on every page,
 * so counting them would report ~50 links on a page that in truth has none. A
 * crawler discounts sitewide chrome for exactly that reason: it carries no
 * page-specific signal. Only in-content links say "this page is related to that
 * one", and only those are counted here.
 *
 * ## The floor, and where it came from
 *
 * Five unique in-content destinations. When this was first measured, seven
 * pages had fewer — the five legal pages and the contact page had **zero**, and
 * the about page had two. A reader arriving on Privacy from a search result had
 * nowhere to go but back, and a visitor landing on Contact from an ad could not
 * reach a single page explaining what they were enquiring about.
 *
 * Self-links and fragments are collapsed: `/services/x#faq` counts once, as
 * `/services/x`, and a page linking to itself counts zero.
 */

const BASE = process.env.VERIFY_BASE ?? 'http://localhost:3000';
const MIN_LINKS = 5;

const normalise = (href) => (href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/');

async function main() {
  let sitemap;
  try {
    const res = await fetch(`${BASE}/sitemap.xml`);
    if (!res.ok) throw new Error(`sitemap returned ${res.status}`);
    sitemap = await res.text();
  } catch (error) {
    console.error(
      `verify:links could not reach ${BASE} — start the server first ` +
        `(npm start), or set VERIFY_BASE.\n  ${error.message}`,
    );
    process.exit(1);
  }

  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const rows = [];

  for (const path of paths) {
    const html = await (await fetch(BASE + path)).text();

    /* Only the region between <main> and </main>. Everything outside it is
       chrome that appears identically on every page. */
    const main = html.split('<main')[1]?.split('</main>')[0] ?? '';

    const destinations = new Set(
      [...main.matchAll(/href="(\/[^"]*)"/g)]
        .map((m) => normalise(m[1]))
        .filter((href) => href && !href.startsWith('/_next')),
    );
    destinations.delete(normalise(path));

    rows.push({ path, count: destinations.size });
  }

  rows.sort((a, b) => a.count - b.count);
  const failures = rows.filter((r) => r.count < MIN_LINKS);

  console.log(
    `links: ${rows.length} pages checked; fewest is ${rows[0].path} with ${rows[0].count} ` +
      `in-content destinations (floor ${MIN_LINKS})`,
  );

  if (failures.length) {
    for (const row of failures) {
      console.error(
        `  FAIL  ${row.path} has ${row.count} in-content internal link(s), needs ${MIN_LINKS}`,
      );
    }
    console.error(`\nverify:links failed — ${failures.length} page(s) below the floor`);
    process.exit(1);
  }

  console.log(`verify:links passed — every page has at least ${MIN_LINKS}`);
}

main();
