# Discovery — Savanna Roofing Ltd.

What we actually know, and what the site is currently guessing. Everything in
the second list is a `TODO:` in `src/data/site.ts` and must be answered before
launch.

---

## Confirmed

Sourced from Savanna Roofing's own public Facebook post (Sep 1) and their logo.

**Identity**
- Legal/trading name: Savanna Roofing Ltd.
- Sign-off line, already theirs: *"Protecting what's beneath your roof."*
- Logo: giraffe and acacia tree against a savanna sun, over a gable roofline.
  Gold, forest green, charcoal on cream. Distinctive in a category of navy
  shields — it is the brand's strongest asset.

**Services**
- Roof-leak detection
- Emergency water containment
- Repair solutions — flat-roof systems and asphalt-shingle roofs
- Residential and commercial
- Active leaks and preventative maintenance

**The differentiator** — their words:
> "When a permanent exterior repair cannot be completed safely during heavy
> rain, we can assess the source, help contain further water intrusion and
> arrange the appropriate long-term repair."

**Service area**
Vancouver · Burnaby · Richmond · Delta · Surrey · Coquitlam

**Intake fields they already ask for**
Location · roof type · interior photos · exterior photos · best contact number

**Assets**
19+ real job photos exist on their Facebook page, including a strong
drone/ridge shot of a completed charcoal shingle roof in a PNW neighbourhood.

---

## Open — blocking launch

1. **Phone number.** The site ships with `(604) 555-0142`, a reserved fictional
   number that cannot ring anyone. An emergency-led roofing site without a real
   tappable number is non-functional. Highest priority by a distance.
2. **Email address.** `info@savannaroofing.ca` is invented.
3. **Availability.** Is the emergency line genuinely 7 days? After hours? The
   site currently claims "storm and active-leak calls answered 7 days a week"
   and "most calls returned within the hour" — both invented, and both are
   promises that get quoted back at you.
4. **Quote intake destination.** Static build, no server. Pick one:
   - a form service with file upload (Formspree / Web3Forms / Netlify Forms) —
     recommended, since photos are half the value of the intake;
   - or keep the current checklist + phone + Messenger fallback.
5. **Credentials.** Liability insurance amount, WorkSafeBC clearance number,
   workmanship warranty term and what it covers, founding year. All four are
   currently placeholder. A wrong insurance or WorkSafeBC claim is a legal
   problem, not a copy problem.

## Open — needed for a good site, not blocking

6. **Testimonials.** There are none on the site — only flagged samples.
   Publishing invented reviews for a real contractor is deceptive advertising
   (Competition Act s.74.01). Get real Google reviews, or delete the block.
7. **The origin story.** Where does the name "Savanna" come from, and the
   giraffe? This is the most memorable thing about the brand and the About
   section is currently a placeholder because it should not be guessed.
8. **Street address.** Do they publish one? Not required, but a verifiable
   address materially helps Google Business Profile ranking. If yes, add
   `PostalAddress` + `geo` to the JSON-LD in `Base.astro`.
9. **Photos at full resolution.** The screenshots supplied so far are 1260×2736
   with app chrome; the usable area is ~1260×1745, too short for a full-bleed
   hero. Need the originals.
10. **Logo vector.** Nav and footer currently use a stand-in roofline glyph.
11. **Systems and brands.** Which membrane systems for flat roofs, which shingle
    brands, any manufacturer certification. Four of the five service groups are
    marked `sample` on the page until this is answered.
12. **Domain.** Site currently builds to the GitHub Pages preview path.
13. **Google Business Profile / Instagram** URLs, if they exist.

## Later

- **City landing pages.** Six municipalities is six `/roofing-<city>` routes
  worth of local SEO, via a dynamic route off `serviceArea.cities`. Only worth
  building once there is real content per city (jobs done, photos) — thin
  duplicated city pages are penalised, not rewarded.
- **Before/after pairs.** The single most persuasive asset a roofer has, and
  none are wired yet.
