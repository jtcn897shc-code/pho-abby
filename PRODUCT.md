# Product

## Register

brand

## Users

Someone in Metro Vancouver with water coming through a ceiling, usually on a
phone, usually in bad weather, usually at a bad hour. They want three things
fast: will you come out, do you cover my city, how do I reach you right now.

Secondary: a homeowner or strata planning a re-roof and collecting quotes, who
is slower, more comparative, and checking whether you look legitimate.

## Product Purpose

A one-page marketing site for **Savanna Roofing Ltd.**, a roofing company
serving Vancouver, Burnaby, Richmond, Delta, Surrey and Coquitlam. Success =
a visitor calls, or sends photos and their address.

Status: **template / pitch build.** The phone number is a reserved fictional
number, testimonials are flagged samples, and most credentials are placeholder.
Not indexed. See the header of `src/data/site.ts` for the full honesty contract.

## The argument

Savanna's own words, and the reason the site exists:

> When a permanent exterior repair cannot be completed safely during heavy rain,
> we can assess the source, help contain further water intrusion and arrange the
> appropriate long-term repair.

**They come out in the rain.** Most roofers tell you to call back when it dries
out. That is the differentiator, it is unusual, and it is the hero — not a
bullet buried in a services list. Every layout decision defers to it: the
emergency group is the first and widest block in Services, and the leak-response
frame is the only full-bleed dark section in the body.

## Brand Personality

**Steady · Direct · Unpanicked.** The person you want on the phone when water is
coming in. Copy is plain and concrete — "we find where water is actually
entering", not "premium roofing solutions". No urgency theatre, no countdown
banners, no scare copy about "catastrophic structural failure". The situation is
already urgent; the company should sound calm.

The logo — giraffe, acacia, savanna sun over a roofline — is warm and unusual in
a category full of blue chevrons and red shields. Lean on it. It is the most
memorable asset the business has.

## Anti-references

- Roofing-category reflex: navy-and-red "contractor" palette, shield/badge
  crests, hard-hat clipart, a stock photo of a smiling man with a clipboard.
- Urgency theatre: flashing "24/7 EMERGENCY" banners, red alert bars, fake
  countdowns, "CALL NOW!!" in caps.
- AI-site tells: cream/beige body background, eyebrow kicker on every section,
  01/02/03 section numbers, identical service cards in a 3-up grid, hero
  carousels, gradient text, glassmorphism.
- Invented trust: fabricated review counts, made-up "25 years experience",
  unearned certification badges. Everything unconfirmed stays a visible TODO.

## Design Principles

1. **The emergency path is the product.** A visitor with an active leak must
   reach a phone number within one thumb-reach, from any scroll position.
2. **Gold is a fill, never text.** The brand gold is bright; it carries charcoal
   text on it and never sits as text on white. See `DESIGN.md` §2.
3. **One page, a clear beat.** White editorial sections alternate with one gold
   strip, one gold emergency block and two charcoal frames.
4. **One motion signature: drizzle** over the hero — the problem, falling.
   Visible by default, removed entirely under `prefers-reduced-motion`.
5. **Honest content.** Confirmed facts only in prose. Everything invented is a
   visible `TODO` in code and, where it is user-facing, a visible "sample" badge
   on the page. Never a silent guess.

## Lead capture

The intake fields are Savanna's own, from their Facebook post: location, roof
type, interior photos, exterior photos, best contact number.

It currently renders as a **checklist plus working CTAs**, not an HTML form.
This is deliberate: the build is static with no endpoint wired, and a form that
posts into nothing silently swallows leads — the worst possible failure for a
contractor. Wire `quoteIntake.endpoint` to a form service that accepts file
uploads and this becomes a real form.

## Accessibility & Inclusion

WCAG AA throughout: body ≥ 4.5:1, large text ≥ 3:1, charcoal-on-gold ≥ 6:1.
`prefers-reduced-motion` removes the drizzle. Keyboard navigable, visible focus
rings, skip link, `tel:` tap targets ≥ 44px, hours `<dl>` with today's row
marked in text as well as colour. Safety note on the intake panel tells people
not to climb a wet roof to photograph it.
