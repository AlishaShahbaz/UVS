/**
 * Per-industry Open Graph image.
 */
import { nicheBySlug, nicheSlugs } from '@/content/niches';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return nicheSlugs.map((slug) => ({ slug }));
}

export async function generateImageMetadata({ params }) {
  const { slug } = await params;
  const niche = nicheBySlug[slug];
  return [{ id: slug, size: OG_SIZE, contentType: OG_CONTENT_TYPE, alt: niche?.who ?? 'Universal Virtual Support' }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const niche = nicheBySlug[slug];
  if (!niche) {
    return renderOgImage({ eyebrow: 'Industry', title: 'Universal Virtual Support', accent: 'slate' });
  }
  return renderOgImage({
    eyebrow: 'Built for',
    title: niche.label,
    note: niche.who,
    accent: niche.accent,
    badge: 'Industry',
  });
}
