/**
 * Every image on the site, in one place.
 *
 * Entries with no `src` render as an on-brand styled placeholder (see
 * components/Figure.astro). To drop in a real photo, set `src` and rewrite
 * `alt` to describe that photo. Nothing else changes.
 *
 * WHAT IS REAL RIGHT NOW: three crops of ONE genuine Savanna job photo — the
 * ridge shot supplied by the client. No stock, no generated imagery: every
 * external image source is blocked from the build environment, and for a
 * roofing company a real job beats a stock roof anyway. A homeowner in Burnaby
 * recognising their own street is the whole point.
 *
 * TODO: get the remaining 19+ job photos at ORIGINAL resolution. The one in use
 * came from a 1260x2736 phone screenshot; usable area after cropping the app
 * chrome is 1260x1680, so the hero is being upscaled ~14% on desktop. It holds
 * up, but a real file would be sharper.
 *
 * ⚠ STRIP EXIF BEFORE PUBLISHING any original camera files. Phone photos of a
 * job carry GPS — publishing a past customer's home coordinates is not
 * acceptable. (Screenshots don't carry it; originals will.)
 */
export type Figure = { src?: string; alt: string; label: string; kind: "roof" | "crew" | "damage" };

/** Resolve a file in public/img against the configured base path. */
const asset = (file: string) =>
  `${import.meta.env.BASE_URL}/img/${file}`.replace(/\/{2,}/g, "/");

export const images: Record<string, Figure> = {
  hero: {
    src: asset("hero-ridge.webp"), // real Savanna job photo
    alt: "View along the ridge of a newly installed charcoal asphalt shingle roof, looking out over a Metro Vancouver neighbourhood with evergreen hillside beyond.",
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
  crew: {
    src: undefined, // TODO: the crew on a roof, harnessed — doubles as the trust/safety photo
    alt: "The Savanna Roofing crew working on a pitched roof in safety harnesses.",
    label: "On site",
    kind: "crew",
  },
  workA: {
    src: asset("roof-context.webp"), // real Savanna job photo (same roof, neighbourhood band)
    alt: "A completed residential roof replacement seen against the surrounding street and evergreen hillside.",
    label: "Residential re-roof",
    kind: "roof",
  },
  workB: {
    src: asset("shingle-detail.webp"), // real Savanna job photo (same roof, foreground crop)
    alt: "Close view of architectural asphalt shingles laid in even courses, with ridge and valley flashing.",
    label: "Shingle and flashing detail",
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
