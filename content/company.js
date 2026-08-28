/**
 * COMPANY — identity, positioning and the numbers.
 *
 * PLACEHOLDER POLICY. Anything the company cannot evidence is marked
 * `unverified: true` and is rendered by `<Figure>` with a visible marker in
 * development, so a fabricated statistic cannot quietly reach production. The
 * build script `verify:content` fails if an unverified figure is still present
 * when NODE_ENV is production and ALLOW_UNVERIFIED is not set.
 *
 * This exists because the fastest way to lose a technical buyer is a metric
 * they can tell was invented.
 */

export const company = {
  name: 'Universal Virtual Support',
  short: 'UVS',
  tagline: 'We build the system. Then we run it.',
  domain: 'www.universalvirtualsupport.com',
  url: 'https://www.universalvirtualsupport.com',
  email: 'admin@universalvirtualsupport.com',

  /* Two routes, because they reach different people and a single inbox turns a
     partnership conversation into a support ticket. `email` above stays the
     general address and the default for the enquiry form. */
  emails: [
    {
      key: 'general',
      label: 'General & new engagements',
      address: 'admin@universalvirtualsupport.com',
      note: 'Anything about the work itself.',
    },
    {
      key: 'partnerships',
      label: 'Partnerships & referrals',
      address: 'partnerships@universalvirtualsupport.com',
      note: 'Agencies, resellers, platform partners and white-label arrangements.',
    },
  ],

  /**
   * SOCIAL PROFILES.
   *
   * These do double duty. On the page they are links; in the Organization
   * JSON-LD they become `sameAs`, which is how a search engine confirms that
   * this domain and these profiles are the same entity. For a company that
   * publishes no client logos, corroborating identity across independent
   * platforms is one of the few trust signals available for free.
   *
   * URLs are stored clean. The Facebook link arrived with a `mibextid` share
   * token attached — a per-share tracking parameter that means nothing on a
   * permanent link and looks careless in a footer, so it is stripped.
   */
  socials: [
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/universal-virtual-support/',
      handle: 'universal-virtual-support',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/universalvirtualsupport',
      handle: '@universalvirtualsupport',
    },
    {
      key: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100057196640100',
      handle: 'Universal Virtual Support',
    },
  ],

  /**
   * MARKETS SERVED.
   *
   * Three, and they are genuinely three — an Australian office, US-market
   * keyword demand, and European fintech clients named in the founder's own
   * background. The SEO package that prompted this assumed a US-only business
   * and would have shipped `areaServed: United States`, which would have been
   * wrong in schema and wrong on the page.
   *
   * Emitted as `areaServed` on the Organization and on every Service.
   */
  markets: [
    { type: 'Country', name: 'United States' },
    { type: 'Country', name: 'Australia' },
    { type: 'Place', name: 'Europe' },
  ],

  founded: 2019,

  /* Used for the postal address in the footer, the contact page and the
     Organization JSON-LD. Kept as parts rather than one string so the schema
     block can emit a proper PostalAddress rather than a blob. */
  address: {
    street: '21 Marnham Street',
    locality: 'Acacia Ridge',
    region: 'QLD',
    postalCode: '4110',
    country: 'Australia',
    countryCode: 'AU',
    get oneLine() {
      return `${this.street}, ${this.locality} ${this.region} ${this.postalCode}, ${this.country}`;
    },
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=21+Marnham+Street+Acacia+Ridge+QLD+4110+Australia',
  },

  positioning: {
    headline: 'Two halves of the same problem.',
    body: 'Most vendors sell you one half. A software agency builds the system and hands you the queue it creates. A BPO staffs the queue and has no way to reduce it. We do both, which changes the incentives: a threshold set too low costs us the review work, and a chatbot that deflects badly costs us the escalation. Nobody who only sells one half has a reason to get the seam right.',
  },

  /* The two halves, named. This is the site's spine — the header, the homepage
     and the handoff sections on every page all render from it.

     ORDER IS DELIBERATE. Run comes first. The tagline still reads "we build the
     system, then we run it" because that is the chronology of an engagement,
     but the operations half is the primary commercial offer and the site leads
     with it everywhere: the menu, the homepage, the footer. Build is presented
     as the thing that makes the desk cheaper to run, not the headline product. */
  halves: [
    {
      id: 'run',
      label: 'Run',
      title: 'We run the desk',
      body: 'Staffed queues with a service level — chat, voice, email, orders, B2B sales and back office. Covered around the clock if you need it.',
      href: '/operations',
    },
    {
      id: 'build',
      label: 'Build',
      title: 'And we build what feeds it',
      body: 'AI engineering, software and campaigns — the systems that absorb the repetitive share and make the desk cheaper to run.',
      href: '/services',
    },
  ],

  /* Commitments are the proof strategy for a company without public case
     studies: verifiable method rather than borrowed logos. Every line here is
     something a client can check during an engagement. */
  commitments: [
    {
      title: 'You own everything',
      body: 'Code, infrastructure, ad accounts and data live in your accounts from the first commit. Leaving is an access change, not a rebuild.',
    },
    {
      title: 'Accessibility is a gate',
      body: 'WCAG 2.2 AA checked automatically on every build and manually with a keyboard and a screen reader before release.',
    },
    {
      title: 'Performance is a number',
      body: 'A page weight and Core Web Vitals budget agreed up front and enforced in CI. Exceeding it fails the build.',
    },
    {
      title: 'Decisions are written down',
      body: 'Architecture decisions are recorded with the alternatives considered, so the reasoning survives the people who made it.',
    },
    {
      title: 'We will tell you not to buy',
      body: 'Where an engagement should not happen — no search demand, no genuine need for an app, volume too low for a desk — we say so on the first call.',
    },
    {
      title: 'No invented proof',
      body: 'Every figure we publish is one we can evidence, and we name clients only where they have agreed to it. Where we have no proof for a claim, we show method instead of borrowing someone else’s.',
    },
  ],

  /* Operator-supplied and confirmed. `unverified` gates the build: anything
     still flagged here fails a production build via verify:content, so a
     placeholder cannot reach the site by being forgotten. */
  figures: [
    { value: '10,000+', label: 'Clients served', unverified: false },
    { value: '500+', label: 'People on the team', unverified: false },
    { value: '5+', label: 'Years operating', unverified: false },
    { value: '24/7', label: 'Desk coverage available', unverified: false },
  ],

  process: {
    headline: 'How an engagement actually runs.',
    body: 'The same six stages whether we are building a system or staffing a desk. The point of naming them is that each one has an exit — you can stop after discovery with something useful in hand.',
    stages: [
      {
        n: '01',
        step: 'Discovery',
        body: 'What is the problem, what does failure cost, and is this worth doing at all. Ends in a written recommendation, including no.',
      },
      {
        n: '02',
        step: 'Definition',
        body: 'Scope, thresholds, budgets and success criteria fixed as numbers before anything is built.',
      },
      {
        n: '03',
        step: 'Build',
        body: 'The system or the desk, assembled against those numbers with the gates running from day one.',
      },
      {
        n: '04',
        step: 'Shadow',
        body: 'It runs alongside the current process without replacing it, so failure modes appear before anyone depends on them.',
      },
      {
        n: '05',
        step: 'Release',
        body: 'Widened one category at a time, on evidence from shadow rather than on a launch date.',
      },
      {
        n: '06',
        step: 'Handover',
        body: 'Code, accounts, runbook and training. If we stop working together, nothing stops working.',
      },
    ],
  },

  /**
   * FOUNDER.
   *
   * The site is otherwise written in the company voice, and deliberately has no
   * team page. This block is the exception, because in regulated operations the
   * buyer's real question is whether anyone here has actually run a desk — and
   * that is answered by a person, not by a company.
   *
   * Kept to operating experience. No founding story, no photograph, nothing
   * that cannot be verified in a conversation.
   */
  founder: {
    name: 'Founder & Managing Director',
    eyebrow: 'Who runs this',
    headline: { lead: 'Someone here has', accent: 'actually worked the queue.' },
    body: 'Universal Virtual Support is run by its founder, whose own background is high-volume BPO operations — Tier-1 and Tier-2 support desks, and compliance workflows for European fintech clients. That matters here for one specific reason: the failure modes on these pages are described from the inside rather than from a category overview.',
    points: [
      'High-volume BPO operations, hands-on rather than at portfolio level.',
      'Tier-1 and Tier-2 support desks, including the escalation boundary between them.',
      'Compliance and onboarding workflows for European fintech clients.',
      'The trade between speed, quality and cost — which is the whole job, and is never solved once.',
    ],
    note: 'Happy to talk directly rather than through an account manager. The first call is with the person who will be accountable for the desk.',
  },

  contact: {
    headline: 'Tell us the problem, not the specification.',
    body: 'The most useful first call is a description of what is going wrong. We will tell you which half of the business it belongs to, roughly what it costs, and whether it is worth doing.',
    responseWindow: 'One business day',
  },
};

/** Development-time register of any figure still marked unverified. */
export function unverifiedFigures() {
  return company.figures.filter((f) => f.unverified);
}
