/**
 * DIGITAL MARKETING — service content.
 *
 * These four pages have the hardest job on the site, because the category is
 * saturated with identical claims. The differentiator we actually have is
 * structural rather than rhetorical: we also run the queues the marketing
 * fills, so we can talk about what happens after the click and mean it.
 *
 * Each page is written around a different economic mechanism, so that the four
 * do not blur:
 *   digital-marketing — allocation. Where the money should go at all.
 *   seo               — compounding. Earned position that keeps paying.
 *   google-ads        — capture. Demand that already exists.
 *   meta-ads          — creation. Demand that does not exist yet.
 */

export const marketing = [
  /* ====================================================================== */
  {
    slug: 'digital-marketing',
    group: 'Digital Marketing',
    accent: 'magenta',
    eyebrow: 'Digital Marketing',
    title: 'Digital Marketing',
    headline: { lead: 'More leads is the wrong goal.', accent: 'More answered leads is the goal.' },
    summary:
      'Channel strategy and execution that starts from capacity — because demand you cannot answer is spend you have already lost.',
    metaTitle: 'Digital Marketing — strategy built around capacity | Universal Virtual Support',
    metaDescription:
      'Digital marketing strategy and execution across search, social and paid, planned against the capacity to actually answer the demand it creates.',
    keywords: [
      'digital marketing agency',
      'marketing channel strategy',
      'lead response time',
      'marketing and sales alignment',
      'performance marketing services',
    ],

    intent: {
      primary: 'A business owner spending on marketing without a clear view of which spend produced revenue.',
      queries: [
        'which marketing channel is best for my business',
        'why are my leads not converting',
        'digital marketing strategy for service business',
        'how fast should you respond to a lead',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where the bottleneck is not awareness.',
      intro:
        'If nobody knows you exist, you need reach. Most businesses that call us have the opposite problem: enough enquiry arriving, and not enough of it converted. That is an allocation and response problem, and it is the one we work on.',
      segments: [
        {
          niche: 'home-services',
          label: 'Home services and trades',
          trigger:
            'Spend goes up, the phone rings more, and nobody can say which jobs came from which channel — because attribution stops at the call.',
          built:
            'Channel mix built around job value and seasonality, with call tracking that closes the loop from ad to booked job.',
          edge: 'We measure booked work, not form fills. The two diverge badly in this sector.',
        },
        {
          niche: 'ecommerce',
          label: 'DTC brands and subscription retail',
          trigger:
            'Blended acquisition cost creeps up every quarter and platform-reported ROAS disagrees with the bank account.',
          built:
            'Contribution-margin reporting per channel, tested against holdouts rather than platform-attributed conversions.',
          edge: 'Platform ROAS is a claim by an interested party. We test it.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger:
            'Portal leads arrive constantly and sit unactioned until an agent finishes a viewing.',
          built:
            'Lead flow designed with response capacity in it — because a five-minute response converts several times better than an hour, and that gap is worth more than any bid change.',
          edge: 'The response mechanism is designed with the campaign, not assumed to exist.',
        },
        {
          niche: 'education',
          label: 'Course providers and training institutes',
          trigger:
            'Enrolment season produces ten times the enquiry volume and the same three admissions staff.',
          built:
            'Seasonal campaign planning matched to a staffing and automation plan for the peak it deliberately creates.',
          edge: 'The peak is planned for on both sides, or it is just expensive traffic.',
        },
      ],
      notFor:
        'If you want a monthly report of impressions and engagement, we are a poor fit. We report on revenue and answered demand, which is sometimes a less flattering number.',
    },

    problem: {
      headline: 'The leak is usually after the click.',
      body: 'Campaign performance is analysed to three decimal places while the enquiry it generated sits in an inbox for four hours. In most businesses we look at, the largest available improvement is not in targeting or creative — it is in the minutes between an enquiry arriving and a human responding to it.',
      points: [
        'Leads arrive out of hours and are answered the next working day.',
        'Each platform claims the same conversion, and the totals exceed actual sales.',
        'Spend is allocated by last quarter’s habit rather than by marginal return.',
        'Nobody has connected an advertisement to a booked, delivered, paid job.',
      ],
    },

    solution: {
      headline: 'We plan the answering before we plan the spending.',
      body: 'A channel plan that ignores response capacity is a plan to buy expensive traffic. We start from what happens when an enquiry lands, then decide how much demand it is safe to create and where it should come from.',
      pillars: [
        {
          title: 'Capacity first',
          body: 'What happens to an enquiry at 9pm on a Saturday, and how long until a person responds? That answer sets the ceiling on useful spend.',
        },
        {
          title: 'Allocation by marginal return',
          body: 'Budget moves to where the next pound performs best, reviewed on a cadence — not set annually and defended.',
        },
        {
          title: 'Measurement that survives contact',
          body: 'Server-side tracking, call attribution and holdout tests, because platform-reported numbers are produced by a party with an interest in them.',
        },
        {
          title: 'Creative from the queue',
          body: 'The objections in your support and sales conversations are the highest-converting ad copy available, and they are free.',
        },
      ],
    },

    mechanism: {
      headline: 'Where the money actually goes.',
      body: 'Spend is not allocated once. It moves on a loop, and every stage of that loop is measured against revenue rather than against platform-reported events.',
      module: 'allocation-loop',
      nodes: ['Capacity', 'Allocate', 'Run', 'Measure', 'Reallocate'],
      branchAt: 'Measure',
      branchLabel: 'Holdout test',
      notes: [
        'Capacity sets the ceiling. There is no point buying more demand than can be answered inside the window where it still converts.',
        'Measurement uses holdouts on a schedule, because attribution models describe a claim and holdouts describe reality.',
        'Reallocation is a standing decision on a cadence, not an annual argument about budgets.',
      ],
    },

    outcomes: [
      {
        title: 'Spend follows return',
        body: 'Budget moves on measured marginal performance, so the worst channel stops being funded by inertia.',
        measure: 'Allocation reviewed and changed on a fixed cadence.',
      },
      {
        title: 'The response gap closes',
        body: 'Enquiries are answered inside the window where they still convert, which usually beats any change to targeting or creative.',
        measure: 'Median time from enquiry to human response.',
      },
      {
        title: 'The reporting is believable',
        body: 'Revenue-based attribution with holdout validation, which means the number in the report and the number in the bank agree.',
        measure: 'Revenue attributed per channel, holdout-validated.',
      },
    ],

    stack: ['GA4', 'Google Ads', 'Meta Ads Manager', 'Looker Studio', 'CallRail', 'HubSpot', 'Segment'],

    process: [
      {
        step: 'Capacity audit',
        body: 'What happens to an enquiry today — the route, the hours, the delay. This sets the ceiling on how much demand is worth creating.',
        artifacts: ['Enquiry flow documented end to end', 'Response time measured, by hour and channel', 'The safe spend ceiling'],
      },
      {
        step: 'Measurement repair',
        body: 'Tracking usually needs fixing before anything else is worth doing, or every decision that follows rests on bad data.',
        artifacts: ['Server-side tracking implemented', 'Call attribution configured', 'A revenue-based reporting view'],
      },
      {
        step: 'Channel plan',
        body: 'Which channels, what share, what each is expected to return, and what would falsify that expectation.',
        artifacts: ['Allocation with reasoning', 'Target return per channel', 'Test plan with holdouts'],
      },
      {
        step: 'Execution',
        body: 'Campaigns built and run, with creative drawn from real objections in the sales and support queues.',
        artifacts: ['Campaigns live', 'Creative library', 'Landing pages measured'],
      },
      {
        step: 'Review cadence',
        body: 'A standing session where budget actually moves, rather than a report that is read and filed.',
        artifacts: ['Reallocation decisions with reasoning', 'Test results', 'The next test'],
      },
      {
        step: 'Ownership',
        body: 'Every account in your name. Ad accounts, analytics, tag manager, call tracking.',
        artifacts: ['All accounts under your ownership', 'Documented setup', 'Recorded handover'],
      },
    ],

    faq: [
      {
        q: 'Which channel should we start with?',
        a: 'Usually the one capturing demand that already exists — search, for most service businesses — because it is measurable fastest and needs the least creative investment to validate. Demand creation is a better second move than a first one.',
      },
      {
        q: 'Why do you start with our response process?',
        a: 'Because in most businesses we audit, it is the largest available improvement. Cutting median response from four hours to fifteen minutes typically moves more revenue than any bid or creative change, and it costs less.',
      },
      {
        q: 'Do you require a long contract?',
        a: 'Three months minimum, because measurement below that is noise, and month to month after. Accounts are in your name throughout, so leaving is possible at any point.',
      },
      {
        q: 'Why does platform ROAS disagree with our revenue?',
        a: 'Because each platform claims conversions it influenced, and several platforms claim the same one. That is why we run holdout tests — they measure incremental revenue rather than attributed credit, and the difference is often large.',
      },
      {
        q: 'Can you work with our internal marketing team?',
        a: 'Yes, and it is usually the better arrangement. They hold the brand and the product knowledge; we bring measurement discipline and execution capacity.',
      },
    ],

    handoff: {
      headline: 'Demand you cannot answer is spend you have lost.',
      body: 'This is the whole reason we plan capacity before spend. A campaign that triples enquiry into a team that could barely handle the previous volume produces slower responses, worse conversion and a worse result than doing nothing. We staff the answering side, so the plan can include the capacity rather than assume it.',
      operation: 'live-chat-support',
    },

    related: ['seo', 'google-ads', 'meta-ads'],
  },

  /* ====================================================================== */
  {
    slug: 'seo',
    group: 'Digital Marketing',
    accent: 'moss',
    eyebrow: 'SEO / AEO / GEO',
    title: 'Search & Answer Engine Optimisation',
    headline: { lead: 'Ranking is no longer the finish line.', accent: 'Being cited is.' },
    summary:
      'Technical foundations, content that answers real questions, and structure that lets answer engines quote you — because a growing share of searches never produce a click.',
    metaTitle: 'SEO, AEO & GEO — earn rankings and citations | Universal Virtual Support',
    metaDescription:
      'Search optimisation for both search engines and answer engines: technical foundations, question-shaped content, structured data and citation-ready sourcing.',
    keywords: [
      'SEO agency',
      'answer engine optimisation',
      'generative engine optimisation',
      'AI search visibility',
      'technical SEO services',
    ],

    intent: {
      primary: 'A marketing owner watching organic traffic fall while their content investment stays flat.',
      queries: [
        'what is answer engine optimisation',
        'how to rank in AI search results',
        'organic traffic dropping despite rankings',
        'technical SEO audit services',
      ],
    },

    builtFor: {
      headline: 'Built for businesses whose buyers research before they buy.',
      intro:
        'Search compounds where the purchase involves comparison, and it is close to worthless where it does not. These are the cases where the compounding is real.',
      segments: [
        {
          niche: 'saas',
          label: 'B2B SaaS and platforms',
          trigger:
            'Buyers evaluate for weeks, read comparisons and documentation, and increasingly ask an assistant to summarise the options.',
          built:
            'Documentation and comparison content structured so that both crawlers and answer engines can quote it accurately.',
          edge: 'We optimise for being quoted correctly, which is a different problem from ranking.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and specialty practices',
          trigger:
            'Patients search a symptom or a procedure long before they search for a provider.',
          built:
            'Condition and procedure content that answers the question honestly, with the sourcing and structure that health-related results demand.',
          edge: 'Written to withstand the higher scrutiny applied to health content, not around it.',
        },
        {
          niche: 'legal',
          label: 'Law firms with high enquiry volume',
          trigger:
            'Practice-area pages compete against directories and aggregators that outrank every individual firm.',
          built:
            'Question-shaped practice content plus the technical foundation that makes a single firm legible against a directory.',
          edge: 'Aimed at the specific long-tail questions directories answer generically and badly.',
        },
        {
          niche: 'home-services',
          label: 'Home services and trades',
          trigger:
            'Local pack position decides the phone calls, and the site has no service-area structure at all.',
          built:
            'Service-area architecture and local signals built on real operating areas rather than a page farm.',
          edge: 'One page per genuine service area. A location farm is the oldest thin-content pattern there is.',
        },
        {
          niche: 'ecommerce',
          label: 'DTC and marketplace sellers',
          trigger:
            'Category pages are outranked by marketplaces and product data is invisible to structured results.',
          built:
            'Category and product structure with product schema generated from the same source as the page.',
          edge: 'Schema comes from the content model, so it cannot drift out of sync with the page.',
        },
        {
          niche: 'education',
          label: 'Course providers and training institutes',
          trigger:
            'Prospective students search the qualification, the career outcome and the entry requirements months before they search for a provider.',
          built:
            'Course, career-outcome and eligibility content written to answer directly, structured so an assistant summarising options can quote the entry requirements correctly.',
          edge: 'Entry requirements and fees are versioned content — being quoted with last year’s numbers is worse than not being quoted.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger:
            'Portals and aggregators own every head term, and individual firms compete against them on their own ground and lose.',
          built:
            'Area, building-type and process content aimed at the long-tail questions aggregators answer generically, plus the service-area structure that makes a single firm legible locally.',
          edge: 'We do not bid or optimise for terms the portals have already won. That is a spend decision, not a capability gap.',
        },
      ],
      notFor:
        'If you need revenue in six weeks, this is the wrong channel and we will point you at paid search. Search compounds, and compounding takes time to start.',
    },

    problem: {
      headline: 'The click is disappearing from the search.',
      body: 'A growing share of searches are answered on the results page or inside an assistant, and never produce a visit. A page that ranks and is never quoted is losing ground to a page that is quoted and never visited — and most sites are structured for the first outcome, because that is what the last decade rewarded.',
      points: [
        'Rankings hold steady and sessions decline, quarter after quarter.',
        'Assistants answer questions about your category and cite somebody else.',
        'Content was written for a keyword rather than for a question anyone asks.',
        'The technical foundation is broken in ways nobody has looked for — render-blocked content, no structured data, a sitemap listing pages that no longer exist.',
      ],
    },

    solution: {
      headline: 'Three surfaces, one foundation.',
      body: 'Classic search, the answer box and generative assistants reward overlapping but different things. The foundation is shared; the optimisation is not, and treating them as one job is why most SEO work now underperforms.',
      pillars: [
        {
          title: 'Technical foundation',
          body: 'Crawlability, render behaviour, speed, sitemap accuracy and structured data. Unglamorous, and the ceiling on everything else.',
        },
        {
          title: 'Question-shaped content',
          body: 'Written around what people actually ask, with the answer stated directly and early enough to be extracted rather than buried under an introduction.',
        },
        {
          title: 'Citation-ready structure',
          body: 'Clear claims, attributable sources, stable headings and machine-readable markup, so an assistant can quote you without misrepresenting you.',
        },
        {
          title: 'Authority, earned off-site',
          body: 'Citations come from being referenced elsewhere. Directories, industry publications and genuinely useful data assets — no link buying, which is a liability with a delay on it.',
        },
      ],
    },

    mechanism: {
      headline: 'How a page becomes a citation.',
      body: 'Being quoted is a chain, and it breaks at the weakest link. Most sites break at the second stage and spend their budget on the fourth.',
      module: 'citation-chain',
      nodes: ['Crawlable', 'Parseable', 'Answers a question', 'Attributable', 'Cited'],
      branchAt: 'Parseable',
      branchLabel: 'Invisible',
      notes: [
        'Server-rendered HTML matters more than it did. An assistant that cannot execute JavaScript sees nothing on a client-rendered page.',
        'A direct answer inside the first sentence of a section is extractable. The same answer after three paragraphs of preamble is not.',
        'Structured data and stable headings are what let a machine attribute a claim to you rather than paraphrase it anonymously.',
      ],
    },

    outcomes: [
      {
        title: 'The foundation stops leaking',
        body: 'Technical problems suppressing every page at once are found and fixed first, because content investment on a broken foundation is wasted.',
        measure: 'Crawl, render and structured-data issues resolved and re-verified.',
      },
      {
        title: 'You appear in answers',
        body: 'Content structured for extraction and attribution, so assistants can quote you rather than a competitor with worse information.',
        measure: 'Citations tracked across assistants, not just rankings.',
      },
      {
        title: 'It keeps paying',
        body: 'Earned position does not stop when spend stops, which is the entire reason to do this instead of buying more ads.',
        measure: 'Organic contribution sustained through spend changes.',
      },
    ],

    stack: ['Google Search Console', 'Screaming Frog', 'Ahrefs', 'Schema.org', 'GA4', 'Looker Studio'],

    process: [
      {
        step: 'Technical audit',
        body: 'Crawl, render, speed, structured data, sitemap accuracy, indexation. The ceiling is found before anything is built under it.',
        artifacts: ['Prioritised technical findings', 'Render comparison, JavaScript on and off', 'Indexation and crawl report'],
      },
      {
        step: 'Question research',
        body: 'What people actually ask — from search data, from your support queue, and from what assistants currently answer badly.',
        artifacts: ['Question inventory by intent stage', 'Current answer quality per question', 'Gap analysis against competitors'],
      },
      {
        step: 'Structure',
        body: 'Site architecture, internal linking and schema, so authority flows to the pages that should have it.',
        artifacts: ['Information architecture', 'Internal linking plan', 'Structured data specification'],
      },
      {
        step: 'Content build',
        body: 'Pages written to answer directly, structured for extraction, sourced so a claim can be attributed.',
        artifacts: ['Published pages', 'Schema live and validating', 'Answer-format verification'],
      },
      {
        step: 'Off-site',
        body: 'Directory accuracy, industry citations and data assets worth referencing. Slow, and the part that actually compounds.',
        artifacts: ['Directory and citation audit', 'Placement plan', 'Data asset concept'],
      },
      {
        step: 'Measurement',
        body: 'Rankings, sessions and citations tracked together, because any one of them alone now tells a misleading story.',
        artifacts: ['Reporting view', 'Assistant citation tracking', 'Quarterly review'],
      },
    ],

    faq: [
      {
        q: 'What is the difference between SEO, AEO and GEO?',
        a: 'SEO earns a position in a results list. AEO earns the answer box above it. GEO earns a citation inside a generative assistant’s response. They share a technical foundation and diverge in content structure — a page written to rank is not automatically a page that gets quoted.',
      },
      {
        q: 'How long before we see results?',
        a: 'Technical fixes can move things within weeks. Content and authority compound over six to twelve months. Anyone promising first-page results in thirty days is describing paid search or something worse.',
      },
      {
        q: 'Do you buy links?',
        a: 'No. It is a policy violation with a delayed and severe cost, and the recovery is worse than the original problem. Citations come from directory accuracy, genuine industry placement and publishing something worth referencing.',
      },
      {
        q: 'How do you know if an assistant is citing us?',
        a: 'We query the major assistants on your priority questions on a schedule and record what they return and who they attribute. It is sampling rather than a complete measure, and it is currently the honest version of tracking this.',
      },
      {
        q: 'Can you work on a site you did not build?',
        a: 'Yes, and most engagements are exactly that. The technical audit tells us what the platform will allow — some make certain fixes impossible, and we say so early rather than bill against a wall.',
      },
    ],

    handoff: {
      headline: 'Organic traffic asks questions at midnight.',
      body: 'Search sends people who are researching, from every timezone, at every hour. They arrive with specific questions and leave if nobody answers. The chat and email queues that catch them are work we run — which is also why we know exactly which questions your buyers ask, and can write the content that answers them.',
      operation: 'email-support',
    },

    related: ['website-development', 'digital-marketing', 'google-ads'],
  },

  /* ====================================================================== */
  {
    slug: 'google-ads',
    group: 'Digital Marketing',
    accent: 'amber',
    eyebrow: 'Google Ads',
    title: 'Google Ads',
    headline: { lead: 'Search advertising buys intent.', accent: 'Nothing else on the internet does.' },
    summary:
      'Campaigns built to capture demand that already exists — measured against booked revenue rather than against the platform’s account of itself.',
    metaTitle: 'Google Ads Management — measured on revenue | Universal Virtual Support',
    metaDescription:
      'Google Ads management for businesses that need measurable return: intent-led structure, negative keyword discipline, call tracking and revenue-based reporting.',
    keywords: [
      'Google Ads management',
      'PPC agency',
      'search advertising services',
      'Google Ads for service businesses',
      'PPC call tracking',
    ],

    intent: {
      primary: 'A business spending on Google Ads that suspects a meaningful share of it is wasted and cannot prove which share.',
      queries: [
        'why is my Google Ads cost per lead so high',
        'Google Ads management for contractors',
        'how to track phone calls from Google Ads',
        'performance max is spending too much',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where someone is already searching for what you sell.',
      intro:
        'Paid search works when demand exists and you are buying the moment of it. Where nobody is searching, it is the most expensive way to discover that.',
      segments: [
        {
          niche: 'home-services',
          label: 'Home services and emergency trades',
          trigger:
            '"Emergency plumber near me" is the highest-intent query in commerce, and it is bid on by every competitor at once.',
          built:
            'Emergency and routine separated into different campaigns with different bids, hours and landing pages, with calls tracked to booked jobs.',
          edge: 'The emergency query is worth several times the routine one and is usually bid identically.',
        },
        {
          niche: 'legal',
          label: 'Law firms',
          trigger:
            'Clicks cost enormous sums, and a meaningful share go to people who will never qualify as a case.',
          built:
            'Tight match-type control, aggressive negative lists, and qualification measured at matter type rather than at form fill.',
          edge: 'We optimise toward qualified matters. Optimising to form fills buys unqualified volume efficiently.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and elective procedures',
          trigger:
            'Procedure searches are commercially valuable and sit under advertising restrictions most accounts breach unknowingly.',
          built:
            'Compliant campaign structure by procedure and location, with booking measured rather than clicks.',
          edge: 'Policy is designed for at the start. A disapproved account mid-season is expensive.',
        },
        {
          niche: 'automotive',
          label: 'Dealerships and service centres',
          trigger:
            'Service bay capacity is perishable and used stock turns over weekly, so the campaign is out of date the day it launches.',
          built:
            'Inventory and capacity-aware campaigns that stop advertising what is gone or fully booked.',
          edge: 'Feed-driven, so the ads reflect what you can actually sell today.',
        },
        {
          niche: 'financial-services',
          label: 'Lenders and brokers',
          trigger:
            'Comparison sites dominate the head terms and burn budget on rate shoppers who never convert.',
          built:
            'Long-tail and qualification-led structure that avoids competing head-on with aggregators on their own terms.',
          edge: 'We do not bid the terms aggregators have already won. That is a spend decision, not a capability gap.',
        },
      ],
      notFor:
        'If you are selling something people do not yet know exists, there is no search demand to capture. That is a demand creation problem, and Meta is the better first move.',
    },

    problem: {
      headline: 'Automation spends the budget. It does not verify the outcome.',
      body: 'Modern campaign types will reliably spend everything they are given and report a healthy return, because they are optimising toward the conversion signal you gave them. If that signal is a form fill, they will find people who fill in forms — which is not the same population as people who buy.',
      points: [
        'Broad match and automated campaigns spend against queries you would never choose.',
        'The conversion signal is a form fill, so the algorithm optimises toward form fillers.',
        'Phone calls are the main outcome and are not tracked, so the campaigns driving them look like they fail.',
        'The account has run for years with no negative keyword maintenance and no structural review.',
      ],
    },

    solution: {
      headline: 'Fix the signal before touching the bids.',
      body: 'Everything automated bidding does is downstream of the conversion signal it receives. Feed it a signal that correlates with revenue and it becomes genuinely effective; feed it a form fill and it optimises efficiently toward the wrong thing.',
      pillars: [
        {
          title: 'Conversions that mean revenue',
          body: 'Offline conversion import where the sale closes later, and call tracking where the phone is the outcome. Value passed back, not just an event count.',
        },
        {
          title: 'Structure by intent, not by product',
          body: 'Emergency and research queries want different bids, hours, copy and landing pages. Splitting on intent is where most of the available gain sits.',
        },
        {
          title: 'Negatives as a discipline',
          body: 'Search term review on a schedule, forever. This is the single highest-return recurring task in a paid search account and it is almost always neglected.',
        },
        {
          title: 'Landing pages held to the budget',
          body: 'The fastest ad in the auction still loses to a five-second page. Landing performance is treated as part of the campaign, not somebody else’s problem.',
        },
      ],
    },

    mechanism: {
      headline: 'The loop that decides what your budget learns.',
      body: 'Automated bidding is a learning system, and it learns from whatever you tell it success looks like. Getting that definition right is worth more than every other lever combined.',
      module: 'signal-loop',
      nodes: ['Query', 'Auction', 'Click', 'Outcome', 'Signal back'],
      branchAt: 'Outcome',
      branchLabel: 'Unqualified → negative',
      notes: [
        'Outcome means booked revenue where we can measure it, imported back into the platform rather than left in a CRM.',
        'Unqualified outcomes feed the negative list, so the same wasted spend does not recur monthly.',
        'Call outcomes are captured explicitly. In phone-led businesses, an account without call tracking is optimising on a fraction of the truth.',
      ],
    },

    outcomes: [
      {
        title: 'Waste becomes visible',
        body: 'Search term review and negative discipline stop the recurring spend against queries that were never going to convert.',
        measure: 'Spend against non-converting query patterns, reviewed and reduced.',
      },
      {
        title: 'Bidding optimises to revenue',
        body: 'With value-based signals imported, automated bidding starts working toward money instead of toward events.',
        measure: 'Cost per booked job or matter, rather than cost per lead.',
      },
      {
        title: 'Phone-led revenue gets counted',
        body: 'Call tracking connects the ad to the booking, which usually reveals the campaigns that looked worst were performing best.',
        measure: 'Calls attributed to campaign and to outcome.',
      },
    ],

    stack: ['Google Ads', 'Google Tag Manager', 'GA4', 'CallRail', 'Looker Studio', 'Google Merchant Center'],

    process: [
      {
        step: 'Account audit',
        body: 'Structure, search terms, conversion accuracy, wasted spend. Usually the conversion tracking is wrong, which invalidates every historical judgement made from it.',
        artifacts: ['Wasted spend quantified', 'Conversion tracking verified or corrected', 'Structural findings'],
      },
      {
        step: 'Measurement build',
        body: 'Call tracking, offline conversion import and value passing, so the platform learns from revenue.',
        artifacts: ['Call tracking live', 'Offline conversions importing', 'Conversion values passing'],
      },
      {
        step: 'Restructure',
        body: 'Campaigns split by intent and by margin, with negative lists built from the audit.',
        artifacts: ['New campaign structure', 'Negative keyword lists', 'Bid strategy per campaign'],
      },
      {
        step: 'Landing alignment',
        body: 'Each intent gets a page that matches it, held to the same performance budget as the rest of the site.',
        artifacts: ['Landing pages built or fixed', 'Page speed verified', 'Conversion paths tested'],
      },
      {
        step: 'Managed run',
        body: 'Search term review, bid adjustment and creative testing on a schedule, with the reasoning written down.',
        artifacts: ['Weekly search term review', 'Test log with results', 'Monthly revenue reporting'],
      },
      {
        step: 'Ownership',
        body: 'The ad account, the tags and the tracking stay yours throughout.',
        artifacts: ['Accounts in your ownership', 'Documented configuration', 'Recorded handover'],
      },
    ],

    faq: [
      {
        q: 'What budget do we need to start?',
        a: 'Enough to generate statistically meaningful data in your cost-per-click range, which varies enormously — a home services account can learn on a fraction of what a legal account needs. We size it from your actual auction data during the audit rather than quoting a universal minimum.',
      },
      {
        q: 'Should we use Performance Max?',
        a: 'Sometimes, and rarely as the whole account. It will spend everything it is given with limited visibility into where. It works where the conversion signal is accurate and valuable; where tracking is weak it efficiently buys the wrong thing.',
      },
      {
        q: 'Our leads are phone calls. Can you track those?',
        a: 'Yes, and in phone-led businesses it is the first thing we fix. Dynamic number insertion attributes the call to the campaign and keyword, and outcomes are recorded against it — so the platform can optimise toward booked work instead of clicks.',
      },
      {
        q: 'Can you fix our existing account or must it be rebuilt?',
        a: 'Both happen. Accounts with useful conversion history are worth restructuring around; accounts whose history was recorded against broken tracking are usually worth rebuilding, because the learning is built on bad data. The audit answers it with evidence.',
      },
      {
        q: 'How do you charge?',
        a: 'A flat monthly fee based on account complexity, not a percentage of spend. A percentage rewards us for spending more of your money, which is a poor arrangement for you.',
      },
    ],

    handoff: {
      headline: 'A search ad produces a phone call within minutes.',
      body: 'Search intent is immediate — people click because they need it now, and they call. If that call is not answered, the click was purchased for a competitor. We run the phone line as well, which is why the campaign plan and the answering plan can be built as one thing.',
      operation: 'voice-calls',
    },

    related: ['meta-ads', 'seo', 'digital-marketing'],
  },

  /* ====================================================================== */
  {
    slug: 'meta-ads',
    group: 'Digital Marketing',
    accent: 'deep',
    eyebrow: 'Meta Ads',
    title: 'Meta Ads',
    headline: { lead: 'Nobody opens Instagram to buy.', accent: 'That is the whole problem to solve.' },
    summary:
      'Paid social built for demand creation — creative volume as the main lever, tested against incremental revenue rather than platform-attributed conversions.',
    metaTitle: 'Meta Ads — demand creation, measured honestly | Universal Virtual Support',
    metaDescription:
      'Facebook and Instagram advertising built around creative volume and incrementality testing, for businesses creating demand rather than capturing it.',
    keywords: [
      'Meta ads agency',
      'Facebook advertising management',
      'Instagram ads for business',
      'paid social agency',
      'creative testing framework',
    ],

    intent: {
      primary: 'A brand whose Meta results decayed and who cannot tell whether the platform’s reported ROAS is real.',
      queries: [
        'why did my Facebook ads stop working',
        'is Facebook ROAS accurate',
        'how many creatives do I need for Meta ads',
        'incrementality testing meta ads',
      ],
    },

    builtFor: {
      headline: 'Built for businesses that must create the demand they sell into.',
      intro:
        'Paid social interrupts. That makes it the wrong tool for capturing existing intent and the right tool for a product people would want if they knew about it.',
      segments: [
        {
          niche: 'ecommerce',
          label: 'DTC brands and subscription retail',
          trigger:
            'The winning creative that carried last year has fatigued, and every replacement underperforms it.',
          built:
            'A creative production system that ships enough variation to keep finding winners, tested against holdouts rather than platform attribution.',
          edge: 'Creative volume is the lever. Audience targeting stopped being the differentiator years ago.',
        },
        {
          niche: 'education',
          label: 'Course providers and training institutes',
          trigger:
            'Enrolment is seasonal, and the campaign has to build interest weeks before anybody searches for the course.',
          built:
            'Sequenced campaigns that build awareness ahead of the enrolment window and convert inside it.',
          edge: 'The demand is created on a calendar you control, not captured when it appears.',
        },
        {
          niche: 'hospitality',
          label: 'Hotels, restaurants and venues',
          trigger:
            'Aggregators own the search results, and direct bookings are the only ones with real margin.',
          built:
            'Visual, geo-targeted campaigns that drive direct booking, measured on commission avoided rather than on reach.',
          edge: 'Measured against the aggregator commission it displaces.',
        },
        {
          niche: 'real-estate',
          label: 'Developments and property marketing',
          trigger:
            'A specific development needs a specific buyer, in a specific area, inside a fixed sales window.',
          built:
            'Geo and demographic campaigns with lead capture built for immediate follow-up, because a property lead decays in minutes.',
          edge: 'Built around response speed, because the lead is worthless an hour later.',
        },
        {
          niche: 'automotive',
          label: 'Dealerships and service centres',
          trigger:
            'Used stock turns over weekly and nobody is searching for a specific vehicle — the buyer has to be shown it before they know they want it.',
          built:
            'Inventory-driven campaigns generated from the stock feed, so the creative shows what is actually on the forecourt today and stops the moment it sells.',
          edge: 'Feed-driven and geo-bounded. Advertising a vehicle that sold on Tuesday costs the click and the trust.',
        },
      ],
      notFor:
        'If your customers already search for what you sell and you need leads this quarter, paid search will do it faster and cheaper. We would rather point you there than take the budget.',
    },

    problem: {
      headline: 'The account is fine. The creative ran out.',
      body: 'Targeting used to be the lever and it no longer is — the platform finds the audience given a good enough signal. What decayed is the creative, and most accounts are producing four assets a quarter against a system that consumes them in a fortnight. Meanwhile the reported return has become a claim nobody has tested.',
      points: [
        'One creative carried performance, fatigued, and nothing has replaced it.',
        'Reported ROAS looks strong and gross revenue has not moved.',
        'Audiences are rebuilt endlessly while the same three images run underneath them.',
        'Creative production takes six weeks per asset, so testing volume is impossible.',
      ],
    },

    solution: {
      headline: 'Treat creative as the media buy.',
      body: 'On a platform where targeting is largely automated, the decisions that remain are what you show, how often you replace it, and whether you can prove any of it caused revenue. We build for all three.',
      pillars: [
        {
          title: 'Volume by system',
          body: 'A production process built around modular concepts and repeatable formats, so testing runs continuously instead of waiting on a shoot.',
        },
        {
          title: 'Structured testing',
          body: 'Concept, hook and format tested as separate variables. Otherwise a winning ad teaches you nothing you can repeat.',
        },
        {
          title: 'Incrementality, not attribution',
          body: 'Geo holdouts and scheduled lift tests, because a platform reporting on its own performance is not a measurement.',
        },
        {
          title: 'Signal quality',
          body: 'Server-side conversion tracking with proper value passing. The algorithm is only as good as what you tell it succeeded.',
        },
      ],
    },

    mechanism: {
      headline: 'The creative pipeline, and why it never stops.',
      body: 'Fatigue is not a failure state, it is the normal lifecycle. The system is built so a winner’s decline is a scheduled event with a replacement already in test.',
      module: 'creative-pipeline',
      nodes: ['Concept', 'Produce', 'Test', 'Scale', 'Fatigue'],
      branchAt: 'Test',
      branchLabel: 'Kill fast',
      notes: [
        'Concepts are tested cheaply and killed quickly. The cost of a loser is the test budget, not the production budget.',
        'Winners are scaled and simultaneously varied, so the replacement is already in flight when decline starts.',
        'Fatigue feeds back into concept selection — what fatigued slowly is a better template than what spiked and died.',
      ],
    },

    outcomes: [
      {
        title: 'Performance stops depending on one asset',
        body: 'A continuous testing pipeline means the account survives fatigue as a routine event instead of a crisis.',
        measure: 'New concepts entering test per month, and win rate.',
      },
      {
        title: 'You learn what the number really is',
        body: 'Holdout testing measures incremental revenue, which is frequently different enough from reported ROAS to change the budget decision.',
        measure: 'Incremental revenue from scheduled lift tests.',
      },
      {
        title: 'Creative gets cheaper per test',
        body: 'A modular production system drops the cost of trying an idea, which is what makes real testing volume affordable.',
        measure: 'Cost and turnaround per creative variant.',
      },
    ],

    stack: ['Meta Ads Manager', 'Meta Conversions API', 'GA4', 'Looker Studio', 'Figma', 'Segment'],

    process: [
      {
        step: 'Signal audit',
        body: 'Conversions API, event quality and value passing. Optimisation is downstream of signal, so this comes before anything creative.',
        artifacts: ['Event quality assessment', 'Server-side tracking implemented', 'Value passing verified'],
      },
      {
        step: 'Creative teardown',
        body: 'What has run, what worked, and what the winners had in common. The pattern is usually in the hook, not the production value.',
        artifacts: ['Historical performance by concept and hook', 'Fatigue curves', 'The pattern behind the winners'],
      },
      {
        step: 'Production system',
        body: 'Formats, templates and a pipeline that makes a new variant days rather than weeks.',
        artifacts: ['Modular creative templates', 'Production workflow', 'Asset library'],
      },
      {
        step: 'Test framework',
        body: 'What is being tested, how a result is declared, and what happens to winners and losers.',
        artifacts: ['Testing framework', 'Kill and scale criteria', 'Test calendar'],
      },
      {
        step: 'Incrementality',
        body: 'Geo holdouts and lift tests on a schedule, so the reported number gets checked against reality.',
        artifacts: ['Holdout design', 'Lift test results', 'Adjusted return figure'],
      },
      {
        step: 'Managed run',
        body: 'Continuous testing, scaling and reporting against incremental revenue.',
        artifacts: ['Monthly test log', 'Creative pipeline running', 'Incremental reporting'],
      },
    ],

    faq: [
      {
        q: 'Why did our ads stop working?',
        a: 'Almost always creative fatigue rather than an account problem. The same audience has seen the same asset too many times. Accounts that survive this are the ones producing enough new creative to replace winners before they decline, which is a production capacity question more than a media one.',
      },
      {
        q: 'How many creatives do we need?',
        a: 'More than feels reasonable. A meaningful test programme needs new concepts entering every week, not a quarterly batch — which is why we build the production system first rather than commissioning assets one at a time.',
      },
      {
        q: 'Is the ROAS Meta reports accurate?',
        a: 'It is accurate about what Meta observed and it systematically claims conversions it influenced rather than caused. That is why we run geo holdouts: they measure what would have happened without the spend, and the gap is often large enough to change how much you spend.',
      },
      {
        q: 'Do we need to appear on camera?',
        a: 'It helps in some categories and is not required. Product-led, motion and text-led formats all perform. We test format as a variable rather than assuming what your audience responds to.',
      },
      {
        q: 'Can you produce the creative or do we?',
        a: 'Either. We often build the system and templates so an in-house team produces volume cheaply, which is the more sustainable arrangement. Where there is no in-house capacity, we produce.',
      },
    ],

    handoff: {
      headline: 'Interruption creates questions, not orders.',
      body: 'Someone who was not shopping five seconds ago has questions before they buy — about sizing, delivery, whether it suits them. Those questions arrive in a DM or a chat window at eleven at night, and they are the conversion step. We staff that window, which is where a good deal of paid social revenue is actually won or lost.',
      operation: 'live-chat-support',
    },

    related: ['google-ads', 'digital-marketing', 'website-development'],
  },
];
