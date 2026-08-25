/**
 * COMPANY FAQ.
 *
 * The service and operations pages each carry their own five questions. This
 * page carries the ones that are about the company rather than the work —
 * engagement shape, ownership, pricing posture, and the questions a buyer is
 * actually nervous about but does not always ask.
 *
 * Every heading is question-shaped and every answer is direct in its first
 * sentence. That is an AEO requirement and also just good writing: an answer
 * that starts with context and reaches the point in sentence four cannot be
 * extracted by a machine or skimmed by a person.
 */

export const companyFaq = [
  {
    group: 'Working together',
    questions: [
      {
        q: 'What does a first conversation actually involve?',
        a: 'Thirty minutes, no deck. You describe what is going wrong; we say which half of the business it belongs to, roughly what it would cost, and whether it is worth doing. Where the answer is that you should not spend money with us, we say that — it happens often enough that it is a stated commitment rather than a nice sentiment.',
      },
      {
        q: 'Do you work with businesses outside the twelve industries listed?',
        a: 'Yes. Those twelve are where we have the most specific knowledge and can be useful fastest, not a boundary. The honest difference is that the discovery stage takes longer when we are learning your operating model from scratch, and we price that transparently rather than pretending otherwise.',
      },
      {
        q: 'Can we start with one small thing?',
        a: 'That is usually the right approach. Most engagements begin with a single service or a single desk, scoped so that the first useful output arrives in weeks rather than quarters. Six-month programmes that deliver nothing until month five are how both sides lose confidence.',
      },
      {
        q: 'Do we have to buy both halves?',
        a: 'No. Plenty of clients buy only a build engagement or only a desk. The two halves being under one roof is what makes the seam work well when you do want both — it is not a bundling requirement.',
      },
    ],
  },
  {
    group: 'Ownership and risk',
    questions: [
      {
        q: 'Who owns the code and the accounts?',
        a: 'You do, from the first commit. Repositories, cloud infrastructure, ad accounts, analytics and domains all live in your accounts under your ownership. There is no runtime licence, no proprietary platform, and no version of ending the relationship that requires a rebuild.',
      },
      {
        q: 'What happens to our data?',
        a: 'It stays in systems you control wherever the architecture allows, and where data cannot leave your infrastructure the system is designed to run inside it. That constraint changes the architecture, so it is established during discovery rather than discovered during build.',
      },
      {
        q: 'What if we want to stop?',
        a: 'Build engagements end at a stage boundary with everything transferred and documented. Desks run on a notice period — long enough to hire or transition, short enough that it is not a lock-in. Because the accounts and the record are already yours, stopping is an access change.',
      },
      {
        q: 'How do you handle confidentiality?',
        a: 'Mutual NDA before any detail is discussed, if you want one. Agents working on your desk are trained on your material only and are not shared across competing accounts in the same category — that is a policy, not a preference.',
      },
    ],
  },
  {
    group: 'Money',
    questions: [
      {
        q: 'How do you price build work?',
        a: 'Fixed price per stage where scope is genuinely knowable, and time-based where it is not — usually because it depends on a system we have not seen yet. Discovery is priced separately and small, so you can buy the recommendation without committing to the build it recommends.',
      },
      {
        q: 'How do you price the desks?',
        a: 'Against coverage and volume rather than headcount, because headcount is our problem to solve. The automated share reduces the cost and is reported weekly, so you can see the number you are paying for.',
      },
      {
        q: 'Do you charge a percentage of ad spend?',
        a: 'No. A percentage rewards us for spending more of your money, which is a poor arrangement for you. Campaign management is a flat monthly fee based on account complexity.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'Marketing engagements need three months before the data means anything, so that is the minimum, then month to month. Desks have a notice period rather than a term. Build work is committed stage by stage.',
      },
    ],
  },
  {
    group: 'The awkward questions',
    questions: [
      {
        q: 'Why are there no client names or case studies on the site?',
        a: 'Because most of our work sits inside someone else’s operation, and a good deal of it is under agreements that do not permit us to name them. Publishing a logo wall we cannot substantiate would contradict the commitment two paragraphs above it. What we offer instead is method transparency — process stages named with their artefacts, commitments checkable during an engagement, and discovery priced small enough that you can test whether we are any good before committing to anything substantial. Where a reference is possible, we will arrange one on request.',
      },
      {
        q: 'Will AI replace the people on our account?',
        a: 'It will take the repetitive share, and that is the point — it is what makes coverage affordable. What it does not do is take the calls that need judgement, and any vendor telling you otherwise has not run a desk. The split is measured and reported so you can see where the line actually sits rather than where it was promised.',
      },
      {
        q: 'What happens when the AI gets something wrong?',
        a: 'It escalates to a person, the trace is reviewed, and the case joins the evaluation set so the same failure does not recur. Systems that cannot fail visibly are the dangerous ones, so ours are built to refuse rather than to guess — which produces more escalations, which is why we staff them.',
      },
      {
        q: 'Are you going to tell us we need more than we asked for?',
        a: 'The opposite happens more often. We have declined app builds, recommended templates over custom sites, and pointed businesses at paid search instead of taking an SEO retainer. Scope that should not exist is the fastest way for an engagement to go badly for both sides.',
      },
    ],
  },
];

export const flatCompanyFaq = companyFaq.flatMap((g) => g.questions);
