/**
 * COMPLIANCE POSTURE — the honest version of a trust-badge row.
 *
 * ## Why this file exists instead of a badge strip
 *
 * The obvious thing to put on a fintech page is a row of logos: ACPR, GDPR,
 * ISO. Three of those four instincts are wrong, and the fourth is unearned
 * until a certificate exists.
 *
 *   ACPR authorises banks, payment institutions and insurers. It does not
 *   authorise, certify or supervise their vendors. "ACPR compliant company" is
 *   not an overstatement of a real status — the status does not exist. The same
 *   is true of AMF, FCA and AUSTRAC.
 *
 *   PSD2, MiCA and the AML directives bind the regulated firm. A vendor works
 *   inside the obligations they place on that firm; it does not hold them.
 *
 *   GDPR has no general certificate. Article 42 schemes exist and are narrow,
 *   accredited, and almost nobody holds one. "GDPR compliant" as a badge is
 *   ubiquitous and legally empty.
 *
 * ## Why the true version is the stronger sell, not the weaker one
 *
 * The reader this page is written for is an operations or compliance lead at a
 * supervised firm. They read vendor questionnaires all week. A badge saying
 * "ACPR compliant" tells them the vendor does not understand the regime they
 * are being asked to work inside — and that is the single fastest way to lose
 * them. Naming the regime correctly, and naming whose obligation it is, does
 * the opposite: it is the first evidence that we have done this before.
 *
 * A visitor who is not a compliance specialist still reads this strip as
 * "GDPR ✓, AML ✓, crypto ✓". Both readers are served by the truth.
 *
 * ## Read once, rendered twice
 *
 * The homepage renders the strip; the fintech page renders it above its
 * due-diligence detail. One source, so the two can never drift apart.
 */

export const compliancePosture = {
  eyebrow: 'Regulated operations',
  question: 'Can I put this vendor in front of my regulator?',
  headline: {
    lead: 'The frameworks your desk',
    accent: 'has to work inside.',
  },
  lead:
    'Compliance work is most of what our fintech desks do, so the regimes below are not a badge row — they are the rules the queue is actually worked to. Whose obligation each one is matters, and we say it plainly.',

  regimes: [
    {
      code: 'GDPR',
      scope: 'Article 28',
      body:
        'We handle personal data as your processor, on your DPA and your documented instructions. Sub-processors are disclosed before they are used, never after.',
    },
    {
      code: '5AMLD · 6AMLD',
      scope: 'AML operations',
      body:
        'Onboarding review and alert disposition worked to your AML policy and your risk appetite — not to a generic checklist we brought with us.',
    },
    {
      code: 'MiCA · PSAN / DASP',
      scope: 'Crypto onboarding',
      body:
        'Fiat-to-crypto onboarding, travel-rule counterparty data and wallet-side alert review, worked to the policy a registered crypto firm is required to hold.',
    },
    {
      code: 'DORA',
      scope: 'ICT third party',
      body:
        'We contract as an ICT third-party provider: audit and regulator access, notice before sub-outsourcing, breach notification and a written exit plan.',
    },
    {
      code: 'ACPR · AMF · FCA',
      scope: 'Your supervision',
      body:
        'The authorisation is yours and stays yours. Our job is to be the vendor you can place under it — and to hold the outsourcing terms your supervisor expects to see.',
    },
  ],

  /**
   * Load-bearing. Without this line the strip above reads as a claim to hold
   * five regulatory statuses, which is exactly the claim being avoided.
   */
  disclaimer:
    'We are not a regulated or supervised entity, and we do not hold your licence. None of the above is a certification we carry — it is the set of obligations we are contracted to work inside on your behalf, and every one of them is checkable in the paperwork rather than on this page.',

  links: [
    { href: '/industries/fintech', label: 'How this works for a fintech' },
    { href: '/operations/kyc-onboarding', label: 'KYC & onboarding desk' },
    { href: '/operations/transaction-monitoring', label: 'Alert review desk' },
    { href: '/legal/privacy', label: 'Privacy notice' },
  ],
};
