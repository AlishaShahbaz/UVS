/**
 * VIRTUAL ASSISTANT — the admin delegation desk.
 *
 * ## The honest positioning problem, and the honest answer
 *
 * Every competitor in this market sells a *dedicated assistant*: one named
 * person matched to you. The keyword research is full of it — "dedicated
 * virtual assistant" carries a $30.64 CPC, the highest in the VA cluster.
 *
 * We do not sell that. We staff desks: a trained pool working your queue to a
 * service level, with an AI layer on the repetitive share. Writing "dedicated"
 * here would be the single easiest lie on this site and the fastest one to be
 * caught in, so the page does the opposite — it names the difference and argues
 * for it.
 *
 * That argument is real, not a rationalisation. The one-assistant model has a
 * failure mode nobody selling it puts on their page: your assistant takes
 * holiday, gets sick, or leaves — and every process they learned leaves with
 * them, because it lived in one person's head rather than in a documented
 * standard. A desk does not go on holiday.
 *
 * So the page targets the search vocabulary ("virtual assistant services",
 * 6,600/mo) and then immediately, in the first section, tells the reader we are
 * not the thing most of those results are selling. Readers who wanted a single
 * named person find that out on rung two instead of in month three.
 */

export const assistantOperations = [
  {
    slug: 'virtual-assistant',
    group: 'Transaction',
    accent: 'azure',
    eyebrow: 'Virtual Assistant',
    title: 'Virtual Assistant',
    headline: { lead: 'Not one assistant.', accent: 'A desk that does not go on holiday.' },
    summary:
      'Virtual assistant services run as a staffed desk — inbox, calendar, data entry, research and follow-up worked to a turnaround you set, by a trained pool rather than a single person.',
    metaTitle: 'Virtual Assistant Services | Universal Virtual Support',
    metaDescription:
      'Virtual assistant services for admin, inbox, calendar and data entry — run as a staffed desk with documented processes, so cover never depends on one person.',
    keywords: [
      'virtual assistant services',
      'hire a virtual assistant',
      'virtual assistant for small business',
      'outsourced virtual assistant',
      'virtual administrative assistant',
      'virtual assistant company',
    ],

    intent: {
      primary:
        'An owner or operator losing their week to admin, who has been quoted for a dedicated VA and is unsure it is the right shape.',
      queries: [
        'virtual assistant services',
        'hire a virtual assistant for small business',
        'dedicated vs shared virtual assistant',
        'what tasks should I delegate to a virtual assistant',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where the admin is recurring, not creative.',
      intro:
        'Delegation works where the work is rule-shaped and repeats. Where it needs your judgement every time, no assistant model helps — it just moves the decision.',
      segments: [
        {
          niche: 'saas',
          label: 'B2B software and platform companies',
          trigger:
            'Engineers and founders are doing CRM hygiene, scheduling and inbox triage because it is nobody’s job and it never stops.',
          built:
            'A desk taking the recurring admin — pipeline upkeep, scheduling, research, follow-up — with the process documented rather than learned by one person.',
          edge: 'The documentation is the deliverable. It is yours, and it survives us.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger:
            'Listing admin, document chasing and follow-up sit between viewings and get done at nine at night.',
          built:
            'Listing and document workflows worked as a standing queue, with chasing that actually happens on a schedule.',
          edge: 'Chasing is scheduled work here, not something remembered when quiet.',
        },
        {
          niche: 'ecommerce',
          label: 'DTC brands and marketplace sellers',
          trigger:
            'Product data, supplier emails and order admin expand with every SKU and every channel added.',
          built:
            'Catalogue upkeep, supplier correspondence and order admin handled against your live commerce platform.',
          edge: 'Worked in your systems, so nothing lives in a spreadsheet we own.',
        },
        {
          niche: 'legal',
          label: 'Legal practices',
          trigger:
            'Fee earners are formatting documents, chasing client paperwork and updating the case system between matters.',
          built:
            'Document preparation, client document chasing and case-system upkeep taken off billable people.',
          edge: 'Filed to the right matter with an audit trail, because in this work the filing is the record.',
        },
        {
          niche: 'financial-services',
          label: 'Brokers and accounting practices',
          trigger:
            'Client paperwork, renewals and data entry sit with qualified staff whose time is worth several times the task.',
          built:
            'Document handling, renewal chasing and data entry worked to a written standard with a review threshold you set.',
          edge: 'Anything below confidence stops for a person. Approximately right is wrong in this work.',
        },
      ],
      notFor:
        'If you want one named person who becomes part of your team culture, we are the wrong shape and we will say so on the first call. That model has real advantages; consistency of cover is not one of them.',
    },

    problem: {
      headline: 'The dedicated assistant is a single point of failure.',
      body: 'One person learns your business, and for a while it works better than anything. Then they take leave, get ill, or leave — and the processes go with them, because they were never written down anywhere except in that person’s memory. You start again, and the second onboarding is slower than the first because nobody documented the first.',
      points: [
        'Your assistant is on holiday and the work simply stops for two weeks.',
        'Processes live in one person’s head, so cover means re-explaining everything.',
        'When they leave, the context leaves with them and you rebuild from nothing.',
        'Volume doubles for a month and one person cannot absorb it, so the backlog is yours.',
      ],
    },

    solution: {
      headline: 'Document the work, then staff it properly.',
      body: 'The advantage of a dedicated assistant is context. The way to keep that advantage without the fragility is to write the context down — so it belongs to your business rather than to one person — and then put a trained team behind it.',
      pillars: [
        {
          title: 'Processes written down',
          body: 'Every recurring task documented as we learn it. That document is yours, it is the actual deliverable, and it is what makes cover possible.',
        },
        {
          title: 'A named lead, a trained pool',
          body: 'One Team Lead who knows your account, with trained people behind them. Continuity comes from the standard, not from one person never being ill.',
        },
        {
          title: 'The AI layer takes the repetition',
          body: 'Data entry, extraction and routine drafting absorbed automatically, so paid hours go to work that needs a person.',
        },
        {
          title: 'A turnaround, not an hours bundle',
          body: 'You buy work completed inside a window rather than a block of hours somebody logged.',
        },
      ],
    },

    mechanism: {
      headline: 'How a task becomes something the desk can run.',
      body: 'The first time is slow because it is being documented. Every time after that is the point.',
      module: 'delegation-path',
      nodes: ['Hand over', 'Document', 'Run', 'Review', 'Refine'],
      branchAt: 'Run',
      branchLabel: 'Exception → back to you',
      notes: [
        'Documentation happens during the first run, not as a separate project nobody funds.',
        'Anything outside the documented case stops and comes back to you rather than being guessed.',
        'Recurring exceptions become new documented rules, so the desk needs you less over time.',
      ],
    },

    outcomes: [
      {
        title: 'The work continues through absence',
        body: 'Cover is a trained pool working a written standard, so leave, illness and turnover stop being your problem.',
        measure: 'Turnaround held through holidays and staff changes.',
      },
      {
        title: 'Your processes become an asset',
        body: 'Every task is documented as it is handed over, and that documentation is yours — including if you take the work back in-house.',
        measure: 'Documented processes delivered, and owned by you.',
      },
      {
        title: 'Hours go back to the business',
        body: 'Recurring admin leaves the calendar of whoever was absorbing it, which is usually someone whose time is worth considerably more.',
        measure: 'Hours returned, by task category.',
      },
    ],

    stack: ['HubSpot', 'Google Workspace', 'Microsoft 365', 'Notion', 'Claude', 'Zapier'],

    process: [
      {
        step: 'Task inventory',
        body: 'What actually eats the week, how often, and how much of it is genuinely rule-shaped. The tasks we recommend keeping are part of the output.',
        artifacts: [
          'Scored task inventory',
          'Estimated hours per task',
          'The tasks we recommend you do not delegate',
        ],
      },
      {
        step: 'Access and boundaries',
        body: 'Tool access set up properly, and a written line on what the desk may never do alone.',
        artifacts: [
          'Access configured through your systems',
          'Never-do list',
          'Confidentiality terms agreed',
        ],
      },
      {
        step: 'Documented handover',
        body: 'Each task run once alongside you and written down as it happens. This is the step that makes the rest work.',
        artifacts: [
          'Process documentation per task',
          'Templates and standards',
          'Escalation triggers',
        ],
      },
      {
        step: 'Shadow run',
        body: 'The desk runs the work and you review the output before it goes anywhere, until the standard is clearly transferred.',
        artifacts: [
          'Reviewed output sample',
          'Corrections folded into the documentation',
          'Turnaround baseline',
        ],
      },
      {
        step: 'Run',
        body: 'Full handover with a turnaround target and a weekly report of what was completed.',
        artifacts: [
          'Weekly completion report',
          'Turnaround against target',
          'Exception log',
        ],
      },
      {
        step: 'Refine',
        body: 'A monthly review where recurring exceptions become rules and the automated share grows.',
        artifacts: ['Updated documentation', 'Automated share reported', 'Monthly review'],
      },
    ],

    faq: [
      {
        q: 'Do I get a dedicated virtual assistant?',
        a: 'No, and that is deliberate. You get a named Team Lead who knows your account and a trained pool behind them, working from processes documented for your business. A single dedicated person gives you deeper context and a real single point of failure — when they are on leave or they leave, the work and the knowledge both stop. If a dedicated individual is what you want, we are the wrong provider and will say so.',
      },
      {
        q: 'What tasks should I delegate first?',
        a: 'The recurring, rule-shaped, time-consuming ones — inbox triage, scheduling, data entry, document preparation, follow-up. They transfer fastest and free the most hours. Keep the judgement-heavy work until the desk has enough context to be useful on it, which usually takes a few weeks.',
      },
      {
        q: 'How is a virtual assistant service priced?',
        a: 'Against volume and turnaround rather than a block of hours, because hours logged and work completed are not the same measurement. We size it from your real task inventory during the first stage, so the number comes from your work rather than from a rate card.',
      },
      {
        q: 'Who owns the process documentation?',
        a: 'You do. It is written for your business, held in your systems, and it stays with you if the engagement ends — including if you take the work back in-house. A provider whose documentation leaves with them has made you dependent by design.',
      },
      {
        q: 'How is this different from your Data Entry desk?',
        a: 'Data Entry is one task type run at volume with a confidence threshold and sampled accuracy. This desk is broader and more varied — inbox, calendar, research, document work, follow-up — where the value is coverage across many small recurring tasks rather than throughput on one. Businesses with a single high-volume document process usually want that desk instead.',
      },
    ],

    handoff: {
      headline: 'Most of this work should not need a person at all.',
      body: 'Inside a typical admin queue, a large share is extraction, routing and routine drafting — work an agent completes end to end with a gate on anything consequential. Building that layer is what stops this desk being priced by the hour forever, and running the desk is what tells us where the layer actually breaks.',
      service: 'ai-agents',
    },

    related: ['data-entry', 'email-support', 'order-taking'],
  },
];
