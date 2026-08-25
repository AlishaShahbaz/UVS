/**
 * Per-service Open Graph image. Uses that service's own accent and headline, so
 * a shared link is visibly a different page rather than the same generic card.
 */
import { serviceBySlug, serviceSlugs } from '@/content/services';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateImageMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  return [{ id: slug, size: OG_SIZE, contentType: OG_CONTENT_TYPE, alt: service?.summary ?? 'Universal Virtual Support' }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) {
    return renderOgImage({ eyebrow: 'Build', title: 'Universal Virtual Support', accent: 'iris' });
  }
  return renderOgImage({
    eyebrow: service.eyebrow,
    title: `${service.headline.lead} ${service.headline.accent ?? ''}`.trim(),
    note: service.summary,
    accent: service.accent,
    badge: 'Build',
  });
}
