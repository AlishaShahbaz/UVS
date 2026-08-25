/**
 * COMPLIANCE DESKS.
 *
 * The two desks that sit apart from the rest of the Run half, because what is
 * being bought is different. A chat desk is bought for response time. These are
 * bought for a defensible decision: someone reviewed this, against this policy
 * version, on this evidence, and it can be reconstructed for a regulator two
 * years later.
 *
 * That difference drives the writing. Throughput matters and is not the point —
 * a queue cleared fast with unreviewable decisions is a liability with a delay
 * on it, and the pages say so.
 *
 * WRITING CONSTRAINT IN FORCE
 *   No regulatory advice, anywhere. We describe operational capability — who
 *   reviews, to what SLA, with what audit trail. Where a page brushes against
 *   what a regulation requires, it defers to the client's compliance function
 *   rather than interpreting the rule. That line is a real one: we run the
 *   queue, we do not own the policy.
 */

export const complianceOperations = [
  /* ====================================================================== */
  {
    slug: 'kyc-onboarding',
    group: 'Compliance',
    accent: 'deep',
    eyebrow: 'KYC & Onboarding',
    title: 'KYC & Onboarding',
    headline: { lead: 'The user who waits two days', accent: 'funds an account somewhere else.' },
    summary:
      'Trained reviewers on your verification and document queues, worked to a defined SLA, with every decision recorded against the policy version it was made under.',
    metaTitle: 'KYC & Onboarding Support — verification queues, staffed | Universal Virtual Support',
    metaDescription:
      'Outsourced KYC and onboarding operations: document review, identity verification and EDD queues worked to a defined SLA by trained reviewers, with a full audit trail.',
    keywords: [
      'outsourced KYC operations',
      'KYC document review service',
      'onboarding verification outsourcing',
      'EDD review team',
      'fintech onboarding support',
    ],

    intent: {
      primary:
        'A fintech or neobank operations lead whose onboarding queue grows fastest in the weeks acquisition is working.',
      queries: [
        'outsourced KYC review team',
        'how to scale KYC operations',
        'onboarding verification backlog fintech',
        'KYC SLA benchmark',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where onboarding is the first thing a customer experiences.',
      intro:
        'Verification is the one queue where the cost of being slow and the cost of being wrong both fall on you at once. These are the businesses where that tension is sharpest.',
      segments: [
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'A campaign lands, sign-ups multiply, and the verification queue that took an hour now takes two days — so the users acquisition just paid for churn before funding an account.',
          built:
            'A reviewer pool that flexes with volume, working your policy to an SLA you set, with straight-through cases cleared automatically and only genuine exceptions reaching a person.',
          edge: 'Capacity is contracted against your volume curve. Onboarding is spiky by nature, and a fixed team is either idle or underwater.',
        },
        {
          niche: 'financial-services',
          label: 'Lenders, brokers and regulated practices',
          trigger:
            'Application packs arrive as unstructured documents and a qualified person reads every one before anything can move.',
          built:
            'Document review with extraction handling the bulk and reviewers handling anything below the confidence threshold you set, filed against the right client record.',
          edge: 'The threshold is yours, because it is a risk decision rather than a technical one.',
        },
        {
          niche: 'real-estate',
          label: 'Property management and lettings',
          trigger:
            'Tenant screening documents are collected and checked by hand, one applicant at a time, and the criteria live in one person’s head.',
          built:
            'Document collection, verification and screening against written criteria, applied identically to every applicant.',
          edge: 'Identical application of written criteria is also a fairness property, not just an efficiency one.',
        },
        {
          niche: 'education',
          label: 'Course providers and institutes',
          trigger:
            'Enrolment season brings applicant documents faster than admissions can verify them, and eligibility rules changed this year.',
          built:
            'Applicant document verification against current, versioned policy, with seasonal capacity that scales back down afterwards.',
          edge: 'Policy is versioned, so a decision made in March can be explained in September.',
        },
      ],
      notFor:
        'We run the queue; we do not own your policy. If you need someone to decide what your risk appetite should be or to sign off a compliance framework, that is a consultancy engagement and we are not it.',
    },

    problem: {
      headline: 'Fast and defensible are treated as a trade-off. They are not.',
      body: 'Under pressure, verification teams optimise for whichever one they are measured on. Measured on throughput, the queue clears and the decisions thin out. Measured on caution, everything escalates and the SLA collapses. Both failures come from the same missing thing: a written standard for what a sufficient review looks like, applied the same way by everyone.',
      points: [
        'The backlog grows fastest in the weeks acquisition is working best.',
        'Two reviewers reach different decisions on the same case, and neither is wrong under the policy as written.',
        'Escalation happens on instinct, so the same edge case is escalated by one reviewer and cleared by another.',
        'Reconstructing why an account was approved means asking whoever remembers.',
      ],
    },

    solution: {
      headline: 'A written standard, applied by a trained pool, recorded as it happens.',
      body: 'The work is not hard to do well once. It is hard to do identically, at volume, on the worst day of the quarter, by people who joined last month. That is an operations problem, and it is the one we solve.',
      pillars: [
        {
          title: 'Straight-through where it is safe',
          body: 'Clean cases clear automatically against your rules. Reviewer attention goes to the cases that genuinely need judgement rather than to the ones that pass on sight.',
        },
        {
          title: 'One standard, versioned',
          body: 'What counts as sufficient evidence is written down and versioned. A decision made in March can be explained in September against the policy that was live in March.',
        },
        {
          title: 'Escalation by rule',
          body: 'What goes to enhanced review, and what goes to your compliance team, is a written condition — not a reviewer’s instinct on the day.',
        },
        {
          title: 'The audit trail is the output',
          body: 'Reviewer, timestamp, evidence seen, policy version and outcome recorded on every case, in your system. Not a report generated afterwards.',
        },
      ],
    },

    mechanism: {
      headline: 'Where a case stops, and who it stops for.',
      body: 'Three exits rather than two. Most queues have pass and fail, which forces every ambiguous case into one of them; the third exit is what keeps both the SLA and the standard intact.',
      module: 'kyc-path',
      nodes: ['Submitted', 'Auto-checks', 'Reviewer', 'Decision', 'Recorded'],
      branchAt: 'Reviewer',
      branchLabel: 'EDD or → your compliance team',
      notes: [
        'Automated checks run first, so reviewers spend their attention on cases that need a person rather than on cases that pass on sight.',
        'Enhanced review is a defined path with its own SLA, not an indefinite hold that quietly ages.',
        'Anything touching your risk appetite goes to your compliance function. We work the queue; the policy stays yours.',
      ],
    },

    outcomes: [
      {
        title: 'The SLA survives the spike',
        body: 'Capacity is contracted against your volume curve rather than a headcount, so the queue that grows with a campaign is absorbed instead of becoming a backlog.',
        measure: 'Time to decision at the 90th percentile, held through volume peaks.',
      },
      {
        title: 'Decisions stop varying by reviewer',
        body: 'One written standard and sampled QA mean the same case gets the same outcome regardless of who opened it.',
        measure: 'QA agreement rate between reviewers, sampled and reported.',
      },
      {
        title: 'The trail already exists',
        body: 'Evidence, policy version and reasoning are captured at the point of decision, so a regulator request is a query rather than an investigation.',
        measure: 'Cases reconstructable from the record without asking a person.',
      },
    ],

    stack: ['Persona', 'Sumsub', 'Onfido', 'Claude', 'PostgreSQL', 'Zendesk', 'Slack'],

    process: [
      {
        step: 'Queue audit',
        body: 'Real volume, real decision times, real escalation rates, and where the current standard is ambiguous. The ambiguity is usually the finding.',
        artifacts: [
          'Volume and decision-time baseline',
          'Case type taxonomy from real submissions',
          'Points where the written policy does not decide the case',
        ],
      },
      {
        step: 'Standard and thresholds',
        body: 'What sufficient evidence looks like per case type, what clears automatically, and what escalates. Agreed with your compliance function, not by us.',
        artifacts: [
          'Review standard, versioned',
          'Auto-clear and escalation conditions',
          'The decisions we will never make without you',
        ],
      },
      {
        step: 'Integration',
        body: 'Your verification provider, your case system, your record store. We work in your tools so the audit trail lives where your auditor already looks.',
        artifacts: ['Provider and case system access', 'Write-back configured', 'Data handling agreed to your residency requirements'],
      },
      {
        step: 'Reviewer training',
        body: 'Your policy, your case types, your edge cases — assessed before anyone touches a live case.',
        artifacts: ['Trained reviewer pool', 'Assessment results per reviewer', 'QA rubric'],
      },
      {
        step: 'Parallel run',
        body: 'Our decisions run alongside yours and the two are compared. It is the only honest way to establish that the standard transferred.',
        artifacts: ['Agreement rate against your current team', 'Disagreements analysed by cause', 'Standard corrected where it was ambiguous'],
      },
      {
        step: 'Run',
        body: 'Full volume with daily SLA reporting, sampled QA, and a standing review where the standard actually changes.',
        artifacts: ['Daily SLA report', 'Weekly QA agreement rate', 'Monthly standard review'],
      },
    ],

    faq: [
      {
        q: 'Do you make the compliance decisions, or do we?',
        a: 'We apply the standard you set and escalate anything that touches your risk appetite to your compliance function. We run the queue; you own the policy. That line is written into the escalation conditions during onboarding, and it is not a soft one.',
      },
      {
        q: 'How fast can a case be decided?',
        a: 'It depends on your case mix and your standard, so we baseline both during the queue audit rather than quoting a number. What we commit to is an SLA agreed against that baseline and reported daily — including the cases that missed it.',
      },
      {
        q: 'What about data residency?',
        a: 'It is a constraint we design to, not around. Where case data cannot leave a jurisdiction, reviewers and processing sit inside it. That shapes which reviewers can be assigned and how the tooling is set up, so it is established in the queue audit rather than discovered later.',
      },
      {
        q: 'How do you keep two reviewers from reaching different decisions?',
        a: 'One versioned standard as the single source, and sampled QA measuring agreement between reviewers. Where two defensible readings exist, the standard is ambiguous and gets fixed — we treat that as the defect rather than blaming the reviewer.',
      },
      {
        q: 'Can you work in our existing verification provider?',
        a: 'Yes — Persona, Sumsub, Onfido, Veriff or your own tooling. We work in your system so the record lives where your auditor already looks, rather than in a portal you would lose access to.',
      },
    ],

    handoff: {
      headline: 'The documents have to be read before they can be judged.',
      body: 'A large share of this queue is extraction before it is ever a decision — pulling fields off a passport, a utility bill, a company registration in a language nobody on the team reads. The engineering that does that reliably, with a confidence score on every field, is something we build as a product. Running the review desk is what tells us where it actually breaks.',
      service: 'ai-development',
    },

    related: ['transaction-monitoring', 'data-entry', 'email-support'],
  },

  /* ====================================================================== */
  {
    slug: 'transaction-monitoring',
    group: 'Compliance',
    accent: 'amber',
    eyebrow: 'Transaction & Risk Monitoring',
    title: 'Transaction & Risk Monitoring',
    headline: { lead: 'An alert nobody worked', accent: 'is worse than no alert at all.' },
    summary:
      'Staffed alert review, account investigations and back-office risk operations — worked to an SLA, with the reasoning recorded on every disposition.',
    metaTitle: 'Transaction & Risk Monitoring Support | Universal Virtual Support',
    metaDescription:
      'Outsourced transaction monitoring operations: alert triage, account reviews and investigation queues worked by trained analysts to a defined SLA with full audit trails.',
    keywords: [
      'outsourced transaction monitoring',
      'alert review team',
      'AML alert triage outsourcing',
      'risk operations outsourcing',
      'account review back office',
    ],

    intent: {
      primary:
        'A risk or ops lead whose alert queue generates more volume than the team can work, most of it false positives.',
      queries: [
        'outsourced transaction monitoring analysts',
        'AML alert backlog',
        'false positive rate alert review',
        'risk operations outsourcing fintech',
      ],
    },

    builtFor: {
      headline: 'Built for businesses whose monitoring generates more alerts than people.',
      intro:
        'Every monitoring system is tuned to over-fire, because the alternative is worse. That tuning decision creates an operational problem, and the operational problem is the one we take.',
      segments: [
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'The monitoring system fires thousands of alerts a month, the overwhelming majority are false positives, and the queue is worked by whoever on the ops team has an afternoon.',
          built:
            'A trained analyst pool working alerts to an SLA, with triage separating the obvious from the genuine and every disposition carrying its reasoning.',
          edge: 'We report which rules generate the most cleared alerts — so your tuning improves instead of the queue just being absorbed.',
        },
        {
          niche: 'financial-services',
          label: 'Lenders, insurers and regulated practices',
          trigger:
            'Periodic account reviews are scheduled, then postponed, because the people who can do them are doing something more urgent.',
          built:
            'Scheduled review cycles worked to completion by a dedicated pool, with findings escalated on written conditions.',
          edge: 'Scheduled work actually happens when it is somebody’s only job rather than everybody’s second one.',
        },
        {
          niche: 'ecommerce',
          label: 'DTC brands and marketplaces',
          trigger:
            'Chargebacks and fraud flags arrive constantly and are handled reactively, usually after the goods have shipped.',
          built:
            'Order and chargeback review against your rules, with representment packs assembled and filed inside the deadline.',
          edge: 'Chargeback windows are hard deadlines. Missing one is a loss that no amount of evidence recovers.',
        },
        {
          niche: 'logistics',
          label: 'Freight brokers and 3PL',
          trigger:
            'Carrier onboarding and ongoing checks are paperwork that someone experienced has to read, and it competes with dispatch.',
          built:
            'Carrier verification and periodic re-checks worked as a standing queue rather than as an interruption.',
          edge: 'Taken off the dispatchers, who are the most expensive people to interrupt.',
        },
      ],
      notFor:
        'We work alerts against your rules and escalate on your conditions. We do not tune your monitoring thresholds, file your regulatory reports, or make the decision to exit a customer — those sit with your compliance function and we will not pretend otherwise.',
    },

    problem: {
      headline: 'The queue is mostly noise, and that is exactly why it gets neglected.',
      body: 'Monitoring is deliberately tuned to over-fire, so the overwhelming majority of alerts clear. A team that works them all day learns, correctly, that almost nothing is real — and that learned expectation is what makes the one that is real easy to miss. The backlog is not a resourcing failure so much as a predictable consequence of the tuning.',
      points: [
        'Alert volume exceeds what the team can work, so the oldest are cleared in batches to make the number look better.',
        'Dispositions are recorded as a status with no reasoning, so nobody can audit the decision later.',
        'The same rule generates the same false positive every week and nobody feeds that back into tuning.',
        'Periodic reviews are scheduled and postponed indefinitely because something more urgent always exists.',
      ],
    },

    solution: {
      headline: 'Work every alert, and make the queue smaller over time.',
      body: 'Absorbing the volume is table stakes. The part that compounds is reporting which rules produce cleared alerts, so your tuning improves and next quarter’s queue is smaller — a vendor paid by the alert has no reason to tell you that.',
      pillars: [
        {
          title: 'Triage before investigation',
          body: 'Alerts are classified on arrival so obvious clears and genuine concerns get different depth and different SLAs. Uniform treatment is what creates backlogs.',
        },
        {
          title: 'Reasoning, not a status code',
          body: 'Every disposition carries what was checked and why it was concluded. A status field with no narrative is unauditable, which means it is worthless later.',
        },
        {
          title: 'Escalation on written conditions',
          body: 'What reaches your compliance team is defined in advance. We surface and escalate; the regulatory decision stays with you.',
        },
        {
          title: 'Feedback into tuning',
          body: 'We report which rules generate the most cleared alerts. Your monitoring team gets the evidence to tune, and the queue shrinks.',
        },
      ],
    },

    mechanism: {
      headline: 'Triage first, or the queue wins.',
      body: 'Treating every alert with equal depth is what turns a monitoring system into a backlog. Separation happens on arrival, before anyone is waiting.',
      module: 'alert-path',
      nodes: ['Alert', 'Triage', 'Investigate', 'Disposition', 'Escalate or close'],
      branchAt: 'Disposition',
      branchLabel: '→ your compliance team',
      notes: [
        'Triage sets depth and SLA on arrival, so a routine clear does not consume the attention a genuine concern needs.',
        'Every disposition records what was checked and why — the narrative is the audit artefact, not the status field.',
        'Escalations go to your compliance function on written conditions. We do not file reports or make exit decisions.',
      ],
    },

    outcomes: [
      {
        title: 'The backlog stops being structural',
        body: 'Capacity is matched to alert volume rather than to a headcount someone approved last year, so the queue is worked rather than batch-cleared.',
        measure: 'Queue age distribution, and alerts worked within SLA.',
      },
      {
        title: 'Dispositions become auditable',
        body: 'Reasoning captured at the point of decision means a review months later is a query rather than an archaeology exercise.',
        measure: 'Dispositions carrying a written rationale — all of them.',
      },
      {
        title: 'The queue gets smaller',
        body: 'False positive patterns reported back by rule, so your monitoring team can tune with evidence instead of intuition.',
        measure: 'Cleared-alert volume by rule, reported monthly.',
      },
    ],

    stack: ['Unit21', 'Sardine', 'Hawk', 'PostgreSQL', 'Claude', 'Looker Studio', 'Jira'],

    process: [
      {
        step: 'Queue audit',
        body: 'Alert volume by rule, clear rate, current SLA and where the backlog actually sits. The clear rate per rule is usually the most useful number nobody is looking at.',
        artifacts: ['Volume and clear rate by rule', 'Backlog age profile', 'Current disposition quality assessed'],
      },
      {
        step: 'Triage design',
        body: 'How alerts are classified on arrival, what depth each class gets, and the SLA per class.',
        artifacts: ['Triage classification', 'Investigation depth per class', 'SLA per class'],
      },
      {
        step: 'Standard and escalation',
        body: 'What a sufficient investigation looks like, and the written conditions that send a case to your compliance team.',
        artifacts: ['Investigation standard, versioned', 'Escalation conditions agreed with your compliance function', 'Disposition template'],
      },
      {
        step: 'Analyst training',
        body: 'Your product, your typologies, your customer base. Assessed on historical alerts before touching the live queue.',
        artifacts: ['Trained analyst pool', 'Assessment against historical dispositions', 'QA rubric'],
      },
      {
        step: 'Parallel run',
        body: 'Our dispositions compared against yours on the same alerts, with disagreements analysed rather than averaged.',
        artifacts: ['Agreement rate', 'Disagreements analysed by cause', 'Standard corrected where ambiguous'],
      },
      {
        step: 'Run',
        body: 'Full queue with daily SLA reporting, sampled QA, and a monthly false-positive report by rule.',
        artifacts: ['Daily SLA report', 'Weekly QA sampling', 'Monthly tuning report by rule'],
      },
    ],

    faq: [
      {
        q: 'Do you file regulatory reports for us?',
        a: 'No. We investigate, document and escalate on the conditions you set; filing decisions and regulatory submissions stay with your compliance function. Any vendor offering to make that call on your behalf is offering you a risk, not a service.',
      },
      {
        q: 'Will you tune our monitoring rules?',
        a: 'We report the evidence — which rules generate the most cleared alerts, and the patterns behind them — and your monitoring team tunes. We are careful about that line, because we are the party that benefits from a larger queue and should not be the one deciding its size.',
      },
      {
        q: 'How do you handle a genuine hit?',
        a: 'It escalates immediately on the written conditions agreed during onboarding, with the investigation documented so your compliance team receives a case rather than a notification.',
      },
      {
        q: 'What SLA can we expect?',
        a: 'Set per triage class against the baseline from your queue audit rather than quoted as a universal number. Reported daily, including the cases that missed it — a report that only shows successes is not a report.',
      },
      {
        q: 'Can analysts work inside our systems?',
        a: 'Yes, and that is the arrangement we prefer — your case management, your record store, your access controls. The audit trail then lives where your auditor already looks.',
      },
    ],

    handoff: {
      headline: 'Triage is a classification problem before it is a staffing one.',
      body: 'A meaningful share of this queue can be classified before a person sees it — separating the obvious clear from the case that needs an analyst. That is engineering we build, and building it is only honest when the same company works the queue underneath: a threshold set too aggressively costs us the investigation, so our incentive and yours point the same way.',
      service: 'ai-agents',
    },

    related: ['kyc-onboarding', 'data-entry', 'email-support'],
  },
];
