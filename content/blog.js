/**
 * BLOG — guides, written to win the searches service pages cannot.
 *
 * ## Why this exists at all
 *
 * The SERP research in docs/KEYWORD-MAP.md found something that changes the
 * shape of the site's SEO problem: for the head terms — "back office
 * outsourcing", "customer support outsourcing", "call center outsourcing" —
 * nine of every ten ranking results are guides, listicles and forum threads.
 * Exactly one is a service page.
 *
 * Google has decided those queries are research, not purchase. A service page
 * entered against them does not lose because it is worse; it loses because it
 * is answering a different question. So the site needed a place to answer the
 * research question properly.
 *
 * ## Inline links
 *
 * Body text uses `[anchor](/path)` markdown-style links, rendered by
 * `components/blog/rich-text.js`. Keeping them in the content rather than in
 * JSX means the anchor text — which is the part search engines weight — sits
 * next to the prose it belongs to, and a link can be added to a paragraph
 * without touching a component.
 *
 * The anchors are deliberately the keyword, not "click here" or "our data
 * entry page". An internal link's anchor text tells a crawler what the target
 * page is about; wasting it on a pronoun is the most common way sites throw
 * that signal away.
 */

export const posts = [
  {
    slug: 'back-office-outsourcing',
    /* A diagram of the argument, not cover art. Generated from the palette in
       app/globals.css so it belongs to the same site it sits on. */
    image: {
      src: '/blog/back-office-outsourcing.png',
      width: 1600,
      height: 900,
      alt: 'Two panels comparing back office work that outsources well — rules can be written down, output can be checked, mistakes are visible, volume is the problem — against work that quietly breaks: rules live in one head, a wrong call costs a licence, really relationship work, nobody is watching it.',
    },
    accent: 'slate',
    published: '2026-09-04',
    updated: '2026-09-04',
    readingMinutes: 9,

    eyebrow: 'Guide',
    title: 'Back office outsourcing: what moves, and what breaks',
    headline: {
      lead: 'Back office outsourcing:',
      accent: 'what moves, and what breaks.',
    },

    metaTitle: 'Back office outsourcing: what moves, what breaks',
    metaDescription:
      'A practical guide to back office outsourcing: which functions move offshore well, which quietly break, why response times slip, and the questions that actually separate providers.',
    keywords: [
      'back office outsourcing',
      'back office outsourcing services',
      'outsource back office',
      'back office support services',
      'back office bpo',
      'small business back office outsourcing',
    ],

    excerpt:
      'Most guides to back office outsourcing list benefits. This one lists the functions that move well, the ones that quietly break, and the two questions that separate a provider worth signing from one worth avoiding.',

    /* The search question this page exists to answer, shown under the eyebrow
       the way the desk pages show theirs. */
    question: 'Should we outsource our back office — and what breaks if we do?',

    sections: [
      {
        id: 'what-it-is',
        heading: 'What back office outsourcing actually means',
        body: [
          'The back office is everything a customer never sees. Orders being keyed, documents being checked, invoices being reconciled, records being updated, alerts being reviewed. It produces no revenue directly and it is impossible to grow without.',
          '**Back office outsourcing** is handing some of that work to an external team, usually offshore, usually priced per seat or per transaction rather than per employee. The front office — sales, support, anything that speaks to a customer — is a separate decision and often a separate provider.',
          'The distinction matters more than it sounds. Front-office work is judged on how it feels to the customer. Back-office work is judged on whether it was correct and whether it was finished in time. Those are different jobs, they fail in different ways, and a provider who is good at one is not automatically good at the other.',
        ],
      },
      {
        id: 'what-moves',
        heading: 'The functions that move well',
        body: [
          'Work moves cleanly when three things are true: the rules can be written down, the output can be checked, and a mistake is visible rather than silent. On that test, most of the back office qualifies.',
        ],
        list: [
          '**Document and data work.** [Data entry outsourcing](/operations/data-entry) is the archetype — high volume, clear rules, a correct answer that exists. Modern desks run extraction first and put a person on everything below a confidence threshold, so the cost curve is not simply headcount.',
          '**Order processing.** [Order taking](/operations/order-taking) across phone, chat and email, written straight into your system with stock validated as it goes. The rules are yours; the volume is the problem.',
          '**Onboarding and verification.** [KYC outsourcing](/operations/kyc-onboarding) works offshore precisely because it is procedural: a documented policy, a defined evidence standard, an auditable decision. What must not move is the accountability, which stays with the regulated firm.',
          '**Alert and exception review.** [Transaction monitoring](/operations/transaction-monitoring) is first-pass triage against a written risk policy. Most alerts clear on the first check; the value of an external desk is absorbing that volume so your analysts see only what matters.',
          '**Administrative load.** Inbox, calendar, CRM hygiene, research, reporting — the work a [virtual assistant](/operations/virtual-assistant) desk absorbs. Individually trivial, collectively a full-time job nobody was hired to do.',
          '**Structured follow-up.** [B2B appointment setting](/operations/b2b-sales) and pipeline hygiene are back-office work wearing a sales badge: the discipline is systematic follow-up, not persuasion.',
        ],
      },
      {
        id: 'what-breaks',
        heading: 'The functions that quietly break',
        body: [
          'The failure mode of back office outsourcing is almost never a dramatic collapse. It is a slow, unmeasured degradation in work nobody was watching, discovered a quarter late.',
          'Three categories break more often than they work:',
        ],
        list: [
          '**Work with undocumented rules.** If the correct answer lives in one person’s head, no provider can reproduce it. The honest sequence is to write the rules down first and outsource second — and if writing them down turns out to be impossible, that is the answer.',
          '**Judgement calls with asymmetric cost.** A wrong call that costs a customer relationship, a licence or a regulatory finding does not belong on a desk optimised for throughput, no matter whose desk it is.',
          '**Work that is really relationship management.** Named-account service, escalations from strategic customers, anything where the person on the other end expects to be known. Outsourcing this saves money and costs the account.',
        ],
      },
      {
        id: 'response-times',
        heading: 'Why outsourced back office work slows down — and how to stop it',
        body: [
          'Enough people search for why back office outsourcing slows response times that it is worth answering directly rather than pretending it does not happen.',
          'It happens for a specific reason, and the reason is not distance or timezone. It is that the work crossed a boundary without its escalation path crossing with it.',
          'In-house, a stuck item gets resolved by someone standing up and asking. Outsourced, that same item has nowhere to go. It waits in a queue for an answer that has to travel through an account manager, and a five-minute question becomes a two-day one. Multiply by a few percent of daily volume and the average time-to-complete moves without any individual doing anything wrong.',
          'The fix is structural and it should be in the contract, not in the pitch:',
        ],
        list: [
          'A named escalation route from the desk to a decision-maker at your end, with a response window on **your** side as well as theirs.',
          'An exception rate reported weekly — the share of items that could not be completed under the documented rules. Rising exceptions are the leading indicator; slipping turnaround is the lagging one.',
          'Turnaround measured on the item, not on the shift. "Same day" means nothing if the item arrived at 5pm.',
        ],
      },
      {
        id: 'choosing',
        heading: 'How to choose a provider — the questions that separate them',
        body: [
          'Every provider will tell you they have trained staff, quality assurance and a dedicated account manager. None of that distinguishes anyone. These do:',
        ],
        list: [
          '**"What is your exception rate on work like ours, and how is it reported?"** A provider who has never measured this is telling you they manage by anecdote.',
          '**"Who signs off a decision I would be answerable for?"** For regulated work — onboarding, monitoring, anything supervised — the disposition must be a person’s and the reasoning must be reconstructable months later.',
          '**"What happens in month eighteen when volume halves?"** Contracts written only for growth get expensive precisely when you need them not to be.',
          '**"Where is the work physically done, and under what contract?"** For anything touching personal data this is not a curiosity. It determines whether you can put the provider in your outsourcing register — the [fintech due-diligence position](/industries/fintech) sets out what a regulated buyer should be asking for.',
          '**"Can you show me the exit plan?"** A provider who cannot describe how you leave has built a dependency, not a service.',
        ],
      },
      {
        id: 'cost',
        heading: 'What it costs, and the number that actually matters',
        body: [
          'Offshore back office services are usually quoted per seat per month, or per transaction for well-defined work. Seat pricing is simpler; transaction pricing aligns incentives better, because the provider only earns more by doing more work rather than by staffing more people.',
          'The number worth watching is not the rate. It is **cost per completed item**, including the exceptions your own team ends up handling. A cheap seat that returns 15% of items unresolved is more expensive than a dearer one that returns 2% — and only one of those two numbers appears on the invoice.',
          'This is also where automation changes the arithmetic. If document extraction handles the routine share and people handle everything below a confidence threshold, cost stops scaling one-to-one with volume. That only works when whoever builds the system is answerable for the queue it produces — which is why we do both halves, and why [AI development](/services/ai-development) and the desks are priced as one decision rather than two.',
        ],
      },
      {
        id: 'front-office',
        heading: 'And if the front office is the real problem',
        body: [
          'Back office outsourcing is often the wrong first move. If your team is drowning, the volume is usually arriving through a channel a customer can see — a phone line nobody answers after five, an inbox with a two-day backlog, a chat widget that nobody staffs.',
          'That is a different decision, with different failure modes, and it is covered by [customer support outsourcing](/blog/customer-support-outsourcing) rather than by a back-office desk. [Email support outsourcing](/operations/email-support) and staffed phone coverage change what your customers experience; back office work changes what your team can get through. Both are worth doing. They are not interchangeable, and doing the second while the first is broken tends to hide the problem rather than fix it.',
        ],
      },
    ],

    faq: [
      {
        q: 'What is back office outsourcing?',
        a: 'Handing internal, non-customer-facing operations — data entry, document processing, order handling, onboarding checks, alert review, reconciliation — to an external team, usually offshore, priced per seat or per transaction. The front office, meaning anything that speaks to a customer, is a separate decision.',
      },
      {
        q: 'Which back office functions should not be outsourced?',
        a: 'Three kinds: work whose rules are undocumented and live in one person’s head; judgement calls where a wrong answer costs a licence, a regulatory finding or a strategic account; and work that is really relationship management wearing an administrative label. Everything else is a question of cost and control rather than principle.',
      },
      {
        q: 'Why does outsourcing back office operations slow response times?',
        a: 'Because the work crosses a boundary but its escalation path does not. In-house, a stuck item is resolved by asking someone. Outsourced, it waits in a queue for an answer routed through an account manager. The fix is a named escalation route with a response window on both sides, plus a weekly exception rate so the problem shows up as a number before it shows up as a delay.',
      },
      {
        q: 'How much does back office outsourcing cost?',
        a: 'Usually quoted per seat per month or per transaction. The rate is the wrong number to compare. Compare cost per completed item including the exceptions your own team absorbs — a cheap seat returning 15% of items unresolved costs more than a dearer one returning 2%, and only one of those numbers is on the invoice.',
      },
      {
        q: 'Is back office outsourcing suitable for a small business?',
        a: 'Yes, but the sequence matters more than at scale. A small business usually has fewer documented processes, so the first month is mostly writing rules down. Providers who will not do that with you, and instead ask for a process document you do not have, are the wrong fit.',
      },
      {
        q: 'What is the difference between back office BPO and a virtual assistant?',
        a: 'Scale and structure. A virtual assistant is one person absorbing varied administrative work. A back office desk is a pooled team working defined queues to a service level, with quality assurance and cover when someone is away. The first is cheaper and more flexible; the second holds up under volume and does not stop when one person is on leave.',
      },
    ],

    /* Rendered as the closing block. Slugs resolve against operations and
       services, so a renamed desk cannot leave a dead link here. */
    related: {
      operations: ['data-entry', 'order-taking', 'kyc-onboarding', 'transaction-monitoring'],
      services: ['ai-development'],
    },
  },
  {
    slug: 'customer-support-outsourcing',
    image: {
      src: '/blog/customer-support-outsourcing.png',
      width: 1600,
      height: 900,
      alt: 'A diagram of the tier boundary in outsourced customer support. Tier 1, handled by the desk, covers 70 to 80 per cent of contact, is answerable from documentation, and lets AI absorb the repetitive share. Across a dashed boundary, Tier 2 needs investigation or judgement, a named person at the client end, and a response window on the client side. Beneath: name nobody on the right and the contact waits, while every metric still looks fine.',
    },
    accent: 'cyan',
    published: '2026-09-07',
    updated: '2026-09-07',
    readingMinutes: 11,

    eyebrow: 'Guide',
    title: 'Customer support outsourcing: what actually breaks quality',
    headline: {
      lead: 'Customer support outsourcing:',
      accent: 'what actually breaks quality.',
    },

    metaTitle: 'Customer support outsourcing: what breaks quality',
    metaDescription:
      'Customer support outsourcing fails in one specific place, and it is not the accent on the phone. A guide to the tier boundary, what AI should and should not touch, and the questions that separate providers.',
    keywords: [
      'customer support outsourcing',
      'outsourced customer support',
      'customer support outsourcing companies',
      'customer care outsourcing',
      'outsource customer support',
      'technical support outsourcing',
    ],

    excerpt:
      'Everyone considering customer support outsourcing is really asking one question: will quality drop? It usually does, for a reason that has nothing to do with who is answering — and everything to do with what happens when they cannot.',

    question: 'Will quality drop if we outsource support?',

    sections: [
      {
        id: 'what-it-covers',
        heading: 'What customer support outsourcing actually covers',
        body: [
          '**Customer support outsourcing** means handing some or all of your inbound customer contact to an external team. In practice that is four channels and two tiers, and providers differ enormously in which of them they will actually take.',
          'The channels are phone, chat, email and messaging. Most buyers start with one — usually the one that is currently on fire — and add the rest once the first works. Running them separately is common and is usually a mistake, because the same customer moves between them and expects to be recognised.',
          'The tiers matter more. **Tier 1** is everything answerable from documented knowledge: where is my order, how do I reset this, what does this charge mean. **Tier 2** is everything requiring investigation, a system change, or a judgement call. Roughly 70–80% of contact volume is Tier 1 in most businesses, which is why outsourcing it is attractive — and why the boundary between the tiers is where the whole thing succeeds or fails.',
        ],
      },
      {
        id: 'why-quality-drops',
        heading: 'Why quality drops — and it is not the accent',
        body: [
          'The fear people bring to this decision is that an outsourced agent will be worse than an in-house one. That is the wrong thing to worry about. A trained agent working from good documentation resolves a Tier 1 contact just as well from anywhere.',
          'What actually breaks is the **escalation path**. In-house, an agent who cannot resolve something stands up and asks the person who can. That conversation takes ninety seconds and the customer never knows it happened. Outsourced, that same agent has no one to stand up and ask. The contact goes into a queue, waits for an account manager, waits for someone at your end to notice, and comes back two days later — or does not come back at all and the customer churns quietly.',
          'This is why quality metrics on outsourced support often look fine while satisfaction falls. First-response time is measured and looks good. Resolution rate is measured and looks good. What nobody measures is the share of contacts that crossed the tier boundary and what happened to them after they did.',
          'The three numbers that actually reveal it:',
        ],
        list: [
          '**Escalation rate** — the share of contacts the desk could not close. If it is not reported weekly, it is not being managed.',
          '**Time-to-resolution on escalated contacts specifically**, measured separately from the overall average. The average hides them; they are a small share of volume and a large share of damage.',
          '**Repeat contact rate** — how often the same customer comes back about the same thing. This is the single best proxy for whether the first answer was actually an answer.',
        ],
      },
      {
        id: 'tier-boundary',
        heading: 'The tier boundary is a contract term, not a hope',
        body: [
          'Most outsourced support arrangements define what the desk handles. Very few define what happens at the edge of it, which is precisely where the cost lands.',
          'A boundary that works has four things written down before anyone takes a call:',
        ],
        list: [
          '**A named person at your end** who answers Tier 2 questions, with a response window on your side as well as the desk\'s. This is the part buyers resist and the part that determines the outcome.',
          '**A default action for the unanswerable.** When nobody at your end responds within the window, what does the agent do — hold, refund, escalate to a manager, tell the customer a timeframe? Undefined means improvised.',
          '**A route back into documentation.** Every escalation is a gap in the knowledge base. If resolved escalations do not get written up, the same contact escalates forever and the desk never gets cheaper.',
          '**Authority limits in writing.** What can the desk decide alone — a refund up to what value, a replacement under what conditions? Agents with no authority escalate everything; agents with unclear authority guess.',
        ],
      },
      {
        id: 'channels',
        heading: 'Which channel to move first',
        body: [
          'The honest answer is: the one where you are currently failing, not the one that is cheapest to move.',
          'Phone is usually where the damage is, because an unanswered call is gone in seconds and leaves no record. If calls are ringing out, [call center outsourcing](/operations/voice-calls) or a simpler [answering service](/operations/answering-service) fixes a measurable revenue leak rather than a comfort problem. If the gap is specifically evenings and weekends, [after-hours answering](/operations/after-hours-answering) is a narrower and much cheaper first step than full coverage.',
          '[Live chat support](/operations/live-chat-support) is the easiest channel to staff externally and the one where an AI layer absorbs the largest share, because chat questions repeat more than any other channel. [Email support outsourcing](/operations/email-support) is the most forgiving — asynchronous, so a two-hour handover gap costs nothing — which makes it a sensible first move if you want to test a provider before trusting them with the phone.',
          'For businesses where the caller expects a receptionist rather than a support desk — clinics, firms, trades — a [virtual receptionist](/operations/virtual-receptionist) is a different service to a support queue and should not be bought as one.',
        ],
      },
      {
        id: 'ai',
        heading: 'Where AI belongs, and where it does not',
        body: [
          'Enough people now search for how to choose AI agents for customer support outsourcing that it needs a straight answer rather than a sales pitch.',
          'AI is genuinely good at the repetitive share — the same twenty questions that make up most of Tier 1. [AI agents](/services/ai-agents) handling those well is the difference between a desk that scales with volume and one that scales with headcount. On the phone, [AI voice agents](/services/ai-voice-agents) can carry a first-line conversation and route properly.',
          'What AI should not do is decide. A refund, a compliance disposition, an exception to policy — those need a person, not because a model cannot produce an answer, but because a wrong one is expensive and nobody can explain how it was reached.',
          'The failure mode worth naming: a deflection layer tuned to reduce ticket volume rather than to resolve contacts. It reports beautifully. The tickets go down. What actually happened is that customers gave up, and giving up does not appear on the dashboard. If a provider quotes a deflection rate without a satisfaction number beside it, ask for the second number.',
          'This is also the argument for buying both halves from the same place. When the company that built the automation also staffs the queue it produces, a badly tuned deflection costs them the escalation instead of costing you the customer. Ours is priced as one decision for that reason.',
        ],
      },
      {
        id: 'choosing',
        heading: 'How to choose between customer support outsourcing companies',
        body: [
          'Every provider claims trained agents, quality assurance and 24/7 coverage. None of it separates them. These questions do:',
        ],
        list: [
          '**"What is your escalation rate on accounts like ours?"** A provider who has not measured it manages by anecdote. One who quotes a suspiciously low number is either handling simple work or closing contacts that were not resolved.',
          '**"Is the team dedicated or pooled, and what happens when someone leaves?"** Neither answer is wrong. A pooled desk holds up under volume spikes and does not stop for annual leave; a dedicated team knows your product better. Providers who claim both are describing a pooled desk in dedicated language.',
          '**"Who writes the knowledge base — you or us?"** If the answer is you, the first three months are yours and the quote should reflect that. If it is them, ask to see one they have written.',
          '**"Show me a QA scorecard from a real account."** Redacted is fine. What matters is whether the criteria measure resolution or politeness. Politeness is easy to score and easy to hit while resolving nothing.',
          '**"What does month eighteen look like if our volume halves?"** Support volume is seasonal and shrinks when the product improves. A contract that only prices growth becomes expensive at exactly the wrong moment.',
        ],
      },
      {
        id: 'cost',
        heading: 'What outsourced customer support costs',
        body: [
          'Pricing comes in three shapes. **Per seat** is a monthly rate for a full-time agent — simplest, and best when volume is steady. **Per contact** aligns incentives better but needs a clear definition of what closes a contact. **Per minute** appears on phone work and rewards short calls, which is not the same as good ones.',
          'The number to compare is not the seat rate. It is the **fully loaded cost per resolved contact**, including the time your own team spends on escalations. A desk at a low rate that escalates 20% of contacts is consuming your senior people; one at a higher rate escalating 5% may be cheaper in total and is certainly cheaper in attention.',
          'Cost reduction in the range of 50–60% against in-house is the usual claim in this industry, ours included — and it is honest only with the basis stated: it compares against fully loaded local employment cost, and it does not hold in month one, when documentation and training absorb the difference. Any provider quoting a saving without naming the comparison is quoting a number they have not defined.',
          'Back-office work prices differently again, because it is measured on completion rather than on conversation. If the queue you are worried about is documents and records rather than customers, [back office outsourcing](/blog/back-office-outsourcing) covers that decision separately.',
        ],
      },
    ],

    faq: [
      {
        q: 'What is customer support outsourcing?',
        a: 'Handing inbound customer contact — phone, chat, email and messaging — to an external team, usually priced per seat, per contact or per minute. Most arrangements cover Tier 1, meaning everything answerable from documented knowledge, and route Tier 2 back to the client.',
      },
      {
        q: 'Does outsourcing customer support reduce quality?',
        a: 'Not because of who answers. A trained agent working from good documentation resolves a Tier 1 contact just as well from anywhere. Quality drops when the escalation path does not cross the boundary with the work: an agent who cannot resolve something has nobody to ask, so the contact waits. The fix is a named person at the client end with a response window, plus a weekly escalation rate so the problem appears as a number before it appears as churn.',
      },
      {
        q: 'How much does customer support outsourcing cost?',
        a: 'Per seat, per contact or per minute depending on channel and volume. Compare fully loaded cost per resolved contact rather than the headline rate — a cheap desk escalating 20% of contacts consumes your senior people, and that cost never appears on the invoice.',
      },
      {
        q: 'Which support channel should we outsource first?',
        a: 'The one currently failing, not the cheapest to move. Phone usually carries the most damage because an unanswered call disappears without a record. Email is the most forgiving and the safest way to test a provider before trusting them with the phone.',
      },
      {
        q: 'Should AI handle outsourced customer support?',
        a: 'For the repetitive share of Tier 1, yes — that is where it earns its place. It should not make decisions with asymmetric cost, such as refunds, compliance dispositions or policy exceptions. Watch for deflection rates quoted without a satisfaction number beside them: deflection measures customers who stopped asking, which is not the same as customers who were helped.',
      },
      {
        q: 'What is the difference between a dedicated and a pooled support team?',
        a: 'A dedicated team works only your account and learns your product deeply, but stops when someone is on leave and costs the same when volume drops. A pooled desk works defined queues to a service level with cover built in, holds up under spikes, and takes longer to reach product depth. Providers who claim both are usually describing a pooled desk in dedicated language.',
      },
    ],

    related: {
      operations: ['live-chat-support', 'voice-calls', 'email-support', 'answering-service'],
      services: ['ai-agents'],
    },
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
export const postSlugs = posts.map((p) => p.slug);

/**
 * Every internal destination linked from inside post bodies.
 *
 * The link gate measures pages served by a running build, which catches a dead
 * link only after it ships. This lets `verify:content` catch one at source.
 */
export function postLinkTargets() {
  const found = [];
  for (const post of posts) {
    const text = JSON.stringify(post.sections);
    for (const match of text.matchAll(/\]\((\/[^)"]*)\)/g)) {
      found.push({ post: post.slug, href: match[1] });
    }
  }
  return found;
}
