/**
 * ANSWERING DESKS — the phone cluster, written for how its buyers search.
 *
 * ## Why these exist separately from Voice Calls
 *
 * `voice-calls` is the operational framing: a staffed line with an SLA, sold to
 * an operations lead who already thinks in queues and coverage. It is correct,
 * and it is invisible to the people who type "answering service for small
 * business" — which is a 2,900/mo query at $70.59 CPC, the highest commercial
 * value in this market.
 *
 * These three pages are the same capability entered from the buyer's vocabulary
 * rather than ours. They are not duplicates: each answers a genuinely different
 * question, which is why the search engine treats them as different pages.
 *
 *   answering-service      — "I miss calls." Coverage and capture.
 *   after-hours-answering  — "I miss calls AFTER 5pm." A time window.
 *   virtual-receptionist   — "I need a front desk." An experience, not coverage.
 *
 * The angles are held apart deliberately: overlapping pages compete with each
 * other and neither wins. Each links to the others rather than restating them.
 *
 * ## The writing rule that still applies
 *
 * Search vocabulary goes in the title, the H1 and the metadata, because that is
 * where a search engine reads. The body stays in this company's voice — desks,
 * service levels, an AI layer and trained people — because that is what is
 * actually being sold, and a page that switches personality between its heading
 * and its first paragraph reads as written for a robot.
 *
 * Nothing here claims a coverage window, a price, or a phone number the company
 * has not confirmed.
 */

export const answeringOperations = [
  /* ====================================================================== */
  {
    slug: 'answering-service',
    group: 'Answering',
    accent: 'teal',
    eyebrow: 'Answering Service',
    title: 'Answering Service',
    headline: { lead: 'Every call answered by a person.', accent: 'Not a voicemail box.' },
    summary:
      'A live answering service on your business line — calls answered in your greeting, messages delivered, leads captured, urgent calls escalated on your rules.',
    metaTitle: 'Small Business Answering Service | Universal Virtual Support',
    metaDescription:
      'Live phone answering for small businesses — every call answered, every message delivered, every lead captured. Staffed desks with a service level you set.',
    keywords: [
      'answering service for small business',
      'small business answering service',
      'phone answering service',
      'call answering service',
      'telephone answering service',
      'live answering service',
    ],

    intent: {
      primary:
        'An owner whose phone rings while they are already busy, and who loses the caller either way.',
      queries: [
        'answering service for small business',
        'how much does an answering service cost',
        'live phone answering service',
        'call answering service for contractors',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where a missed call is a lost customer.',
      intro:
        'An answering service earns its cost where the caller has an alternative one search result away. These are the businesses where that is true on every call.',
      segments: [
        {
          niche: 'home-services',
          label: 'HVAC, plumbing, roofing and trades',
          trigger:
            'The phone rings while you are under a sink. Answer it and the job takes longer; miss it and the caller rings the next company on the list.',
          built:
            'Live answering in your business name with job details captured and dispatch-ready, so the call becomes a booking rather than a callback task.',
          edge: 'Capacity and drive time are modelled, so what gets booked can actually be done.',
        },
        {
          niche: 'legal',
          label: 'Law firms with high intake volume',
          trigger:
            'Intake is answered by paralegals between other work, and a qualified case that reaches voicemail is worth nothing.',
          built:
            'Trained intake answering that collects the facts, applies your qualification criteria and routes the matter with a transcript attached.',
          edge: 'Collect and route only — never advise. That line is enforced in the script and audited.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and specialty practices',
          trigger:
            'Reception is on one call while three patients wait at the desk, and the overflow goes unanswered.',
          built:
            'Overflow and full-line answering with booking, rescheduling and confirmations handled off your front desk.',
          edge: 'Built to the data boundary you operate under, agreed during onboarding rather than after.',
        },
        {
          niche: 'automotive',
          label: 'Service departments and parts counters',
          trigger:
            'Bay capacity is perishable and sold over one phone line by an advisor who is also handing over keys.',
          built:
            'Service booking and parts enquiries answered live, respecting bay, technician and parts availability together.',
          edge: 'Three constraints on one booking, or the desk books work that cannot be done.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger:
            'Enquiries land while every agent is out showing property, and a lead answered an hour later is a different lead.',
          built:
            'Immediate answering with qualification and routing, logged in your CRM before the agent is back in the car.',
          edge: 'Speed is the product. Qualification is tuned not to gatekeep the buyer worth the call.',
        },
      ],
      notFor:
        'If your calls are long, technical and different every time, an answering desk will frustrate your callers. That line belongs in-house, and we will say so.',
    },

    problem: {
      headline: 'The phone is a cost whether you answer it or not.',
      body: 'Answer it and the work in front of you stops. Miss it and the caller — who is comparing you against the next result — is gone before the voicemail finishes recording. Most small businesses solve this by accepting the loss, because the alternative is staffing a seat for a volume that arrives in bursts.',
      points: [
        'Calls arrive while the team is already occupied, so they are answered late or not at all.',
        'Voicemail is left for callers who have three other numbers to try.',
        'Nobody can say how many calls came in last Tuesday, or how many were missed.',
        'A busy week produces four times the volume and the same number of people.',
      ],
    },

    solution: {
      headline: 'A staffed line with a number on it.',
      body: 'What you buy is not a receptionist — it is an answer rate. Coverage across the hours you choose, an AI layer absorbing the predictable share instantly, trained people on everything else, and a service level reported weekly rather than promised once.',
      pillars: [
        {
          title: 'Answered, not queued',
          body: 'Concurrent answering means a burst of calls is answered simultaneously. There is no hold queue at the front of this.',
        },
        {
          title: 'The call finishes',
          body: 'Connected to your calendar, dispatch or CRM, so the call ends in a booking or a routed case rather than a message asking you to ring back.',
        },
        {
          title: 'Escalation by rule',
          body: 'What interrupts you is a condition you wrote — call type, caller value, an explicit request — not an agent guessing on the day.',
        },
        {
          title: 'Reported weekly',
          body: 'Answer rate, call reason and outcome by hour. The channel that was invisible becomes one you can manage.',
        },
      ],
    },

    mechanism: {
      headline: 'What happens between the ring and the record.',
      body: 'The routing decision is made on arrival, which is why the answer rate holds when volume spikes.',
      module: 'answer-path',
      nodes: ['Ring', 'Answer', 'Qualify', 'Act', 'Write back'],
      branchAt: 'Qualify',
      branchLabel: 'Escalate to you',
      notes: [
        'Answering is immediate and concurrent — the first ring, not the fourth.',
        'Escalations carry the conversation so far, so the caller never repeats themselves.',
        'Every call lands in your CRM, not in a portal you would lose access to.',
      ],
    },

    outcomes: [
      {
        title: 'The missed call stops existing',
        body: 'Coverage across the hours you choose, with concurrency so simultaneous calls are all answered rather than queued.',
        measure: 'Answer rate by hour, including the hours you currently miss.',
      },
      {
        title: 'Calls end in bookings',
        body: 'System access means the call completes rather than generating a callback task nobody gets to.',
        measure: 'Share of calls resolved on first contact.',
      },
      {
        title: 'The phone becomes measurable',
        body: 'Volume, reason, outcome and duration for every call — usually the first time this has been visible at all.',
        measure: 'Call reason and outcome, categorised, for every call.',
      },
    ],

    stack: ['Twilio', 'Deepgram', 'ElevenLabs', 'Claude', 'HubSpot', 'ServiceTitan'],

    process: [
      {
        step: 'Call audit',
        body: 'We listen to your actual calls. Every answering desk that fails was designed from an imagined conversation.',
        artifacts: [
          'Call type taxonomy from real recordings',
          'Volume by hour and day',
          'The call types we recommend never automating',
        ],
      },
      {
        step: 'Script and rules',
        body: 'What is said, what is collected, and the exact conditions that put a call through to you.',
        artifacts: [
          'Call scripts per type',
          'Qualification criteria',
          'Escalation rules, written by you',
        ],
      },
      {
        step: 'Integration',
        body: 'Calendar, dispatch and CRM connected so the call can actually be completed.',
        artifacts: [
          'Live availability integration',
          'CRM write-back',
          'Number routing configured',
        ],
      },
      {
        step: 'Agent training',
        body: 'Named agents trained on your business, your tone and your escalation boundaries.',
        artifacts: ['Trained agent team', 'Knowledge base', 'Call quality rubric'],
      },
      {
        step: 'Pilot',
        body: 'One call type first, recordings reviewed daily, with your team able to take over at any point.',
        artifacts: [
          'Pilot recordings and review',
          'Escalation rate by type',
          'Tuned rules',
        ],
      },
      {
        step: 'Run',
        body: 'Full coverage with weekly service level reporting and monthly call quality review.',
        artifacts: ['Weekly answer rate report', 'Call quality scores', 'Monthly review'],
      },
    ],

    faq: [
      {
        q: 'How does a small business answering service work?',
        a: 'You forward your line — all calls, overflow only, or outside chosen hours — and give us your greeting and instructions. Agents answer in your business name, take messages, capture lead details, answer approved questions and escalate urgent calls on the rules you set. Everything lands in your CRM.',
      },
      {
        q: 'Do I have to forward all my calls?',
        a: 'No. Conditional forwarding is the common arrangement: we answer only the calls your team misses, or only outside chosen hours, so your people still take calls when they are free.',
      },
      {
        q: 'Will callers get a script or a real conversation?',
        a: 'Agents work from your approved greeting and instructions but speak normally. A caller who can tell they are being read to has already decided how much your business cares.',
      },
      {
        q: 'What does an answering service cost?',
        a: 'It is priced against coverage and volume rather than headcount, and we size it from your real call data during the audit — so the comparison against a staffed seat is arithmetic rather than a promise. We do not publish a rate card because the honest number depends on your call mix.',
      },
      {
        q: 'Is this the same as your Voice Calls desk?',
        a: 'It is the same operation entered from a different direction. Voice Calls is the full operational engagement — inbound, outbound, overflow, with an SLA. This page is for businesses whose problem is specifically the unanswered inbound call. If you need outbound work as well, start there.',
      },
    ],

    handoff: {
      headline: 'The system that answers before a person does.',
      body: 'The AI layer on this line is engineering we build as a product. Because we also staff the desk behind it, the threshold at which a call reaches a human is set where it belongs rather than where it makes a demo look good — a vendor with nobody behind the line has every incentive to set it wrong.',
      service: 'ai-voice-agents',
    },

    related: ['after-hours-answering', 'virtual-receptionist', 'voice-calls'],
  },

  /* ====================================================================== */
  {
    slug: 'after-hours-answering',
    group: 'Answering',
    accent: 'violet',
    eyebrow: 'After-Hours Answering',
    title: 'After-Hours Answering',
    headline: { lead: 'Your customers do not stop calling', accent: 'at five o’clock.' },
    summary:
      'Live answering for evenings, weekends and holidays — messages delivered, urgent calls escalated by your rules, and the leads that used to go to voicemail captured instead.',
    metaTitle: 'After-Hours Answering Service | Universal Virtual Support',
    metaDescription:
      'After-hours phone answering for evenings, weekends and holidays. Real people on your line, urgent calls escalated on your rules, leads captured instead of lost.',
    keywords: [
      'after hours answering service',
      'after hours phone answering service',
      'after hours virtual receptionist',
      'after hours call answering service',
      'overnight answering service',
    ],

    intent: {
      primary:
        'A business losing its highest-intent calls to voicemail because they arrive when the office is shut.',
      queries: [
        'after hours answering service',
        'after hours virtual receptionist',
        'who answers my phone after hours',
        'emergency call answering evenings weekends',
      ],
    },

    builtFor: {
      headline: 'Built for businesses whose best calls arrive after closing.',
      intro:
        'Out-of-hours calls are not leftover volume. They are disproportionately urgent, disproportionately valuable, and go to whoever picks up first.',
      segments: [
        {
          niche: 'home-services',
          label: 'Emergency trades and restoration',
          trigger:
            'A burst pipe at eleven at night rings three companies. The one that answers gets the job, and yours went to voicemail.',
          built:
            'Live answering through the night with emergency triaged from routine, booked against real technician availability.',
          edge: 'Emergency and routine are separated at the point of answer, not the next morning.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and out-of-hours lines',
          trigger:
            'Patients call in the evening about symptoms, appointments and results, and the line goes to a recorded message.',
          built:
            'Evening and weekend answering with booking, rescheduling and a defined escalation path for anything clinical.',
          edge: 'Anything clinical escalates. The desk collects and routes; it never advises.',
        },
        {
          niche: 'legal',
          label: 'Firms taking urgent intake',
          trigger:
            'The people who need a lawyer at nine on a Sunday are the people who need one most, and they reach an answerphone.',
          built:
            'Out-of-hours intake that collects the facts, applies your criteria and escalates genuine urgency to your on-call solicitor.',
          edge: 'You define what wakes someone. Everything else is a documented matter waiting on Monday.',
        },
        {
          niche: 'hospitality',
          label: 'Hotels, venues and restaurant groups',
          trigger:
            'The phone rings through service and after close, and every unanswered booking becomes an aggregator booking with commission attached.',
          built:
            'Evening and late-night reservations taken against live availability, plus event enquiries captured with enough detail to quote.',
          edge: 'Availability is read live. A reservation for a room that is gone is worse than a missed call.',
        },
      ],
      notFor:
        'If nobody calls you outside business hours, this is a cost with no return. We will look at your real call data first and tell you if that is the case.',
    },

    problem: {
      headline: 'The closed line sends your best callers to a competitor.',
      body: 'Calls outside business hours skew urgent: the emergency, the time-sensitive request, the buyer comparing providers in the evening because that is when they have time. All of them meet a recorded message and move to the next open line — and because a missed call leaves no trace, the loss never appears in any report.',
      points: [
        'Evening and weekend calls become voicemail and are returned after the job is booked elsewhere.',
        'Staff are informally on call, answering their own phones out of goodwill.',
        'A generic message-taking service takes a message, which is not the same as taking a booking.',
        'There is no record of what was missed, so the cost is invisible.',
      ],
    },

    solution: {
      headline: 'Coverage that starts when your office closes.',
      body: 'Forwarding switches at the times you set. From that moment the line is answered by an AI layer on the predictable calls and trained people on everything else — with a written rule for what is urgent enough to reach you tonight rather than tomorrow.',
      pillars: [
        {
          title: 'A window you define',
          body: 'Evenings, weekends, holidays, or specific hours. Forwarding switches automatically; you do not remember to turn it on.',
        },
        {
          title: 'Urgency is a written rule',
          body: 'What wakes someone, who it wakes, and what waits for morning — agreed before the first night, not improvised at 2am.',
        },
        {
          title: 'Bookings, not just messages',
          body: 'Where the system allows it, the call ends in a confirmed appointment rather than a note for someone to action tomorrow.',
        },
        {
          title: 'The morning handover',
          body: 'Everything that was not urgent arrives as an organised, categorised list — not eleven voicemails to listen through.',
        },
      ],
    },

    mechanism: {
      headline: 'What happens at 2am, and who finds out when.',
      body: 'The whole design is the escalation rule. Without one, out-of-hours answering is either useless or it wakes you every night.',
      module: 'after-hours-path',
      nodes: ['Ring', 'Answer', 'Triage', 'Urgent or hold', 'Morning report'],
      branchAt: 'Urgent or hold',
      branchLabel: 'Wake the on-call',
      notes: [
        'Triage happens on the call, against your written definition of urgent — not a judgement call by whoever answered.',
        'Non-urgent calls become a structured morning report, categorised by reason.',
        'Coverage falls back to your existing line automatically if the desk is unavailable. The failure mode is what you have today.',
      ],
    },

    outcomes: [
      {
        title: 'The after-hours call converts',
        body: 'Calls that previously became voicemail become booked work — and they are usually the most urgent calls you receive all week.',
        measure: 'Booked work originating outside staffed hours.',
      },
      {
        title: 'Nobody is informally on call',
        body: 'Staff stop answering their own phones out of goodwill, and urgency reaches the right person through a rule rather than a group chat.',
        measure: 'Out-of-hours escalations reaching the named on-call person.',
      },
      {
        title: 'The loss becomes visible',
        body: 'Out-of-hours volume, reason and outcome measured for the first time, which is usually the number that justifies the desk.',
        measure: 'Out-of-hours call volume and outcome, reported weekly.',
      },
    ],

    stack: ['Twilio', 'Deepgram', 'ElevenLabs', 'Claude', 'HubSpot', 'ServiceTitan'],

    process: [
      {
        step: 'Out-of-hours audit',
        body: 'What actually arrives after close, and what it is worth. This is the step that decides whether the desk pays for itself.',
        artifacts: [
          'Out-of-hours volume by hour and day',
          'Call reasons from real recordings',
          'An honest recommendation, including no',
        ],
      },
      {
        step: 'Coverage window',
        body: 'Which hours, which days, which holidays, and what happens at the boundaries.',
        artifacts: [
          'Coverage schedule',
          'Forwarding configuration',
          'Holiday calendar agreed',
        ],
      },
      {
        step: 'Escalation policy',
        body: 'The definition of urgent, the on-call rota, and what waits for morning. Written by you.',
        artifacts: ['Urgency definition', 'On-call contact rota', 'Morning report format'],
      },
      {
        step: 'Integration',
        body: 'Calendar, dispatch and CRM, so an out-of-hours call can still end in a booking.',
        artifacts: [
          'Availability integration',
          'CRM write-back',
          'Escalation channel configured',
        ],
      },
      {
        step: 'Live pilot',
        body: 'One coverage window, recordings reviewed each morning, escalation rules corrected by contact with reality.',
        artifacts: ['Pilot recordings', 'Escalation accuracy reviewed', 'Revised rules'],
      },
      {
        step: 'Run',
        body: 'Full coverage with a weekly out-of-hours report and a monthly review of what escalated and whether it should have.',
        artifacts: [
          'Weekly out-of-hours report',
          'Escalation review',
          'Monthly quality review',
        ],
      },
    ],

    faq: [
      {
        q: 'What is an after-hours answering service?',
        a: 'Live phone answering that begins when your business closes. Calls are answered in your greeting during evenings, weekends and holidays; messages are taken and delivered; and calls meeting your definition of urgent are escalated to your on-call person immediately.',
      },
      {
        q: 'Can urgent after-hours calls reach me directly?',
        a: 'Yes, and you define what qualifies. The urgency rule and the on-call rota are agreed before the first night of coverage, so the decision is never improvised by whoever answered.',
      },
      {
        q: 'Is after-hours answering the same as 24/7 answering?',
        a: 'No. After-hours covers only the times your office is closed; 24/7 means the line is covered around the clock including business hours. We staff both, and which one you need depends on whether daytime calls are also being missed.',
      },
      {
        q: 'What happens to the calls that are not urgent?',
        a: 'They become an organised morning report — categorised by reason, with the details captured, so your team starts the day with a worked list rather than a voicemail box.',
      },
      {
        q: 'What if your system fails overnight?',
        a: 'Calls fall back to your existing line automatically. The failure mode is exactly what you have today, never a dead line.',
      },
    ],

    handoff: {
      headline: 'Nobody staffs 3am cheaply with people alone.',
      body: 'Out-of-hours coverage is only affordable because an AI layer absorbs the predictable share of overnight calls and a trained person takes the rest. Building that layer and staffing the escalation behind it are the same job — which is why the transfer threshold here is set on call quality rather than on cost.',
      service: 'ai-voice-agents',
    },

    related: ['answering-service', 'virtual-receptionist', 'voice-calls'],
  },

  /* ====================================================================== */
  {
    slug: 'virtual-receptionist',
    group: 'Answering',
    accent: 'magenta',
    eyebrow: 'Virtual Receptionist',
    title: 'Virtual Receptionist',
    headline: { lead: 'A front desk', accent: 'without a front desk.' },
    summary:
      'A trained receptionist answering in your company name — greeting, screening, transferring and booking, with the first impression an in-house front desk would give.',
    metaTitle: 'Virtual Receptionist Services | Universal Virtual Support',
    metaDescription:
      'Virtual receptionist services: a real person answers in your company greeting, screens and transfers calls, books appointments and captures new-client details.',
    keywords: [
      'virtual receptionist services',
      'virtual receptionist',
      'remote receptionist',
      'virtual front desk',
      'receptionist answering service',
    ],

    intent: {
      primary:
        'A practice or small office that needs the front-desk experience without the front-desk salary.',
      queries: [
        'virtual receptionist services',
        'virtual receptionist vs answering service',
        'remote receptionist for small office',
        'can a virtual receptionist book appointments',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where the first impression is the front desk.',
      intro:
        'A receptionist is not coverage — it is a standard of greeting. These are the businesses where the caller judges you in the first eight seconds.',
      segments: [
        {
          niche: 'healthcare',
          label: 'Clinics, dental and specialty practices',
          trigger:
            'Reception is answering the phone while patients wait at the desk, and both experiences suffer for it.',
          built:
            'A remote front desk taking the calls: greeting, booking, rescheduling, confirmations and recall — off your reception team entirely.',
          edge: 'Built to the data boundary you operate under, agreed during onboarding.',
        },
        {
          niche: 'legal',
          label: 'Law firms and chambers',
          trigger:
            'The first voice a prospective client hears is whoever happened to be free, and it varies enormously.',
          built:
            'A consistent, trained greeting with intake criteria applied the same way on every call, and the matter routed with a transcript.',
          edge: 'Collect and route only. The line between qualification and legal advice is enforced in the tooling.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property offices',
          trigger:
            'The office line rings unanswered while every agent is out, and callers assume nobody is there.',
          built:
            'A staffed front desk that greets, qualifies, books viewings against agent availability and logs the enquiry immediately.',
          edge: 'Qualification tuned not to gatekeep — the buyer worth the call still reaches an agent.',
        },
        {
          niche: 'financial-services',
          label: 'Brokers, advisers and practices',
          trigger:
            'Client calls arrive during meetings, and a regulated conversation cannot be handled by whoever picks up.',
          built:
            'Professional greeting and screening with a written boundary on what the desk may and may not discuss, escalating the rest.',
          edge: 'What may be said is defined before the first call, and calls are sampled against that standard.',
        },
      ],
      notFor:
        'If what you actually need is every call captured rather than a front-desk experience, an answering service is the cheaper and better fit — see that desk instead.',
    },

    problem: {
      headline: 'The front desk is a full-time cost for a part-time volume.',
      body: 'A receptionist is the most visible role in a small office and often the least justifiable on volume alone. So the job gets absorbed by whoever is nearest the phone — which means the greeting, the screening standard and the booking accuracy all vary by who answered, and the caller notices.',
      points: [
        'The greeting changes depending on who reaches the phone first.',
        'Calls are screened by instinct, so the wrong ones interrupt and the right ones do not.',
        'Appointments are written down and entered later, or not at all.',
        'The role costs a full salary for a line that is busy a few hours a day.',
      ],
    },

    solution: {
      headline: 'One greeting, one standard, every call.',
      body: 'A trained receptionist team working from your script and your criteria, connected to your calendar. The experience is a front desk; the arrangement is a desk you share with other accounts, which is the whole reason it costs what a front desk does not.',
      pillars: [
        {
          title: 'Your greeting, every time',
          body: 'The same words, the same tone, whoever is on shift. Consistency is most of what a front desk actually delivers.',
        },
        {
          title: 'Screening on your rules',
          body: 'What reaches you, what is handled, what is taken as a message — a written condition rather than a judgement call.',
        },
        {
          title: 'Booked into your calendar',
          body: 'Appointments scheduled against live availability so what is offered can be honoured.',
        },
        {
          title: 'The record follows',
          body: 'Caller details, reason and outcome written into your system before the caller has hung up.',
        },
      ],
    },

    mechanism: {
      headline: 'The eight seconds that decide the call.',
      body: 'Everything a front desk does well happens before the caller has finished their first sentence: recognised, greeted correctly, and routed to the right place.',
      module: 'reception-path',
      nodes: ['Ring', 'Greet', 'Screen', 'Handle or book', 'Log'],
      branchAt: 'Screen',
      branchLabel: 'Transfer to you',
      notes: [
        'Greeting is scripted; the conversation is not. Callers interrupt and change their mind, and the desk handles that.',
        'Transfers carry the context so far, so nobody explains themselves twice.',
        'Booking reads live availability. Offering a slot that is gone is worse than taking a message.',
      ],
    },

    outcomes: [
      {
        title: 'The greeting stops varying',
        body: 'One trained standard applied on every call instead of whoever was closest to the phone.',
        measure: 'Call quality sampled against a written rubric, weekly.',
      },
      {
        title: 'Your team stops answering the phone',
        body: 'Screening means only the calls that need a specific person reach them, which is the interruption cost the front desk existed to remove.',
        measure: 'Share of calls handled without reaching your team.',
      },
      {
        title: 'Appointments land in the calendar',
        body: 'Booked live during the call rather than written on a pad and entered later, which is where bookings get lost.',
        measure: 'Appointments booked on the call, not after it.',
      },
    ],

    stack: ['Twilio', 'Deepgram', 'ElevenLabs', 'Claude', 'HubSpot', 'Calendly'],

    process: [
      {
        step: 'Call audit',
        body: 'Real recordings, real call types, and where the current greeting and screening actually break down.',
        artifacts: ['Call type taxonomy', 'Volume by hour', 'Current handling assessed'],
      },
      {
        step: 'Greeting and script',
        body: 'The exact words, the screening criteria, and what the desk may never handle alone.',
        artifacts: ['Greeting script', 'Screening criteria', 'Never-handle list'],
      },
      {
        step: 'Calendar integration',
        body: 'Live availability and the capacity rules that govern what can actually be booked.',
        artifacts: [
          'Booking integration live',
          'Capacity rules modelled',
          'CRM write-back',
        ],
      },
      {
        step: 'Receptionist training',
        body: 'Named people trained on your business, your callers and your boundaries.',
        artifacts: ['Trained receptionist team', 'Knowledge base', 'Quality rubric'],
      },
      {
        step: 'Pilot',
        body: 'Live on part of your volume with recordings reviewed daily by your team.',
        artifacts: [
          'Pilot recordings reviewed',
          'Transfer rate measured',
          'Script corrections',
        ],
      },
      {
        step: 'Run',
        body: 'Full coverage with weekly quality sampling and a monthly review of the script.',
        artifacts: [
          'Weekly quality scores',
          'Booking accuracy report',
          'Monthly script review',
        ],
      },
    ],

    faq: [
      {
        q: 'What does a virtual receptionist do?',
        a: 'Answers your business calls remotely as a front desk would: greeting callers in your company name, screening and transferring, taking and delivering messages, booking appointments, and capturing new-client details according to your instructions.',
      },
      {
        q: 'Is the receptionist a real person?',
        a: 'Trained people handle the conversation. An AI layer takes the most predictable calls instantly, and it identifies itself as an AI if asked — we do not build systems that claim to be human. Which calls go to which is agreed with you during onboarding and reported weekly.',
      },
      {
        q: 'Can a virtual receptionist book appointments in my calendar?',
        a: 'Yes, against live availability, respecting the capacity rules that matter in your business. A booking that cannot be honoured is worse than a missed call, so those rules are modelled explicitly during integration.',
      },
      {
        q: 'What is the difference between a virtual receptionist and an answering service?',
        a: 'A receptionist is about the experience: a consistent front-desk greeting, screening and scheduling during business hours. An answering service is about coverage: making sure no call is missed, including overflow and out of hours. Many businesses run both, and they are separate desks here for that reason.',
      },
      {
        q: 'Do callers know the receptionist is remote?',
        a: 'The greeting is yours, so the experience matches an in-house front desk. We do not instruct agents to claim to be sitting in your office, and if a caller asks directly they get an honest answer.',
      },
    ],

    handoff: {
      headline: 'The predictable calls should never reach a person.',
      body: 'A front desk spends most of its day on four questions — opening hours, location, availability, and a booking. A voice agent answers those instantly and hands over the moment the conversation needs judgement, which is what makes a trained receptionist affordable on a small line.',
      service: 'ai-voice-agents',
    },

    related: ['answering-service', 'after-hours-answering', 'voice-calls'],
  },
];
