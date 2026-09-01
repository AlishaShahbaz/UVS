/**
 * LEGAL PAGES.
 *
 * ⚠ REVIEW REQUIRED BEFORE PUBLICATION.
 *
 * These are structurally complete, plain-English drafts written to be readable
 * rather than defensive, and they are NOT legal advice. Before this site goes
 * live they need review by a qualified adviser against the jurisdictions the
 * company actually operates in, the processors it actually uses, and the
 * regulations that actually apply (UK GDPR / EU GDPR / CCPA as relevant).
 *
 * Bracketed `[…]` markers are unresolved facts the operator must supply. The
 * `verify:content` script fails a production build while any remain, so a
 * placeholder cannot silently ship.
 */

export const legalNotice =
  'This is a plain-English draft prepared during the site rebuild. It requires review by a qualified legal adviser before publication.';

export const legal = [
  {
    slug: 'privacy',
    title: 'Privacy',
    summary: 'What we collect, why, and what you can ask us to do about it.',
    updated: '2026-08-24',
    sections: [
      {
        heading: 'What this covers',
        body: 'This notice explains what personal data Universal Virtual Support collects through this website and through delivering services to clients, why we hold it, and the rights you have over it.',
      },
      {
        heading: 'What we collect from this website',
        body: 'Only what you give us and what is needed to keep the site working. If you submit the contact form we receive your name, contact details and the message you wrote. We keep aggregate analytics about pages visited, and we do not use advertising cookies on this site.',
        list: [
          'Contact form submissions — name, email, company and message.',
          'Aggregate analytics — pages, referrer, approximate region, device class.',
          'Essential operational logs — kept short-term for security and debugging.',
        ],
      },
      {
        heading: 'Data we process on behalf of clients',
        body: 'Where we operate a desk or build a system, we handle personal data belonging to our client’s customers. In that relationship the client is the controller and we are the processor, governed by a data processing agreement rather than by this notice. We do not use client data to train models, and we do not reuse it across accounts.',
      },
      {
        heading: 'Why we hold it',
        body: 'To answer your enquiry, to deliver a service you have engaged us for, to meet legal and accounting obligations, and to keep our systems secure. We do not sell personal data, and we do not share it for anyone else’s marketing.',
      },
      {
        heading: 'How long we keep it',
        body: 'Enquiries that do not become engagements are deleted after [RETENTION_PERIOD]. Client records are kept for the duration of the engagement and for the period our legal and tax obligations require afterwards.',
      },
      {
        heading: 'Who else sees it',
        body: 'A small number of processors that we could not operate without — hosting, email, and the CRM we use to track conversations. Each is bound by contract and processes data only on our instructions. A current list is available on request at admin@universalvirtualsupport.com.',
      },
      {
        heading: 'Your rights',
        body: 'You can ask what we hold about you, ask for it to be corrected or deleted, object to how we use it, or ask for a copy in a portable format. Write to admin@universalvirtualsupport.com and we will respond within one month. If you are unhappy with our response you can complain to the relevant supervisory authority.',
      },
      {
        heading: 'Changes',
        body: 'When this notice changes materially we update the date at the top and, where the change affects you directly, tell you.',
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms',
    summary: 'The terms on which this website is provided.',
    updated: '2026-08-24',
    sections: [
      {
        heading: 'These terms cover the website',
        body: 'Using this site means accepting what follows. Client engagements are governed by a separate signed agreement, and where the two differ, that agreement wins.',
      },
      {
        heading: 'What is on the site',
        body: 'We describe our services as accurately as we can. Nothing here is an offer, a quote or a guarantee of a particular outcome — scope, price and commitments are set out in an engagement agreement, not on a marketing page.',
      },
      {
        heading: 'Intellectual property',
        body: 'The content, design and code of this site belong to us, except where we say otherwise. You may read, share and quote it with attribution. You may not republish it as your own.',
      },
      {
        heading: 'Work we deliver to clients',
        body: 'Code, infrastructure and accounts created for a client belong to that client on the terms of their engagement agreement. Our own pre-existing tools and libraries remain ours and are licensed to the client for use in the delivered work.',
      },
      {
        heading: 'Liability',
        body: 'The site is provided as it is. We are not liable for loss arising from relying on general information published here. Liability under a client engagement is dealt with in that engagement, subject to the limits set out in it. Nothing here limits liability that cannot lawfully be limited.',
      },
      {
        heading: 'Links elsewhere',
        body: 'We link to other sites where it is useful. We do not control them and are not responsible for what they publish.',
      },
      {
        heading: 'Governing law',
        body: 'These terms are governed by the laws of [JURISDICTION], and disputes go to the courts of [JURISDICTION].',
      },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookies',
    summary: 'What this site stores in your browser. It is a short list.',
    updated: '2026-08-24',
    sections: [
      {
        heading: 'The short version',
        body: 'This site does not use advertising or tracking cookies. There is no consent banner because there is nothing here that needs consent.',
      },
      {
        heading: 'What is actually set',
        body: 'Essential storage only — the things without which the site cannot function correctly.',
        list: [
          'A preference for reduced motion or theme, if you set one. Stored locally, never sent to us.',
          'Security and load-balancing cookies set by our host for the duration of your visit.',
        ],
      },
      {
        heading: 'Analytics',
        body: 'We measure aggregate page views to know which pages are useful. The measurement is configured not to identify individuals and not to follow you to other sites.',
      },
      {
        heading: 'Third parties',
        body: 'Fonts are self-hosted and this site loads no third-party scripts, so no other party can set a cookie through it.',
      },
      {
        heading: 'Managing them',
        body: 'Your browser can block or delete cookies for this site. Blocking the essential ones may break parts of it; nothing else here depends on them.',
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility',
    summary: 'What we target, how we test it, and how to tell us we got it wrong.',
    updated: '2026-08-24',
    sections: [
      {
        heading: 'Our target',
        body: 'This site targets WCAG 2.2 Level AA. One part of that is enforced rather than asserted: every foreground and background pairing in the design system is checked against the AA contrast thresholds on every build, and a release that fails does not ship. The rest of Level AA is a standard we build to, not a result we have audited — so treat it as a target we hold ourselves to rather than a certified pass.',
      },
      {
        heading: 'How we test',
        body: 'One automated gate and a set of build standards. We would rather list what actually runs than describe a testing programme we do not have.',
        list: [
          'Colour contrast verified for every foreground and background pairing in the token system, blocking the build on failure.',
          'Reduced motion honoured — every animated figure has a finished still frame, guarded in both the global stylesheet and the components themselves.',
          'Semantic HTML, labelled controls and keyboard-operable components as a build standard rather than a retrofit.',
        ],
      },
      {
        heading: 'Known limitations',
        body: 'Two things are worth saying plainly, because the alternative is letting you assume otherwise.',
        list: [
          'There is no automated audit against the full set of AA success criteria on every route. Contrast is gated; the rest is not.',
          'There has been no formal keyboard-only or screen-reader pass on the primary journeys. It is on the list and it has not happened yet.',
          'Complex diagrams carry text alternatives describing the process rather than the picture. We think that is the more useful description, and we would like to hear if it is not.',
        ],
      },
      {
        heading: 'Tell us',
        body: 'If something here is difficult or impossible to use, email admin@universalvirtualsupport.com with the page and what happened. We treat accessibility reports as defects, not as feedback — they go into the same queue as any other bug.',
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security',
    summary: 'How we protect systems and data, and how to report a problem.',
    updated: '2026-08-24',
    sections: [
      {
        heading: 'How we build',
        body: 'Least privilege by default, secrets in a managed store rather than in code or environment files committed to a repository, dependencies monitored for known vulnerabilities, and every change reviewed before it reaches production.',
      },
      {
        heading: 'Client systems',
        body: 'We work in client-owned infrastructure with access scoped to what the engagement needs, and that access is revoked when it ends. Where data cannot leave a client’s environment, the system is designed to run inside it.',
      },
      {
        heading: 'Agent access',
        body: 'Agents on a desk get access to the systems their queue requires and no more. Access is logged, reviewed, and removed when someone leaves the account.',
      },
      {
        heading: 'AI systems specifically',
        body: 'Scoped permissions per agent, typed tool contracts so malformed calls fail at the boundary, human approval gates on consequential actions, hard step and spend ceilings, and a full replayable trace of every action taken. Client data is not used to train models.',
      },
      {
        heading: 'Reporting a vulnerability',
        body: 'Email admin@universalvirtualsupport.com with SECURITY in the subject line and enough detail to reproduce it. We will acknowledge within two business days and keep you updated until it is resolved. We will not pursue anyone who reports a genuine issue in good faith and does not access or destroy data in the process.',
      },
    ],
  },
];

export const legalBySlug = Object.fromEntries(legal.map((l) => [l.slug, l]));
export const legalSlugs = legal.map((l) => l.slug);

/** Unresolved operator inputs, for the build-time gate. */
export function legalPlaceholders() {
  const found = [];
  for (const page of legal) {
    for (const section of page.sections) {
      const text = `${section.body} ${(section.list ?? []).join(' ')}`;
      for (const match of text.matchAll(/\[([A-Z_]+)\]/g)) {
        found.push({ page: page.slug, heading: section.heading, token: match[1] });
      }
    }
  }
  return found;
}
