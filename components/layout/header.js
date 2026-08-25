'use client';

/**
 * HEADER — a mega menu that states the two halves.
 *
 * The navigation is the positioning. "Build" and "Run" are not clever labels
 * for Services and Support; they are the two halves of the business, and a
 * visitor should understand the model from the menu before reading a word of
 * the homepage.
 *
 * Behaviour notes worth keeping:
 *   — Hover opens on desktop, but click also works, and Escape always closes.
 *     Hover-only mega menus are unusable with a keyboard and on touch.
 *   — A short close delay stops the panel snapping shut when the pointer
 *     crosses the gap between the trigger and the panel.
 *   — The panel is one shared element that re-renders per section rather than
 *     four stacked panels, so only one thing can ever be open.
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNav } from '@/content/navigation';
import { company } from '@/content/company';
import { Button, cn } from '@/design-system';
import { LogoLink, Mark } from '@/components/brand/logo';

export function Header() {
  const [openLabel, setOpenLabel] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  /* Route change closes everything. Without this the menu survives navigation
     and hangs over the page you just opened. */
  useEffect(() => {
    setOpenLabel(null);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenLabel(null);
        setDrawerOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const open = (label) => {
    clearTimeout(closeTimer.current);
    setOpenLabel(label);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenLabel(null), 140);
  };

  const active = primaryNav.find((s) => s.label === openLabel);

  /* At rest the header floats over the page's ink hero, so it takes the ink
     register and its own text flips light through tokens rather than through a
     second set of variant classes. Once scrolled — or once the mega panel is
     open, which needs an opaque backdrop to be readable — it returns to paper.
     Every page on this site opens with an ink hero, so "at rest" and "over ink"
     are the same state and this stays correct. */
  const floating = !scrolled && !openLabel;

  /* Three states, not two.
   *
   * Frosted translucency is right for a bar that content scrolls beneath — it
   * reads as glass and the movement explains it. It is wrong for the mega
   * panel, which is a discrete surface with nothing moving behind it: at 95%
   * opacity a large dark headline underneath ghosts straight through, and a
   * translucent header strip above a more opaque panel leaves a visible tonal
   * seam between the two.
   *
   * So when the panel is open, the header and the panel both go fully opaque
   * and become one surface. */
  const menuOpen = Boolean(openLabel);

  return (
    <header
      data-register={floating ? 'ink' : undefined}
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        floating && 'border-b border-transparent bg-transparent',
        menuOpen && 'border-b border-paper-edge bg-paper',
        !floating && !menuOpen && 'border-b border-paper-edge bg-paper/85 backdrop-blur-xl',
      )}
      onMouseLeave={scheduleClose}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-prose focus:px-4 focus:py-2 focus:text-micro focus:text-paper"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-[88rem] items-center gap-8 px-gutter">
        <LogoLink size={26} />

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((section) => (
            <button
              key={section.label}
              onMouseEnter={() => open(section.label)}
              onFocus={() => open(section.label)}
              onClick={() => setOpenLabel(openLabel === section.label ? null : section.label)}
              aria-expanded={openLabel === section.label}
              aria-haspopup="true"
              className={cn(
                'relative rounded-full px-3.5 py-2 text-micro transition-colors',
                openLabel === section.label ? 'text-prose' : 'text-prose-soft hover:text-prose',
              )}
            >
              {section.label}
              <span
                aria-hidden
                className={cn(
                  'absolute inset-x-3.5 -bottom-px h-px bg-[var(--accent)] transition-transform duration-300',
                  openLabel === section.label ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button href="/contact" variant="primary" className="hidden sm:inline-flex">
            Start a conversation
          </Button>
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-edge lg:hidden"
          >
            <span aria-hidden className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-prose" />
              <span className="block h-px w-4 bg-prose" />
            </span>
          </button>
        </div>
      </div>

      {/* Mega panel — one element, re-rendered per section. */}
      <div
        className={cn(
          /* Opaque, not frosted — see the note on `menuOpen` above. */
          'absolute inset-x-0 top-full hidden overflow-hidden border-b border-paper-edge bg-paper shadow-[0_18px_40px_-24px_rgba(10,11,13,0.28)] transition-[max-height,opacity] duration-300 lg:block',
          active ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
        onMouseEnter={() => clearTimeout(closeTimer.current)}
        onMouseLeave={scheduleClose}
      >
        {active && (
          <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,15rem)_1fr] gap-12 px-gutter py-10">
            <div className="flex flex-col gap-3">
              <p className="rule-eyebrow">{active.label}</p>
              <p className="text-micro leading-relaxed text-prose-soft">{active.summary}</p>
              <Link
                href={active.href}
                className="mt-auto text-micro text-prose underline decoration-paper-edge underline-offset-4 hover:decoration-[var(--accent)]"
              >
                All {active.label.toLowerCase()} →
              </Link>
            </div>

            <div className={cn('grid gap-x-8 gap-y-6', active.columns.length > 2 ? 'grid-cols-3' : 'grid-cols-2')}>
              {active.columns.map((column, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-prose-faint">
                    {column.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          data-accent={link.accent}
                          className="group flex items-center gap-2.5 text-micro text-prose-soft transition-colors hover:text-prose"
                        >
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          />
                          <span className="-ml-4 transition-transform duration-200 group-hover:translate-x-4">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

function MobileDrawer({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-ink/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper transition-transform duration-300 ease-[var(--ease-out-quint)]',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-paper-edge px-gutter">
          <Mark size={22} />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-edge text-prose"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-gutter py-6" aria-label="Mobile">
          {primaryNav.map((section) => (
            <div key={section.label} className="border-b border-paper-edge py-2">
              <button
                onClick={() => setExpanded(expanded === section.label ? null : section.label)}
                aria-expanded={expanded === section.label}
                className="flex w-full items-center justify-between py-3 text-left"
              >
                <span className="text-h4 font-medium">{section.label}</span>
                <span
                  aria-hidden
                  className={cn(
                    'text-prose-faint transition-transform duration-300',
                    expanded === section.label && 'rotate-45',
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-[grid-template-rows] duration-300',
                  expanded === section.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden">
                  <ul className="flex flex-col gap-1 pb-4">
                    {section.columns.flatMap((c) => c.links).map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          data-accent={link.accent}
                          className="flex items-center gap-2.5 py-2 text-micro text-prose-soft"
                        >
                          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-paper-edge p-gutter">
          <Button href="/contact" className="w-full">
            Start a conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
