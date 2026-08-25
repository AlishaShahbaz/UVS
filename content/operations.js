/**
 * OPERATIONS — the half that runs.
 *
 * Services build a system. Operations staff the desk. The site's whole
 * positioning lives in the seam between them, so these pages follow the same
 * intent ladder as services and carry the same `builtFor` join — a reader
 * arriving here should be able to self-select just as fast.
 *
 * The distinction held throughout: every operation is a queue with a service
 * level, not a headcount. What is being bought is answered volume inside a
 * response window, with an AI layer taking the repetitive share and trained
 * people taking the rest.
 */

import { complianceOperations } from './operations-compliance.js';

const baseOperations = [
  /* ====================================================================== */
  {
    slug: 'live-chat-support',
    group: 'Conversation',
    accent: 'cyan',
    eyebrow: 'Live Chat Support',
    title: 'Live Chat Support',
    headline: { lead: 'The visitor with a question', accent: 'does not come back tomorrow.' },
    summary:
      'Staffed chat with an AI layer on the repetitive share — covered to a response window you set, including the hours nobody wants.',
    metaTitle: 'Live Chat Support — staffed and covered | Universal Virtual Support',
    metaDescription:
      'Outsourced live chat support with AI handling repetitive questions and trained agents handling the rest, to a response window you define.',
    keywords: ['outsourced live chat support', 'live chat agents', '24/7 chat support service', 'ecommerce chat support'],

    intent: {
      primary: 'A team whose chat widget is answered when someone happens to be free.',
      queries: ['outsourced live chat service', '24/7 chat support for ecommerce', 'live chat response time benchmark'],
    },

    builtFor: {
      headline: 'Built for businesses whose visitors arrive outside office hours.',
      intro:
        'Chat pays where the visitor is close to a decision and the question is small. These are the shapes where that is true.',
      segments: [
        {
          niche: 'ecommerce',
          label: 'DTC brands and marketplace sellers',
          trigger: 'Pre-purchase questions about sizing and delivery arrive at eleven at night, which is when the traffic is.',
          built: 'Coverage across your real traffic curve, with order lookups answered live rather than promised by email.',
          edge: 'Agents read live order state. "Let me check and get back to you" is not an answer.',
        },
        {
          niche: 'saas',
          label: 'B2B SaaS and platforms',
          trigger: 'Tier-one questions interrupt engineers who are in the rotation and resent it.',
          built: 'A trained tier-one desk grounded in your current docs, escalating with a written diagnosis rather than a forwarded transcript.',
          edge: 'Escalations arrive reproduced, not relayed.',
        },
        {
          niche: 'education',
          label: 'Course providers and institutes',
          trigger: 'Enrolment season multiplies enquiry volume tenfold against the same three admissions staff.',
          built: 'Seasonal capacity that scales for the window and scales back down after it.',
          edge: 'Capacity is contracted by window, not by permanent headcount.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger: 'Portal and site enquiries sit unactioned while agents are out showing property.',
          built: 'Immediate qualification and routing, with the enquiry in the CRM before the agent is back in the car.',
          edge: 'Speed is the product here. Minutes decide the conversion.',
        },
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'Users ask about a pending transfer, a card decline or a stuck verification at two in the morning, and money questions do not wait until business hours.',
          built:
            'Tier-1 resolution on account, payment and verification questions with live system access, escalating to Tier-2 on written conditions with the case already investigated.',
          edge: 'The Tier-1 / Tier-2 line is a written condition, not a judgement call — and anything touching a compliance decision leaves the desk entirely.',
        },
      ],
      notFor:
        'If your chat volume is under a handful of conversations a day, an AI layer alone will serve you better than a staffed desk. We will size that honestly.',
    },

    problem: {
      headline: 'A chat widget nobody watches is worse than no widget.',
      body: 'It advertises availability and then fails to deliver it. The visitor who typed a question and waited four minutes did not go and find your phone number — they went back to the results page they came from, and the widget converted them for somebody else.',
      points: [
        'Chat is answered by whoever is free, which at 8pm is nobody.',
        'First response time is unmeasured, so nobody knows it is four minutes.',
        'Agents cannot see order or account state, so every answer is a promise to check.',
        'Volume triples in a peak week and the same two people are covering it.',
      ],
    },

    solution: {
      headline: 'A queue with a number on it.',
      body: 'What you are buying is a response window that holds under load, not a number of people. That means the repetitive share is absorbed automatically, the rest reaches a trained person, and the split is measured rather than assumed.',
      pillars: [
        {
          title: 'The AI layer takes the repeat questions',
          body: 'Order status, delivery windows, policy questions — resolved instantly, with live system access rather than a canned reply.',
        },
        {
          title: 'People take the rest',
          body: 'Trained on your product and your tone, with the transcript and context already attached when they pick up.',
        },
        {
          title: 'Escalation by rule',
          body: 'Handoff happens on conditions you set — topic, order value, an explicit request — not on a model scoring its own confidence.',
        },
        {
          title: 'A service level that is reported',
          body: 'First response time, resolution rate and the automated share, reported weekly against the target you agreed.',
        },
      ],
    },

    mechanism: {
      headline: 'What happens in the first thirty seconds.',
      body: 'The routing decision is made before anyone is waiting, which is why the response window holds when volume spikes.',
      module: 'queue-router',
      nodes: ['Message', 'Classify', 'Resolve or route', 'Respond', 'Log'],
      branchAt: 'Resolve or route',
      branchLabel: 'To a person',
      notes: [
        'Classification happens on arrival, so a routine question is answered while a complex one is already queued to a person.',
        'The agent receives the full conversation and the account state. The customer never repeats themselves.',
        'Every conversation is written back to your systems, so the record does not live in our tool.',
      ],
    },

    outcomes: [
      { title: 'Coverage matches your traffic', body: 'Staffed against your real traffic curve, including the evening and weekend share that currently goes unanswered.', measure: 'Chats answered inside the response window, by hour.' },
      { title: 'Peaks stop breaking the desk', body: 'The automated layer absorbs the repetitive spike, so a campaign or a season does not become a hiring problem.', measure: 'Response time held during peak weeks.' },
      { title: 'The channel becomes measurable', body: 'Volume, topic, resolution and escalation reported weekly, which turns chat from a widget into an operation.', measure: 'Weekly service level reporting against target.' },
    ],

    stack: ['Intercom', 'Zendesk', 'Front', 'Shopify', 'Claude', 'Slack'],

    process: [
      { step: 'Volume study', body: 'Real conversation history — when it arrives, what it asks, what share is repetitive.', artifacts: ['Volume by hour and day', 'Topic taxonomy from real chats', 'Automatable share, quantified'] },
      { step: 'Coverage design', body: 'The response window, the hours, and what happens when volume exceeds forecast.', artifacts: ['Coverage plan and service level', 'Overflow procedure', 'Escalation rules, written by you'] },
      { step: 'Knowledge build', body: 'The answers, the tone, and the boundaries — what the desk must never answer alone.', artifacts: ['Knowledge base', 'Tone guide', 'Never-answer list'] },
      { step: 'Integration', body: 'Access to the systems holding the answers, so the desk resolves rather than relays.', artifacts: ['Platform access configured', 'Order and account lookups live', 'CRM write-back'] },
      { step: 'Pilot', body: 'One shift pattern, monitored, with your team reviewing transcripts daily.', artifacts: ['Pilot transcripts reviewed', 'Service level measured', 'Corrections applied'] },
      { step: 'Run', body: 'Full coverage, weekly reporting, and a standing review where the knowledge base actually changes.', artifacts: ['Weekly service level report', 'Knowledge base updates', 'Quarterly review'] },
    ],

    faq: [
      { q: 'Are the agents dedicated to us?', a: 'On dedicated plans, yes — the same named people, trained on your product. Shared plans cost less and use agents covering several accounts in the same category. We recommend based on your volume rather than on margin.' },
      { q: 'How much gets handled without a person?', a: 'Typically half to three quarters for e-commerce and lower for technical products, and we measure it during the volume study rather than quoting an industry figure. The number is reported weekly, so you can see it rather than trust it.' },
      { q: 'What if an agent does not know the answer?', a: 'They escalate to your team on a rule you set, with the conversation and context attached. Escalation is treated as a knowledge gap and closed, not as an agent failure.' },
      { q: 'Which platform do you work in?', a: 'Yours. Intercom, Zendesk, Front, Gorgias, HubSpot, or whatever you already run — the record stays in your system so ending the arrangement does not cost you your history.' },
      { q: 'How quickly can this start?', a: 'Two to four weeks from the volume study, most of which is knowledge build and integration rather than recruitment.' },
    ],

    handoff: {
      headline: 'The system that fills this queue.',
      body: 'Half the volume arriving here is created by campaigns and by the site itself. When the same team builds both, the desk feeds the knowledge base and the marketing team gets the real objections — which is a loop most businesses never close because the two sides are different vendors.',
      service: 'ai-agents',
    },

    related: ['email-support', 'voice-calls', 'order-taking'],
  },

  /* ====================================================================== */
  {
    slug: 'voice-calls',
    group: 'Conversation',
    accent: 'ember',
    eyebrow: 'Voice Calls',
    title: 'Voice Calls',
    headline: { lead: 'Every call answered.', accent: 'Including the ones at 3am.' },
    summary:
      'A staffed phone line with an AI layer on routine calls — inbound, outbound and overflow, to a service level you set.',
    metaTitle: 'Voice Call Handling — inbound, outbound, overflow | Universal Virtual Support',
    metaDescription:
      'Outsourced call handling with trained agents and an AI layer for routine calls. Inbound, outbound and overflow coverage to a defined service level.',
    keywords: ['outsourced call handling', 'answering service for business', 'after hours call answering', 'overflow call handling'],

    intent: {
      primary: 'A business losing bookings to voicemail and unable to justify a night shift.',
      queries: ['after hours answering service', 'overflow call handling service', 'how much revenue lost to missed calls'],
    },

    builtFor: {
      headline: 'Built for businesses where the phone is the transaction.',
      intro: 'Not the phone as a courtesy channel — the phone as the place the money is actually made.',
      segments: [
        { niche: 'home-services', label: 'HVAC, plumbing, roofing and restoration', trigger: 'Emergency calls arrive at the worst hour and go to whoever answers first.', built: 'Triage, qualification and booking against real technician availability, around the clock.', edge: 'Drive time and skill are modelled, so what gets booked can actually be done.' },
        { niche: 'healthcare', label: 'Clinics and specialty practices', trigger: 'Reception is on the phone while patients wait at the desk, and recalls never go out.', built: 'Booking, rescheduling, confirmations and recall campaigns, handled off your front desk.', edge: 'Built to the data boundary you operate under, agreed during onboarding.' },
        { niche: 'legal', label: 'Law firms with high intake volume', trigger: 'A qualified case reaching voicemail is worth nothing.', built: 'Intake calls answered live, facts collected, criteria applied, case routed with the transcript attached.', edge: 'Collect and route only. Never advise — enforced in the script and audited.' },
        { niche: 'automotive', label: 'Dealership service departments', trigger: 'Bay capacity is perishable and booked over one line during peak hours.', built: 'Service booking and follow-up on quoted-but-not-booked work.', edge: 'Bay, technician and parts availability treated as three constraints, not one.' },
        { niche: 'logistics', label: 'Freight brokers and 3PL', trigger: 'Check calls consume dispatcher mornings and track-and-trace comes in at all hours.', built: 'Outbound check calls and inbound status handling, written straight into the TMS.', edge: 'Exceptions are surfaced. Only off-plan loads reach your dispatchers.' },
      ],
      notFor: 'If your calls are long, consultative and unique each time, we would be learning your business on your customers. That work belongs in-house.',
    },

    problem: {
      headline: 'Voicemail is where revenue goes to be forgotten.',
      body: 'An inbound call is the highest-intent contact a business receives and its value decays within minutes. Covering every one of them means staffing for a peak that happens twice a week at hours nobody wants — so most businesses accept the loss without measuring it, because the missed call leaves no trace.',
      points: [
        'Out-of-hours calls become voicemail and are returned after the job is booked elsewhere.',
        'A generic answering service takes a message, which is not the same as taking a booking.',
        'Peak periods produce several times the volume and the same number of people.',
        'Nobody can say how many calls were missed last week, because a missed call is not recorded anywhere.',
      ],
    },

    solution: {
      headline: 'A line that is always answered, and can finish the call.',
      body: 'Answering is table stakes. What matters is whether the call ends with the thing the caller wanted — a booking, an answer, a routed case — which requires access to your systems and the authority to use it.',
      pillars: [
        { title: 'Routine calls handled automatically', body: 'The AI layer takes the predictable share instantly, including several calls at once, so a spike does not become a queue.' },
        { title: 'Trained agents on the rest', body: 'Named people who know your business, taking transfers with the conversation so far already in front of them.' },
        { title: 'Booking, not messages', body: 'Connected to your calendar, dispatch or PMS, so the call ends in a confirmed appointment rather than a callback promise.' },
        { title: 'Everything in writing', body: 'Recording, transcript, extracted details and outcome in your CRM before the caller has hung up.' },
      ],
    },

    mechanism: {
      headline: 'From ring to record.',
      body: 'The path is the same at three in the afternoon and three in the morning, which is the point.',
      module: 'call-path',
      nodes: ['Ring', 'Answer', 'Qualify', 'Act', 'Write back'],
      branchAt: 'Qualify',
      branchLabel: 'To an agent',
      notes: [
        'Answering happens immediately and concurrently. There is no hold queue at the front.',
        'Transfer carries the transcript, so the caller does not start again.',
        'The record lands in your CRM, not in a portal you would lose access to.',
      ],
    },

    outcomes: [
      { title: 'The missed call stops existing', body: 'Coverage across the hours you choose, with concurrency so simultaneous calls are all answered.', measure: 'Answer rate by hour, including out of hours.' },
      { title: 'Calls end in bookings', body: 'System access means the call completes rather than generating a callback task for the morning.', measure: 'Share of calls resolved on first contact.' },
      { title: 'The phone becomes a measured channel', body: 'Volume, reason, outcome and duration for every call — usually the first time this has been visible.', measure: 'Call reason and outcome, categorised.' },
    ],

    stack: ['Twilio', 'Deepgram', 'ElevenLabs', 'Claude', 'HubSpot', 'ServiceTitan'],

    process: [
      { step: 'Call audit', body: 'We listen to real calls. Every failed phone operation was designed from an imagined call.', artifacts: ['Call type taxonomy from recordings', 'Volume by hour and day', 'The call types we recommend never automating'] },
      { step: 'Script and rules', body: 'What is said, what is collected, and exactly when a call reaches a person.', artifacts: ['Call scripts per type', 'Qualification criteria', 'Transfer rules, written by you'] },
      { step: 'Integration', body: 'Calendar, dispatch, CRM and telephony connected so the call can be completed.', artifacts: ['Live availability integration', 'CRM write-back', 'Number routing configured'] },
      { step: 'Agent training', body: 'Named agents trained on your business, your tone and your escalation boundaries.', artifacts: ['Trained agent team', 'Knowledge base', 'Call quality rubric'] },
      { step: 'Pilot', body: 'Out of hours first, one call type, with recordings reviewed daily.', artifacts: ['Pilot recordings and review', 'Transfer rate by type', 'Tuned rules'] },
      { step: 'Run', body: 'Full coverage with weekly reporting and monthly call quality review.', artifacts: ['Weekly service level report', 'Call quality scores', 'Monthly review'] },
    ],

    faq: [
      { q: 'Is it a person or an AI answering?', a: 'Both, by call type, and the split is agreed with you during the audit. Routine calls are handled by the AI layer instantly; anything meeting your transfer rules reaches a trained agent. The agent identifies as an agent and the AI identifies as an AI when asked — we do not build systems that claim to be human.' },
      { q: 'Can you book directly into our system?', a: 'Yes, against live availability, respecting the capacity rules that matter in your business. A booking that cannot be honoured is worse than a missed call, so those rules are modelled explicitly during integration.' },
      { q: 'What does coverage cost compared to hiring?', a: 'We size it against your real call volume during the audit so the comparison is arithmetic. It is usually decisive for out-of-hours and overflow, and closer than people expect for full daytime coverage — we say which case yours is.' },
      { q: 'Do you handle outbound as well?', a: 'Yes — confirmations, recalls, check calls, follow-up on quoted work. Outbound is often where the fastest return sits, because it is work that currently does not happen at all.' },
      { q: 'What happens if your systems fail?', a: 'Calls fall back to your existing line automatically. The failure mode is what you have today, never a dead line.' },
    ],

    handoff: {
      headline: 'The system that answers before we do.',
      body: 'The AI voice layer on this line is the same system we build as a product. Because we run the desk behind it, transfer thresholds are set where they should be rather than where they make a demo look good — a vendor with no people behind the line has every incentive to set them wrong.',
      service: 'ai-voice-agents',
    },

    related: ['live-chat-support', 'order-taking', 'b2b-sales'],
  },

  /* ====================================================================== */
  {
    slug: 'email-support',
    group: 'Conversation',
    accent: 'iris',
    eyebrow: 'Email Support',
    title: 'Email Support',
    headline: { lead: 'An inbox is not a queue.', accent: 'Until someone makes it one.' },
    summary:
      'Shared inbox and ticket handling with drafting automation and trained agents, worked to a first-response target rather than to inbox zero.',
    metaTitle: 'Email Support — inbox and ticket handling | Universal Virtual Support',
    metaDescription:
      'Outsourced email and ticket support with AI drafting and trained agents, worked to a defined first-response and resolution target.',
    keywords: ['outsourced email support', 'ticket handling service', 'shared inbox management', 'customer support outsourcing'],

    intent: { primary: 'A team where support email is everyone’s job and therefore nobody’s.', queries: ['outsourced email support service', 'shared inbox management service', 'customer support ticket outsourcing'] },

    builtFor: {
      headline: 'Built for businesses where email is the durable record.',
      intro: 'Email persists, and that cuts both ways: an unanswered thread is evidence, and a good answer is reusable. These are the cases where the volume justifies a desk.',
      segments: [
        { niche: 'ecommerce', label: 'DTC and subscription retail', trigger: 'Post-purchase email spikes with shipping incidents, exactly when order volume peaks.', built: 'Order, delivery and returns handled with live commerce access and consistent refund policy application.', edge: 'Refund thresholds are your policy, applied identically by every agent.' },
        { niche: 'saas', label: 'B2B SaaS and platforms', trigger: 'Support email arrives with logs attached and lands on an engineer.', built: 'A tier-one desk that triages, reproduces where possible, and escalates with a written diagnosis.', edge: 'Escalations arrive investigated, not forwarded.' },
        { niche: 'financial-services', label: 'Lenders, brokers and practices', trigger: 'Client email carries documents, deadlines and a compliance obligation on every thread.', built: 'Structured handling with documents filed correctly and deadlines tracked rather than remembered.', edge: 'Every thread leaves an auditable trail by construction.' },
        { niche: 'logistics', label: 'Freight and 3PL operators', trigger: 'Track-and-trace and documentation requests arrive constantly from customers and carriers alike.', built: 'Status requests answered from the TMS and documents retrieved without a dispatcher being interrupted.', edge: 'Answered from the system of record, not from a forwarded thread.' },
        { niche: 'education', label: 'Course providers and institutes', trigger: 'Admissions email volume multiplies during enrolment and the same fifty questions recur.', built: 'Seasonal capacity with answers drawn from current, versioned policy.', edge: 'Policy is versioned, so an eligibility answer is never last year’s.' },
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'Ticket volume grows with the user base while the people qualified to answer are the ones you need building the product.',
          built:
            'A Tier-1 desk resolving account, payment and verification tickets end to end, escalating to Tier-2 with the case investigated rather than forwarded.',
          edge: 'Tickets touching a compliance decision route to your compliance function, never to a Tier-1 agent. That boundary is enforced in the routing rules.',
        },
      ],
      notFor: 'If your support email is a handful of threads a day, a good template library and an hour of discipline beats outsourcing it.',
    },

    problem: {
      headline: 'The oldest ticket is the one nobody wants to open.',
      body: 'Shared inboxes fail in a predictable order. Easy threads get answered because they are quick, hard threads age, two people reply to the same customer, and eventually nobody can say what the response time actually is — only that it is worse than it feels.',
      points: [
        'Response time is unmeasured, so it is worse than anyone believes.',
        'The same question is answered differently by three people.',
        'Difficult threads age at the bottom while easy ones are cleared.',
        'Volume spikes and the backlog takes a fortnight to clear, if it clears.',
      ],
    },

    solution: {
      headline: 'Make it a queue with a target and a rule for the hard ones.',
      body: 'The failure is structural rather than personal. Triage on arrival, drafting for the repetitive share, an explicit owner for anything complex, and a first-response target that is measured — the discipline is the product.',
      pillars: [
        { title: 'Triage on arrival', body: 'Every thread classified and prioritised when it lands, so ageing is a decision rather than an accident.' },
        { title: 'Drafting for the repetitive share', body: 'Common responses drafted from your knowledge base and live system state, reviewed and sent by an agent.' },
        { title: 'Consistency by construction', body: 'One knowledge base and one policy, so the answer does not depend on who opened the thread.' },
        { title: 'A target that is reported', body: 'First response and resolution measured against an agreed number, weekly.' },
      ],
    },

    mechanism: {
      headline: 'What happens to a thread in the first five minutes.',
      body: 'Ageing is prevented at intake. Once a thread has been sitting for a day, no amount of process rescues it.',
      module: 'triage-flow',
      nodes: ['Arrives', 'Classify', 'Draft', 'Review & send', 'Close or escalate'],
      branchAt: 'Review & send',
      branchLabel: 'Escalate with diagnosis',
      notes: [
        'Classification and priority are set on arrival, so nothing ages because it looked difficult.',
        'Drafts are reviewed by a person before sending. Nothing is auto-sent to a customer.',
        'Escalations carry a written diagnosis and what was already tried.',
      ],
    },

    outcomes: [
      { title: 'Response time becomes a number', body: 'Measured and reported against a target instead of estimated from how the inbox feels.', measure: 'Median and 90th-percentile first response time.' },
      { title: 'Answers stop varying', body: 'One knowledge base means the same question gets the same answer regardless of who handles it.', measure: 'Policy applied consistently across agents.' },
      { title: 'Backlogs stop forming', body: 'Triage prevents the ageing pattern, so a volume spike does not become a fortnight of recovery.', measure: 'Queue age distribution held stable through peaks.' },
    ],

    stack: ['Zendesk', 'Front', 'Help Scout', 'HubSpot', 'Claude', 'Shopify'],

    process: [
      { step: 'Inbox audit', body: 'Real volume, real response times, real topic distribution — usually the first honest measurement the inbox has had.', artifacts: ['Volume and response time baseline', 'Topic taxonomy', 'Automatable share, quantified'] },
      { step: 'Knowledge build', body: 'The answers, the policy boundaries and the threads that must always reach your team.', artifacts: ['Knowledge base', 'Policy and threshold document', 'Escalation list'] },
      { step: 'Queue design', body: 'Classification, priority, ownership and the first-response target.', artifacts: ['Triage rules', 'Service level target', 'Ownership model'] },
      { step: 'Integration', body: 'Helpdesk, commerce and CRM access so answers come from live state.', artifacts: ['Helpdesk access', 'System lookups live', 'Macros and templates'] },
      { step: 'Pilot', body: 'A subset of queues, reviewed daily by your team.', artifacts: ['Sampled thread review', 'Service level measured', 'Knowledge corrections'] },
      { step: 'Run', body: 'Full coverage, weekly reporting, and a standing review that updates the knowledge base.', artifacts: ['Weekly report', 'Knowledge base updates', 'Quarterly review'] },
    ],

    faq: [
      { q: 'Do you send email as us?', a: 'From your domain and in your voice, yes — that is the point. Signatures and identification follow whatever policy you set; some clients name the agent, others use a team signature.' },
      { q: 'How do you keep answers consistent?', a: 'One knowledge base as the single source, and quality sampling on a percentage of sent threads. When two answers disagree, the knowledge base is wrong and gets fixed — that is treated as the defect rather than the agent.' },
      { q: 'What about threads needing internal knowledge?', a: 'They escalate on a rule you set, with a written summary of what was investigated. The aim is that your team receives a diagnosis rather than a forward.' },
      { q: 'Can you handle attachments and documents?', a: 'Yes — receiving, filing to the right record, and flagging what is missing. In document-heavy work that filing is often the larger share of the job.' },
      { q: 'What is a realistic response target?', a: 'It depends on your customers and your category. We baseline your current performance first, then agree a target that is an improvement you can afford rather than a number that sounds impressive.' },
    ],

    handoff: {
      headline: 'Every recurring question is a missing page.',
      body: 'A support desk is the best keyword research available and almost nobody uses it. The questions arriving here every week are the questions people type into search — so the desk feeds the content programme, and the content programme reduces the desk volume. That loop only closes when the same team runs both.',
      service: 'seo',
    },

    related: ['live-chat-support', 'data-entry', 'order-taking'],
  },

  /* ====================================================================== */
  {
    slug: 'order-taking',
    group: 'Transaction',
    accent: 'moss',
    eyebrow: 'Order Taking',
    title: 'Order Taking',
    headline: { lead: 'The order that took thirty seconds too long', accent: 'was placed somewhere else.' },
    summary:
      'Order capture across phone, chat and email — validated against live stock and written into your system, not into a spreadsheet.',
    metaTitle: 'Order Taking — capture, validate, commit | Universal Virtual Support',
    metaDescription:
      'Outsourced order taking across phone, chat and email with live stock validation and direct write-back into your commerce system or ERP.',
    keywords: ['outsourced order taking', 'phone order processing', 'order entry service', 'B2B order processing'],

    intent: { primary: 'A business taking orders through channels that do not write to the system of record.', queries: ['outsourced order taking service', 'phone order processing service', 'B2B order entry outsourcing'] },

    builtFor: {
      headline: 'Built for businesses where orders arrive by conversation.',
      intro: 'If everything goes through a checkout, you do not need this. These are the businesses where a meaningful share does not.',
      segments: [
        { niche: 'manufacturing', label: 'Manufacturers and trade distributors', trigger: 'Purchase orders arrive as emailed PDFs and phoned-in part numbers, and every one is typed into the ERP.', built: 'Capture and validation against your live catalogue, with anything uncertain held for a human rather than guessed.', edge: 'A transposed part number ships the wrong item to a production line. Validation is against real stock.' },
        { niche: 'hospitality', label: 'Restaurant groups and venues', trigger: 'Phone orders and group bookings come in during service, when nobody can take them properly.', built: 'Order and reservation capture against live availability, written into your POS or booking system.', edge: 'Availability is live. Nothing is taken that cannot be delivered.' },
        { niche: 'ecommerce', label: 'DTC and marketplace sellers', trigger: 'Phone and social orders happen and land in a spreadsheet nobody reconciles.', built: 'Capture across every channel written into the same commerce platform as the rest.', edge: 'One system of record. The spreadsheet stops existing.' },
        { niche: 'automotive', label: 'Parts counters and distributors', trigger: 'Parts availability questions interrupt counter staff continuously and half do not become orders.', built: 'Availability answered and the order taken in the same call, with fitment checked.', edge: 'Fitment is validated at capture, not discovered at return.' },
      ],
      notFor: 'If your orders are configured, negotiated or quoted individually, that is a sales conversation rather than order taking. Our B2B sales desk is the right fit.',
    },

    problem: {
      headline: 'Orders arrive in four places and reconcile in none.',
      body: 'The checkout is clean. Everything else — the phone order, the emailed PDF, the message on social — is captured by a person into a note, and re-entered later by another person. The error rate is small and the cost of each error is not: a wrong part number, a missed line item, a delivery date nobody confirmed.',
      points: [
        'Phone and email orders are re-keyed into the ERP by hand.',
        'Stock is confirmed by memory, so orders are taken for things that are not there.',
        'Peak periods overwhelm capture and orders are lost rather than delayed.',
        'The same order exists in an inbox, a spreadsheet and the ERP, in three states.',
      ],
    },

    solution: {
      headline: 'Capture once, validate, commit.',
      body: 'Every order goes through one path regardless of the channel it arrived on: captured with the details required, validated against live stock and pricing, and written into the system of record with an exception path for anything that does not fit.',
      pillars: [
        { title: 'Every channel, one path', body: 'Phone, email, chat and messaging all land in the same capture flow with the same validation.' },
        { title: 'Validated before committed', body: 'Stock, pricing, account terms and fitment checked at capture rather than discovered at fulfilment.' },
        { title: 'Straight into your system', body: 'Written into your commerce platform or ERP directly. No intermediate spreadsheet, no second entry.' },
        { title: 'Exceptions surfaced, not guessed', body: 'Anything ambiguous stops and reaches a person, because a confidently wrong order is expensive.' },
      ],
    },

    mechanism: {
      headline: 'Where an order can go wrong, and where it gets stopped.',
      body: 'The exception path is the design. An order-taking system judged on speed alone will commit the ones it should have questioned.',
      module: 'order-path',
      nodes: ['Capture', 'Validate', 'Price', 'Commit', 'Confirm'],
      branchAt: 'Validate',
      branchLabel: 'Exception → human',
      notes: [
        'Validation runs against live stock and the real catalogue, not a nightly export.',
        'Account-specific pricing and terms are applied at capture, so the confirmation is correct the first time.',
        'Exceptions are worked by a person and fed back — a recurring exception is a rule that needs writing.',
      ],
    },

    outcomes: [
      { title: 'Orders stop being re-keyed', body: 'Captured once at the point of conversation and written straight through, which removes both the delay and the transcription error.', measure: 'Orders entered once, at capture.' },
      { title: 'Errors are caught before fulfilment', body: 'Validation at capture means the wrong part is stopped at the order rather than at the return.', measure: 'Exception rate, and errors reaching fulfilment.' },
      { title: 'Peaks are absorbed', body: 'Capacity flexes with volume, so a seasonal spike does not become lost orders.', measure: 'Capture rate held through peak periods.' },
    ],

    stack: ['Shopify', 'NetSuite', 'SAP', 'Twilio', 'Claude', 'PostgreSQL'],

    process: [
      { step: 'Order flow audit', body: 'Every channel an order can arrive on, and what currently happens to it.', artifacts: ['Channel inventory with volumes', 'Current error and exception rates', 'System of record confirmed'] },
      { step: 'Validation rules', body: 'What is checked, what is refused, and what stops for a human.', artifacts: ['Validation rule set', 'Exception criteria', 'Pricing and terms logic'] },
      { step: 'Integration', body: 'Live catalogue, stock, pricing and order creation in your system.', artifacts: ['System integration live', 'Stock and pricing lookups', 'Order write-back tested'] },
      { step: 'Agent training', body: 'Your products, your terminology, your accounts. Part numbers are unforgiving.', artifacts: ['Trained agent team', 'Product knowledge base', 'Accuracy rubric'] },
      { step: 'Pilot', body: 'One channel, reconciled daily against your system.', artifacts: ['Daily reconciliation', 'Accuracy measured', 'Rules corrected'] },
      { step: 'Run', body: 'All channels with daily reconciliation and weekly accuracy reporting.', artifacts: ['Daily reconciliation report', 'Weekly accuracy metrics', 'Exception trend review'] },
    ],

    faq: [
      { q: 'Can you work directly in our ERP?', a: 'Yes. We work in your system rather than ours, because an order that lives anywhere else has to be entered twice — which is the problem we were hired to remove.' },
      { q: 'How do you handle account-specific pricing?', a: 'Applied at capture from your live pricing rules, including contract pricing and volume breaks. The confirmation the customer receives is the real price.' },
      { q: 'What happens with an unusual or custom order?', a: 'It stops and reaches a person — yours or ours, depending on the rule. Guessing on a custom order is how the wrong thing gets manufactured.' },
      { q: 'How is accuracy measured?', a: 'Daily reconciliation between what was captured and what your system holds, with an error rate reported weekly and every error investigated for cause rather than logged.' },
      { q: 'Can you take orders out of hours?', a: 'Yes — coverage is set to your requirement. Out-of-hours capture is often the strongest case, since those orders currently do not exist at all.' },
    ],

    handoff: {
      headline: 'The system that validates before we commit.',
      body: 'The extraction and validation layer under this desk is engineering we build as a product. Running the desk is what tells us where it actually breaks — which orders it should refuse and which exceptions recur — and that feedback is not available to a vendor who only ships software.',
      service: 'ai-development',
    },

    related: ['data-entry', 'voice-calls', 'b2b-sales'],
  },

  /* ====================================================================== */
  {
    slug: 'b2b-sales',
    group: 'Transaction',
    accent: 'clay',
    eyebrow: 'B2B Sales',
    title: 'B2B Sales',
    headline: { lead: 'Pipeline is not a volume problem.', accent: 'It is a follow-up problem.' },
    summary:
      'Outbound prospecting, lead qualification and follow-up run as a disciplined process — the work that gets skipped when your closers are busy closing.',
    metaTitle: 'B2B Sales Support — qualification and follow-up | Universal Virtual Support',
    metaDescription:
      'Outsourced B2B sales support: outbound prospecting, inbound lead qualification and systematic follow-up, with everything recorded in your CRM.',
    keywords: ['B2B sales outsourcing', 'lead qualification service', 'outbound prospecting service', 'SDR outsourcing'],

    intent: { primary: 'A sales leader whose team is good at closing and inconsistent at everything before it.', queries: ['outsourced SDR service', 'B2B lead qualification outsourcing', 'sales follow up process'] },

    builtFor: {
      headline: 'Built for businesses selling considered purchases to other businesses.',
      intro: 'Where the deal takes weeks, involves several people, and dies quietly if nobody follows up.',
      segments: [
        { niche: 'manufacturing', label: 'Manufacturers and distributors', trigger: 'Trade accounts reorder on a pattern that is visible in the data and acted on by nobody.', built: 'Systematic reorder outreach and lapsed-account reactivation on a schedule.', edge: 'Driven by your order history, so the call has a reason attached.' },
        { niche: 'saas', label: 'B2B software and platforms', trigger: 'Trial signups are not qualified and demo no-shows are never chased.', built: 'Qualification against your criteria, booking, and the confirmation sequence that stops no-shows.', edge: 'Qualification uses your criteria, not a generic scoring model.' },
        { niche: 'logistics', label: 'Freight brokers and 3PL', trigger: 'Shipper prospecting is done by whoever has a quiet afternoon.', built: 'Consistent outbound against a defined list, with every conversation in the CRM.', edge: 'Consistency is the product. Sporadic outbound produces nothing.' },
        { niche: 'financial-services', label: 'Brokers and commercial lenders', trigger: 'Renewals and enquiries need timely, compliant follow-up that nobody owns.', built: 'Scheduled follow-up with the compliance boundaries built into the script.', edge: 'What may and may not be said is defined before the first call.' },
      ],
      notFor: 'If your deals are relationship-led, six figures and closed by founders, an outsourced desk cannot hold that conversation. It can still handle the follow-up discipline around it.',
    },

    problem: {
      headline: 'The deal did not die. It was just never called back.',
      body: 'Sales teams are hired to close and are then asked to prospect, qualify, chase and update the CRM. The closing gets done because it is urgent, and the rest gets done when there is time — which means the second follow-up, where most deals are actually won, systematically does not happen.',
      points: [
        'Inbound leads are worked when someone is between meetings.',
        'Follow-up stops after the first attempt, which is where most deals are won.',
        'Prospecting happens in bursts after a slow month.',
        'The CRM is updated from memory on Friday, so the pipeline number is fiction.',
      ],
    },

    solution: {
      headline: 'Separate the discipline from the closing.',
      body: 'The work before and after a sales conversation is process work — high volume, rule-shaped, and ruinous to skip. Splitting it from the closing means both get done properly by people suited to each.',
      pillars: [
        { title: 'Qualification against your criteria', body: 'Written down, applied consistently, and refined on outcomes — not improvised per rep.' },
        { title: 'Follow-up that actually runs', body: 'Sequenced, scheduled and completed, including the fourth attempt nobody makes.' },
        { title: 'Outbound as a routine', body: 'A defined list worked on a cadence, so pipeline stops being a reaction to a bad quarter.' },
        { title: 'A CRM that reflects reality', body: 'Every conversation logged as it happens, so the pipeline number is a measurement rather than an estimate.' },
      ],
    },

    mechanism: {
      headline: 'The sequence that does not get skipped.',
      body: 'Most pipeline loss happens between stages, not inside them. The desk exists to make the between-stage work automatic.',
      module: 'pipeline-sequence',
      nodes: ['Source', 'Qualify', 'Book', 'Confirm', 'Follow up'],
      branchAt: 'Qualify',
      branchLabel: 'Nurture, not discard',
      notes: [
        'Unqualified does not mean deleted. It means a longer cadence, because timing is usually the only thing that was wrong.',
        'Confirmation sequences run before every booked meeting. No-shows are mostly a confirmation failure.',
        'Follow-up continues to an agreed attempt count, then moves to nurture rather than stopping silently.',
      ],
    },

    outcomes: [
      { title: 'Follow-up stops depending on capacity', body: 'Sequences run to completion regardless of how busy the closers are, which is where most recovered revenue comes from.', measure: 'Follow-up attempts completed against the sequence.' },
      { title: 'Closers spend time closing', body: 'Qualification happens before the calendar invite, so sales conversations are with people who can buy.', measure: 'Share of booked meetings meeting qualification criteria.' },
      { title: 'The pipeline number becomes real', body: 'Logged as it happens rather than reconstructed on Friday, so forecasting has something to stand on.', measure: 'CRM completeness and recency.' },
    ],

    stack: ['HubSpot', 'Salesforce', 'Outreach', 'LinkedIn Sales Navigator', 'Twilio', 'Claude'],

    process: [
      { step: 'Sales process audit', body: 'What happens to a lead today, where they stop, and what is not being done.', artifacts: ['Current process mapped', 'Drop-off points identified', 'Qualification criteria captured'] },
      { step: 'Criteria and script', body: 'What qualifies, what disqualifies, what is said, and the compliance boundaries.', artifacts: ['Qualification framework', 'Call and email scripts', 'Objection handling guide'] },
      { step: 'Sequence design', body: 'Cadences, channels, attempt counts and what happens at the end of one.', artifacts: ['Sequences per lead type', 'Attempt and timing rules', 'Nurture paths'] },
      { step: 'CRM setup', body: 'Stages, fields and logging discipline, so the data supports a forecast.', artifacts: ['CRM configured', 'Logging standards', 'Reporting views'] },
      { step: 'Pilot', body: 'One segment, with your sales leader reviewing calls and outcomes weekly.', artifacts: ['Call recordings reviewed', 'Qualification accuracy measured', 'Criteria refined'] },
      { step: 'Run', body: 'Full coverage with weekly pipeline reporting and monthly criteria review.', artifacts: ['Weekly pipeline report', 'Call quality scores', 'Monthly criteria review'] },
    ],

    faq: [
      { q: 'Do you close deals?', a: 'No, and that is deliberate. We qualify, book and follow up; your team closes. Closing needs product depth and pricing authority that belongs inside your business.' },
      { q: 'How do you know what qualifies?', a: 'From your criteria, written down during onboarding and refined against outcomes. Where criteria only exist in one senior person’s head, extracting them is part of the work — and usually valuable independently of us.' },
      { q: 'Do agents work in our CRM?', a: 'Yes. Every call, email and outcome is logged in your system as it happens, so the pipeline is current rather than reconstructed.' },
      { q: 'What about compliance in regulated sales?', a: 'Boundaries are defined before the first call — what may be said, what must not, and what has to be disclosed. Calls are recorded and sampled against that standard.' },
      { q: 'How fast does outbound produce results?', a: 'Consistent outbound typically shows a measurable pipeline effect in the second to third month. Anyone promising results in week two is describing a list purchase.' },
    ],

    handoff: {
      headline: 'A desk that knows why the last campaign failed.',
      body: 'This desk hears every objection your market has, in the words your market uses. That is the raw material for ad copy and landing pages — and because the same team runs the campaigns, the objection heard on Tuesday can be answered in the creative shipped on Friday.',
      service: 'digital-marketing',
    },

    related: ['voice-calls', 'order-taking', 'email-support'],
  },

  /* ====================================================================== */
  {
    slug: 'data-entry',
    group: 'Transaction',
    accent: 'slate',
    eyebrow: 'Data Entry',
    title: 'Data Entry & Processing',
    headline: { lead: 'Automate the ninety percent.', accent: 'Staff the ten that matters.' },
    summary:
      'Document processing and data operations where extraction handles the volume and trained reviewers handle everything below the confidence threshold.',
    metaTitle: 'Data Entry & Document Processing | Universal Virtual Support',
    metaDescription:
      'Outsourced data entry and document processing combining automated extraction with human review of anything below a confidence threshold you set.',
    keywords: ['outsourced data entry', 'document processing service', 'data extraction and verification', 'back office outsourcing'],

    intent: { primary: 'An operations manager whose team spends its week re-typing documents between systems.', queries: ['outsourced data entry service', 'invoice processing outsourcing', 'document data extraction service'] },

    builtFor: {
      headline: 'Built for businesses where documents are the bottleneck.',
      intro: 'Where paper and PDFs stand between an event happening and a system knowing about it.',
      segments: [
        { niche: 'financial-services', label: 'Lenders, insurers and practices', trigger: 'Applications, statements and claims arrive as unstructured files and a qualified person reads every one.', built: 'Extraction with per-field confidence, review of anything uncertain, and a lineage record for every figure.', edge: 'The confidence threshold is yours to set, because it is a risk decision rather than a technical one.' },
        { niche: 'logistics', label: 'Freight brokers and 3PL', trigger: 'Rate confirmations, BOLs and PODs are re-keyed into the TMS by hand.', built: 'Extraction into your TMS on its terms, with exceptions surfaced rather than silently corrected.', edge: 'We work with the legacy interface you have.' },
        { niche: 'manufacturing', label: 'Manufacturers and distributors', trigger: 'Purchase orders arrive as PDFs and part numbers are typed by hand all day.', built: 'Extraction validated against your live catalogue, with anything uncertain held.', edge: 'Validated against real stock. A plausible SKU is not accepted.' },
        { niche: 'healthcare', label: 'Clinics and practices', trigger: 'Intake forms are completed on paper and entered twice.', built: 'Digitisation and entry to the boundary your data operates under.', edge: 'Handled inside your boundary where the data cannot leave it.' },
        { niche: 'real-estate', label: 'Property management', trigger: 'Tenant screening documents are collected and checked by hand, one applicant at a time.', built: 'Document collection, extraction and verification against your screening criteria.', edge: 'Criteria applied identically to every applicant, which is also a fairness property.' },
      ],
      notFor: 'If your documents are already structured — clean CSVs, an API, consistent templates — you need an integration, not a data desk. We will scope that instead.',
    },

    problem: {
      headline: 'Skilled people are spending their week re-typing.',
      body: 'Every business accumulates a layer of transcription work: information arrives in one format and is needed in another, and a person bridges the gap. It is invisible on the org chart, it grows with the business, and it is done by people who were hired for something else.',
      points: [
        'The same information is entered into two or three systems.',
        'Backlogs form whenever someone is on leave.',
        'The error rate is unknown because nothing is checked systematically.',
        'The work is done by people whose time is worth considerably more.',
      ],
    },

    solution: {
      headline: 'A threshold, not an either-or.',
      body: 'Full automation fails on the messy tail and full manual entry is unaffordable. The workable design is a confidence threshold: extraction handles what it is certain about, people handle the rest, and the line between them is a number you own.',
      pillars: [
        { title: 'Extraction on the bulk', body: 'Structured data pulled from documents with a confidence score attached to every field, not just the document.' },
        { title: 'Review below the line', body: 'Anything under threshold reaches a trained reviewer with the source document beside it.' },
        { title: 'Validated against your data', body: 'Extracted values checked against your real catalogue, account list or reference data — so a plausible wrong value fails.' },
        { title: 'A measured error rate', body: 'Sampled and reported, so accuracy is a number you can hold us to rather than an assumption.' },
      ],
    },

    mechanism: {
      headline: 'Where the threshold sits, and who moves it.',
      body: 'The threshold is a business decision about the cost of an error versus the cost of a review. It is yours, it is visible, and it moves on evidence.',
      module: 'threshold-split',
      nodes: ['Document', 'Extract', 'Score', 'Auto-commit or review', 'Validate', 'Deliver'],
      branchAt: 'Auto-commit or review',
      branchLabel: 'Below threshold → human',
      notes: [
        'Confidence is per field. A document with one uncertain figure gets one field reviewed, not the whole page re-keyed.',
        'Reviewed corrections feed back, so the categories that fail most often improve first.',
        'Accuracy is sampled independently of confidence, because a system confident and wrong is the failure that matters.',
      ],
    },

    outcomes: [
      { title: 'Your team stops transcribing', body: 'The bulk is handled automatically and the exceptions by reviewers, so skilled staff return to the work they were hired for.', measure: 'Hours returned from transcription work.' },
      { title: 'Accuracy becomes visible', body: 'Sampled and reported rather than assumed, which is usually the first time the real error rate has been known.', measure: 'Sampled accuracy rate, reported weekly.' },
      { title: 'Volume stops causing backlogs', body: 'Capacity flexes with document volume, so leave and seasonality stop creating queues.', measure: 'Turnaround time held under volume changes.' },
    ],

    stack: ['Claude', 'Azure Document Intelligence', 'PostgreSQL', 'Python', 'NetSuite', 'SAP'],

    process: [
      { step: 'Document study', body: 'Real samples across the full messy range, not the clean examples. The tail is where the cost is.', artifacts: ['Document type inventory', 'Volume and variation analysis', 'Automatable share, quantified'] },
      { step: 'Threshold design', body: 'What a wrong field costs, and therefore where the confidence line belongs — set per field, not per document.', artifacts: ['Field-level threshold policy', 'Error cost analysis', 'Validation rule set'] },
      { step: 'Extraction build', body: 'Extraction, scoring and validation against your reference data.', artifacts: ['Extraction pipeline', 'Validation against your data', 'Baseline accuracy measured'] },
      { step: 'Reviewer training', body: 'Your documents, your terminology, your edge cases.', artifacts: ['Trained review team', 'Review guidelines', 'Quality rubric'] },
      { step: 'Parallel run', body: 'The new path runs alongside the existing one and the outputs are compared, which is the only honest way to measure accuracy.', artifacts: ['Parallel run comparison', 'Accuracy against current process', 'Threshold adjusted on evidence'] },
      { step: 'Run', body: 'Full volume with sampled quality assurance and weekly reporting.', artifacts: ['Weekly accuracy report', 'Turnaround metrics', 'Exception trend review'] },
    ],

    faq: [
      { q: 'How accurate is it?', a: 'We measure it during the parallel run rather than quote a figure, because accuracy depends entirely on your document quality. The parallel run also measures your current manual error rate, which is the comparison that actually matters and is usually higher than expected.' },
      { q: 'Who sets the confidence threshold?', a: 'You do. It is a trade between review cost and error cost, and only you know what an error costs in your business. We show the curve and recommend a starting point.' },
      { q: 'What about sensitive documents?', a: 'Handled to your requirements, including processing inside your infrastructure where data cannot leave it. That constrains the architecture, so it is agreed during the document study rather than after.' },
      { q: 'Can you work in our systems?', a: 'Yes — writing into your ERP, TMS or database directly. Where the interface is a file drop or a legacy endpoint, we work with that rather than requiring you to modernise first.' },
      { q: 'What happens to documents that fail extraction?', a: 'They go to a reviewer with the source alongside, and the failure is categorised. Recurring failure categories drive the next round of improvement rather than being absorbed as permanent manual work.' },
    ],

    handoff: {
      headline: 'The threshold is only honest if someone works below it.',
      body: 'A vendor selling only extraction software has every reason to set the confidence threshold low, because everything below it becomes your problem. We staff the review queue, which means the threshold is set where the error cost says it should be — our incentive and yours point the same way.',
      service: 'ai-development',
    },

    related: ['order-taking', 'email-support', 'live-chat-support'],
  },
];

/**
 * HOW A DESK IS STAFFED.
 *
 * This is the answer to the question every buyer of outsourced operations
 * actually has and rarely asks directly: who are these people, and who is
 * watching them?
 *
 * Most providers bury the answer in a contract schedule. Putting it on the page
 * is the whole differentiator, because the common failure of outsourced desks
 * is not that the agents are bad — it is that nobody is accountable for the
 * quality of the queue, so it degrades slowly and the client finds out from a
 * customer.
 *
 * Rendered on every operations page and on the Run hub, from one source.
 */
export const staffingModel = {
  headline: 'Every desk ships with a lead and a QA function.',
  body: 'A pool of agents with no accountable owner is how outsourced quality degrades — slowly, invisibly, and then all at once. Four roles exist on every account, and the smallest engagement gets all four.',
  roles: [
    {
      role: 'Agents',
      body: 'Trained on your product, your tone and your escalation boundaries, and assessed before they touch live work. Named and consistent on dedicated plans.',
    },
    {
      role: 'Team Lead',
      body: 'Accountable for the queue rather than working in it — coverage, SLA, escalations and the shift handover. One person you can name when something goes wrong.',
    },
    {
      role: 'QA',
      body: 'Samples completed work against a written rubric, independently of the lead. Disagreements between agents are treated as a defect in the knowledge base, not in the agent.',
    },
    {
      role: 'Account lead',
      body: 'Runs the weekly report and the standing review where the knowledge base actually changes. The person who tells you the number went the wrong way.',
    },
  ],
  note: 'QA sampling rate and the review cadence are agreed during onboarding and reported weekly against target — including the weeks it was missed.',
};

/**
 * COST POSITION.
 *
 * The claim carries its basis, because a bare percentage is exactly the kind of
 * unevidenced figure the rest of this site refuses to print — and it is the
 * first number a serious buyer will challenge.
 */
export const costPosition = {
  headline: 'Where the saving actually comes from.',
  claim: '50–60% lower',
  basis:
    'than a traditional agency’s blended rate for equivalent coverage and service level',
  body: 'The number is not a discount on the same cost structure. It comes from removing a markup layer and from the share of volume the AI layer absorbs — and both are visible to you rather than asserted here.',
  reasons: [
    {
      title: 'No agency markup layer',
      body: 'You are buying the desk, not a reseller’s margin on top of a subcontracted desk.',
    },
    {
      title: 'The automated share is real and reported',
      body: 'Repetitive volume absorbed automatically reduces the staffed hours you pay for, and the split is in the weekly report rather than in a proposal.',
    },
    {
      title: 'Capacity is contracted, not hired',
      body: 'You pay against your volume curve. A fixed team is either idle or underwater, and you pay for both.',
    },
  ],
  caveat:
    'The comparison assumes equivalent coverage hours, service level and QA. Against a cheaper desk with no lead and no QA function, we are not the cheap option and would not claim to be.',
};

export const operations = [...baseOperations, ...complianceOperations];

export const operationBySlug = Object.fromEntries(operations.map((o) => [o.slug, o]));

export const operationSlugs = operations.map((o) => o.slug);

export const operationGroups = operations.reduce((groups, operation) => {
  const existing = groups.find((g) => g.name === operation.group);
  if (existing) existing.operations.push(operation);
  else groups.push({ name: operation.group, operations: [operation] });
  return groups;
}, []);

export function relatedOperations(operation) {
  return (operation?.related ?? []).map((slug) => operationBySlug[slug]).filter(Boolean);
}
