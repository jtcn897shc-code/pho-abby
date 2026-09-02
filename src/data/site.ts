/**
 * Pho Abby — single content source. The HTML/CSS never needs hand-editing for a
 * content change; edit this file.
 *
 * PITCH / PREVIEW BUILD. Confirmed facts are marked (confirmed). Everything else
 * is realistic placeholder for the pitch and MUST be confirmed with the client.
 * Every `TODO:` below is a visible open question.
 */

export const contact = {
  name: "Pho Abby",
  // (confirmed) Google Business Profile
  street: "2100 Whatcom Rd, Unit 104",
  city: "Abbotsford",
  region: "BC",
  postal: "V3G 2K8",
  country: "Canada",
  phoneDisplay: "(604) 302-8669", // (confirmed)
  phoneTel: "+16043028669",
  neighbourhood: "Whatcom Road, one minute off Highway 1 at Exit 95",
  pricePerPerson: "$10–20", // (confirmed) "reported by 258 people"
  // (confirmed) rating snapshot — shown visually only, NEVER in JSON-LD (3rd-party)
  ratingValue: "4.6",
  ratingCount: "435",
  ratingSource: "Google",
  mapsQuery: "Pho Abby, 2100 Whatcom Rd Unit 104, Abbotsford, BC V3G 2K8",
};

/** America/Vancouver. 24h "HH:MM". (confirmed from Google; Wed open time TODO) */
export const hours: { day: string; open: string; close: string; note?: string }[] = [
  { day: "Monday", open: "10:00", close: "21:00" },
  { day: "Tuesday", open: "10:00", close: "21:00" },
  { day: "Wednesday", open: "10:00", close: "21:00", note: "TODO: confirm Wednesday open time with Pho Abby" },
  { day: "Thursday", open: "10:00", close: "21:00" },
  { day: "Friday", open: "10:00", close: "21:00" },
  { day: "Saturday", open: "10:00", close: "21:00" },
  { day: "Sunday", open: "10:00", close: "20:30" },
];
// User-facing note. (Wednesday open time + full week still to be confirmed with
// the client — tracked in the `hours` array above, not shown on the page.)
export const hoursFootnote = "Holiday hours may vary — please call ahead.";

export type MenuItem = { name: string; note?: string; tag?: string; price: string };
export type MenuGroup = { name: string; note?: string; placeholder?: boolean; items: MenuItem[] };

export const menu: MenuGroup[] = [
  {
    name: "To start",
    note: "Please tell us about any allergies.", // (confirmed, from menu photo)
    items: [
      // (confirmed) items + prices from the in-store Food Menu photo
      { name: "Salt & lime-leaf fried chicken", price: "15" },
      { name: "Crispy chicken wings", note: "eight, sweet Thai chilli or buffalo", price: "14", tag: undefined },
      { name: "Garlic fried tofu", note: "spicy or not", price: "13" }, // TODO: confirm price
      { name: "Pork spring rolls", note: "three, with fish sauce", price: "12" },
      { name: "Shrimp spring rolls", note: "five, with sweet chilli", price: "10" },
      { name: "Crispy wontons", note: "ten, with sweet chilli", price: "14" },
      { name: "Fresh salad rolls", note: "two — prawn, grilled pork, grilled chicken or veg", tag: "Veg option", price: "12" },
    ],
  },
  {
    name: "Phở",
    note: "Rice noodles in a broth we start before opening, herb plate on the side.",
    placeholder: true, // TODO: replace whole group with Pho Abby's real pho menu + prices
    items: [
      { name: "Phở Abby", note: "rare beef, brisket, pork meatball", price: "18" },
      { name: "Rare beef phở", price: "16" },
      { name: "Brisket & beef tendon phở", price: "17" },
      { name: "Chicken phở", price: "16" },
      { name: "Vegetable & tofu phở", tag: "Vegetarian", price: "15" },
    ],
  },
  {
    name: "Vermicelli & rice",
    placeholder: true, // TODO: replace with real items + prices
    items: [
      { name: "Grilled lemongrass pork vermicelli", note: "bún — noodles, herbs, nước chấm, peanuts", price: "16" },
      { name: "Grilled chicken vermicelli", price: "16" },
      { name: "Pork & shrimp skewer vermicelli", price: "18" },
      { name: "Grilled pork chop on broken rice", note: "cơm tấm, with spring roll & fried egg", price: "17" },
      { name: "Lemongrass tofu vermicelli", tag: "Vegetarian", price: "15" },
    ],
  },
  {
    name: "Wok & sides",
    placeholder: true, // TODO: replace with real items + prices
    items: [
      { name: "Garlic butter fried rice", price: "15" },
      { name: "House chow mein", note: "chicken, beef or veg", price: "16" },
      { name: "Side of rare beef", price: "6" },
      { name: "Extra rice noodles", price: "4" },
    ],
  },
  {
    name: "To drink",
    note: "Bubble tea in a dozen-plus flavours. Hot jasmine tea is on the house.", // bubble tea (confirmed via review)
    placeholder: true, // TODO: confirm drink list + prices
    items: [
      { name: "Vietnamese iced coffee", note: "cà phê sữa đá", price: "6" },
      { name: "Bubble tea", price: "6.5" },
      { name: "Fresh limeade", note: "soda or still", price: "5" },
      { name: "Hot jasmine tea", price: "0", note: "complimentary with your meal" },
    ],
  },
];

export const favourites = {
  feature: {
    title: "Phở Abby",
    body: "Rare beef, brisket and pork meatball in a broth we simmer from early morning. Regulars warn you: it's too big to finish.",
    img: "pho-bowl", // asset key
  },
  small: [
    {
      title: "Grilled lemongrass pork",
      body: "Charred pork over cool vermicelli with nước chấm, fresh herbs and crushed peanuts. Or the same on broken rice with a fried egg.",
      img: "grilled-pork",
    },
    {
      title: "Salt & lime-leaf chicken",
      body: "Crisp, fragrant, gone fast. The starter people order a second plate of.",
      img: "starter-chicken",
    },
  ],
};

/** (confirmed) real customer reviews. Kept visual only — not in JSON-LD. */
export const reviews = [
  {
    quote:
      "The pho broth is exquisite, the bubble tea is refreshing and smooth, and the owner is so kind and welcoming.",
    name: "Tamara R.",
    source: "DoorDash",
  },
  {
    quote: "Rare beef pho was filling and the fried rice was crispy and flavourful.",
    name: "Shalla Guertin",
    source: "Google",
  },
  {
    quote: "Large portions, quickly served, clean, and good food.",
    name: "Google review",
    source: "Google",
  },
];

export const about: string[] = [
  // Confirmed: opened Feb 2024; family-run; Whatcom Rd; pho + grilled plates + bubble tea.
  "Pho Abby opened on Whatcom Road in February 2024 — a small family kitchen a minute off Highway 1.",
  "The broth goes on before the doors open. Alongside it: grilled lemongrass plates, fresh salad rolls, garlic fried rice, and bubble tea in more flavours than the board has room for.",
  "People pull off the highway for a quick bowl on the way through. Families take the long table by the window and stay a while.",
  // TODO: confirm the owners' story — where the family is from, who cooks, why Abbotsford — and fold in one or two honest sentences.
];

export const valueStrip = [
  "Broth simmered from early morning",
  "Portions you can't finish",
  "In and out on a lunch break",
  "Vegetarian bowls, every section",
];

/**
 * Ordering. TODO: get the verified pickup + delivery store URLs (DoorDash /
 * Uber Eats / SkipTheDishes / their own). Until then buttons resolve to phone
 * and website so nothing points at a guessed link. `verified: false` keeps the
 * preview honest.
 */
export const orderLinks = {
  pickup: { label: "Call to order pickup", href: "tel:+16043028669", verified: true },
  delivery: { label: "See delivery options", href: "https://pho-abby.ca", verified: false },
};

export const socials = [
  // (confirmed)
  { label: "Instagram", href: "https://www.instagram.com/pho_abby_abbotsford/" },
  // TODO: add Facebook URL (listed on their Google profile, URL not yet captured)
];

export const site = {
  // PITCH: set to the real preview URL before deploy; keep noindex until signed.
  url: "https://pho-abby-preview.surge.sh",
  tagline: "Vietnamese kitchen in Abbotsford",
  description:
    "Family-run Vietnamese restaurant on Whatcom Road, Abbotsford BC. Rice-noodle phở with a slow-simmered broth, grilled lemongrass plates, salad rolls and bubble tea. Open since 2024.",
  credit: { label: "Site by Destura", href: "https://destura.studio" },
};
