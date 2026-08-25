/**
 * APPLE TOUCH ICON — 180×180 PNG, generated rather than exported.
 *
 * iOS composites this onto a home screen at a fixed size and does not honour
 * SVG, so it needs its own raster. Generating it from the same geometry keeps
 * it in step with the mark instead of becoming a stale asset in /public.
 *
 * Slightly more padding than the favicon: iOS rounds the corners itself and
 * clips tighter than the browser tab does.
 */

import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0b0d',
        }}
      >
        <svg width="124" height="124" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 10 A18 18 0 0 0 32 46"
            stroke="#f4f4f2"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M32 18 A18 18 0 0 1 32 54"
            stroke="#a5a2f5"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
