/**
 * INTENT SECTION — the wrapper every page section goes through.
 *
 * The small mono label above each heading is the page saying which question it
 * is currently answering. That is not an affectation: on a long service page
 * the reader's actual problem is orientation, and a label reading "IS THIS FOR
 * MY BUSINESS?" tells them whether to read the next screen or skip it.
 *
 * Because the label comes from `INTENT_LADDER` rather than from a prop, the
 * sequence cannot drift between one service page and the next.
 */

import { intentById } from '@/content/intent';
import { Container, Eyebrow, Headline, Lead, Section, cn } from '@/design-system';

export function IntentSection({
  intent,
  headline,
  lead,
  register = 'paper',
  size = 'default',
  containerSize = 'default',
  eyebrowOverride,
  headingLevel = 2,
  className,
  children,
  id,
}) {
  const rung = intentById[intent];

  return (
    <Section register={register} size={size} id={id} className={className}>
      <Container size={containerSize}>
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Eyebrow>{eyebrowOverride ?? rung?.label ?? intent}</Eyebrow>
            {rung?.question && (
              <span className="font-mono text-eyebrow uppercase tracking-[0.14em] text-prose-faint">
                {rung.question}
              </span>
            )}
          </div>
          {headline && <Headline level={headingLevel} headline={headline} className="max-w-4xl" />}
          {lead && <Lead>{lead}</Lead>}
        </header>
        {children && <div className={cn('mt-12 md:mt-16')}>{children}</div>}
      </Container>
    </Section>
  );
}
