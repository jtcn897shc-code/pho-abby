/**
 * Every image on the site, in one place.
 *
 * PITCH BUILD: no photos wired yet. Each entry renders as an on-brand styled
 * placeholder (see components/Figure.astro). To drop in a real photo — the
 * client's own, AI-generated, or licensed stock — set `src` to the URL/import
 * and rewrite `alt` to describe that photo. Nothing else changes.
 *
 * The client already has real photos of: the dining room, and the grilled-pork
 * plate. Those two should go in first.
 */
export type Figure = { src?: string; alt: string; label: string; kind: "food" | "room" };

export const images: Record<string, Figure> = {
  hero: {
    src: undefined, // TODO: hero — a bowl of Phở Abby, shot close, warm, steam rising
    alt: "A bowl of Vietnamese phở with rice noodles, beef and fresh herbs.",
    label: "Phở Abby",
    kind: "food",
  },
  phoBowl: {
    src: undefined, // TODO: House Phở — rare beef, brisket, meatball
    alt: "Phở broth with brisket, rare beef and spring onion.",
    label: "House phở",
    kind: "food",
  },
  grilledPork: {
    src: undefined, // TODO: use the client's real grilled-pork-and-rice photo
    alt: "Grilled lemongrass pork over rice with pickled vegetables and dipping sauce.",
    label: "Grilled lemongrass pork",
    kind: "food",
  },
  starterChicken: {
    src: undefined, // TODO: salt & lime-leaf fried chicken
    alt: "Crispy fried chicken with herbs and chilli.",
    label: "Salt & lime-leaf chicken",
    kind: "food",
  },
  interior: {
    src: undefined, // TODO: use the client's real dining-room photo
    alt: "The Pho Abby dining room — wooden tables by a large street-facing window.",
    label: "The dining room",
    kind: "room",
  },
  herbs: {
    src: undefined, // TODO: the herb plate that comes with the phở
    alt: "Thai basil, bean sprouts, lime and chilli served alongside phở.",
    label: "The herb plate",
    kind: "food",
  },
  saladRolls: {
    src: undefined, // TODO: fresh salad rolls
    alt: "Fresh Vietnamese salad rolls, halved, with dipping sauce.",
    label: "Fresh salad rolls",
    kind: "food",
  },
};

export type ImageKey = keyof typeof images;
