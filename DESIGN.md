# DESIGN.md — Savanna Roofing Ltd.

Palette read directly off the company logo: savanna gold (the sun), acacia green
(the tree and the hills), charcoal (the wordmark), on white. Structure inherited
from the Destura Astro one-pager playbook.

Mood phrase: *"charcoal shingle still wet from the last of the rain, with the
sun coming in low and gold behind it."*

---

## 1. Visual Theme & Atmosphere

Pure-white page. The weight comes from **charcoal** — it is both the wordmark
colour and, conveniently, the colour of the roofs this company installs. The
**gold** is the voltage: one value strip, the emergency services block, every
primary button, the rule above every section heading, the top edge of the
footer. **Acacia green** is a mark only — check ticks, today's hours dot, link
underlines — under 8% of the surface.

The page has a beat: white editorial sections alternate with a gold strip, a
gold emergency block, and two charcoal frames (Leak response, Footer).

Geometry is tighter than a hospitality build — **8px** on cards, images and
buttons, pill reserved for chips (nav phone, tag pills). A trade site should
read built, not soft. Elevation is a whisper, tinted neutral-warm, never pure
black.

## 2. Colour Palette & Roles (OKLCH)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(1 0 0)` | page background — pure white |
| `--surface` | `oklch(0.975 0.006 85)` | alternating wash; a nod at the logo cream, not a cream page |
| `--frame` | `oklch(0.25 0.008 60)` | charcoal full-bleed frames (Leak response, Footer), hero scrim |
| `--ink` | `oklch(0.22 0.008 60)` | body text and **all headings** — 14:1 on `--bg` |
| `--muted` | `oklch(0.50 0.008 60)` | secondary text — 4.9:1 on `--bg` |
| `--on-frame` | `oklch(0.96 0.004 85)` | text on `--frame` |
| `--on-frame-muted` | `oklch(0.78 0.006 85)` | secondary text on `--frame` |
| `--primary` | `oklch(0.78 0.135 85)` | savanna gold — **fills only** |
| `--primary-deep` | `oklch(0.66 0.13 80)` | hover fill, rules on gold |
| `--primary-bright` | `oklch(0.87 0.115 92)` | focus ring, glints |
| `--primary-text` | `oklch(0.52 0.115 72)` | deep ochre — the only gold allowed as text on white (5.8:1) |
| `--on-primary` | `oklch(0.20 0.01 60)` | charcoal text on every gold fill (6.0:1) |
| `--accent` | `oklch(0.48 0.11 150)` | acacia green — ticks, today's row, link underlines |
| `--accent-deep` | `oklch(0.38 0.09 150)` | green as small text, strip bullets |
| `--hairline` | `oklch(0.90 0.004 70)` | 1px borders on white |
| `--hairline-frame` | `oklch(1 0 0 / 0.16)` | 1px borders on charcoal |

**The contrast rule that governs this palette.** The brand gold is bright
(L 0.78). It therefore:

- **cannot carry white text** — 2.3:1, fails. Gold fills take `--on-primary`.
- **cannot be text on white** — also 2.3:1, fails. Headings are `--ink`, and
  the gold appears as a short rule above the heading instead.
- has exactly one text-safe form, `--primary-text`, for the phone number and
  list markers on white.

This is how the logo itself is built: charcoal wordmark, gold bars beneath it.
Follow it and the contrast problems disappear.

## 3. Typography

**One family, many weights: Schibsted Grotesk Variable**, 400 / 500 / 700 / 900.
No second family, no serif. Hierarchy is weight + size + colour, never a font
swap.

| Step | clamp | weight | tracking | use |
|---|---|---|---|---|
| display | `clamp(2.6rem, 7vw, 4.6rem)` | 900 | `-0.03em` | hero headline (≤ 2 lines) |
| h2 | `clamp(1.9rem, 4vw, 2.9rem)` | 800 | `-0.02em` | section headings (charcoal, gold rule above) |
| h3 | `clamp(1.15rem, 2vw, 1.4rem)` | 700 | `-0.01em` | service group headings, card titles |
| lead | `clamp(1.05rem, 1.6vw, 1.2rem)` | 400 | `0` | hero sub, about opener |
| body | `1rem` / `1.6` | 400 | `0` | prose, capped 66ch |
| micro | `0.82rem` | 600 | `0.02em` | nav links, pills, footer meta — never an eyebrow on every section |

`text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose.

## 4. Component Stylings

**Buttons** — 8px radius, `padding: 0.75rem 1.4rem`, weight 600, min-height 44px.
Active: `scale(0.97)`. Focus-visible: 2px `--primary-bright` ring, 2px offset.
- **Primary** (`.btn`): gold fill, `--on-primary` charcoal text. Hover:
  `--primary-deep`, lift 1px, soft gold glow.
- **Ghost** (`.btn--ghost`): transparent, 1px `--ink` border. Hover: ink fill.
- **On-frame** (`.btn--on-frame`): gold fill on the charcoal frames — the
  loudest element on the page, reserved for the emergency CTA.
- **Phone pill** (nav, persistent): pill, 1px border, phone glyph + number;
  collapses to glyph-only < 420px, min 44px tap.

**Nav** — sticky with a negative bottom margin so the hero sits *under* it;
transparent over the hero, solidifying to white + hairline + whisper shadow once
a 1px sentinel leaves the viewport (IntersectionObserver, never a scroll
listener). Without the negative margin the light nav text renders white-on-white
before first scroll.

**Services** — five groups. Group 1 (`Active leak, right now`) spans the full
grid on a gold field with charcoal text and a two-column item list; the other
four are plain auto-fit columns with a gold underline on the heading. Items are
name + one-line note, no prices — a roofing quote is site-specific and invented
pricing is a liability.

**Leak response** — charcoal frame. A gold-bordered feature card (`We come out
in the rain`) spanning two rows, plus two numbered steps in gold discs.

**Intake panel** — white card, 4px gold top edge, sticky beside the service
area. A numbered checklist of the five things to send, a green safety note, and
two live CTAs. Not a `<form>` until an endpoint exists — see PRODUCT.md.

**Tag pill** — green at 12% tint, `--accent-deep` text. Inverted to charcoal-on-
gold inside the emergency block, where the tint is invisible.

**Hours `<dl>`** — today's row gets a green dot **and** bold weight **and** an
"· open now / closed now" text label. Colour is never the only signal.

## 5. Layout Principles

- Shell `max-width: 74rem`, gutter `clamp(1.1rem, 4vw, 2.5rem)`. Full-bleed
  frames break out; inner content keeps shell width.
- Vertical rhythm: `clamp(3.5rem, 9vw, 7rem)` block padding; vary it — hero and
  service area get more, the value strip less.
- ≥ 4 distinct section skeletons: full-bleed hero, horizontal strip, auto-fit
  services grid with one spanning block, asymmetric feature frame, offset
  image + prose, 12-column gallery band, split details + sticky panel. No two
  sections share a layout.
- Body copy capped at 66ch.

## 6. Depth & Elevation

Two shadows only, tinted charcoal-warm, never pure black:
- `--shadow-sm`: `0 1px 2px oklch(0.25 0.008 60 / 0.12)` — solid nav.
- `--shadow-lg`: `0 8px 30px oklch(0.25 0.008 60 / 0.12)` — intake panel,
  about figure.
Charcoal frames separate with `--hairline-frame`, not shadow.

## 7. Do's and Don'ts

**Do:** white page; charcoal headings with a gold rule; gold as fill only; green
as a mark only; one type family; the emergency block first and widest; drizzle
on the hero with a full reduced-motion off-switch; every image commented for
client swap; every invented fact a visible TODO.

**Don't:** white text on gold; gold text on white; navy-and-red contractor
palette; shield crests; cream canvas; second accent; second font; serif; eyebrow
kicker on every section; 01/02/03 markers; identical 3-up service cards; nested
cards; gradient text; glassmorphism; hero carousel; `aggregateRating` in JSON-LD
before real first-party reviews exist; a `<form>` with no endpoint behind it.

## 8. Responsive Behaviour

- Breakpoints: 420 (phone pill → glyph), 620 (services → 1 col, gallery →
  scroll-snap), 720 (leak grid → 1 col), 760 (nav anchors hide), 980 (service
  area split → stacked, intake panel first).
- Touch targets ≥ 44px; `tel:` links ≥ 44px.
- No horizontal scroll at 360px — verified.
- Hero image `loading="eager" fetchpriority="high"`; all others lazy.
- Drizzle off under `prefers-reduced-motion`; paused when the tab is hidden.

## 9. Agent Prompt Guide

Quick palette: bg `#ffffff`; gold fill `--primary oklch(0.78 0.135 85)` with
charcoal `--on-primary` text on it; charcoal frame `oklch(0.25 0.008 60)`; green
mark `--accent oklch(0.48 0.11 150)`; ink `oklch(0.22 0.008 60)`.

Prompt: "Build a steady, direct one-page site for a Metro Vancouver roofing
company whose differentiator is that they attend active leaks during heavy rain.
Pure-white page, charcoal headings each with a short gold rule above, savanna
gold used only as fills — buttons, one value strip, the emergency services block
— always with charcoal text on it, never white. Acacia green only as ticks and
marks. Schibsted Grotesk only, hierarchy by weight. 8px corners. The emergency
services group is first and spans full width on a gold field. One motion:
drizzle falling over the hero, reduced-motion safe. No navy-and-red contractor
palette, no shields, no urgency theatre, no cream, no serif."
