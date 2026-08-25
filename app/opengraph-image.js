/**
 * Site-wide Open Graph image. Applies to any route without its own.
 */
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Universal Virtual Support — we build the system, then we run it';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Support & AI engineering',
    title: 'We build the system. Then we run it.',
    note: 'Staffed desks with a service level — and the AI, software and campaigns that make them cheaper to run.',
    accent: 'iris',
  });
}
