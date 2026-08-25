# The UVS mark — "The Seam"

A ring split into two half-rings that step past each other instead of meeting.

**The two halves are the two halves of the business. The offset is the handoff.**

The left arc is structure; the right arc carries the accent. That is the same
rule the whole site follows — ink carries the form, accent marks the seam — so
the mark is not decoration sitting on the design system, it is the design system
stated in one shape.

---

## Where it lives

| Asset | File | Notes |
|---|---|---|
| Component | `components/brand/logo.js` | `Mark`, `Logo`, `LogoLink` |
| Favicon | `app/icon.svg` | Own cut, own ink tile |
| Apple touch icon | `app/apple-icon.js` | 180×180 PNG, generated |
| Share images | `lib/og.js` | Drawn inline into every OG image |

Header and footer both render from the component. There is no exported PNG of
the mark anywhere in `public/` — every appearance is generated from the same
geometry, so it cannot go stale.

---

## It takes no colour props

The left arc paints with `currentColor`; the right arc with `var(--accent)`.
Both are already flipped by the register system in `app/globals.css`, so:

- On **ink** it renders a light arc plus the accent's ink-tuned tone.
- On **paper** it renders a dark arc plus the accent's paper-tuned tone.
- Dropped onto a service page, it **tints to that service's hue automatically.**

Twelve accents, one mark, no variants to maintain. This is the thing the old
gradient logo could never do — its colours were baked into the artwork.

```jsx
<Mark size={28} />                      {/* inherits whatever it lands in */}
<div data-accent="ember"><Mark /></div>  {/* forced to one hue */}
```

---

## Optical sizing — the one real rule

**The offset is the mark.** Scale it down far enough and the two arc ends close
optically, the step disappears, and what remains is a plain ring — the single
most crowded shape in software identity.

So there are two cuts:

| Cut | Stroke | Offset | Used |
|---|---|---|---|
| Display | 6 | 4 | 40px and above |
| Compact | 7.5 | 8 | Below 40px |

`Mark` selects the cut from `size` automatically. Pass `cut` only to override
deliberately.

The 40px threshold was **measured, not guessed** — the display cut was rendered
in the header at 26px and had already lost its step. The favicon is drawn
separately again at its own weights, because a 16px tab icon needs more than a
scaled-down SVG.

---

## The favicon carries its own ground

`app/icon.svg` includes an ink tile behind the mark. A browser tab can be light
or dark chrome, and a transparent mark would lose one of its two arcs on one of
them. The tile guarantees both arcs survive everywhere.

---

## Clear space and minimum size

- **Clear space:** one arc-stroke width on every side. At 28px that is about 4px.
- **Minimum size:** 16px, and only using the favicon cut. Below that, use the
  wordmark alone.
- **Never** place the mark on a mid-value background where neither arc separates
  from the ground. Ink or paper — nothing in between.

---

## Lockup

Mark, then `UVS` in JetBrains Mono at 0.2em tracking. The full company name sits
beneath the wordmark only above roughly 32px; below that it is illegible and is
switched off.

```jsx
<Logo size={40} descriptor />   {/* mark + UVS + Universal Virtual Support */}
<Logo size={26} />              {/* mark + UVS */}
<Mark size={22} />              {/* mark alone */}
```

---

## What not to do

- Do not add a gradient. The mark is two flat strokes; that is the point, and a
  gradient is what the previous identity was replaced for.
- Do not close the gap or centre the two arcs. Without the offset it is a ring.
- Do not rotate it. The seam is vertical because the site's handoff figure reads
  left to right.
- Do not recolour the left arc. It inherits text colour so it always matches the
  type beside it.
- Do not outline, emboss, or add a drop shadow.

---

## The gate

`npm run verify:contrast` checks two things about the mark:

1. **Each arc against its ground** at the full 4.5:1 WCAG AA threshold.
2. **The two arcs against each other**, at a 1.5:1 floor across all 24 accent ×
   ground pairings.

The second floor is deliberately low, and the reason matters: the arcs are
separated by a physical gap, so the offset is what makes the mark read — the
colour difference only reinforces it. The check exists so that adding an accent
whose value sits on top of the text colour fails the build, rather than quietly
shipping a mark whose two halves are indistinguishable.

Current tightest pairing: **teal on ink at 1.61:1.**

---

## Known trade-off

This mark was chosen over eight alternatives with one weakness understood and
accepted: **at 16px the offset softens and it moves toward reading as a plain
ring.** The favicon cut mitigates it — double offset, wider stroke, own tile —
but it does not eliminate it.

That was the cost of picking the most conceptually exact option. It is written
down here so nobody rediscovers it in six months and treats it as a defect.
