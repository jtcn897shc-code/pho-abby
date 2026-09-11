/**
 * Every image on the site, in one place.
 *
 * TEMPLATE BUILD: no photos wired yet. Each entry renders as an on-brand styled
 * placeholder (see components/Figure.astro). To drop in a real photo, set `src`
 * to the URL/import and rewrite `alt` to describe that photo. Nothing else
 * changes.
 *
 * Savanna already has 19+ real job photos on their Facebook page — those should
 * go in first, at full resolution. Real work beats generated imagery here: a
 * homeowner in Burnaby recognising their own street is the whole point.
 *
 * TODO: get original-resolution files. The screenshots sent so far are 1260x2736
 * with app chrome top and bottom; the usable photo area is roughly 1260x1745,
 * which is too short for a full-bleed hero.
 */
export type Figure = { src?: string; alt: string; label: string; kind: "roof" | "crew" | "damage" };

export const images: Record<string, Figure> = {
  hero: {
    src: undefined, // TODO: the drone/ridge shot — looking down a finished roof, neighbourhood behind
    alt: "Aerial view along the ridge of a newly installed charcoal asphalt shingle roof, with a Metro Vancouver neighbourhood and evergreens beyond.",
    label: "Finished re-roof",
    kind: "roof",
  },
  leakResponse: {
    src: undefined, // TODO: a wet-weather job — tarping, or a roof mid-rain
    alt: "A roof being tarped in wet weather to contain an active leak.",
    label: "Emergency containment",
    kind: "damage",
  },
  inspection: {
    src: undefined, // TODO: close-up of a failed detail — flashing, valley, penetration
    alt: "Close inspection of failed flashing where a roof leak begins.",
    label: "Leak detection",
    kind: "damage",
  },
  flatRoof: {
    src: undefined, // TODO: a flat/low-slope membrane roof, ideally commercial
    alt: "A low-slope torch-on membrane roof with clean seams and drains.",
    label: "Flat roof system",
    kind: "roof",
  },
  shingle: {
    src: undefined, // TODO: shingle detail — ridge cap, or mid-install course lines
    alt: "Architectural asphalt shingles laid in even courses with a clean ridge cap.",
    label: "Asphalt shingle",
    kind: "roof",
  },
  crew: {
    src: undefined, // TODO: the crew on a roof, harnessed — doubles as the trust/safety photo
    alt: "The Savanna Roofing crew working on a pitched roof in safety harnesses.",
    label: "On site",
    kind: "crew",
  },
  workA: {
    src: undefined, // TODO: gallery — completed residential re-roof
    alt: "A completed residential roof replacement.",
    label: "Residential re-roof",
    kind: "roof",
  },
  workB: {
    src: undefined, // TODO: gallery — flat roof repair, before/after if possible
    alt: "A repaired flat roof section with new membrane around a drain.",
    label: "Flat roof repair",
    kind: "roof",
  },
  workC: {
    src: undefined, // TODO: gallery — detail work: valley, skylight or chimney saddle
    alt: "New valley flashing installed between two roof planes.",
    label: "Valley flashing",
    kind: "damage",
  },
};

export type ImageKey = keyof typeof images;
