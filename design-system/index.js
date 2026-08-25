/**
 * DESIGN SYSTEM — the whole vocabulary, in one place.
 *
 * Small on purpose. A design system that needs a documentation site is a design
 * system nobody reads; this one is short enough to hold in your head, which is
 * the property that actually keeps page fifty looking like page one.
 *
 * The rules it enforces:
 *   — Type sizes come from the scale in globals.css. No arbitrary font sizes.
 *   — Vertical rhythm comes from `Section`. No page sets its own top padding.
 *   — Accent colour is inherited from `data-accent` on an ancestor. No component
 *     takes a colour prop, so a service page cannot leak another's hue.
 *   — Anything on the ink register sets `data-register="ink"` and every child
 *     adapts through tokens rather than through variant props.
 */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import NextLink from 'next/link';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/* ==========================================================================
   LAYOUT
   ========================================================================== */

/**
 * The measure of the site. `wide` is for bento grids and full-bleed figures;
 * `default` is the reading column everything else sits in.
 */
export function Container({ size = 'default', className, children, ...props }) {
  const widths = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-[88rem]',
  };
  return (
    <div className={cn('mx-auto w-full px-gutter', widths[size], className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Vertical rhythm lives here and nowhere else. `register` swaps the entire
 * token set — `ink` for the immersive moment, `sunk` for a recessed band.
 *
 * `overlap` pulls the section up behind the sticky header by exactly the header
 * height and adds that height back as padding. Hero sections opt into it so the
 * dark field runs to the very top of the viewport rather than sitting below a
 * pale 64px band. It is a prop rather than automatic behaviour because only the
 * first section on a page may ever use it — two overlapping sections would
 * stack incorrectly.
 */
export function Section({
  register = 'paper',
  size = 'default',
  overlap = false,
  as: Tag = 'section',
  className,
  children,
  ...props
}) {
  const padding = {
    tight: overlap
      ? 'pb-[calc(var(--spacing-section)*0.5)] pt-[calc(var(--spacing-section)*0.5+4rem)]'
      : 'py-[calc(var(--spacing-section)*0.5)]',
    default: overlap
      ? 'pb-section pt-[calc(var(--spacing-section)+4rem)]'
      : 'py-section',
    loose: overlap
      ? 'pb-[calc(var(--spacing-section)*1.35)] pt-[calc(var(--spacing-section)*1.35+4rem)]'
      : 'py-[calc(var(--spacing-section)*1.35)]',
  };

  return (
    <Tag
      data-register={register === 'ink' ? 'ink' : undefined}
      className={cn(
        padding[size],
        overlap && '-mt-16',
        register === 'sunk' && 'bg-paper-sunk',
        register === 'ink' && 'relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ==========================================================================
   TYPE
   ========================================================================== */

/**
 * The eyebrow is the site's most repeated element, so it carries the intent
 * label from the ladder. The rule beside it is not decoration — it is the only
 * place most sections spend their accent colour.
 */
export function Eyebrow({ children, rule = true, className, ...props }) {
  return (
    <p className={cn('rule-eyebrow', className)} {...props}>
      {rule && <span aria-hidden className="h-px w-8 bg-current opacity-60" />}
      {children}
    </p>
  );
}

/**
 * Headlines take `{ lead, accent }` rather than a string, so the serif-italic
 * signature phrase is structural. A headline can have exactly one.
 */
export function Headline({ level = 2, headline, className, balance = true, ...props }) {
  const Tag = `h${level}`;
  const size = level === 1 ? 'text-h1' : level === 2 ? 'text-h2' : 'text-h3';
  const text = typeof headline === 'string' ? { lead: headline } : headline;
  return (
    <Tag
      className={cn(size, 'font-medium', balance && '[text-wrap:balance]', className)}
      {...props}
    >
      {text.lead}
      {text.accent && (
        <>
          {' '}
          <span className="accent-phrase">{text.accent}</span>
        </>
      )}
    </Tag>
  );
}

export function Lead({ children, className, ...props }) {
  return (
    <p className={cn('text-lead measure text-prose-soft', className)} {...props}>
      {children}
    </p>
  );
}

export function Prose({ children, className, ...props }) {
  return (
    <p className={cn('measure text-prose-soft', className)} {...props}>
      {children}
    </p>
  );
}

/** Mono readout. Used for figures, counts and anything instrument-like. */
export function Datum({ value, label, className }) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-mono text-h3 leading-none tracking-tight text-prose">{value}</span>
      <span className="text-micro text-prose-faint">{label}</span>
    </div>
  );
}

/* ==========================================================================
   CONTROLS
   ========================================================================== */

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full text-micro font-medium transition-all duration-200 focus-visible:outline-2 disabled:opacity-50';

const buttonVariants = {
  primary: 'bg-prose text-paper px-6 py-3 hover:opacity-90',
  accent: 'bg-[var(--accent)] px-6 py-3 text-paper hover:opacity-90',
  outline: 'border border-paper-edge px-6 py-3 text-prose hover:border-[var(--accent)] hover:text-[var(--accent)]',
  ghost: 'px-3 py-2 text-prose-soft hover:text-prose',
};

export function Button({ variant = 'primary', href, className, children, ...props }) {
  const classes = cn(buttonBase, buttonVariants[variant], className);
  if (href) {
    return (
      <NextLink href={href} className={classes} {...props}>
        {children}
      </NextLink>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

/** The underline animates from the accent rather than appearing. Small, cheap, memorable. */
export function TextLink({ href, className, children, ...props }) {
  return (
    <NextLink
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 text-prose transition-colors hover:text-[var(--accent)]',
        className,
      )}
      {...props}
    >
      <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </NextLink>
  );
}

export function Badge({ children, className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-paper-edge px-2.5 py-1 font-mono text-eyebrow uppercase tracking-[0.14em] text-prose-faint',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** A hairline that carries the accent at its left edge. The site's quiet motif. */
export function Rule({ className }) {
  return (
    <div
      aria-hidden
      className={cn('h-px w-full bg-gradient-to-r from-[var(--accent)] to-paper-edge to-[12%]', className)}
    />
  );
}
