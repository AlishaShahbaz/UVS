/**
 * NICHE TAXONOMY — who the work is actually for.
 *
 * This file exists because the old site had a failure mode worth naming: it
 * listed twelve industries on one page and nine services on another, and never
 * connected them. A visitor running a roofing company could read every word of
 * the AI Voice Agents page without once being told it was built for someone
 * like them.
 *
 * So a niche here is a *business type*, not a sector. "Healthcare" is a sector
 * and tells a reader nothing. "Multi-site clinics and telehealth groups running
 * their own front desk" is a business type, and either describes the reader or
 * does not.
 *
 * THE TEST every entry has to pass
 *   Swap the niche name for a different one. If the `pressure` and `signals`
 *   still read fine, they are filler and have to be rewritten. Nothing generic
 *   survives in this file.
 *
 * SHAPE
 *   slug        URL segment; also the join key used by `builtFor` on services.
 *   label       Short display name.
 *   who         The business type in one line — specific enough to self-select.
 *   pressure    The operational pressure that creates demand. Not a benefit.
 *   signals     Observable triggers. If a reader recognises two, they need us.
 *   constraint  The thing that must be designed around, not worked around.
 *   services    Service slugs that genuinely fit. Short lists only.
 *   operations  Operations slugs that genuinely fit.
 *   accent      Palette key from globals.css.
 */

export const niches = [
  {
    slug: 'home-services',
    label: 'Home services',
    accent: 'ember',
    who: 'HVAC, plumbing, roofing, electrical, pest and restoration companies running dispatch off a phone line.',
    pressure:
      'Demand arrives as an emergency, at the worst hour, and goes to whoever picks up first. A missed call is not a delayed sale — it is a sale that closed with a competitor before the voicemail finished recording.',
    signals: [
      'Calls after 6pm go to voicemail and are returned the next morning',
      'The office manager is also the dispatcher, the scheduler and the receptionist',
      'Nobody can say how many calls came in last Tuesday, let alone how many were answered',
      'Storm weeks produce four times the call volume and the same number of people',
    ],
    constraint:
      'Booking has to respect real technician availability and real drive time. An agent that books two jobs an hour apart across town has created a problem, not solved one.',
    services: ['ai-voice-agents', 'google-ads', 'seo', 'website-development'],
    operations: ['voice-calls', 'order-taking', 'live-chat-support'],
  },
  {
    slug: 'ecommerce',
    label: 'E-commerce & DTC',
    accent: 'magenta',
    who: 'Direct-to-consumer brands, subscription boxes and marketplace sellers shipping physical product.',
    pressure:
      'Support volume is not proportional to revenue — it is proportional to shipping incidents, and those spike exactly when revenue does. Q4 doubles orders and triples tickets.',
    signals: [
      '"Where is my order" is the majority of every support queue',
      'Ad spend scales but contribution margin does not follow',
      'Refund and return handling is manual and inconsistent between agents',
      'Peak season is covered by temporary staff who are trained in November',
    ],
    constraint:
      'Anything touching an order must read live from the commerce platform. A support answer based on a stale export is worse than no answer, because the customer acts on it.',
    services: ['meta-ads', 'google-ads', 'seo', 'ai-agents', 'website-development'],
    operations: ['live-chat-support', 'email-support', 'order-taking'],
  },
  {
    slug: 'healthcare',
    label: 'Healthcare & clinics',
    accent: 'teal',
    who: 'Multi-site clinics, dental and specialty practices, and telehealth groups running their own front desk.',
    pressure:
      'The front desk is simultaneously the phone line, the scheduler, the intake team and the billing chase. Every minute on hold is a patient who books somewhere else, and every no-show is an hour of clinician time billed to nobody.',
    signals: [
      'Reception is on the phone while patients wait at the desk',
      'No-show rate sits above ten percent and nobody owns reducing it',
      'Intake forms are completed on paper and typed in twice',
      'Recall and follow-up campaigns are run when someone finds the time',
    ],
    constraint:
      'Patient data has a boundary it cannot cross, and every automated action needs an audit trail. Where data cannot leave your infrastructure, the system runs inside it — that is an architecture decision made on day one, not a setting toggled later.',
    services: ['ai-voice-agents', 'ai-agents', 'website-development', 'seo'],
    operations: ['voice-calls', 'email-support', 'data-entry'],
  },
  {
    slug: 'logistics',
    label: 'Logistics & freight',
    accent: 'slate',
    who: 'Freight brokers, 3PL operators, last-mile carriers and warehousing companies.',
    pressure:
      'Margin lives in the gap between quoted and actual, and that gap is closed by people making phone calls. Check calls, load updates and rate confirmations are high-volume, low-judgement work that still occupies experienced staff.',
    signals: [
      'Dispatchers spend the morning on status check calls',
      'Rate confirmations and BOLs are re-keyed from PDF into the TMS',
      'Track-and-trace requests come in by phone and email at all hours',
      'Carrier onboarding paperwork takes days because someone has to read it',
    ],
    constraint:
      'The TMS is the system of record and it is usually old. Integration happens on its terms — file drops, EDI, an API written a decade ago — and the design has to accept that rather than assume a modern endpoint.',
    services: ['ai-agents', 'ai-development', 'website-development'],
    operations: ['voice-calls', 'data-entry', 'email-support', 'b2b-sales'],
  },
  {
    slug: 'real-estate',
    label: 'Real estate & property',
    accent: 'amber',
    who: 'Brokerages, property management firms and proptech platforms handling inbound enquiry at volume.',
    pressure:
      'Lead value decays in minutes. A portal enquiry answered in five minutes converts several times better than the same enquiry answered in an hour — and agents are, by definition, out showing property when enquiries land.',
    signals: [
      'Portal leads sit unactioned until the end of a viewing',
      'Maintenance requests arrive by phone, text and email with no single queue',
      'Tenant screening documents are collected and checked by hand',
      'Listing content is written once, badly, and never revisited',
    ],
    constraint:
      'Qualification cannot become gatekeeping. An agent that filters too hard loses the buyer who was worth the call, so the escalation rule matters more than the qualification rule.',
    services: ['ai-voice-agents', 'google-ads', 'meta-ads', 'website-development', 'seo'],
    operations: ['voice-calls', 'live-chat-support', 'data-entry'],
  },
  {
    slug: 'fintech',
    label: 'Fintech, neobanks & web3',
    accent: 'cyan',
    who: 'Fintechs, neobanks, payment platforms and web3 companies growing faster than their compliance function can hire.',
    pressure:
      'Growth and compliance scale on different curves. Sign-ups can multiply in a quarter; a trained KYC reviewer takes months to bring up and cannot be hired on the day a campaign lands. Meanwhile every new market adds a regulator, and the onboarding queue that used to take an hour becomes the reason users churn before they ever fund an account.',
    signals: [
      'Onboarding backlog grows during exactly the weeks acquisition is working',
      'Verification SLA is measured in days and quoted to users in minutes',
      'Alert review is done by whoever on the ops team is free that afternoon',
      'A new market launch is blocked on headcount rather than on product',
      'Nobody can reconstruct, for a regulator, why a specific account was cleared',
    ],
    constraint:
      'Every decision has to be reconstructable months later — who reviewed it, against which policy version, on what evidence. Data residency is fixed by jurisdiction rather than chosen, and the audit trail is not a reporting feature added afterwards; it is the shape of the system from the first day.',
    services: ['ai-development', 'ai-agents', 'website-development', 'seo'],
    operations: [
      'kyc-onboarding',
      'transaction-monitoring',
      'live-chat-support',
      'email-support',
      'data-entry',
    ],
  },
  {
    slug: 'financial-services',
    label: 'Financial services',
    accent: 'deep',
    who: 'Established lenders, insurance brokers, accounting practices and wealth advisers handling regulated client work. (Building a fintech or neobank? That is a different set of pressures — see fintech.)',
    pressure:
      'Every client interaction is a compliance artefact, and the document handling that surrounds it is enormous. Applications, statements, KYC packs and claims all arrive as unstructured files that a qualified person currently reads.',
    signals: [
      'Document review is the bottleneck between enquiry and decision',
      'The same figures are keyed into three systems',
      'Audit preparation means reconstructing what happened from email',
      'Renewal and chase campaigns depend on someone remembering',
    ],
    constraint:
      'Approximately right is the same as wrong. Every extracted figure needs a confidence score and a review threshold, and every decision needs a lineage a regulator can follow.',
    services: ['ai-development', 'ai-agents', 'website-development', 'google-ads'],
    operations: ['data-entry', 'email-support', 'voice-calls'],
  },
  {
    slug: 'legal',
    label: 'Legal practices',
    accent: 'clay',
    who: 'Personal injury, immigration, family and conveyancing firms with high inbound enquiry volume.',
    pressure:
      'Intake is the whole business and it is done by whoever is free. A qualified case that reaches voicemail is worth nothing, and an unqualified case that reaches an attorney costs an hour.',
    signals: [
      'Intake calls are answered by paralegals between other work',
      'Case qualification criteria live in one senior person’s head',
      'Client document collection takes weeks of chasing',
      'Marketing spend is unattributed to matter type',
    ],
    constraint:
      'An intake system may collect and route, never advise. The line between qualification and legal advice has to be drawn in the prompt, enforced in the tooling, and visible in the transcript.',
    services: ['ai-voice-agents', 'google-ads', 'seo', 'website-development'],
    operations: ['voice-calls', 'live-chat-support', 'data-entry'],
  },
  {
    slug: 'saas',
    label: 'B2B SaaS & platforms',
    accent: 'iris',
    who: 'Software companies, API businesses and platform operators supporting technical customers.',
    pressure:
      'Support quality is a retention input, not a cost line — but the volume is repetitive and the people qualified to answer it are the people you need building. Tier-one questions consume engineering attention.',
    signals: [
      'Engineers are in the support rotation and resent it',
      'The docs answer the question, and customers still ask it',
      'Onboarding depends on a founder-led call that does not scale',
      'Churn shows up in the dashboard before anyone spoke to the account',
    ],
    constraint:
      'Technical answers must be grounded in current docs and current API behaviour. A confidently wrong answer about an endpoint costs more trust than a slow one.',
    services: ['ai-agents', 'ai-development', 'website-development', 'seo'],
    operations: ['live-chat-support', 'email-support', 'b2b-sales'],
  },
  {
    slug: 'hospitality',
    label: 'Hospitality & travel',
    accent: 'ember',
    who: 'Independent hotels, restaurant groups, tour operators and venue businesses taking direct bookings.',
    pressure:
      'Every booking taken through an aggregator costs commission, and every booking missed on the phone goes to one. The direct channel is the margin, and the direct channel is a phone nobody has time to answer during service.',
    signals: [
      'The phone rings through dinner service and is answered when convenient',
      'Aggregator commission is the largest controllable cost line',
      'Group and event enquiries take days to quote',
      'Reviews are answered sporadically or not at all',
    ],
    constraint:
      'Availability must be live against the PMS or booking system. Taking a reservation for a room that is gone is worse than missing the call.',
    services: ['ai-voice-agents', 'meta-ads', 'seo', 'website-development'],
    operations: ['voice-calls', 'order-taking', 'live-chat-support'],
  },
  {
    slug: 'education',
    label: 'Education & training',
    accent: 'violet',
    who: 'Online course providers, tutoring companies, training institutes and EdTech platforms.',
    pressure:
      'Enrolment is seasonal and enquiry-driven. The window between interest and enrolment is short, the questions are the same fifty questions, and the admissions team is three people in September and three people in June.',
    signals: [
      'Admissions enquiries spike tenfold in enrolment season',
      'The same eligibility and fee questions are answered daily',
      'Applicant documents are verified manually',
      'Drop-off between enquiry and application is unmeasured',
    ],
    constraint:
      'Eligibility and fee answers must come from current policy, versioned. A wrong answer about entry requirements is a complaint, sometimes a refund.',
    services: ['ai-agents', 'meta-ads', 'google-ads', 'website-development', 'seo'],
    operations: ['live-chat-support', 'email-support', 'data-entry'],
  },
  {
    slug: 'automotive',
    label: 'Automotive',
    accent: 'azure',
    who: 'Dealership groups, independent service centres, parts distributors and fleet operators.',
    pressure:
      'Service bays are a fixed capacity sold by the hour, and they are filled by phone. An unbooked bay is revenue that cannot be recovered later, and the service advisor booking it is also the person handing over keys.',
    signals: [
      'Service booking runs through one phone line during peak hours',
      'Parts availability questions interrupt counter staff constantly',
      'Follow-up on quoted-but-not-booked work does not happen',
      'Lead response on used stock enquiries takes hours',
    ],
    constraint:
      'Bay capacity, technician skill and parts availability are three separate constraints on one booking. A system that models only the calendar will book work that cannot be done.',
    services: ['ai-voice-agents', 'google-ads', 'meta-ads', 'website-development'],
    operations: ['voice-calls', 'order-taking', 'b2b-sales'],
  },
  {
    slug: 'manufacturing',
    label: 'Manufacturing & distribution',
    accent: 'moss',
    who: 'Industrial manufacturers, wholesalers and distributors selling into trade accounts.',
    pressure:
      'Orders arrive as emailed purchase orders, phoned-in part numbers and spreadsheets, and every one of them is typed into an ERP by a person. The error rate is small and the cost of each error is not.',
    signals: [
      'Purchase orders arrive by email as PDF and are re-keyed',
      'Quote turnaround is measured in days because it needs a specialist',
      'Stock and lead-time questions occupy inside sales all day',
      'Reorder patterns are visible in the data and acted on by nobody',
    ],
    constraint:
      'Part numbers are unforgiving. Extraction needs validation against the real catalogue and a human gate on anything below confidence, because a transposed digit ships the wrong item to a production line.',
    services: ['ai-development', 'ai-agents', 'website-development', 'seo'],
    operations: ['data-entry', 'order-taking', 'b2b-sales', 'email-support'],
  },
];

/** Lookup by slug. Used by service pages to resolve their `builtFor` joins. */
export const nicheBySlug = Object.fromEntries(niches.map((n) => [n.slug, n]));

export const nicheSlugs = niches.map((n) => n.slug);

/**
 * Reverse index: which niches claim a given service. Lets a service page render
 * its audience without that list being maintained in two places.
 */
export function nichesForService(serviceSlug) {
  return niches.filter((n) => n.services.includes(serviceSlug));
}

export function nichesForOperation(operationSlug) {
  return niches.filter((n) => n.operations.includes(operationSlug));
}
