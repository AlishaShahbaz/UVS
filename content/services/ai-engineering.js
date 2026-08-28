/**
 * AI ENGINEERING — service content.
 *
 * Written fresh. Two rules were binding while writing:
 *
 *   THE SUBSTITUTION TEST. If a competitor could publish this paragraph after a
 *   find-and-replace on the company name, it failed and was rewritten.
 *
 *   NO BORROWED PROOF. Nothing here claims a client, a case study or a metric
 *   the company cannot evidence. Where a page needs to earn trust it does so by
 *   being specific about method, which is free and true.
 */

export const aiEngineering = [
  /* ====================================================================== */
  {
    slug: 'ai-development',
    group: 'AI Engineering',
    accent: 'iris',
    eyebrow: 'AI Development',
    title: 'AI Development',
    headline: {
      lead: 'The model is the easy part.',
      accent: 'Everything else is the work.',
    },
    summary:
      'Applied AI systems built with retrieval, evaluation and observability from the first commit — because those decide whether it still works in month six.',
    metaTitle: 'AI Development Services | Universal Virtual Support',
    metaDescription:
      'AI engineering for systems that stay in production: retrieval architecture, evaluation harnesses, guardrails and observability, wired into what you already run.',
    keywords: [
      'AI development company',
      'production AI systems',
      'RAG architecture',
      'LLM evaluation',
      'AI integration services',
    ],

    intent: {
      primary:
        'A technical or operational buyer who has seen an AI demo work and does not trust it to survive real users.',
      queries: [
        'why do AI prototypes fail in production',
        'RAG architecture for company documents',
        'how to evaluate LLM output quality',
        'AI development company for existing systems',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where a wrong answer costs something.',
      intro:
        'The engineering below matters in proportion to what an error costs you. If a bad output is an inconvenience, most of it is overkill. These are the businesses where it is not.',
      segments: [
        {
          niche: 'financial-services',
          label: 'Lenders, brokers and accounting practices',
          trigger:
            'Applications, statements and KYC packs arrive as unstructured files, and a qualified person reads every one before anything can move.',
          built:
            'Document extraction with a confidence score on every field, a review threshold that routes anything uncertain to a human, and a lineage record for each figure.',
          edge: 'The threshold is a business decision, so it is a setting you own — not a constant in our code.',
        },
        {
          niche: 'manufacturing',
          label: 'Manufacturers and trade distributors',
          trigger:
            'Purchase orders arrive as emailed PDFs and someone types part numbers into an ERP all day.',
          built:
            'Order extraction validated against your live catalogue, with anything below confidence held for a human rather than guessed.',
          edge: 'Part numbers are validated against what you actually stock, so a plausible-but-wrong SKU fails instead of shipping.',
        },
        {
          niche: 'logistics',
          label: 'Freight brokers and 3PL operators',
          trigger:
            'Rate confirmations and BOLs are re-keyed from PDF into a TMS that was written a decade ago.',
          built:
            'Extraction into your TMS on its own terms — file drop, EDI or a legacy endpoint — with exceptions surfaced rather than silently corrected.',
          edge: 'We integrate with the system of record you have, not the one a modern architecture diagram assumes.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics and telehealth groups',
          trigger:
            'Clinical documentation holds the answer to a question staff ask twenty times a day, and finding it takes minutes each time.',
          built:
            'Retrieval over your documentation where every answer carries its source, and the system declines rather than infers when the source is not there.',
          edge: 'Where data cannot leave your infrastructure, the system runs inside it. That is decided on day one.',
        },
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'Onboarding documents arrive in a dozen formats and half a dozen languages, and a trained reviewer opens every one before an account can be funded.',
          built:
            'Document extraction with a confidence score on every field, validated against the issuing format, holding anything uncertain for a reviewer rather than guessing it.',
          edge: 'Every extracted field carries its evidence and the policy version it was checked against, so a decision is reconstructable for a regulator years later.',
        },
      ],
      notFor:
        'If you want a chatbot on a marketing site answering general questions, this is more engineering than the job needs, and we will say so on the first call.',
    },

    problem: {
      headline: 'The demo works. That is the problem.',
      body: 'A prototype is a model, a prompt and a handful of examples that someone chose. Production is every input a real user can type, every document nobody cleaned, and a stakeholder asking why the answer changed. The distance between those two states is not model quality — it is the engineering nobody budgeted for.',
      points: [
        'It answers well on the examples used to build it, and poorly on the ones nobody thought of.',
        'A prompt was changed last week. Nobody can say whether that made things better or worse.',
        'It is right most of the time, and there is no way to know which times.',
        'It cannot reach the systems where the real data lives, so it works on a copy that is already stale.',
      ],
    },

    solution: {
      headline: 'We build the four things that are not the model.',
      body: 'Choosing a model is an afternoon. Retrieval quality, measurement, failure behaviour and observability are the months, and they are ordinary software engineering rather than research — which is precisely why they get skipped and precisely why we do them first.',
      pillars: [
        {
          title: 'Retrieval that fits your corpus',
          body: 'Chunking, embedding and ranking tuned against your documents and your query patterns. A benchmark score tells you how a strategy performs on someone else’s data.',
        },
        {
          title: 'An evaluation set that grows',
          body: 'A labelled set built from your real cases, extended every time something fails. Prompt and model changes are then measured rather than argued about in a meeting.',
        },
        {
          title: 'Failure that is visible',
          body: 'Structured outputs, schema validation and explicit refusal paths, so the system says it does not know instead of inventing something fluent.',
        },
        {
          title: 'Traces you can read',
          body: 'Every call recorded with its retrieved context, its cost and its latency. When an answer is wrong, the question is what happened, not what might have happened.',
        },
      ],
    },

    mechanism: {
      headline: 'What happens between the question and the answer.',
      body: 'Most of an AI system is the part that decides what the model gets to see, and what happens when it responds badly. Both are inspectable.',
      module: 'pipeline-flow',
      nodes: ['Query', 'Retrieve', 'Rank', 'Generate', 'Validate', 'Answer'],
      branchAt: 'Validate',
      branchLabel: 'Refuse & log',
      notes: [
        'Retrieval is scored before generation, so a bad answer can be traced to a bad document rather than blamed on the model.',
        'Validation runs against a schema. A response that does not fit the contract never reaches the user.',
        'Refusals are logged as first-class events. They are the cheapest source of new evaluation cases you will ever get.',
      ],
    },

    outcomes: [
      {
        title: 'Quality moves in one direction',
        body: 'Every change is scored against the evaluation set before it ships, so improvements accumulate instead of trading one regression for another.',
        measure: 'Regressions caught before deployment rather than by a customer.',
      },
      {
        title: 'Spend stops surprising you',
        body: 'Token cost is traced per feature, with caching where inputs repeat and routing to a smaller model where a smaller model is sufficient.',
        measure: 'Cost per transaction, visible per feature, not one monthly invoice.',
      },
      {
        title: 'Wrong answers become explainable',
        body: 'A full trace means a complaint turns into a fifteen-minute investigation with a specific fix, instead of a discussion about whether AI is reliable.',
        measure: 'Root cause identified from the trace, not reproduced by guesswork.',
      },
    ],

    stack: [
      'Claude',
      'OpenAI',
      'Gemini',
      'LangGraph',
      'pgvector',
      'Python',
      'Next.js',
      'PostgreSQL',
    ],

    process: [
      {
        step: 'Decision mapping',
        body: 'What decision is this system making, how often, and what does a wrong one cost? If the answer is "not much", we say so.',
        artifacts: [
          'The decision written down with its failure cost',
          'Data and systems inventory',
          'A go or no-go recommendation, including no',
        ],
      },
      {
        step: 'Evaluation first',
        body: 'Before any prompt work, we agree how quality gets measured. This is the step most projects skip and the reason most projects stall.',
        artifacts: [
          'Labelled evaluation set from your real cases',
          'Scoring rubric and pass threshold',
          'A baseline score before any tuning',
        ],
      },
      {
        step: 'Retrieval build',
        body: 'Ingestion, chunking and ranking, tested against the evaluation set rather than against intuition.',
        artifacts: [
          'Ingestion pipeline',
          'Retrieval scored against baseline',
          'Documented chunking strategy and why',
        ],
      },
      {
        step: 'System build',
        body: 'Generation, validation, refusal paths and the integrations into your existing systems.',
        artifacts: [
          'Working system in your environment',
          'Schema contracts',
          'Integration tests',
        ],
      },
      {
        step: 'Shadow run',
        body: 'The system runs against real traffic without acting on it, so its failure modes appear before anyone depends on them.',
        artifacts: [
          'Shadow report with failure taxonomy',
          'Evaluation set extended with real failures',
          'Go-live checklist',
        ],
      },
      {
        step: 'Handover',
        body: 'You own the code, the evaluation set and the runbook. If we stop working together, nothing stops working.',
        artifacts: [
          'Repository and infrastructure in your accounts',
          'Runbook and escalation paths',
          'Training session, recorded',
        ],
      },
    ],

    faq: [
      {
        q: 'How long before something is running?',
        a: 'A scoped first system is typically six to ten weeks, with the evaluation set agreed in the first two. If a proposal promises production AI in two weeks, it is describing a prototype.',
      },
      {
        q: 'Do we need to move our data somewhere?',
        a: 'No. Where data cannot leave your infrastructure, the system is designed to run inside it — that constrains the model choice and the architecture, so it is decided during discovery rather than discovered later.',
      },
      {
        q: 'Which model do you use?',
        a: 'Whichever passes your evaluation set at acceptable cost and latency, and it is usually more than one — a capable model where judgement is needed, a cheaper one where it is not. Because evaluation exists, swapping models later is a measurement rather than a rebuild.',
      },
      {
        q: 'What if the AI gets something wrong?',
        a: 'It will. The design question is what happens next: whether it fails visibly, whether the failure is logged with enough context to explain it, and whether the case joins the evaluation set so it does not recur. All three are built in.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do, from the first commit, in your repository and your cloud accounts. There is no runtime licence and no dependency on us continuing.',
      },
    ],

    handoff: {
      headline: 'And then someone has to handle the ones it refused.',
      body: 'A system built to decline rather than guess will decline. That is the correct behaviour and it produces a queue — of edge cases, unusual documents and questions the corpus never covered. We staff that queue too, which is why our refusal thresholds are set where they should be rather than where they flatter a demo.',
      operation: 'data-entry',
    },

    related: ['ai-agents', 'ai-voice-agents', 'website-development'],
  },

  /* ====================================================================== */
  {
    slug: 'ai-agents',
    group: 'AI Engineering',
    accent: 'teal',
    eyebrow: 'AI Agents',
    title: 'AI Agents',
    headline: { lead: 'A chatbot tells you what to do.', accent: 'An agent does it.' },
    summary:
      'Autonomous agents that plan, call real tools against real systems, and leave a trace of every action — with human approval gates on anything consequential.',
    metaTitle: 'AI Agent Development | Universal Virtual Support',
    metaDescription:
      'AI agents that complete tasks end to end: typed tool contracts, scoped permissions, human approval gates and a full replayable trace of every action taken.',
    keywords: [
      'AI agents for business',
      'autonomous AI agents',
      'AI agent development',
      'agent tool calling',
      'AI workflow automation',
    ],

    intent: {
      primary:
        'An operations owner who has automated the answering and discovered the doing is still manual.',
      queries: [
        'difference between AI agent and chatbot',
        'AI agent that can take actions',
        'how to stop AI agents doing the wrong thing',
        'AI agents integrated with CRM',
      ],
    },

    builtFor: {
      headline: 'Built for businesses drowning in high-volume, low-judgement work.',
      intro:
        'Agents earn their cost where a task is repetitive, rule-shaped and currently done by someone whose time is worth more. These are the shapes we see most often.',
      segments: [
        {
          niche: 'logistics',
          label: 'Freight brokers, 3PL and last-mile carriers',
          trigger:
            'Dispatchers spend the first three hours of every day making check calls and updating loads.',
          built:
            'An agent that runs status checks, updates the TMS and escalates only the loads that are actually off-plan.',
          edge: 'It escalates on a rule you set — hours late, not "seems concerning".',
        },
        {
          niche: 'ecommerce',
          label: 'DTC brands and marketplace sellers',
          trigger:
            '"Where is my order" is most of the support queue, and answering it means opening three tabs.',
          built:
            'An agent with read access to your commerce platform and carrier APIs that resolves the whole question, including the refund path when it is warranted.',
          edge: 'Refunds above a threshold you choose stop for approval instead of being issued.',
        },
        {
          niche: 'saas',
          label: 'B2B software and API companies',
          trigger:
            'Engineers sit in the support rotation answering tier-one questions the docs already cover.',
          built:
            'An agent grounded in current docs and live API behaviour, that reproduces the issue where it can and hands over a written diagnosis where it cannot.',
          edge: 'It says it is unsure rather than inventing an endpoint that does not exist.',
        },
        {
          niche: 'manufacturing',
          label: 'Manufacturers and distributors',
          trigger:
            'Inside sales spends all day answering stock and lead-time questions from trade accounts.',
          built:
            'An agent that reads live stock, quotes lead times and drafts the order, with a human confirming before anything is committed.',
          edge: 'Nothing is committed to the ERP without a person, by design.',
        },
        {
          niche: 'education',
          label: 'Course providers and training institutes',
          trigger:
            'Enrolment season brings ten times the enquiry volume, and the same fifty questions about eligibility, fees and deadlines are answered by hand.',
          built:
            'An agent grounded in current, versioned policy that answers eligibility and fee questions, checks application status and books an advisor call when the answer is genuinely conditional.',
          edge: 'Policy is versioned, so an eligibility answer is never last year’s — and a wrong one here is a complaint, sometimes a refund.',
        },
        {
          niche: 'fintech',
          label: 'Fintechs, neobanks and payment platforms',
          trigger:
            'Monitoring fires thousands of alerts a month and analysts open every one, even though most clear on the first check.',
          built:
            'An agent that gathers the evidence a first-pass review needs, classifies the obvious clears and routes the rest to an analyst with the investigation already started.',
          edge: 'It gathers and classifies. The disposition is always a person’s, because a machine-made compliance decision is a liability with a delay on it.',
        },
        {
          niche: 'financial-services',
          label: 'Lenders, brokers and accounting practices',
          trigger:
            'Renewals, document chases and status updates are remembered rather than scheduled, so the ones that slip are the ones nobody notices.',
          built:
            'An agent that tracks outstanding items, chases them on a schedule and updates the case record — stopping at a gate before anything client-facing is sent.',
          edge: 'It collects and chases. It never advises, and every action lands in an auditable trail by construction.',
        },
      ],
      notFor:
        'If the task genuinely requires judgement every time — negotiation, clinical decisions, anything where the right answer depends on reading a person — an agent is the wrong tool and we will tell you that rather than sell you one.',
    },

    problem: {
      headline: 'Most "AI agents" are a chat window with ambition.',
      body: 'They can describe the refund policy but not issue the refund, summarise the ticket but not update the record. The moment one is given real permissions, the second problem appears: nobody can say what it did, why, or whether it should have. So it gets given no permissions, and the work stays manual.',
      points: [
        'It answers the question and a person still does the task.',
        'It calls a tool with the wrong argument and nothing catches it until a customer complains.',
        'There is no record of what it decided, so a bad outcome cannot be explained or prevented.',
        'One unusual case sends it into a loop that spends money until somebody notices.',
      ],
    },

    solution: {
      headline: 'Agents with brakes.',
      body: 'Autonomy is not a slider you turn up. It is a set of specific permissions granted to a specific agent for a specific task, with a specific point at which it must stop and ask. We build the brakes before we build the engine.',
      pillars: [
        {
          title: 'It states the plan first',
          body: 'The agent decomposes the request and commits to a plan before acting, which makes the plan reviewable — and makes a bad plan cheap to catch.',
        },
        {
          title: 'Tools are contracts',
          body: 'Every tool has a typed schema. A malformed argument fails at the boundary with a readable error, rather than half-executing inside your systems.',
        },
        {
          title: 'Gates on anything consequential',
          body: 'Spending money, contacting a customer, changing a record that matters — each sits behind an approval you configure. Autonomy grows as evidence accumulates.',
        },
        {
          title: 'Full replay',
          body: 'Every step, tool call, argument and result is recorded and replayable. "Why did it do that" is a question with an answer.',
        },
      ],
    },

    mechanism: {
      headline: 'The loop, and where it stops.',
      body: 'An agent that cannot stop is not autonomous, it is unsupervised. Step limits, spend limits and gate conditions are part of the loop rather than bolted around it.',
      module: 'agent-loop',
      nodes: ['Observe', 'Plan', 'Act', 'Check', 'Report'],
      branchAt: 'Check',
      branchLabel: 'Gate → human',
      notes: [
        'Check runs after every action, not at the end. A wrong step is caught before it compounds into five.',
        'Gates are conditions you write — amount, customer tier, record type — not a confidence score the model produces about itself.',
        'Step and spend ceilings are hard limits. Hitting one is an escalation, not a crash.',
      ],
    },

    outcomes: [
      {
        title: 'Tasks finish',
        body: 'The distinction that matters: work leaves the queue completed rather than arriving at a person as a well-summarised suggestion.',
        measure: 'Volume completed end to end without a human touching it.',
      },
      {
        title: 'Risk has a ceiling',
        body: 'Each agent holds narrow, scoped permissions and stops at defined gates, so the worst case is bounded by design rather than by hope.',
        measure: 'The maximum an agent can do wrong, written down before launch.',
      },
      {
        title: 'Behaviour is explainable',
        body: 'Any action can be replayed with the full context the agent had, which turns an incident into a fix instead of a policy debate.',
        measure: 'Every action traceable to the plan and inputs that produced it.',
      },
    ],

    stack: [
      'Claude',
      'OpenAI',
      'LangGraph',
      'Temporal',
      'PostgreSQL',
      'Redis',
      'Node.js',
      'TypeScript',
    ],

    process: [
      {
        step: 'Task inventory',
        body: 'Every candidate task scored on volume and on what failure costs. High volume and low failure cost goes first — that is where autonomy is cheap to earn.',
        artifacts: [
          'Scored task inventory',
          'Success criteria per task',
          'The tasks we recommend leaving to people',
        ],
      },
      {
        step: 'Tool design',
        body: 'Each action the agent can take, defined as a typed contract with its permissions and its failure behaviour.',
        artifacts: [
          'Tool schemas',
          'Permission matrix per agent',
          'Gate conditions, written by you',
        ],
      },
      {
        step: 'Agent build',
        body: 'Planning, execution and checking, against your real systems in a sandbox.',
        artifacts: ['Working agent', 'Trace viewer', 'Step and spend limits configured'],
      },
      {
        step: 'Shadow mode',
        body: 'The agent proposes every action and a human approves each one. This is where the gate policy gets corrected by contact with reality.',
        artifacts: ['Shadow report', 'Approval rate by task type', 'Revised gate policy'],
      },
      {
        step: 'Graduated release',
        body: 'Autonomy widens one task type at a time, on evidence from shadow mode rather than on a launch date.',
        artifacts: [
          'Release plan per task type',
          'Monitoring and alerts',
          'Rollback procedure',
        ],
      },
      {
        step: 'Handover',
        body: 'Your repository, your infrastructure, your runbook — including how to add a tool and how to tighten a gate.',
        artifacts: [
          'Code and infrastructure transferred',
          'Runbook',
          'Recorded training session',
        ],
      },
    ],

    faq: [
      {
        q: 'What is the actual difference between an agent and a chatbot?',
        a: 'A chatbot produces text. An agent produces outcomes — it plans, calls tools that change real state in real systems, checks the result, and reports what it did. If the output is a message rather than a completed task, it is a chatbot.',
      },
      {
        q: 'How do you stop it doing something harmful?',
        a: 'Four mechanisms, layered: permissions scoped per agent so it can only reach what its task needs; schema validation so malformed calls fail at the boundary; approval gates on consequential actions; and hard step and spend ceilings. Plus a full trace, so anything that does go wrong is diagnosable.',
      },
      {
        q: 'Can it work with the tools we already use?',
        a: 'Anything with an API — Zendesk, Intercom, HubSpot, Salesforce, Shopify, Stripe, Slack, your own systems. Where there is no API we build the integration layer, and where the system is old we accept its terms rather than assume modern ones.',
      },
      {
        q: 'How much supervision does this need?',
        a: 'Heavy at first and light later, deliberately. Shadow mode means every action is approved by a person; autonomy widens per task type as the approval rate proves it should. Most clients are still approving one or two categories a year in, and that is a healthy outcome rather than a failure.',
      },
      {
        q: 'What happens when it encounters something it has never seen?',
        a: 'It escalates. The escalation rule is explicit and written by you — not a confidence threshold the model sets for itself — and the case is logged so the gap can be closed deliberately.',
      },
    ],

    handoff: {
      headline: 'The escalation has to land somewhere.',
      body: 'Every gate and every escalation rule creates a queue of things the agent decided not to handle. Most vendors stop at that boundary and hand you the problem. We staff the other side of it — trained people who take the escalation with the full trace attached, which is why our gates are set for correctness rather than for a demo.',
      operation: 'live-chat-support',
    },

    related: ['ai-development', 'ai-voice-agents', 'website-development'],
  },

  /* ====================================================================== */
  {
    slug: 'ai-voice-agents',
    group: 'AI Engineering',
    accent: 'ember',
    eyebrow: 'AI Voice Agents',
    title: 'AI Voice Agents',
    headline: { lead: 'The call gets answered.', accent: 'On the first ring, at 2am.' },
    summary:
      'Voice agents that answer, qualify and book against live availability — and hand a warm call to a person the moment the conversation needs one.',
    metaTitle: 'AI Voice Agents | Universal Virtual Support',
    metaDescription:
      'AI voice agents that answer inbound calls, qualify the caller and book against real availability, with rule-based handoff to trained human agents.',
    keywords: [
      'AI voice agent',
      'AI phone answering service',
      'automated appointment booking calls',
      'AI receptionist for business',
      'after hours call answering',
    ],

    intent: {
      primary:
        'An owner-operator losing revenue to unanswered phones and unable to justify a night shift.',
      queries: [
        'AI answering service for small business',
        'after hours call answering HVAC',
        'AI receptionist that books appointments',
        'how much revenue is lost to missed calls',
      ],
    },

    builtFor: {
      headline: 'Built for businesses where the phone is the front door.',
      intro:
        'These are businesses where demand arrives by voice, arrives unpredictably, and goes to whoever picks up first. If that is not your business, a voice agent is an expensive novelty.',
      segments: [
        {
          niche: 'home-services',
          label: 'HVAC, plumbing, roofing and restoration',
          trigger:
            'A burst pipe at 11pm calls three companies. The one that answers gets the job, and yours went to voicemail.',
          built:
            'An agent that answers immediately, triages emergency from routine, and books against real technician availability and drive time.',
          edge: 'It will not book two jobs an hour apart across town — capacity is modelled, not assumed.',
        },
        {
          niche: 'healthcare',
          label: 'Clinics, dental and specialty practices',
          trigger:
            'Reception is on the phone while three patients wait at the desk, and the no-show rate nobody owns sits above ten percent.',
          built:
            'Booking, rescheduling and confirmation handling, plus recall calls that actually go out on schedule.',
          edge: 'Built to the data boundary you operate under, decided during discovery rather than after.',
        },
        {
          niche: 'legal',
          label: 'Personal injury, immigration and family firms',
          trigger:
            'Intake is the whole business, and it is answered by paralegals between other work — or not at all after five.',
          built:
            'An intake agent that collects the facts, applies your qualification criteria and routes the case, with the transcript attached.',
          edge: 'It collects and routes. It never advises — that line is enforced in the tooling, not just the prompt.',
        },
        {
          niche: 'automotive',
          label: 'Dealership service departments',
          trigger:
            'Service bays are a fixed capacity sold by the hour, booked over one phone line by an advisor who is also handing over keys.',
          built:
            'Service booking that respects bay capacity, technician skill and parts availability at once, not just an open calendar slot.',
          edge: 'Three constraints on one booking, or it books work that cannot be done.',
        },
        {
          niche: 'hospitality',
          label: 'Independent hotels and restaurant groups',
          trigger:
            'The phone rings through dinner service, and the booking that was not answered becomes an aggregator booking with commission attached.',
          built:
            'Direct reservations taken against live PMS availability, plus group and event enquiries captured with the detail needed to quote.',
          edge: 'Availability is read live. A reservation for a room that is gone is worse than a missed call.',
        },
        {
          niche: 'real-estate',
          label: 'Brokerages and property management',
          trigger:
            'A portal enquiry lands while every agent is out showing property, and its value has largely decayed by the time anyone calls back.',
          built:
            'Immediate answering that qualifies the enquiry, books the viewing against agent availability, and logs it before the agent is back in the car.',
          edge: 'Qualification is tuned not to gatekeep — losing the buyer who was worth the call costs more than an extra viewing.',
        },
      ],
      notFor:
        'If your calls are long, consultative and different every time, a voice agent will frustrate your callers. We would rather staff that line with people — which we also do.',
    },

    problem: {
      headline: 'Voicemail is a competitor’s lead-generation tool.',
      body: 'The economics are unforgiving: an inbound call is the highest-intent contact a business receives, and its value collapses to nothing within minutes. Yet answering every call means staffing for a peak that happens twice a week, at hours nobody wants, for conversations that are mostly the same four questions.',
      points: [
        'Calls outside office hours go to voicemail and are returned after the job has been booked elsewhere.',
        'Peak periods produce four times the volume and the same number of people.',
        'The generic answering service takes a message, which is not the same as taking a booking.',
        'Nobody can say how many calls came in last Tuesday, or how many were missed.',
      ],
    },

    solution: {
      headline: 'It answers, and it can actually finish the call.',
      body: 'Taking a message is not answering the phone. A voice agent is only worth having if it can complete the transaction the caller rang about — which means live availability, real qualification, and a clean route to a person when the conversation stops fitting the script.',
      pillars: [
        {
          title: 'Conversational, not a phone tree',
          body: 'Callers speak normally, interrupt, change their mind and go off-script. The agent handles that, because real callers do it constantly.',
        },
        {
          title: 'Booking against live capacity',
          body: 'Connected to your calendar, PMS or dispatch system, so what it offers is genuinely available and what it books is genuinely doable.',
        },
        {
          title: 'Handoff by rule',
          body: 'Transfer happens on conditions you define — call type, caller value, an explicit request — not on a confidence score the model calculates about itself.',
        },
        {
          title: 'Every call in writing',
          body: 'Recording, transcript, extracted details and outcome, in your CRM before the caller has put the phone down.',
        },
      ],
    },

    mechanism: {
      headline: 'Sixty seconds, start to booked.',
      body: 'Latency is the whole experience. Above roughly a second of silence a caller assumes the line dropped, so the pipeline is built around that budget rather than around a feature list.',
      module: 'voice-timeline',
      nodes: ['Ring', 'Greet', 'Understand', 'Check availability', 'Book', 'Confirm'],
      branchAt: 'Understand',
      branchLabel: 'Transfer to human',
      notes: [
        'Speech, reasoning and response are streamed and overlapped so the caller hears a reply, not a gap.',
        'Availability is queried live. Nothing is offered that cannot be honoured.',
        'A transfer carries the transcript so far, so the caller never repeats themselves to the person who picks up.',
      ],
    },

    outcomes: [
      {
        title: 'The after-hours call converts',
        body: 'The calls that previously became voicemail become booked jobs, and those are usually the highest-urgency calls you receive.',
        measure: 'Booked work originating outside staffed hours.',
      },
      {
        title: 'Peaks stop being a staffing problem',
        body: 'Concurrent calls are answered simultaneously, so a storm week or a campaign spike does not need a hiring plan.',
        measure: 'Concurrent calls answered without a queue.',
      },
      {
        title: 'The phone becomes measurable',
        body: 'Volume, outcome, duration and reason for every call — the channel that was previously invisible becomes the one you can actually manage.',
        measure: 'Call reason and outcome, categorised, for every call.',
      },
    ],

    stack: [
      'Deepgram',
      'ElevenLabs',
      'Claude',
      'Twilio',
      'LiveKit',
      'PostgreSQL',
      'Node.js',
    ],

    process: [
      {
        step: 'Call audit',
        body: 'We listen to your actual calls. Every voice agent that fails does so because it was designed from an imagined conversation rather than a real one.',
        artifacts: [
          'Call type taxonomy from real recordings',
          'Volume and timing profile',
          'The call types we recommend never automating',
        ],
      },
      {
        step: 'Conversation design',
        body: 'The flow per call type, the qualification criteria, and the exact conditions that trigger a transfer.',
        artifacts: [
          'Conversation flows',
          'Transfer rules, written by you',
          'Escalation and out-of-scope paths',
        ],
      },
      {
        step: 'Integration',
        body: 'Calendar, dispatch, PMS, CRM — whatever holds the availability and whatever needs the record.',
        artifacts: [
          'Live availability integration',
          'CRM write-back',
          'Telephony configured',
        ],
      },
      {
        step: 'Voice tuning',
        body: 'Latency, interruption handling, accent and noise robustness, tested on real audio rather than in a quiet room.',
        artifacts: [
          'Latency measured under load',
          'Interruption handling verified',
          'Voice selected with you',
        ],
      },
      {
        step: 'Live pilot',
        body: 'One call type, out of hours first, monitored closely with a person able to take over at any point.',
        artifacts: [
          'Pilot report with recordings',
          'Transfer rate by call type',
          'Tuned transfer rules',
        ],
      },
      {
        step: 'Rollout',
        body: 'More call types and more hours, widened on pilot evidence.',
        artifacts: [
          'Rollout plan',
          'Monitoring dashboard',
          'Runbook and fallback to human line',
        ],
      },
    ],

    faq: [
      {
        q: 'Will callers know it is not a person?',
        a: 'Many will, and the agent identifies itself if asked — we do not build agents that claim to be human. What callers consistently care about more is whether the call got resolved on the first attempt, which is the thing voicemail never does.',
      },
      {
        q: 'What happens when the caller asks something unexpected?',
        a: 'It transfers, on a rule you wrote rather than a guess. The person who picks up receives the transcript, so the caller does not start again.',
      },
      {
        q: 'Can it actually book into our calendar?',
        a: 'Yes, against live availability, and it books only what your capacity rules permit — technician skill, drive time, bay availability, room type. A booking that cannot be honoured is worse than a missed call, so those rules are modelled explicitly.',
      },
      {
        q: 'What does it cost to run?',
        a: 'Per minute of conversation, and the number depends on call length and complexity. We size it against your real call volume during the audit, so the comparison against a staffed line is arithmetic rather than a promise.',
      },
      {
        q: 'What if it goes wrong at 3am?',
        a: 'Calls fall back to your existing line automatically if the agent is unavailable. Failure means callers get what they get today, never a dead line.',
      },
    ],

    handoff: {
      headline: 'Someone still has to take the transfer.',
      body: 'A voice agent set up honestly transfers more calls, not fewer — the ones needing judgement, the upset caller, the deal worth a person. That only works if a trained human is reachable when it happens. We run that line as well, which is the reason we can set transfer rules at the right threshold instead of the flattering one.',
      operation: 'voice-calls',
    },

    related: ['ai-agents', 'ai-development', 'google-ads'],
  },
];
