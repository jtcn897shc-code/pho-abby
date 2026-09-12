# DESIGN.md — Savanna Roofing Ltd.

Dark editorial. Giant condensed type, real depth, and the brand gold finally
doing the work it was drawn to do.

Mood phrase: *"the last of the light coming off a wet charcoal roof — everything
in shadow except the one warm edge."*

---

## 1. The inversion, and why

The previous build was a white page. That forced the brand gold into a corner:
at L 0.78 it scores 2.3:1 on white, so it could never be type, only a fill,
and the headings had to be charcoal with a gold rule doing the accent work.

On a near-black ground the same gold lands at **6.5:1**. It can be headlines,
numerals, phone numbers, rules and CTAs. The logo's own colour gets to carry the
page instead of hiding in it — so the page went dark.

Cream sections are now the contrast break, not the default. The rhythm is:
dark hero → dark stat band → **cream** services → dark leak response → **cream**
about → dark work → dark quote → dark footer.

## 2. Colour (OKLCH)

| Token | Value | Role |
|---|---|---|
| `--void` | `oklch(0.16 0.006 60)` | page ground — warm near-black, never pure #000 |
| `--void-2` | `oklch(0.21 0.008 60)` | raised dark surface: cards, wells, intake panel |
| `--cream` | `oklch(0.96 0.008 85)` | light section ground |
| `--cream-2` | `oklch(0.92 0.01 85)` | surface within cream sections |
| `--on-void` | `oklch(0.96 0.008 85)` | text on dark — 13:1 |
| `--on-void-dim` | `oklch(0.72 0.008 75)` | secondary on dark — 7.4:1 |
| `--gold` | `oklch(0.78 0.135 85)` | the logo sun. **Text-safe on dark at 6.5:1** |
| `--gold-ink` | `oklch(0.50 0.115 72)` | the one gold safe as text on cream |
| `--on-gold` | `oklch(0.17 0.01 60)` | text on gold fills — never white |
| `--green` | `oklch(0.58 0.12 150)` | acacia, lifted to read on dark: ticks, live dot |
| `--green-ink` | `oklch(0.42 0.10 150)` | acacia on cream |

The rule that still holds from the last build: **never white text on gold.**
Gold fills take `--on-gold` charcoal. What changed is that gold is no longer
fill-only — on `--void` it is a first-class text colour.

## 3. Typography

**One family, two extremes: Archivo Variable**, which carries a width axis
(62–125) as well as weight. The condensed poster display and the normal-width
UI come from the same typeface — a deliberate pairing, not two unrelated fonts.
Schibsted Grotesk stays for body copy, where a condensed face would hurt.

| Step | Size | Axes | Use |
|---|---|---|---|
| mega | `clamp(2.8rem, 10.5vw, 8.5rem)` | `wdth 64, wght 900` | hero headline, section openers |
| h2 | `clamp(2.2rem, 6vw, 4.5rem)` | `wdth 64, wght 900` | section headings |
| h3 | `clamp(1.15rem, 2vw, 1.5rem)` | `wdth 82, wght 800` | card titles, step titles |
| eyebrow | `0.75rem` | `wdth 88, wght 700` | numbered section labels |
| lead | `clamp(1.05rem, 1.5vw, 1.25rem)` | body face | section ledes |
| body | `1rem / 1.6` | body face | prose, capped ~52ch |

**The two-finish headline.** Every section opener is a pair: line one solid,
line two outlined (`-webkit-text-stroke`, `color: transparent`). At these sizes
a fully solid three-line headline is a wall of ink; the outline gives it air and
is the single strongest signature on the page.

`--fs-mega` is capped at 8.5rem on purpose. At 11rem the three-line hero pushes
the phone CTA below the fold on a 900px laptop, and on this site the CTA is the
point.

## 4. Motion

Full system in `src/styles/motion.css`, orchestration in `src/scripts/motion.ts`.

**The gate.** This is a marketing page seen once or twice per visitor — the
rare / first-time tier, which is where a delight budget is legitimate. It is
not a tool anyone uses daily, so entrances are allowed to be expressive. What
they are never allowed to do is delay interaction or gate content.

| Curve | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | everything entering |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | on-screen movement |

| Duration | Value | Tier |
|---|---|---|
| `--dur-press` | 140ms | button press |
| `--dur-fast` | 180ms | hover, small state |
| `--dur-mid` | 260ms | UI transitions |
| `--dur-reveal` | 720ms | scroll reveals (marketing tier) |
| `--dur-scene` | 1000ms | hero assembly, once per visit |

**Reveal variants** (`data-reveal`): `up`, `rise`, `depth` (hinges in off a
plane), `swing` (rotateY), `scale`, `mask` (frame holds, picture settles into
it). Stagger via `--i` at 60ms steps.

**The hero is a real 3D scene.** Three planes at different `translateZ` inside
one perspective: photograph at −140px, rain at −40px, scrim at +10px. On scroll
the whole scene sinks and tilts via a CSS scroll timeline, so it runs on the
compositor rather than fighting the main thread.

**Text is deliberately not in the 3D context.** Transformed text rasterises
soft, and a blurry headline is a bad trade for parallax nobody consciously
notices. The planes move; the type stays crisp and gets its own hinge reveal.

### Non-negotiables

- **transform and opacity only** (`clip-path` was tried and removed — see below).
- **Nothing hides without JS.** Reveals only become hidden under `html.js`,
  which is set by an inline script in `<head>`. A JS failure or a headless
  renderer gets the full page, not a blank one.
- **`prefers-reduced-motion` keeps the fades and drops every translation**,
  rotation, loop and pointer-tracker. Fewer and gentler, not zero.
- **Hover motion is gated** behind `@media (hover: hover) and (pointer: fine)` —
  touch fires a false hover on tap and leaves effects stuck mid-sweep.
- **Transitions, not keyframes**, for anything that can retrigger, so an
  interrupted movement retargets from where it is.

### The clip-path trap

The first cut used `clip-path: inset(0 0 100% 0)` for a wipe reveal. It never
fired: an element clipped to zero height reports an intersection ratio of zero,
so IntersectionObserver never marks it visible, so it is never unclipped. A
reveal cannot be driven by the same element that clips itself out of existence.
Replaced with `mask`, which translates the *inner* media inside a wrapper that
already has `overflow: hidden`.

## 5. Layout

- Shell `max-width: 78rem`, gutter `clamp(1.15rem, 4vw, 3rem)`.
- Section rhythm `clamp(5rem, 12vw, 10rem)` — bigger than the last build; this
  system needs air around the type.
- Radius is tight (`4px` / `10px`). This is an edges system, not a pill system;
  pills survive only on city chips and tag flags.
- Distinct section skeletons: full-bleed 3D hero, three-up stat band, gold slab
  + four-card grid, feature + numbered steps + quote row, offset image with the
  logo breaking the frame, 12-column work grid, split details + sticky panel.
- Giant outlined wordmarks drift behind sections on scroll, and the footer
  wordmark is cropped by the viewport edge the way a roofline runs past the
  frame of a photograph.

## 6. Do / Don't

**Do:** dark ground with cream breaks; gold as type *and* fill on dark; the
solid/outlined headline pair; numbered section labels; charcoal text on every
gold fill; honest stat numerals only; the emergency block first, widest, and the
only gold slab in its section.

**Don't:** white text on gold; gold text on cream (use `--gold-ink`); navy-and-
red contractor palette; shield crests; urgency theatre; a second accent hue;
`ease-in` on anything entering; `scale(0)` entrances; ungated hover motion;
scroll-gated content that ships blank without JS; invented numerals in the stat
band; `aggregateRating` in JSON-LD before real first-party reviews exist; a
`<form>` with no endpoint behind it.

## 7. Responsive

- Breakpoints: 380 (nav number → glyph), 480 (nav wordmark hides), 620 (hero
  measure tightens), 760 (stat band and work grid stack), 860 (nav links hide,
  feature and urgent slab stack), 900 (about stacks), 980 (quote splits stack).
- Touch targets ≥ 44px; the `tel:` CTA is ≥ 48px.
- No horizontal scroll at 360px — verified.
- Hero image `loading="eager" fetchpriority="high"`; everything else lazy.
- The hero's weather loop pauses when the tab is hidden.

## 8. Agent Prompt Guide

Quick palette: ground `oklch(0.16 0.006 60)`; gold `oklch(0.78 0.135 85)` (text
*and* fill on dark, charcoal text on gold fills); cream break
`oklch(0.96 0.008 85)`; acacia `oklch(0.58 0.12 150)` for marks only.

Prompt: "Dark editorial one-pager for a Metro Vancouver roofing company whose
differentiator is attending active leaks during heavy rain. Near-black ground
with two cream sections as breaks. Archivo Variable at width 64 / weight 900 for
giant uppercase headlines, each one a pair — first line solid, second line
outlined in gold. Savanna gold carries headlines, numerals and CTAs on the dark
ground; charcoal text on gold fills, never white. The hero is a three-plane 3D
parallax scene with drizzle, and the headline hinges up off its baseline.
Scroll reveals with 60ms stagger, pointer tilt on cards, scroll-linked progress.
Everything off under prefers-reduced-motion, nothing hidden without JS. No
navy-and-red contractor palette, no shields, no urgency theatre."
