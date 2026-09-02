# DESIGN.md — Pho Abby

Authored from the Destura Astro one-pager playbook Phase 3, the `impeccable`
brand seed (`oklch(0.774 0.174 65.1)`, honey-amber), and structural precedent
from `awesome-design-md`: **starbucks** (four-tier brand-colour system mapped to
surface roles, colour-block page rhythm, full-pill buttons, whisper shadows) and
**airbnb** (one brand voltage carries every primary CTA, photography over
typographic muscle, no hard corners).

Mood phrase: *"the dark spice bundle at the bottom of the pot — star anise,
charred cassia, clove — lacquer-brown and glossy, with one bright snap of thai
basil."*

---

## 1. Visual Theme & Atmosphere

Pure-white page. Warmth comes entirely from a **committed deep lacquer-amber**
(`--primary`) that carries 35–55% of the surface: the hero frame, one value
strip, every section heading, all primary CTAs, and the footer. The amber is
**dark and glossy, not bright orange** — deliberately not the Vietnamese-flag
red/yellow category reflex, and not a warm-cream "cozy" wash (both are tells).
One accent only: a **thai-basil green**, used for < 8% of the surface — today's
hours row, the veg-option pill, link underlines, the "open now" dot.

The page has a beat: white editorial sections alternate with two full-bleed
**dark-amber frames** (Favourites, Footer) and one **amber value strip**.
Geometry is soft — 10px on cards and images, full-pill on buttons and tag
pills, no hard corners anywhere. Elevation is a whisper (`0 1px 2px` +
`0 8px 24px` at 0.06–0.10 alpha, tinted warm, never pure black).

## 2. Colour Palette & Roles (OKLCH)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(1 0 0)` | page background — pure white, no hidden warmth |
| `--surface` | `oklch(0.976 0.004 70)` | alternating section wash; barely-there, not cream |
| `--frame` | `oklch(0.28 0.035 55)` | full-bleed dark frames (Favourites, Footer), hero scrim base |
| `--ink` | `oklch(0.24 0.014 55)` | body text — 12.6:1 on `--bg` |
| `--muted` | `oklch(0.50 0.012 55)` | secondary text — 4.9:1 on `--bg` |
| `--on-frame` | `oklch(0.95 0.008 70)` | text on `--frame` |
| `--on-frame-muted` | `oklch(0.78 0.012 70)` | secondary text on `--frame` |
| `--primary` | `oklch(0.475 0.115 52)` | committed brand amber — headings, CTAs, strip, frame tint |
| `--primary-deep` | `oklch(0.33 0.08 48)` | footer base, pressed CTA, hairline on amber |
| `--primary-bright` | `oklch(0.70 0.15 62)` | hover glow, small glints, focus ring (≈ the impeccable seed) |
| `--accent` | `oklch(0.60 0.115 148)` | thai-basil green — today's hours, veg pill, link underline, open dot |
| `--hairline` | `oklch(0.90 0.006 60)` | 1px borders / dotted menu leaders on white |
| `--hairline-frame` | `oklch(1 0 0 / 0.16)` | 1px borders on dark frames |

Contrast: white text on `--primary` = 6.8:1 ✓. `--ink` on `--surface` = 12.1:1 ✓.
`--accent` on white = 3.4:1 → use for non-text marks + underlines, or with a
weight bump for the one-word "Open" label; never small body text.

Text-on-fill rule: **white text on every amber fill** (Helmholtz-Kohlrausch —
dark text on saturated amber reads muddy). Dark `--ink` text only on white,
`--surface`, or the pale `--accent`-tint pill.

## 3. Typography

**One family, many weights: Schibsted Grotesk Variable** (`@fontsource-variable/
schibsted-grotesk`), 400 / 500 / 700 / 900. Characterful grotesque — editorial,
a little warm, not on the 2026 reflex list. No second family. No serif. Hierarchy
is weight + size + colour, never a font swap.

| Step | clamp | weight | tracking | use |
|---|---|---|---|---|
| display | `clamp(2.6rem, 7vw, 4.6rem)` | 900 | `-0.03em` | hero headline (≤ 2 lines) |
| h2 | `clamp(1.9rem, 4vw, 2.9rem)` | 800 | `-0.02em` | section headings (amber) |
| h3 | `clamp(1.15rem, 2vw, 1.4rem)` | 700 | `-0.01em` | menu group headings, card titles |
| lead | `clamp(1.05rem, 1.6vw, 1.2rem)` | 400 | `0` | hero sub, about opener |
| body | `1rem` / `1.6` | 400 | `0` | prose, capped 66ch |
| price | `1rem` | 500 | `0` | menu prices — `font-variant-numeric: tabular-nums` |
| micro | `0.82rem` | 600 | `0.02em` | nav links, pill labels, footer meta (used sparingly, not as an eyebrow on every section) |

`text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose.

## 4. Component Stylings

**Buttons** — full pill, `padding: 0.75rem 1.4rem`, weight 600, `transition:
transform .18s, background-color .18s, box-shadow .18s`. Active: `scale(0.97)`.
Focus-visible: `2px` `--primary-bright` ring + `2px` offset.
- **Primary** (`.btn`): `--primary` bg, white text. Hover: bg `--primary-deep`,
  lift `translateY(-1px)` + soft `--primary` glow.
- **Ghost** (`.btn--ghost`): transparent, `1px` `--ink` border, `--ink` text.
  Hover: bg `--ink`, white text.
- **On-frame** (`.btn--on-frame`): white bg, `--primary` text — used inside the
  dark frames (starbucks inverted pattern). Ghost-on-frame: `1px` white border,
  white text.
- **Phone pill** (nav, persistent): pill, `--primary` text, `1px` `--primary`
  border, phone glyph + number; collapses to glyph-only < 420px, min 44px tap.

**Nav** — sticky, transparent over hero, solidifies to `--bg` + `--hairline`
bottom border + whisper shadow when a 1px sentinel above the hero leaves the
viewport (IntersectionObserver, never a scroll listener). Wordmark left, section
anchors centre (hidden < 760px), phone pill right (always visible).

**Menu row** — CSS grid `[name] 1fr [leader] auto [price]`. Name (+ optional
pill tag). Dotted leader (`border-bottom: 1px dotted --hairline`, baseline
aligned). Price right, tabular. Group heading in `--primary`, weight 700, with a
short `--muted` note line under it where useful. Groups laid out
`repeat(auto-fit, minmax(280px, 1fr))`; short groups (≤ 4 rows) stay one column.

**Cards** — used only for Favourites and Gallery; 10px radius, `--surface` or
photo fill, whisper shadow. **No nested cards.** Everywhere else is plain
sectioned prose + grids.

**Tag pill** — `--accent` at 12% tint bg, `--accent`-dark text, pill, `0.72rem`
weight 600. Only for "Vegetarian" / "Contains shellfish" style flags.

**Hours `<dl>`** — `<div>` rows, `<dt>` day / `<dd>` time. Today's row: `--accent`
left of the day name as a filled dot **and** the day set in weight 700 with an
"· open now / closed" text label — colour is never the only signal.

## 5. Layout Principles

- Shell: `max-width: 74rem`, gutter `clamp(1.1rem, 4vw, 2.5rem)`. Full-bleed
  frames break out edge-to-edge; their inner content keeps the shell width.
- Vertical rhythm: sections `clamp(3.5rem, 9vw, 7rem)` block padding; vary it —
  Hero and Visit get more, Value strip gets less.
- Space scale (rem): 0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6.
- ≥ 4 distinct section layout families: full-bleed hero, horizontal strip,
  multi-column auto-fit menu, asymmetric feature + quotes frame, offset
  image + prose, split map + details. No two sections share a skeleton.
- Body copy blocks capped at 66ch.

## 6. Depth & Elevation

Two shadows only, both warm-tinted (hue 55), never pure black:
- `--shadow-sm`: `0 1px 2px oklch(0.3 0.03 55 / 0.10)` — nav solid, menu hover.
- `--shadow-lg`: `0 8px 30px oklch(0.3 0.03 55 / 0.10)` — Favourites feature
  card, sticky map panel, phone pill on hover.
Dark frames use border (`--hairline-frame`) for separation, not shadow.

## 7. Do's and Don'ts

**Do:** pure-white bg; one committed amber + one green accent; one type family;
dotted leader on menu rows (the one place that convention belongs); today's hours
row doubly marked; every image commented for client swap; steam motion visible
by default with a reduced-motion static fallback.

**Don't:** cream/beige canvas; second accent; second font; serif; eyebrow kicker
above every section (micro style is for nav/pills/footer only); 01/02/03 markers;
identical card grids; nested cards; side-stripe borders; gradient text;
glassmorphism; hero carousel; `aggregateRating` in JSON-LD from Google/DoorDash
(show it visually only); scroll-gated content reveals (they ship blank in
headless renderers).

## 8. Responsive Behaviour

- Breakpoints: 420 (phone pill → glyph), 620 (menu → 1 col, gallery →
  scroll-snap), 760 (nav anchors hide), 980 (Visit split → stacked, map first).
- Touch targets ≥ 44px; `tel:` link ≥ 44px.
- No horizontal scroll at 360px — test hero headline copy at every step.
- Hero image `loading="eager" fetchpriority="high"`; all others lazy.
- Steam motion off under `prefers-reduced-motion`; also pause when tab hidden.

## 9. Agent Prompt Guide

Quick palette: bg `#ffffff`; amber `--primary oklch(0.475 0.115 52)`; green
`--accent oklch(0.60 0.115 148)`; ink `oklch(0.24 0.014 55)`; dark frame
`oklch(0.28 0.035 55)`.

Prompt: "Build a warm, quick, unfussy one-page site for a family Vietnamese
restaurant. Pure-white page, one deep lacquer-amber carrying headings / CTAs /
one strip / footer / a dark frame, one thai-basil-green accent for the 'open
now' / veg / links. Schibsted Grotesk only, hierarchy by weight. Soft 10px
corners, full-pill buttons. The menu must scan in one pass: group heading, name,
dotted leader, tabular price. Alternate white sections with dark-amber frames for
rhythm. One motion: steam rising over the hero, reduced-motion safe. No cream, no
serif, no eyebrow-on-every-section, no card grid."
