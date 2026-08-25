/**
 * Per-desk Open Graph image.
 */
import { operationBySlug, operationSlugs } from '@/content/operations';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return operationSlugs.map((slug) => ({ slug }));
}

export async function generateImageMetadata({ params }) {
  const { slug } = await params;
  const operation = operationBySlug[slug];
  return [{ id: slug, size: OG_SIZE, contentType: OG_CONTENT_TYPE, alt: operation?.summary ?? 'Universal Virtual Support' }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const operation = operationBySlug[slug];
  if (!operation) {
    return renderOgImage({ eyebrow: 'Run', title: 'Universal Virtual Support', accent: 'cyan' });
  }
  return renderOgImage({
    eyebrow: operation.eyebrow,
    title: `${operation.headline.lead} ${operation.headline.accent ?? ''}`.trim(),
    note: operation.summary,
    accent: operation.accent,
    badge: 'Run',
  });
}
