// @ts-check
import { defineConfig } from "astro/config";

// PITCH / PREVIEW on GitHub Pages (project site → needs `base`).
// At launch (Phase 11): set `site` to the real domain, delete `base`, and
// remove the noindex meta in Base.astro. Static output; no adapter needed.
export default defineConfig({
  site: "https://jtcn897shc-code.github.io",
  base: "/pho-abby",
});
