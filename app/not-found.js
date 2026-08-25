/**
 * NOT FOUND.
 *
 * Offers the two halves and the industries index rather than a search box,
 * because on this site the useful next step is almost always "which half is
 * your problem in" — and because the previous site linked to a /case-studies
 * page that 404'd, which is exactly the journey this page has to rescue.
 */

import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button } from '@/design-system';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div data-accent="slate">
      <Section register="ink" size="loose" overlap>
        <Container>
          <div className="flex flex-col gap-7">
            <Eyebrow>404</Eyebrow>
            <Headline
              level={1}
              headline={{ lead: 'That page is not here.', accent: 'Here is what is.' }}
              className="max-w-[16ch]"
            />
            <Lead className="text-prose-inv-soft">
              Either it moved or it never existed. Both halves of the business are one click away.
            </Lead>
            <div className="flex flex-wrap gap-3 pt-2">
              {company.halves.map((half) => (
                <Button key={half.id} href={half.href} variant="outline">
                  {half.label}
                </Button>
              ))}
              <Button href="/industries" variant="outline">
                Industries
              </Button>
              <Button href="/contact" variant="accent">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
