# Universal Virtual Support — site rebuild

A ground-up rebuild. Next.js 15 (App Router), React 19, Tailwind 4, no CMS —
content is data, and every page, menu, sitemap entry and schema block is derived
from it.

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # verify gates → lint → production build
```

---

## What this rebuild set out to fix

The previous site had two structural problems and three live defects.

**Services and industries were separate silos.** Twelve industries sat on one
page, nine services on another, and nothing joined them. A roofing contractor
could read every word of the voice agents page without once being told it was
written for someone like them.

**Operations pages were treated as an afterthought** — 307 to 346 words each,
against 800-word service pages, despite operations being the primary commercial
offer.

The live defects: `/case-studies` was linked from the homepage nav and footer
and returned 404; three service pages existed but were missing from the sitemap;
and the demo deployment's canonical tags, `og:url` and sitemap all pointed at a
production domain, telling crawlers the content lived somewhere else.

All five are addressed structurally rather than by hand, so they cannot recur.

---

## The two ideas the site is built on

### 1. The intent ladder

`content/intent.js` defines ten rungs, and every service, operations and
industry page climbs them in the same order. Pages render from the ladder rather
than choosing their own section order, so the sequence cannot drift.

| # | Rung | The question it answers |
|---|------|--------------------------|
| 1 | orient | What am I looking at? |
| 2 | **qualify** | **Is this built for a business like mine?** |
| 3 | recognise | Do they understand what is going wrong? |
| 4 | evaluate | What exactly would I be buying? |
| 5 | understand | How does this actually function? |
| 6 | justify | What is different afterwards? |
| 7 | derisk | How does it start, and what do I get? |
| 8 | object | But what about the thing that worries me? |
| 9 | extend | What happens at the edge of this service? |
| 10 | act | What is the next step? |

The claim worth defending is that **qualify comes second**, before the problem
statement. Most service pages open with a problem and hope the reader
self-identifies. This one names the businesses first, so a reader who does not
fit finds out on rung two rather than rung nine.

The small mono label above each section is the page saying which rung it is on.

### 2. The service × niche join

`content/niches.js` defines thirteen **business types** — not sectors.
"Healthcare" describes an industry and tells a reader nothing; "multi-site
clinics running their own front desk" describes a business, and either it is
yours or it is not.

Every service and desk carries a `builtFor` block whose segments name a niche
and add three things:

- **trigger** — the situation, from inside the reader's week
- **built** — what we would actually build for that business
- **edge** — the detail a generalist vendor would get wrong

Plus `notFor` — who the service is *not* for. That block is the most credible
thing on each page and it is enforced by the content gate.

The join runs both ways from one source. A service page renders its niches; an
industry page renders, in reverse, exactly what each service wrote about that
business type. They cannot disagree.

**Current depth:** 88 niche segments, 41 detailed service blocks across 13
industry pages.

---

## The design language — "Instrument"

Three registers, one system. The rule is **one dark immersive moment and one
bento cluster per page** — never two of either.

| Register | Where | What it does |
|----------|-------|--------------|
| Editorial | Everywhere | Type, grid and rhythm. Carries every page. |
| Bento | The `understand` rung | The mechanism, animated. |
| Immersive | The hero | One dark, moving moment. |

**Type.** Inter Tight for UI and headlines; **Instrument Serif italic for exactly
one phrase per headline** — the signature, and it only stays memorable because
it is rationed; JetBrains Mono for eyebrows, figures and labels.

**Colour is structural, not decorative.** Twelve accents, one per service, each
with two tones because a single hue cannot stay legible on both grounds.
`--accent` is tuned for paper, `--accent-lift` for ink. No component takes a
colour prop — accent is inherited through `data-accent`, so one service's hue
cannot leak into another's.

**No WebGL.** three.js and react-three-fiber were available and are not used. A
hero that costs 600KB of JavaScript to look alive fails the performance budget
this site sells to clients. `HeroField` is two composited CSS layers with no
animation loop.

---

## Architecture

```
content/            The single source of truth. Everything derives from here.
  intent.js         The ten-rung ladder + register assignment
  niches.js         Thirteen business types; the join key for builtFor
  services/         9 services, grouped by discipline
  operations.js     8 desks (3 groups) — same schema and depth as services
  operations-compliance.js  KYC & onboarding, transaction monitoring
  navigation.js     Derived. Adding a service updates every menu + the sitemap
  company.js        Positioning, commitments, process, figures
  faq.js legal.js   Company FAQ; legal drafts with [OPERATOR_INPUT] markers

design-system/      The whole vocabulary in one file. Small on purpose.
components/
  layout/           Header (mega menu) + footer
  sections/         Intent-ladder sections; built-for; handoff figure; desk explorer
  bento/            Mechanism module; hero field
app/                Routes. Thin — they assemble sections from content.
scripts/            The two build gates
```

**Adding a service** is a content change in one group file. The header, mega
menu, mobile drawer, footer, services hub, sitemap, `llms.txt` and JSON-LD all
follow with no code edit.

---

## The gates

Both run in `npm run check` and exit non-zero on failure.

### `verify:content`

Checks every join that can silently break: service→niche, niche→service,
handoffs, related links, required sections, accent uniqueness, ladder coverage.
It also enforces that **every industry page has at least three services with
bespoke writing**, so no niche page can be thin.

This is the check the old site did not have. Its `/case-studies` 404 and its
three sitemap omissions are the same class of error, and both are caught here.

### `verify:contrast`

Parses the tokens straight out of `globals.css` and measures every foreground
against the ground it is actually painted on — 30 pairings across 12 accents, at
the 4.5:1 normal-text threshold, because accents are used as small text. It also
cross-checks the palette in `content/accents.js` against the stylesheet.

It has already earned its place: `--color-prose-faint` was `#6f757f` and
measured **4.45:1**, just under. The comment beside it claimed 4.8:1. It is now
`#6b717b` at 4.71:1.

---

## Verified state

```
43 pages          all 200
broken links      none
thin pages        none (<300 words)
crawlable words   56,000+ — without JavaScript
OG images         site-wide + per service / desk / industry, generated
enquiry form      POSTs to /api/enquiry, SMTP delivery
lint              clean
verify:content    passed
verify:contrast   passed — lowest pairing 4.71:1
```

Every page is server-rendered, so crawlers and answer engines read the full
content without executing anything.

---

## Deployment

### Environment

Copy `.env.example` to `.env.local` (development) or set these in the hosting
platform (production).

```bash
NEXT_PUBLIC_SITE_URL=https://www.universalvirtualsupport.com

SMTP_HOST=              # e.g. smtp.gmail.com
SMTP_PORT=465           # 465 implicit TLS, 587 STARTTLS
SMTP_USER=admin@universalvirtualsupport.com
SMTP_PASSWORD=          # app password, not the account password
```

> **`NEXT_PUBLIC_SITE_URL` is inlined at build time, not read at runtime.** It
> must be present in the *build* environment. Setting it only as a runtime
> variable leaves the built site pointing at the fallback origin.

### Indexing is origin-based

`app/robots.js` compares the resolved origin against the canonical one in
`content/company.js`.

| Resolved origin | robots.txt | Sitemap URLs |
|---|---|---|
| `https://www.universalvirtualsupport.com` | full allow, AI crawlers included | canonical domain |
| anything else (preview, demo, staging) | `Disallow: /` | that origin |

A preview deployment therefore excludes itself from the index *and* keeps its
own canonical tags, instead of the previous site's approach of pointing a demo
domain's canonical at production.

Overrides: `ROBOTS_ALLOW=1` forces indexable, `ROBOTS_DISALLOW=1` forces blocked
and wins over everything.

> This logic previously keyed off `VERCEL_ENV === 'production'`. On any host that
> does not set that variable — self-hosted Node, Netlify, Cloudflare, a
> container — the live site would have served `Disallow: /` and deindexed
> itself. `verify:content` now gates against exactly that.

### The enquiry form

`POST /api/enquiry` validates server-side, then delivers by SMTP to
`ENQUIRY_TO` (defaults to the address in `content/company.js`).

- **It never reports success for a message it did not send.** Unconfigured SMTP
  returns 503; a delivery failure returns 502. Both show the visitor the direct
  address and leave their typed message in the field.
- `From` stays on the authenticated domain and the enquirer goes in `Reply-To` —
  spoofing the sender in `From` is what gets mail rejected by SPF and DMARC.
- Honeypot field, plus a per-instance rate limit of 5 per 10 minutes. Real abuse
  protection belongs at the edge; this is not a substitute.
- With SMTP unset in development, enquiries are logged to the server console so
  the form can be exercised locally.

Verified behaviour:

```
valid + SMTP unset (prod)     503   honest failure, not a false success
valid + SMTP unreachable      502   delivery attempted
invalid fields                422   per-field errors
honeypot filled               200   silently discarded
6th request in window         429   rate limited
```

### Open Graph

Generated with `next/og` from the design system — no exported PNGs to keep in
sync with copy that changes. Each service, desk and industry page gets its own
image carrying that page's accent and headline.

The accent palette therefore exists in two places (`app/globals.css` for
rendering, `content/accents.js` for image generation). `verify:contrast`
cross-checks the two and fails on any drift.

---

## SEO / AEO surface

- `sitemap.xml` and `robots.txt` generated from content — a page cannot be
  listed if it does not exist, or omitted if it does.
- `llms.txt` — a derived plain-text map for language models, including a
  **notes for citation** section stating that the company publishes no case
  studies or unevidenced statistics.
- JSON-LD on every page: `Organization`, `WebSite`, `Service`, `FAQPage`,
  `ItemList`, `CollectionPage`. FAQ schema is generated from the same strings
  the page renders, so markup cannot drift from visible content.
- AI crawlers explicitly allowed — a site whose strategy is to be cited cannot
  coherently block the crawlers that produce citations.

### The canonical fix

`NEXT_PUBLIC_SITE_URL` controls the base URL, and non-production deployments
return a blanket `Disallow: /`. A preview or demo domain therefore stays out of
the index instead of pointing its canonical tags at production.

```bash
NEXT_PUBLIC_SITE_URL=https://universalvirtualsupport.com
```

---

## Before launch

Done:

- [x] **Company address** — 21 Marnham Street, Acacia Ridge QLD 4110, Australia.
      Renders in the footer and on the contact page, and emits as `PostalAddress`
      in the `Organization` and `ContactPage` schema.
- [x] **Contact form POST handler** — `/api/enquiry`, SMTP delivery to
      `admin@universalvirtualsupport.com`. The `mailto:` fallback is gone.
- [x] **`NEXT_PUBLIC_SITE_URL`** — set to `https://www.universalvirtualsupport.com`
      in `.env.local` and documented in `.env.example`.
- [x] **Open Graph images** — generated for every page from the design system.
- [x] **Company figures** — 10,000+ clients, 500+ people, 5+ years, all marked
      verified.

Remaining, and both need something only you can supply:

1. **SMTP credentials.** Set `SMTP_HOST`, `SMTP_USER` and `SMTP_PASSWORD` in the
   production environment. Until they are set the form returns 503 and tells
   visitors to email directly — deliberately, rather than silently discarding
   enquiries.
2. **Seven legal placeholders**, which `verify:content` lists and which fail a
   production build while any remain: `RETENTION_PERIOD`, `PRIVACY_CONTACT`
   (×2), `JURISDICTION` (×2), `ACCESSIBILITY_CONTACT`, `SECURITY_CONTACT`. The
   legal pages are readable plain-English drafts and **need review by a
   qualified adviser** — they are not legal advice.

### A copy note

Adding a real track record required rewriting the copy that contradicted it. The
homepage commitments section previously opened *"We have no logos to show you"*
and the FAQ asked *"You have no case studies. Why should we trust you?"* — both
are incompatible with 10,000+ clients and 500+ staff.

They now lead with the track record and pivot to method, and the FAQ explains
that clients are not named because most of the work sits inside someone else's
operation under agreements that do not permit it. If that reasoning is not
accurate, that FAQ answer is the one to change.

---

## The Run half in detail

Operations is the primary commercial offer, so it leads everywhere — the menu,
the homepage, the footer and the enquiry form all put Run before Build.

### Eight desks, three groups

| Group | Desks |
|---|---|
| Conversation | Live Chat Support · Voice Calls · Email Support |
| Transaction | Order Taking · B2B Sales · Data Entry & Processing |
| Compliance | KYC & Onboarding · Transaction & Risk Monitoring |

"24/7 Omni-Channel CX" is deliberately **not** a separate page. It is the
Tier-1 / Tier-2 framing on the chat and email desks — giving it its own page
would have created two pages competing for the same search intent while saying
the same thing.

### The compliance line

Both compliance desks hold one boundary in writing, on the page and in the
escalation rules: **we run the queue, the client owns the policy.** We do not
tune monitoring thresholds, file regulatory reports, or decide to exit a
customer. Stated plainly because a vendor blurring that line is selling risk.

### The staffing model

`staffingModel` in `content/operations.js` renders on every desk page and on the
Run hub: Agents, Team Lead, QA, Account lead. This is the differentiator — the
usual failure of an outsourced desk is not bad agents but no accountable owner,
so quality degrades invisibly until a customer reports it.

### The cost claim

`costPosition` carries its basis rather than a bare percentage: *50–60% lower
than a traditional agency's blended rate for equivalent coverage and service
level*, plus the three structural reasons and an explicit caveat that against a
cheaper desk with no lead and no QA we are not the cheap option.

A bare "50–60% cheaper" is the first number a serious buyer challenges, and it
would contradict the site's own commitment that every published figure is one we
can evidence.

---

## The Desk Explorer

`components/sections/desk-explorer.js` — the rail-and-panel interaction on the
Run hub. Eight desks is past the point where a card grid is scannable, and that
page's visitor is comparing rather than reading.

**It opens four ways**, because a hover-only interface does not exist for touch
users, keyboard users or search engines:

| Trigger | Behaviour |
|---|---|
| Pointer | Opens after a **120ms intent delay** |
| Focus | Opens immediately |
| Click / tap | Toggles and pins — the only path on a coarse pointer |
| Default | First desk open on load, so the pattern is legible before interaction |

Escape resets. Leaving the component returns to the resting desk rather than
emptying the panel, because an empty panel is a hole in the layout.

The intent delay is the whole trick: without it, dragging the pointer down the
rail fires seven panel changes and reads as a flicker.

**Every panel stays mounted** — inactive ones are `hidden` and `inert`, not
unmounted — so all eight are in the HTML source for crawlers and findable with
in-page search. Verified: 8 panels in the DOM, 1 visible, 7 inert.

Each rail item is also a real link to the full desk page. The panel accelerates
browsing; it never replaces the page, and it deliberately carries a summary
rather than the full 2,000 words.

### Verified behaviour

```
default            Live Chat Support
hover KYC          switches
fast sweep         lands on the last hovered only  (intent delay works)
keyboard focus     switches
Escape             resets
mobile tap         switches
panels in DOM      8 total · 1 visible · 7 inert
all 8 in source    true
```
