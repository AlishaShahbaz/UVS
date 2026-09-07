/**
 * RICH TEXT — the small subset of markdown the blog content uses.
 *
 * Two constructs only: `[anchor](/path)` for internal links and `**bold**` for
 * emphasis. Deliberately not a markdown library.
 *
 * ## Why not just write JSX in the content file
 *
 * Because the content files are data, and every other part of the site — the
 * sitemap, the navigation, the schema, the build gate — reads them as data. A
 * content file that exported JSX could not be checked by `verify:content`, and
 * the link gate would only find a dead internal link after it had shipped.
 *
 * ## Why not pull in a markdown renderer
 *
 * A full parser brings HTML passthrough with it, and HTML passthrough in a
 * content file is an XSS hole waiting for someone to paste something. This
 * handles exactly two things and treats everything else as literal text.
 */

import Link from 'next/link';

/* Ordered: links first so a bold marker inside an anchor cannot split it. */
const TOKEN = /\[([^\]]+)\]\((\/[^)]*)\)|\*\*([^*]+)\*\*/g;

export function RichText({ children, className }) {
  return <p className={className}>{renderInline(children)}</p>;
}

/**
 * Parses one string into React children.
 *
 * Exported because list items and callouts need the same treatment without the
 * wrapping paragraph.
 */
export function renderInline(text) {
  if (typeof text !== 'string') return text;

  const parts = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    const [full, anchor, href, bold] = match;
    if (href) {
      parts.push(
        <Link
          key={`${match.index}-link`}
          href={href}
          className="text-prose decoration-paper-edge underline underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          {anchor}
        </Link>,
      );
    } else {
      parts.push(
        <strong key={`${match.index}-b`} className="text-prose font-medium">
          {bold}
        </strong>,
      );
    }

    last = match.index + full.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
