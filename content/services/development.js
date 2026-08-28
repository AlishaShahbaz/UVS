/**
 * DEVELOPMENT — service content.
 *
 * Same writing rules as the AI Engineering set: the substitution test, and no
 * borrowed proof. Where these pages need to build trust they do it by being
 * specific about how the work is done and what you are handed at the end.
 */

export const development = [
  /* ====================================================================== */
  {
    slug: 'website-development',
    group: 'Development',
    accent: 'azure',
    eyebrow: 'Website Development',
    title: 'Website Development',
    headline: {
      lead: 'A website is not a brochure.',
      accent: 'It is the first shift of your sales team.',
    },
    summary:
      'Fast, accessible, search-legible websites built on a performance budget — and handed over as a codebase you own, not a platform you rent.',
    metaTitle: 'Website Development | Universal Virtual Support',
    metaDescription:
      'Website development with a performance budget, WCAG 2.2 AA accessibility, structured data and full code ownership. Built to convert and to be maintained.',
    keywords: [
      'website development company',
      'fast accessible website',
      'Next.js development agency',
      'website performance optimisation',
      'custom website development',
    ],

    intent: {
      primary:
        'A business whose current site was built by someone unreachable, loads slowly, and cannot be edited without a quote.',
      queries: [
        'why is my website so slow',
        'website redesign that converts',
        'do I own my website code',
        'accessible website development WCAG',
      ],
    },

    builtFor: {
      headline: 'Built for businesses whose website has a job to do.',
      intro:
        'Not every business needs a custom build — a template genuinely is enough for some. These are the cases where it is not, because the site is load-bearing.',
      segments: [
        {
          niche: 'home-services',
          label: 'Home services and trades',
          trigger:
            'Paid traffic lands on a page that takes six seconds on 4G, and the phone number is below the fold on a phone.',
          built:
            'A site built to a mobile performance budget where calling and booking are the primary actions, not buried under a hero video.',
          edge: 'The budget is enforced in CI. A page that breaks it does not deploy.',
        },
        {
          niche: 'ecommerce',
          label: 'DTC brands and marketplace sellers',
          trigger:
            'Ad spend scales, the site does not, and every performance problem costs conversion on every session at once.',
          built:
            'Storefronts and landing systems where speed is a build gate, and product structured data is emitted rather than bolted on.',
          edge: 'Structured data comes from the same content source as the page, so it cannot drift out of sync.',
        },
        {
          niche: 'saas',
          label: 'B2B SaaS and platforms',
          trigger:
            'Marketing cannot ship a page without an engineer, so the roadmap and the website compete for the same people.',
          built:
            'A content-modelled site where a new page or service is a content change, and navigation, sitemap and schema follow automatically.',
          edge: 'Adding a service updates the menu, the footer, the sitemap and the schema with no code edit.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and multi-site practices',
          trigger:
            'Patients cannot find opening hours or book online, and the site fails an accessibility audit that a public-facing service is expected to pass.',
          built:
            'Location-aware pages, real booking integration, and WCAG 2.2 AA verified rather than claimed.',
          edge: 'Accessibility is tested in the pipeline, not asserted in a paragraph like this one.',
        },
        {
          niche: 'logistics',
          label: 'Freight brokers and 3PL operators',
          trigger:
            'Shippers are asked to email for a quote and to phone for a status, because the site is a brochure sitting in front of a TMS it cannot reach.',
          built:
            'Customer-facing quoting and track-and-trace wired into the TMS, so the two highest-volume questions stop arriving as phone calls.',
          edge: 'We integrate on the TMS’s terms — file drop, EDI, a legacy endpoint — rather than requiring you to modernise first.',
        },
        {
          niche: 'hospitality',
          label: 'Hotels, restaurants and venues',
          trigger:
            'The direct booking journey is slower than the aggregator’s, so guests use the aggregator and the commission is paid on every one.',
          built:
            'A direct booking path built to a mobile performance budget, reading live availability, with the enquiry-to-quote flow for groups and events.',
          edge: 'Measured against commission avoided, because that is the only number that decides whether this paid for itself.',
        },
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'Sign-up drop-off is highest at the verification step, and nobody can say which screen loses them because the funnel is not instrumented.',
          built:
            'Onboarding flows built to a mobile performance budget with the verification step instrumented per screen, so abandonment is a number rather than a theory.',
          edge: 'Regulated copy and disclosures are content, versioned with the page — so what a user was shown on a given date is recoverable.',
        },
        {
          niche: 'manufacturing',
          label: 'Manufacturers and trade distributors',
          trigger:
            'Trade customers cannot see their contract pricing, their order history or real stock without phoning inside sales.',
          built:
            'An account-aware trade portal showing real pricing, live stock and reorder history, with the catalogue generated from the ERP rather than maintained twice.',
          edge: 'One source for the catalogue. A portal whose product data drifts from the ERP creates more calls than it removes.',
        },
      ],
      notFor:
        'If you need a five-page site live next week for a fixed low budget, a good template on a good platform will serve you better than we will. That is a real recommendation, not modesty.',
    },

    problem: {
      headline: 'Most websites are slow, unowned, and quietly leaking.',
      body: 'The pattern is consistent. A site was built three years ago by an agency that has moved on, it scores badly on the metrics search engines actually use, editing anything requires a quote, and nobody can point to the page where visitors give up — because that page is not measured.',
      points: [
        'It takes five seconds on a phone, which is where most of the traffic is.',
        'Changing a headline needs a developer, so the copy is three years old.',
        'The code lives in an agency’s account and the only way to leave is to rebuild.',
        'It fails accessibility basics — keyboard traps, unlabelled controls, contrast that does not pass.',
      ],
    },

    solution: {
      headline: 'Four decisions, made before the first screen is designed.',
      body: 'Nearly every failure above traces to a decision that was never consciously made. We make them at the start, in writing, because they are cheap then and expensive later.',
      pillars: [
        {
          title: 'A performance budget that bites',
          body: 'Page weight and Core Web Vitals thresholds agreed up front and enforced in the build. Exceeding the budget fails the deploy, so speed cannot erode release by release.',
        },
        {
          title: 'Content modelled, not hard-coded',
          body: 'Pages are generated from a content source, so adding a service updates the menu, the sitemap and the structured data at once. Nothing is maintained in four places.',
        },
        {
          title: 'Accessibility as a gate',
          body: 'WCAG 2.2 AA, checked automatically on every build and manually with a keyboard and a screen reader. It is a pass condition, not a section in the proposal.',
        },
        {
          title: 'Legible to machines',
          body: 'Server-rendered HTML, semantic structure and structured data, so search crawlers and answer engines get the content without executing anything.',
        },
      ],
    },

    mechanism: {
      headline: 'What the build pipeline refuses to ship.',
      body: 'Quality that depends on remembering is quality that degrades. These checks run on every commit and block the deploy rather than filing a warning.',
      module: 'gate-stack',
      nodes: ['Commit', 'Lint & types', 'Accessibility', 'Performance budget', 'Deploy'],
      branchAt: 'Performance budget',
      branchLabel: 'Blocked',
      notes: [
        'Accessibility runs automated checks on every route, and a manual keyboard and screen-reader pass before each release.',
        'The performance budget is a number in the repository. Exceeding it is a failed build, not a conversation.',
        'Every deploy is previewable at its own URL, so review happens on the real thing rather than a screenshot.',
      ],
    },

    outcomes: [
      {
        title: 'It loads before they leave',
        body: 'Built to a mobile budget from the start rather than optimised afterwards, which is the only version of this that holds.',
        measure: 'Core Web Vitals passing on mobile, verified per release.',
      },
      {
        title: 'Your team can change it',
        body: 'Content lives where content belongs. Copy, services and pages change without a developer and without a quote.',
        measure: 'Routine content changes made in-house, not ticketed.',
      },
      {
        title: 'You can leave',
        body: 'The repository and the hosting are in your accounts from day one. Ending the relationship is an access change, not a rebuild.',
        measure: 'Full code and infrastructure ownership, from the first commit.',
      },
    ],

    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Vercel',
      'Playwright',
    ],

    process: [
      {
        step: 'Intent mapping',
        body: 'Which pages exist, who arrives on each, what they are trying to do, and what the page must make easy. Structure follows that, not a template.',
        artifacts: [
          'Page inventory with the intent each serves',
          'Content model',
          'The pages we recommend not building',
        ],
      },
      {
        step: 'Budgets and gates',
        body: 'Performance, accessibility and browser support fixed as numbers before design begins, so they constrain design rather than survive it.',
        artifacts: [
          'Performance budget',
          'Accessibility target and test plan',
          'Browser and device matrix',
        ],
      },
      {
        step: 'Design system',
        body: 'Tokens, type scale and components built as a system, so page fifty looks like page one without anyone policing it.',
        artifacts: [
          'Token set and type scale',
          'Component library',
          'Contrast verified across every pairing',
        ],
      },
      {
        step: 'Build',
        body: 'Pages assembled from the system and the content model, with the gates running from the first commit.',
        artifacts: [
          'Working site on preview URLs',
          'CI pipeline with gates active',
          'Structured data emitted from content',
        ],
      },
      {
        step: 'Verification',
        body: 'Real devices, keyboard-only navigation, screen reader, throttled network. Not a desktop score screenshot.',
        artifacts: [
          'Accessibility audit report',
          'Performance results under throttling',
          'Cross-browser results',
        ],
      },
      {
        step: 'Handover',
        body: 'Repository, hosting, domain and documentation, in your accounts, with training recorded.',
        artifacts: [
          'Everything transferred to your accounts',
          'Editing and deployment documentation',
          'Recorded training session',
        ],
      },
    ],

    faq: [
      {
        q: 'Do we own the code?',
        a: 'Yes, from the first commit, in your repository and your hosting account. There is no licence, no proprietary builder and no version of leaving that requires a rebuild.',
      },
      {
        q: 'How long does a site take?',
        a: 'A focused marketing site is typically six to ten weeks. Anything with real integrations — booking, commerce, an existing back office — depends on those systems, which is why the intent mapping stage exists before a number is quoted.',
      },
      {
        q: 'Can our team edit it without a developer?',
        a: 'Copy, pages and services, yes. Structural changes to how a page type works are a development task, and we are explicit during design about where that line falls so it is not a surprise later.',
      },
      {
        q: 'What about SEO?',
        a: 'The technical foundation is part of the build — server-rendered HTML, semantic structure, structured data generated from content, sitemap, and speed. Content strategy and authority building are a separate discipline, and we do that too, as a separate engagement.',
      },
      {
        q: 'What happens after launch?',
        a: 'Support is a choice, not a lock-in. Some clients keep us on a retainer, some take it in-house with the documentation. Both are fine, because the ownership position makes both possible.',
      },
    ],

    handoff: {
      headline: 'A working site produces conversations.',
      body: 'Every form, chat widget and phone number on a site that finally converts creates inbound volume — usually more than the team that asked for the site was staffed for. We run those queues as well, so the launch does not quietly become somebody’s second job.',
      operation: 'live-chat-support',
    },

    related: ['mobile-app-development', 'seo', 'ai-agents'],
  },

  /* ====================================================================== */
  {
    slug: 'mobile-app-development',
    group: 'Development',
    accent: 'violet',
    eyebrow: 'Mobile App Development',
    title: 'Mobile App Development',
    headline: { lead: 'Most businesses do not need an app.', accent: 'Some genuinely do.' },
    summary:
      'Native and cross-platform apps built where a mobile app is the right answer — offline capability, device hardware, or a workflow people run all day in the field.',
    metaTitle: 'Mobile App Development | Universal Virtual Support',
    metaDescription:
      'Mobile app development for businesses with a genuine mobile case: offline-first field tools, device hardware access, and workflows that live on a phone.',
    keywords: [
      'mobile app development company',
      'React Native development',
      'field service app development',
      'offline first mobile app',
      'iOS Android app development',
    ],

    intent: {
      primary:
        'A business that has been quoted for an app and is not sure whether they need one.',
      queries: [
        'do I need a mobile app or a website',
        'field service app for technicians',
        'React Native vs native development',
        'offline mobile app for field staff',
      ],
    },

    builtFor: {
      headline: 'Built for workflows that genuinely live on a phone.',
      intro:
        'An app is justified by three things: working without signal, needing the device hardware, or being used many times a day by the same people. If none of those apply, a fast mobile website will beat an app on cost and adoption.',
      segments: [
        {
          niche: 'home-services',
          label: 'Field service and trades',
          trigger:
            'Technicians work in basements and roof spaces with no signal, and paperwork is completed in the van afterwards from memory.',
          built:
            'An offline-first job app — checklists, photos, signatures and parts used — that syncs when signal returns and resolves conflicts predictably.',
          edge: 'Offline is the default state, not an error condition handled at the end.',
        },
        {
          niche: 'logistics',
          label: 'Carriers and last-mile delivery',
          trigger:
            'Proof of delivery is a photo on a personal phone, sent by text, filed by nobody.',
          built:
            'Driver apps with scanning, capture, route awareness and proof of delivery written straight into the TMS.',
          edge: 'Battery and data cost are treated as design constraints — a driver app runs ten hours.',
        },
        {
          niche: 'healthcare',
          label: 'Care providers and mobile clinicians',
          trigger:
            'Visit notes are written on paper in the field and typed up at the end of a shift, hours later.',
          built:
            'Point-of-care capture on a device, with data handled to the boundary the service operates under.',
          edge: 'Device-level data handling is designed to the constraint from day one.',
        },
        {
          niche: 'manufacturing',
          label: 'Warehouse and plant operations',
          trigger:
            'Stock movements are recorded on a clipboard and entered into the ERP the next morning.',
          built:
            'Scanner-driven apps for picking, counts and movements, writing to the ERP as it happens.',
          edge: 'Built for gloved hands and a scanner, not for a designer’s thumb on a clean phone.',
        },
      ],
      notFor:
        'If the goal is a customer-facing app to increase engagement with a service people use monthly, it will be downloaded once and deleted. We will say that on the first call and propose a fast mobile web experience instead.',
    },

    problem: {
      headline: 'The app gets built. Then it gets deleted.',
      body: 'Consumer apps are downloaded and abandoned within a week, and internal field apps are quietly worked around because they are slower than the paper they replaced. Both failures share a cause: the app was specified as a feature list rather than designed around the conditions it would actually be used in.',
      points: [
        'It needs a connection, and the work happens where there is none.',
        'It duplicates the website with a worse layout and an install step.',
        'Field staff use it because they must, and keep the paper as the real record.',
        'It was built for one platform and now needs the other, which means starting again.',
      ],
    },

    solution: {
      headline: 'We argue about whether you need one first.',
      body: 'The most valuable part of this engagement is often the recommendation not to build. Where an app is right, four things decide whether it gets used, and all four are design decisions rather than features.',
      pillars: [
        {
          title: 'Offline as the default state',
          body: 'The app assumes no connection, queues everything locally, and syncs with a defined conflict rule. Signal becomes a bonus rather than a requirement.',
        },
        {
          title: 'Designed for the conditions',
          body: 'Gloves, sunlight, one hand, a cracked screen, ten hours of battery. The constraints are named before layout starts.',
        },
        {
          title: 'One codebase where it is honest',
          body: 'React Native where the app is workflow-driven; native where the hardware or performance genuinely demands it. We tell you which this is and why.',
        },
        {
          title: 'Release you can survive',
          body: 'Store submissions, staged rollout, crash reporting and over-the-air updates for the parts that allow it — set up before launch, not after the first bad review.',
        },
      ],
    },

    mechanism: {
      headline: 'What happens when there is no signal.',
      body: 'Offline is not an error state to handle at the end. It is the assumption the data layer is built on, and sync is a designed behaviour with a rule for every conflict.',
      module: 'sync-queue',
      nodes: ['Act', 'Queue locally', 'Detect signal', 'Sync', 'Resolve', 'Confirm'],
      branchAt: 'Resolve',
      branchLabel: 'Conflict → rule',
      notes: [
        'Actions complete instantly against local storage. The user never waits on a network they may not have.',
        'Conflicts resolve on a rule agreed with you during design — last-write, server-wins or held for review, per record type.',
        'The queue survives a force-quit, a flat battery and an app update. It is storage, not memory.',
      ],
    },

    outcomes: [
      {
        title: 'It gets used in the field',
        body: 'Built around signal loss, gloves and battery life, so it is faster than the paper process rather than a compliance obligation.',
        measure: 'Adoption without enforcement — the paper fallback stops being used.',
      },
      {
        title: 'Data arrives once, at the source',
        body: 'Captured where the work happens rather than re-entered later, which removes both the delay and the transcription error.',
        measure: 'Records created in the field, not re-keyed at the office.',
      },
      {
        title: 'Shipping stays possible',
        body: 'Store pipelines, staged rollout and crash reporting configured before launch, so the second release is routine.',
        measure: 'Releases shipped by your team after handover.',
      },
    ],

    stack: [
      'React Native',
      'Expo',
      'Swift',
      'Kotlin',
      'SQLite',
      'TypeScript',
      'PostgreSQL',
    ],

    process: [
      {
        step: 'The app question',
        body: 'Does this need to be an app? Offline, hardware, or daily repeated use. If none apply we recommend mobile web and scope that instead.',
        artifacts: [
          'Written recommendation, including "do not build"',
          'Platform decision with reasoning',
          'Cost comparison against mobile web',
        ],
      },
      {
        step: 'Field study',
        body: 'We watch the work happen in the place it happens. Every unused field app was designed from a description of the job rather than the job.',
        artifacts: [
          'Observed workflow, documented',
          'Environmental constraints',
          'The current workaround, and why it exists',
        ],
      },
      {
        step: 'Data and sync design',
        body: 'What is stored locally, what syncs, and what happens to every kind of conflict. Decided before any screen is built.',
        artifacts: [
          'Local data model',
          'Sync and conflict rules per record type',
          'Offline behaviour specification',
        ],
      },
      {
        step: 'Build',
        body: 'Screens and workflow against the real data layer, tested on real devices from the first week.',
        artifacts: [
          'Test builds on real devices',
          'Offline scenarios verified',
          'Crash reporting live',
        ],
      },
      {
        step: 'Field pilot',
        body: 'A small group, real jobs, real conditions — including the basement with no signal.',
        artifacts: [
          'Pilot findings from actual users',
          'Battery and data measurements',
          'Revised workflow',
        ],
      },
      {
        step: 'Release and handover',
        body: 'Store submission, staged rollout, and the accounts and pipeline transferred to you.',
        artifacts: [
          'Apps published under your developer accounts',
          'Release pipeline documented',
          'Recorded training session',
        ],
      },
    ],

    faq: [
      {
        q: 'Do we actually need an app?',
        a: 'Often not, and the first stage exists to answer that honestly. The test is whether the work happens offline, needs device hardware, or is repeated many times a day by the same people. If none of those hold, a fast mobile site wins on cost, on reach and on adoption.',
      },
      {
        q: 'React Native or native?',
        a: 'React Native for workflow-driven apps where one codebase across both platforms is the dominant economic fact. Native where sustained camera work, background processing or platform-specific hardware makes the bridge a real cost. We make the call during the platform decision and show the reasoning.',
      },
      {
        q: 'What about the app stores?',
        a: 'We handle submission and review under your developer accounts. Review timelines belong to Apple and Google, so we build in the buffer rather than promise a date we do not control.',
      },
      {
        q: 'How do you handle updates after launch?',
        a: 'Over-the-air updates for the JavaScript layer where the platform permits it, so content and logic fixes ship without a store round trip. Native changes go through review. Both paths are set up before launch.',
      },
      {
        q: 'Who owns the app?',
        a: 'You do — code, store listings and developer accounts, all in your name from the start.',
      },
    ],

    handoff: {
      headline: 'Field data has to be checked by someone.',
      body: 'Capture in the field produces a stream of records with photos, signatures and free text attached, and a share of them need review — the illegible signature, the count that does not reconcile, the note flagged for follow-up. That verification queue is work, and it is work we staff.',
      operation: 'data-entry',
    },

    related: ['website-development', 'ai-development', 'ai-agents'],
  },
];
