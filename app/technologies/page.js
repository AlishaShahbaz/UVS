/**
 * TECHNOLOGIES.
 *
 * Derived entirely from the `stack` arrays on services and operations, so this
 * page cannot claim a technology no service actually uses — which is the usual
 * failure of a technologies page. Each tool links back to the services that
 * declared it, making this a genuine internal-linking surface rather than a
 * logo wall.
 */

import Link from 'next/link';
import { services } from '@/content/services';
import { operations } from '@/content/operations';
import { company } from '@/content/company';
import { Container, Eyebrow, Headline, Lead, Section, Button, Badge } from '@/design-system';
import { IntentSection } from '@/components/sections/intent-section';
import { HeroField } from '@/components/bento/hero-field';

export const metadata = {
  title: 'Technologies',
  description:
    'The tools we actually use, derived from the stacks declared by each service and desk — with the services that use each one.',
  alternates: { canonical: '/technologies' },
};

/** Invert the stacks: tool → the offerings that declared it. */
function buildIndex() {
  const index = new Map();
  const all = [
    ...services.map((s) => ({ ...s, base: '/services' })),
    ...operations.map((o) => ({ ...o, base: '/operations' })),
  ];
  for (const offering of all) {
    for (const tool of offering.stack ?? []) {
      if (!index.has(tool)) index.set(tool, []);
      index.get(tool).push(offering);
    }
  }
  return [...index.entries()]
    .map(([tool, users]) => ({ tool, users }))
    .sort((a, b) => b.users.length - a.users.length || a.tool.localeCompare(b.tool));
}

export default function TechnologiesPage() {
  const index = buildIndex();

  return (
    <div data-accent="azure">
      <Section register="ink" size="loose" overlap className="border-b border-ink-edge">
        <HeroField />
        <Container className="relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Technologies</Eyebrow>
              <Badge>{index.length} tools in use</Badge>
            </div>
            <Headline
              level={1}
              headline={{ lead: 'Tools are a consequence', accent: 'of the problem, not a position.' }}
              className="max-w-[20ch]"
            />
            <Lead className="text-prose-inv-soft">
              This list is generated from the stack each service and desk actually declares, so it
              cannot drift into claiming things nobody uses. If a tool is here, something on this
              site depends on it.
            </Lead>
          </div>
        </Container>
      </Section>

      <IntentSection
        intent="evaluate"
        eyebrowOverride="The index"
        headline={{ lead: 'Every tool,', accent: 'and what it is used for.' }}
        lead="Sorted by how widely each is used across the work. We change tools when the problem changes and we do not defend a choice because it is on a website."
        containerSize="wide"
      >
        <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge sm:grid-cols-2 lg:grid-cols-3">
          {index.map(({ tool, users }) => (
            <li key={tool} className="flex flex-col gap-3 bg-paper p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-mono text-micro font-medium text-prose">{tool}</h2>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-prose-faint">
                  {users.length}×
                </span>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-1">
                {users.map((user) => (
                  <li key={`${tool}-${user.slug}`} data-accent={user.accent}>
                    <Link
                      href={`${user.base}/${user.slug}`}
                      className="text-[11px] leading-relaxed text-prose-faint transition-colors hover:text-[var(--accent)]"
                    >
                      {user.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </IntentSection>

      <IntentSection
        intent="derisk"
        eyebrowOverride="How we choose"
        headline={{ lead: 'Four rules,', accent: 'and none of them are about fashion.' }}
        register="sunk"
      >
        <ul className="grid gap-px overflow-hidden rounded-panel border border-paper-edge bg-paper-edge sm:grid-cols-2">
          {[
            {
              t: 'It has to be leaveable',
              b: 'Anything we build on has to be something you could hire for or migrate off. A tool that only we can operate is a dependency on us, and that is not a service, it is a hostage situation.',
            },
            {
              t: 'Boring where it can be',
              b: 'PostgreSQL over something newer, unless the newer thing solves a problem PostgreSQL genuinely cannot. Novelty is a cost paid in operations for years.',
            },
            {
              t: 'Model choice is a measurement',
              b: 'Because evaluation sets exist before prompts do, swapping a model is a scored comparison rather than a rebuild. That is why no model is named as a commitment here.',
            },
            {
              t: 'Your existing stack wins',
              b: 'We work in your CRM, your helpdesk, your ERP. Migrating you to our preferred tool would be convenient for us and expensive for you.',
            },
          ].map((rule, i) => (
            <li key={rule.t} className="flex flex-col gap-3 bg-paper p-7">
              <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-h4 font-medium">{rule.t}</h3>
              <p className="text-micro leading-relaxed text-prose-soft">{rule.b}</p>
            </li>
          ))}
        </ul>
      </IntentSection>

      <IntentSection
        intent="act"
        headline={{ lead: 'Already running something?', accent: 'We will work in it.' }}
        lead={company.contact.body}
      >
        <Button href="/contact" variant="primary">
          Start a conversation
        </Button>
      </IntentSection>
    </div>
  );
}
