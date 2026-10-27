/**
 * DISPATCH DESKS — the ground-transport cluster.
 *
 * ## Why dispatch is a desk and not a call centre
 *
 * A dispatch line looks like an answering line from the outside — a phone that
 * rings at two in the morning — and it is a different job. An answering desk
 * finishes when the call is logged. A dispatch desk finishes when a car is at
 * the kerb, and everything between the booking and the pickup is the desk's
 * problem: the driver who is running late, the flight that landed early, the
 * road that closed, the passenger who changed terminal.
 *
 * So these pages are written around the job rather than the call. The thing
 * being bought is a dispatched, monitored and closed-out trip inside the
 * operator's own system, under the operator's own name.
 *
 * Two pages, held apart deliberately:
 *
 *   limo-dispatching — pre-booked, high-value, itinerary-shaped work. Airport
 *                      meet-and-greets, multi-car events, corporate accounts.
 *                      The failure is a VIP waiting at arrivals.
 *   taxi-dispatch    — on-demand, high-volume, minute-by-minute work. Controller
 *                      cover for cab and private-hire fleets. The failure is a
 *                      queue of unallocated jobs and drivers sitting idle.
 *
 * The same writing rule as the answering cluster applies: search vocabulary in
 * the title, the H1 and the metadata; the body in this company's voice.
 *
 * Nothing here claims a fleet size, a client name, a coverage window or a price
 * the company has not confirmed.
 */

export const dispatchOperations = [
  /* ====================================================================== */
  {
    slug: 'limo-dispatching',
    group: 'Dispatch',
    accent: 'amber',
    eyebrow: 'Limo & Chauffeur Dispatch',
    title: 'Limo & Chauffeur Dispatch',
    headline: {
      lead: 'The car is at arrivals before the flight lands.',
      accent: 'Every time, at every hour.',
    },
    summary:
      'Outsourced limo and chauffeur dispatch inside your own system and under your own name — bookings taken, chauffeurs assigned, flights watched and every trip closed out.',
    metaTitle: 'Limo & Chauffeur Dispatch | Universal Virtual Support',
    metaDescription:
      'Outsourced limo and chauffeur dispatching: bookings, chauffeur assignment, live flight monitoring and passenger updates, worked in your system under your brand.',
    keywords: [
      'limo dispatching services',
      'outsourced chauffeur dispatch',
      'limousine dispatch company',
      'white label limo dispatch',
    ],

    intent: {
      primary:
        'A limo or chauffeur operator whose owner is still the night dispatcher, because nobody else can be trusted with the airport runs.',
      queries: [
        'outsourced limo dispatch service',
        'chauffeur dispatch company 24/7',
        'limo anywhere dispatcher outsourcing',
        'how to cover night dispatch for a limo company',
      ],
    },

    builtFor: {
      headline: 'Built for operators whose reputation rides on one pickup.',
      intro:
        'Chauffeur work is pre-booked, high-value and unforgiving: the client paid for the car to be there already. These are the operators where a dispatch desk earns its cost on the first missed flight it catches.',
      segments: [
        {
          niche: 'limo-chauffeur',
          label: 'Limo and executive chauffeur companies',
          trigger:
            'The owner takes the late calls, watches the early flights and assigns the morning runs — and the business cannot grow past the hours one person can stay awake.',
          built:
            'A dispatch desk working your booking system under your company name: reservations taken, chauffeurs assigned, every airport job tracked against the live flight and passengers updated, with the owner pulled in only on the rules they set.',
          edge: 'We work inside your platform and watch the flight rather than the booking, so there is no second system to reconcile and no pickup set from a schedule the airline has already changed.',
        },
        {
          niche: 'hospitality',
          label: 'Hotels and venues running guest transport',
          trigger:
            'The concierge books cars between check-ins, and a guest’s transfer is only as reliable as whoever is on the desk that night.',
          built:
            'A dispatch line the front desk can hand transfers to, with confirmations and driver details sent to the guest in the hotel’s name.',
          edge: 'Guest-facing messages are written to your brand standard and approved before launch.',
        },
        {
          niche: 'taxi-private-hire',
          label: 'Taxi firms with an executive or airport arm',
          trigger:
            'Executive and airport work is booked on the same control-room line as the local runs, so the corporate client gets the same attention as a two-mile hop on a busy Friday.',
          built:
            'A chauffeur-standard desk for the premium jobs — flight tracking, meet-and-greet briefings, multi-car event bookings and account confirmations — while the local board runs as it does today.',
          edge: 'Premium work runs to its own playbook, so it is never lost in the volume.',
        },
      ],
      notFor:
        'If you run a handful of cars and every job is booked a week ahead by the same three clients, you do not need a dispatch desk yet. A good booking system and a shared calendar will serve you better, and we will say so.',
    },

    problem: {
      headline: 'Dispatch is the job that never closes.',
      body: 'A chauffeur business sells certainty, and certainty is produced at the dispatch desk: the right car, the right chauffeur, at the right door, adjusted for everything that changed since the booking was made. Most operators cover that desk with the owner and whoever else will answer at night — which works until the business grows, or the owner wants to sleep.',
      points: [
        'Bookings arriving overnight wait until morning, and some of them book elsewhere.',
        'Flight delays are discovered by the chauffeur at arrivals rather than by dispatch an hour earlier.',
        'Last-minute changes are passed on by phone and text, and nobody can say afterwards who was told what.',
        'A busy weekend of events doubles the volume and the same two people are still on the desk.',
      ],
    },

    solution: {
      headline: 'A dispatch desk that works in your name.',
      body: 'Trained dispatchers on your booking platform, answering as your company and following your protocols. The desk takes the reservation, assigns the chauffeur, watches the flight, briefs the driver and closes the trip — and your team only hears about the jobs your rules say they should.',
      pillars: [
        {
          title: 'Inside your system',
          body: 'We work in the dispatch platform you already run. Your bookings, your drivers and your history stay where they are, and leaving is an access change.',
        },
        {
          title: 'Flights watched, not guessed',
          body: 'Every airport job is tracked against the live flight, with the pickup moved and both chauffeur and passenger told when it changes.',
        },
        {
          title: 'Chauffeur liaison',
          body: 'Job briefings, meeting points, passenger notes and last-minute changes go to the driver in writing, so the trip is not run from memory.',
        },
        {
          title: 'Disruption handled on the desk',
          body: 'Road closures, a vehicle off the road, a chauffeur running late — the desk reroutes, reassigns or finds cover, and tells the passenger before they have to ask.',
        },
      ],
    },

    mechanism: {
      headline: 'From the booking to the closed-out trip.',
      body: 'The desk owns the whole job, not just the phone call — which is why the pickup still happens when the plan changes.',
      module: 'dispatch-chain',
      nodes: ['Book', 'Assign', 'Track', 'Pickup', 'Close out'],
      branchAt: 'Track',
      branchLabel: 'Reroute or reassign',
      notes: [
        'Every booking is confirmed back to the passenger with chauffeur and vehicle details before the day of travel.',
        'Airport jobs follow the live flight, so the pickup time is set by when the passenger lands rather than when they booked.',
        'Exceptions — a no-show, a delay, a complaint — are logged against the job in your system, not in a chat thread.',
      ],
    },

    outcomes: [
      {
        title: 'Nobody waits at arrivals',
        body: 'Pickups follow the flight rather than the booking, so early landings and long delays are handled before the passenger notices.',
        measure: 'On-time pickup rate on airport jobs, reported weekly.',
      },
      {
        title: 'Every booking is answered',
        body: 'Calls, emails and online reservations are handled across the hours you choose, including the overnight window where most operators lose work.',
        measure: 'Booking enquiries answered and confirmed, by hour.',
      },
      {
        title: 'The owner gets their nights back',
        body: 'Escalation is by written rule, so the phone only rings for the decisions that are genuinely yours.',
        measure: 'Escalations to your team per week, with the reason for each.',
      },
    ],

    stack: ['Limo Anywhere', 'Moovs', 'iCabbi', 'FlightAware', 'Twilio', 'WhatsApp Business'],

    process: [
      {
        step: 'Operations audit',
        body: 'We sit with your current dispatch — the platform, the call recordings, the job sheet — before writing a single procedure.',
        artifacts: [
          'Job types and volumes by hour and day',
          'Your platform workflow documented',
          'The jobs you want to keep in-house',
        ],
      },
      {
        step: 'Protocols and rules',
        body: 'Greetings, booking rules, pricing references, VIP handling and the exact conditions that wake somebody up.',
        artifacts: [
          'Dispatch playbook in your words',
          'Account and VIP notes',
          'Escalation rules, written by you',
        ],
      },
      {
        step: 'Platform access',
        body: 'Role-scoped access to your dispatch system, phone line and driver channel, so the desk works your jobs rather than copies of them.',
        artifacts: [
          'Access configured and logged',
          'Call routing set up',
          'Driver communication channel agreed',
        ],
      },
      {
        step: 'Dispatcher training',
        body: 'Dispatchers trained on your service area — airports, terminals, venues, regular addresses — and on your accounts before they take a live job.',
        artifacts: [
          'Trained dispatcher team',
          'Service-area briefing pack',
          'Call and job quality rubric',
        ],
      },
      {
        step: 'Shadow and pilot',
        body: 'The desk shadows your dispatch first, then takes one shift — usually nights — with recordings reviewed daily and your team able to step in at any point.',
        artifacts: ['Pilot shift live', 'Daily review notes', 'Tuned playbook'],
      },
      {
        step: 'Run',
        body: 'Full agreed coverage with a team lead on the account, QA on recorded calls and a weekly report on the jobs that went wrong as well as the ones that did not.',
        artifacts: ['Weekly dispatch report', 'QA scores', 'Monthly review'],
      },
    ],

    faq: [
      {
        q: 'Will your dispatchers work in our existing software?',
        a: 'Yes, that is the default. We work inside the dispatch and booking platform you already use, under role-scoped access, so your jobs, drivers and history never leave your system.',
      },
      {
        q: 'Do customers know they are speaking to an outsourced desk?',
        a: 'No. Dispatchers answer in your company name, using your greeting and your booking rules. To your passengers and your chauffeurs it is your dispatch office.',
      },
      {
        q: 'How do you handle flight delays and early arrivals?',
        a: 'Every airport job is tracked against the live flight. When the arrival time moves, the desk moves the pickup, tells the chauffeur and messages the passenger — before the chauffeur is standing at the barrier.',
      },
      {
        q: 'Can you cover only nights and weekends?',
        a: 'Yes. Overnight and weekend cover is the most common way operators start, because it is the window the owner is currently covering alone. You can extend the hours once the desk has earned it.',
      },
      {
        q: 'How is limo dispatching priced?',
        a: 'Per booking, per call or as a dedicated dispatcher, depending on your volume and how evenly it arrives. We size it from your real job data during the audit rather than quoting a rate card against a guess.',
      },
    ],

    handoff: {
      headline: 'The system that takes the booking before a dispatcher does.',
      body: 'A large share of chauffeur calls are the same five questions — quote, availability, confirmation, driver details, where is my car. A voice agent can answer those instantly at any hour, and because we also run the dispatch desk behind it, the point at which a call reaches a person is set by what the job needs rather than by what makes a demo look good.',
      service: 'ai-voice-agents',
    },

    related: ['taxi-dispatch', 'after-hours-answering', 'voice-calls'],
  },

  /* ====================================================================== */
  {
    slug: 'taxi-dispatch',
    group: 'Dispatch',
    accent: 'azure',
    eyebrow: 'Taxi Dispatch',
    title: 'Taxi Dispatch & Controller Support',
    headline: {
      lead: 'Every job allocated.',
      accent: 'Every driver kept moving.',
    },
    summary:
      'Outsourced taxi controllers and operators for cab and private-hire fleets — bookings answered, jobs allocated, drivers supported and the live board watched around the clock.',
    metaTitle: 'Taxi Dispatch Services | Universal Virtual Support',
    metaDescription:
      'Outsourced taxi dispatch and controller support: bookings answered, jobs allocated, drivers tracked and supported, plus live board monitoring and reporting.',
    keywords: [
      'taxi dispatch services',
      'outsourced taxi controller',
      'taxi operator support',
      'private hire dispatch outsourcing',
    ],

    intent: {
      primary:
        'A taxi or private-hire operator who cannot keep the control room staffed on Friday nights, bank holidays and the shift nobody wants.',
      queries: [
        'outsourced taxi dispatch',
        'taxi controller outsourcing',
        'remote taxi call handling',
        'private hire operator night cover',
      ],
    },

    builtFor: {
      headline: 'Built for fleets where a minute of idle board is lost money.',
      intro:
        'Taxi dispatch is on-demand and high-volume: the passenger wants a car now, and the driver wants the next job now. These are the operators where controller cover is the difference between a busy night and a lost one.',
      segments: [
        {
          niche: 'taxi-private-hire',
          label: 'Taxi and private-hire operators',
          trigger:
            'The control room runs on two experienced controllers, and when one is off sick — or the last train and closing time land together — the phones queue and the board fills with unallocated jobs.',
          built:
            'Trained controllers working your dispatch system remotely — answering bookings, allocating jobs, managing the board and supporting drivers through the shift, with extra seats timed to your known peaks.',
          edge: 'We add controller seats to your control room rather than replacing it, so your best people stay on the work only they can do.',
        },
        {
          niche: 'healthcare',
          label: 'Non-emergency patient transport',
          trigger:
            'Clinic and hospital journeys have fixed appointment windows, and a missed pickup is a missed appointment rather than a refund.',
          built:
            'Contract-aware dispatch that tracks every journey against its window and escalates the late ones before they become a missed appointment.',
          edge: 'Passenger rules and contact protocols are written into the playbook and audited, not left to the controller’s memory.',
        },
        {
          niche: 'education',
          label: 'School and college contract transport',
          trigger:
            'Contract runs carry strict passenger and safeguarding rules, and a late or missing car is reported to the school or council rather than to a customer.',
          built:
            'Contract-run monitoring against every pickup window, with schools and parents told of changes through the channel the contract specifies.',
          edge: 'Contact rules are written into the playbook from the contract itself, then audited.',
        },
      ],
      notFor:
        'If your fleet is small enough that drivers take bookings directly and the system allocates almost everything automatically, a controller desk will cost more than it saves. Start with after-hours answering instead.',
    },

    problem: {
      headline: 'An empty control-room seat is a full queue.',
      body: 'Taxi demand arrives in bursts — closing time, the last train, the first flights, a rainy Friday — and the control room is staffed for the average. When the burst comes, calls queue, jobs sit unallocated, drivers wait for work in the wrong part of town and passengers book whoever answers first.',
      points: [
        'Calls queue during the peaks that produce the most revenue.',
        'Controllers are hard to recruit for nights and impossible to cover at short notice.',
        'Drivers ring the office for help while the office is answering passengers.',
        'Nobody has a clear view of how many bookings were lost last weekend, or why.',
      ],
    },

    solution: {
      headline: 'Controller seats that scale with the board.',
      body: 'Trained taxi controllers and operators working your system from our desk, on the hours and peaks you choose. Passengers are answered, jobs are allocated, drivers are supported, and the board is watched continuously — with a team lead accountable for the queue rather than working in it.',
      pillars: [
        {
          title: 'Bookings answered',
          body: 'Phone, app and web bookings handled in your name, with prebooks, account work and returns entered correctly the first time.',
        },
        {
          title: 'Live allocation',
          body: 'Jobs allocated and re-allocated against driver position, so the board clears and drivers are not left idle across town.',
        },
        {
          title: 'Driver support',
          body: 'A line for drivers that is not the passenger line — address problems, no-shows, payment issues and breakdowns handled while the job is still live.',
        },
        {
          title: 'Reporting that shows the losses',
          body: 'Calls answered, jobs allocated, time to allocate and jobs lost, by hour — the numbers that show where the night actually went.',
        },
      ],
    },

    mechanism: {
      headline: 'How a job moves across the board.',
      body: 'The controller decision is made on arrival, so a burst of bookings is allocated rather than stacked.',
      module: 'dispatch-board',
      nodes: ['Booking', 'Allocate', 'Track', 'Drop-off', 'Report'],
      branchAt: 'Allocate',
      branchLabel: 'Re-allocate',
      notes: [
        'Allocation uses live driver position and status from your dispatch system — the controller works the board, not a copy of it.',
        'Jobs that sit unallocated past your threshold are flagged and worked, rather than left for the next controller to find.',
        'Every lost booking is logged with a reason, so the weekly report shows the demand you did not serve as well as the demand you did.',
      ],
    },

    outcomes: [
      {
        title: 'The phones stop queuing',
        body: 'Controller capacity follows your demand curve, so the busiest hours are covered rather than survived.',
        measure: 'Calls answered and average answer time, by hour.',
      },
      {
        title: 'The board clears faster',
        body: 'Jobs are allocated as they arrive and re-allocated when a driver drops out, so passengers wait less and drivers earn more.',
        measure: 'Time from booking to allocation, by hour.',
      },
      {
        title: 'Lost work becomes visible',
        body: 'Every booking that was not served is recorded with a reason — usually the first time an operator has seen that number at all.',
        measure: 'Lost bookings per shift, categorised by cause.',
      },
    ],

    stack: ['iCabbi', 'Autocab', 'Cordic', 'CAB9', 'Twilio', 'Google Maps'],

    process: [
      {
        step: 'Control-room audit',
        body: 'We review your call data, dispatch logs and recordings to find where the queue forms and which shifts lose the most work.',
        artifacts: [
          'Call and booking volume by hour',
          'Allocation times by shift',
          'The shifts we recommend starting with',
        ],
      },
      {
        step: 'Playbook',
        body: 'Greetings, fare and account rules, zone knowledge, driver protocols and escalation conditions, written with your senior controller.',
        artifacts: [
          'Controller playbook',
          'Zone and address briefing',
          'Escalation rules, written by you',
        ],
      },
      {
        step: 'System access',
        body: 'Controller logins on your dispatch system, call routing on your line and a separate driver channel.',
        artifacts: [
          'Role-scoped access, logged',
          'Call routing configured',
          'Driver support line live',
        ],
      },
      {
        step: 'Controller training',
        body: 'Controllers trained on your area, your accounts and your system, then assessed on recorded calls before they take live work.',
        artifacts: ['Trained controller team', 'Knowledge base', 'Call quality rubric'],
      },
      {
        step: 'Pilot shift',
        body: 'One shift first — usually nights or weekends — alongside your own controllers, with daily review and your team able to take back the board at any time.',
        artifacts: ['Pilot shift live', 'Daily review', 'Tuned playbook'],
      },
      {
        step: 'Run',
        body: 'Agreed coverage with a team lead, QA on recorded calls and a weekly report on answer time, allocation time and lost work.',
        artifacts: ['Weekly control-room report', 'QA scores', 'Monthly review'],
      },
    ],

    faq: [
      {
        q: 'What does an outsourced taxi controller actually do?',
        a: 'The same work as a controller in your office: answering bookings, entering and allocating jobs, watching the board, supporting drivers with problems on a live job and keeping prebooks and accounts in order — remotely, on your system.',
      },
      {
        q: 'Which taxi dispatch systems do you work with?',
        a: 'We work inside the system you already run, under role-scoped access. If your platform supports remote controller logins, the desk can work it; we confirm the specifics during the audit.',
      },
      {
        q: 'Can you cover just our busiest shifts?',
        a: 'Yes. Most operators start with nights, weekends or bank holidays — the shifts that are hardest to staff — and keep their own controllers on the rest.',
      },
      {
        q: 'Do drivers get support as well as passengers?',
        a: 'Yes. Drivers get a separate line, so address problems, no-shows and breakdowns are handled while the job is live without blocking passenger calls.',
      },
      {
        q: 'How is it priced?',
        a: 'Per call, per booking or as dedicated controller seats, depending on your volume and how sharply it peaks. We size it from your real data during the audit rather than quoting a rate against a guess.',
      },
    ],

    handoff: {
      headline: 'The system that books the routine ride on its own.',
      body: 'Most taxi calls are the same booking with a different address. A voice agent can take those at the first ring during the busiest burst of the night, leaving controllers on allocation and exceptions — and because we staff the control room behind it, the handover to a person is set where the job needs it.',
      service: 'ai-voice-agents',
    },

    related: ['limo-dispatching', 'after-hours-answering', 'voice-calls'],
  },
];
