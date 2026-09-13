/**
 * Savanna Roofing Ltd. — single content source. The HTML/CSS never needs
 * hand-editing for a content change; edit this file.
 *
 * TEMPLATE / PITCH BUILD.
 *
 *   (confirmed) = taken from Savanna Roofing's own public Facebook post.
 *   TODO:       = invented placeholder. Realistic, but NOT TRUE YET. Every one
 *                 must be confirmed with the client before this site goes live.
 *
 * ⚠ THE PHONE NUMBER IS DELIBERATELY FAKE. 555-01xx is the North American
 *   reserved fictional range — it cannot ring a real person. It is a tripwire:
 *   if this number reaches production, the launch checklist was skipped.
 *
 * ⚠ TESTIMONIALS ARE SAMPLE COPY, marked `placeholder: true` so they render
 *   with a visible "sample" badge. Publishing invented reviews for a real
 *   contractor is deceptive advertising (Competition Act s.74.01 in Canada).
 *   Replace with real, attributable reviews or delete the section.
 */

export const contact = {
  name: "Savanna Roofing Ltd.", // (confirmed)
  shortName: "Savanna Roofing", // (confirmed)

  // TODO: get the real number. 555-0142 is a reserved fictional number.
  phoneDisplay: "(604) 555-0142",
  phoneTel: "+16045550142",

  // TODO: confirm the real inbox.
  email: "info@savannaroofing.ca",

  // (confirmed) Today the only published intake channel is Facebook Messenger.
  messenger: "https://www.facebook.com/savannaroofing",

  // TODO: confirm whether they publish a street address at all. Many roofers
  // work from a yard/truck and list a service area only — but a verifiable
  // address materially helps Google Business Profile ranking.
  street: "",
  city: "Burnaby",
  region: "BC",
  postal: "",
  country: "Canada",

  // TODO: confirm real availability. This drives the emergency promise, which
  // is the site's central claim — it must not be overstated.
  emergencyNote: "Storm and active-leak calls answered 7 days a week",
  responseNote: "Most calls returned within the hour during business hours",
};

/** (confirmed) the six municipalities named in their own post. */
export const serviceArea = {
  cities: ["Vancouver", "Burnaby", "Richmond", "Delta", "Surrey", "Coquitlam"],
  // TODO: confirm whether they travel further (North Shore? Langley? Abbotsford?)
  note: "Metro Vancouver — if you're just outside this list, call and ask.",
};

/** America/Vancouver. 24h "HH:MM". TODO: confirm every row with the client. */
export const hours: { day: string; open: string; close: string; note?: string }[] = [
  { day: "Monday", open: "07:00", close: "18:00" },
  { day: "Tuesday", open: "07:00", close: "18:00" },
  { day: "Wednesday", open: "07:00", close: "18:00" },
  { day: "Thursday", open: "07:00", close: "18:00" },
  { day: "Friday", open: "07:00", close: "18:00" },
  { day: "Saturday", open: "08:00", close: "16:00" },
  { day: "Sunday", open: "08:00", close: "16:00", note: "TODO: confirm Sunday — emergency only?" },
];
export const hoursFootnote =
  "Active leaks are triaged outside these hours — call and leave a message with your address.";

export type ServiceItem = { name: string; note?: string; tag?: string };
export type ServiceGroup = { name: string; note?: string; placeholder?: boolean; items: ServiceItem[] };

/**
 * Grouped the way a homeowner thinks (what's wrong with my roof), not the way
 * a roofer thinks (trade categories). Group 1 is the emergency path and stays
 * first on purpose — it is the highest-intent visitor on the site.
 */
export const services: ServiceGroup[] = [
  {
    name: "Active leak, right now",
    note: "Water coming in today. This is the call to make first.", // (confirmed scope)
    items: [
      { name: "Leak detection", note: "finding the actual entry point, which is rarely above the stain", tag: "Same day" },
      { name: "Emergency water containment", note: "stopping the spread while conditions are still wet" },
      { name: "Temporary tarping", note: "keeping the opening covered until a permanent repair is safe" },
      { name: "Interior damage triage", note: "what to move, what to dry, what needs a restoration trade" },
    ],
  },
  {
    name: "Repairs",
    note: "The fix, once the roof is safe to work on.",
    placeholder: true, // TODO: confirm exactly which repairs they take on
    items: [
      { name: "Flashing and valleys", note: "the two places most leaks actually start" },
      { name: "Roof penetrations", note: "vents, stacks, skylights, chimney saddles" },
      { name: "Ponding and drainage", note: "low spots and blocked drains on flat roofs" },
      { name: "Storm and wind damage", note: "lifted, cracked or missing material" },
    ],
  },
  {
    name: "Flat roof systems",
    note: "Low-slope residential and commercial.", // (confirmed category)
    placeholder: true, // TODO: confirm which membrane systems they install//are certified on
    items: [
      { name: "Torch-on / SBS membrane", note: "repair, patch and full replacement" },
      { name: "Seam and lap repair" },
      { name: "Drain and scupper work" },
      { name: "Roof-top unit and curb sealing", tag: "Commercial" },
    ],
  },
  {
    name: "Asphalt shingle roofs",
    note: "Pitched residential.", // (confirmed category)
    placeholder: true, // TODO: confirm brands carried and any manufacturer certification
    items: [
      { name: "Shingle repair and replacement" },
      { name: "Full re-roof", note: "tear-off, deck inspection, underlayment, new shingle" },
      { name: "Ridge, hip and starter detailing" },
      { name: "Ventilation correction", note: "the usual cause of premature shingle failure" },
    ],
  },
  {
    name: "Preventative maintenance",
    note: "Cheaper than the repair it avoids.", // (confirmed category)
    placeholder: true, // TODO: confirm whether they offer a recurring maintenance plan + pricing model
    items: [
      { name: "Seasonal roof inspection", tag: "Free" },
      { name: "Pre-winter check", note: "before the October rain sets in" },
      { name: "Gutter and debris clearing" },
      { name: "Condition report for buyers and strata", note: "written, with photos" },
    ],
  },
];

/**
 * The three-step leak response. This is lifted almost verbatim from Savanna's
 * own Facebook copy (confirmed) — it is the site's central argument, because
 * most roofers simply refuse to attend during heavy rain.
 */
export const leakResponse = {
  lede: "Most roofers tell you to call back when it dries out. The water doesn't wait that long.",
  feature: {
    title: "We come out in the rain",
    body:
      "When a permanent exterior repair can't be completed safely in heavy rain, we don't just leave you with a bucket. We assess the source, help contain further water intrusion, and book the long-term repair for the first safe window.",
    img: "leakResponse",
  },
  steps: [
    {
      title: "Assess",
      body: "We find where water is actually entering. It is almost never directly above the stain on your ceiling — water tracks along rafters and sheathing before it drops.",
      img: "inspection",
    },
    {
      title: "Contain",
      body: "We stop the spread the same visit: tarping, diverting, sealing what can be sealed wet. The goal is no new damage tonight.",
      img: "flatRoof",
    },
  ],
};

/**
 * TODO: REPLACE OR DELETE BEFORE LAUNCH. Sample copy only — see the file header.
 * `placeholder: true` renders a visible "sample" badge so nobody mistakes these
 * for real reviews during the pitch.
 */
export const reviews = [
  {
    quote: "Sample testimonial — replace with a real, attributable Google review before launch.",
    name: "Sample review",
    source: "Placeholder",
    placeholder: true,
  },
  {
    quote: "Sample testimonial — replace with a real, attributable Google review before launch.",
    name: "Sample review",
    source: "Placeholder",
    placeholder: true,
  },
  {
    quote: "Sample testimonial — replace with a real, attributable Google review before launch.",
    name: "Sample review",
    source: "Placeholder",
    placeholder: true,
  },
];

/**
 * TODO: all four are invented. Confirm each one — these are the claims a
 * homeowner checks before letting a stranger on their roof, and a wrong
 * insurance or WorkSafeBC claim is a legal problem, not a copy problem.
 */
export const credentials = [
  { label: "Licensed and insured", detail: "TODO: confirm liability coverage amount" },
  { label: "WorkSafeBC coverage", detail: "TODO: confirm active clearance number" },
  { label: "Workmanship warranty", detail: "TODO: confirm term and what it covers" },
  { label: "Serving Metro Vancouver since 2019", detail: "TODO: confirm founding year" },
];

export const about: string[] = [
  // TODO: this is ALL invented. Get the real story from the owner — especially
  // where the name and the giraffe come from, which is the most memorable thing
  // about this brand and should not be guessed at.
  "Savanna Roofing is a Metro Vancouver roofing company built around one unglamorous specialty: finding leaks and stopping them.",
  "Flat roofs and asphalt shingle, residential and commercial. We take the small emergency calls other companies pass on, because that is usually how a long relationship with a building starts.",
  "TODO: the owner's story — where the name comes from, how long they have been on roofs, why Metro Vancouver.",
];

/**
 * The stat band. Every figure here is CONFIRMED — the count of municipalities
 * and the two roof systems both come from Savanna's own post. No invented
 * "18+ years" or "2,400 roofs": unverifiable numerals are the single most
 * common tell of a fabricated contractor site, and they are the first thing a
 * suspicious homeowner checks. The third slot is deliberately not a numeral,
 * which also keeps the row from reading as three interchangeable counters.
 */
export const stats: { figure?: number; word?: string; label: string; note: string }[] = [
  { figure: 6, label: "Cities served", note: "Vancouver through to Coquitlam" },
  { figure: 2, label: "Roof systems", note: "Flat membrane and asphalt shingle" },
  { word: "Rain", label: "Or shine", note: "We attend active leaks in wet weather" },
];

export const valueStrip = [
  "Flat roof and asphalt shingle", // (confirmed)
  "Residential and commercial", // (confirmed)
  "Active leaks and preventative maintenance", // (confirmed)
  "Six cities across Metro Vancouver", // (confirmed)
];

/**
 * Quote intake. These are the exact fields Savanna already asks for in their
 * Facebook post (confirmed) — so the form is not a guess, it is their own
 * process written down.
 *
 * TODO: pick a destination. Static build (no server), so it needs a form
 * service — Formspree / Web3Forms / Netlify Forms — or it falls back to
 * Messenger. Photo upload is the deciding factor: half the value of this
 * intake is seeing the ceiling stain before rolling a truck.
 */
export const quoteIntake = {
  fields: [
    { label: "Your location", hint: "city and neighbourhood is enough to start" },
    { label: "Roof type", hint: "flat, shingle, or not sure" },
    { label: "Interior photos", hint: "the stain, the drip, the ceiling" },
    { label: "Exterior photos", hint: "only if you can take them safely from the ground" },
    { label: "Best contact number", hint: "and the best time to reach you" },
  ],
  safetyNote: "Never climb onto a wet roof to take a photo for us. Ground level only.",
  endpoint: "", // TODO: form service endpoint. Empty = fall back to Messenger + phone.
};

/**
 * Destura Flow booking page. Every "Request a quote" / "Get a quote" trigger
 * points here directly (real href, opens in a new tab) so a JS failure still
 * lands a visitor somewhere that works instead of a dead button — QuoteModal
 * intercepts the click and opens it inline instead when JS is available.
 *
 * TODO: confirm this URL is correct. Inferred from the routing path
 * (/b/savanna-roofing) shown in the Destura dashboard, never verified
 * directly — this build environment has no outbound network access to check
 * it against the live service.
 */
export const bookingFlowUrl = "https://flow.destura.studio/b/savanna-roofing";

export const ctas = {
  emergency: { label: "Call about an active leak", href: "tel:+16045550142", verified: false },
  quote: { label: "Request a quote", href: bookingFlowUrl, verified: true },
  message: { label: "Send photos on Messenger", href: "https://www.facebook.com/savannaroofing", verified: false },
};

export const socials = [
  // TODO: confirm the real Facebook URL (the post exists; the vanity URL was
  // never captured). Add Instagram / Google Business Profile if they have them.
  { label: "Facebook", href: "https://www.facebook.com/savannaroofing" },
];

export const site = {
  // TEMPLATE: GitHub Pages project URL. Set to the real domain at launch.
  url: "https://jtcn897shc-code.github.io/savanna.roofing",
  tagline: "Roof leak repair across Metro Vancouver",
  description:
    "Savanna Roofing Ltd. — roof-leak detection, emergency water containment and dependable repair for flat and asphalt-shingle roofs. Residential and commercial, serving Vancouver, Burnaby, Richmond, Delta, Surrey and Coquitlam.",
  // (confirmed) their own sign-off line.
  promise: "Protecting what's beneath your roof.",
  credit: { label: "Site by Destura", href: "https://destura.studio" },
};
