// @ts-check
import { defineConfig } from "astro/config";

// PITCH / PREVIEW. Update `site` to the real domain at launch (Phase 11) and
// remove the noindex meta in Base.astro. Static output; no adapter needed.
export default defineConfig({
  site: "https://pho-abby-preview.surge.sh",
});
