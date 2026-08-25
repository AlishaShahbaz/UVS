/**
 * OPEN GRAPH IMAGE RENDERER.
 *
 * One renderer for every share image on the site. Generated rather than
 * designed by hand, for the same reason the navigation is derived: 40 pages
 * would otherwise need 40 exported PNGs kept manually in sync with copy that
 * changes.
 *
 * The composition is the site's own hero, reduced to what survives at
 * thumbnail size in a Slack sidebar: the ink ground, the accent rule, the
 * eyebrow, and one short headline. The serif-italic signature is dropped here —
 * at 600px wide in a feed it reads as a rendering fault rather than as a
 * deliberate mix, so the OG image uses the grotesk throughout.
 *
 * Colours come from `content/accents.js`, which `verify:contrast` cross-checks
 * against the stylesheet.
 */

import { ImageResponse } from 'next/og';
import { ACCENTS, SURFACE } from '@/content/accents';
import { company } from '@/content/company';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * @param {object}  options
 * @param {string}  options.eyebrow  Small uppercase label — the section or group.
 * @param {string}  options.title    The headline. Keep it under ~70 characters.
 * @param {string}  [options.note]   One supporting line, optional.
 * @param {string}  [options.accent] Accent key from the palette.
 * @param {string}  [options.badge]  Right-hand chip — "Run", "Build", "Industry".
 */
export function renderOgImage({ eyebrow, title, note, accent = 'iris', badge }) {
  const lift = (ACCENTS[accent] ?? ACCENTS.iris).lift;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: SURFACE.ink,
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* The accent field, echoing HeroField's sweep without the motion. */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            right: -160,
            width: 900,
            height: 900,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${lift}22 0%, ${SURFACE.ink}00 62%)`,
            display: 'flex',
          }}
        />

        {/* Top row: the mark, the wordmark, and the badge.

            The mark is drawn inline rather than fetched — an OG renderer has no
            document to resolve a relative asset against, and a remote fetch per
            image would make every share a network round trip. Its accent arc
            inherits the page's hue, so a shared service link carries that
            service's colour. */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 9 A15 15 0 0 0 24 39"
                stroke={SURFACE.proseInv}
                strokeWidth="6.5"
                strokeLinecap="round"
              />
              <path
                d="M24 13 A15 15 0 0 1 24 43"
                stroke={lift}
                strokeWidth="6.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 6,
                color: SURFACE.proseInv,
              }}
            >
              UVS
            </span>
          </div>

          {badge && (
            <span
              style={{
                display: 'flex',
                fontSize: 20,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: SURFACE.proseInvSoft,
                border: `1px solid ${SURFACE.inkEdge}`,
                borderRadius: 9999,
                padding: '10px 24px',
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Middle: the message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 980 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ width: 44, height: 2, background: lift, display: 'flex' }} />
            <span
              style={{
                fontSize: 22,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: lift,
              }}
            >
              {eyebrow}
            </span>
          </div>

          <div
            style={{
              fontSize: title.length > 54 ? 62 : 76,
              lineHeight: 1.06,
              letterSpacing: -2.5,
              fontWeight: 600,
              color: SURFACE.proseInv,
              display: 'flex',
            }}
          >
            {title}
          </div>

          {note && (
            <div
              style={{
                fontSize: 27,
                lineHeight: 1.45,
                color: SURFACE.proseInvSoft,
                maxWidth: 880,
                display: 'flex',
              }}
            >
              {note}
            </div>
          )}
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${SURFACE.inkEdge}`,
            paddingTop: 26,
            fontSize: 21,
            color: SURFACE.proseInvFaint,
          }}
        >
          <span>{company.tagline}</span>
          <span>{company.domain}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
