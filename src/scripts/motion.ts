/**
 * Motion orchestration.
 *
 * Deliberately small and dependency-free. CSS owns every curve and duration;
 * this file only decides *when* things happen. Three jobs:
 *
 *   1. flip [data-reveal] elements on as they enter view (one shared observer)
 *   2. drive pointer tilt (the only genuinely dynamic motion — it has to track
 *      an input that can reverse mid-gesture, which CSS can't express)
 *   3. count the stat numerals up
 *
 * The `js` class that unhides reveals is set inline in the document head, not
 * here — if it waited for this module, every reveal would paint visible and
 * then snap hidden.
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

/* -------------------------------------------------------------------------
   1. Reveals
   One observer for the whole page. Unobserve after firing: these are
   entrances, not scroll-scrubbed state, so re-running them on scroll-back
   would be noise.
------------------------------------------------------------------------- */
function initReveals() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal], .hinge");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    // Fire a little before the element is fully on screen, so the motion is
    // finishing as the reader arrives rather than starting.
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
  );

  targets.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------------
   2. Pointer tilt
   Writes two angle custom properties; the CSS transition smooths them, which
   is what makes a reversed or interrupted movement retarget from where it
   currently is instead of jumping. rAF-coalesced so a high-rate pointer
   stream can't schedule more than one write per frame.
------------------------------------------------------------------------- */
function initTilt() {
  if (!finePointer.matches || reduceMotion.matches) return;

  const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");
  if (!cards.length) return;

  for (const card of cards) {
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        const max = Number(card.dataset.tilt) || 6;
        card.style.setProperty("--tilt-y", `${(px * max).toFixed(2)}deg`);
        card.style.setProperty("--tilt-x", `${(-py * max).toFixed(2)}deg`);
      });
    };

    const onLeave = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    card.addEventListener("blur", onLeave, true);
  }
}

/* -------------------------------------------------------------------------
   3. Stat counters
   Only the figures that are actually true get to animate — see data/site.ts.
   Under reduced motion the number is simply printed.
------------------------------------------------------------------------- */
function initCounters() {
  const nums = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!nums.length) return;

  const render = (el: HTMLElement, value: number) => {
    const decimals = Number(el.dataset.decimals) || 0;
    el.textContent = value.toFixed(decimals);
  };

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    nums.forEach((el) => render(el, Number(el.dataset.count)));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);

        const target = Number(el.dataset.count);
        const duration = 1100;
        const start = performance.now();

        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // Matches the CSS --ease-out curve closely enough that the numerals
          // settle on the same beat as the panel they sit in.
          const eased = 1 - Math.pow(1 - t, 3);
          render(el, target * eased);
          if (t < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    },
    { threshold: 0.6 },
  );

  nums.forEach((el) => {
    render(el, 0);
    observer.observe(el);
  });
}

/* -------------------------------------------------------------------------
   Nav: solidify once the hero's sentinel leaves. IntersectionObserver, never
   a scroll listener.
------------------------------------------------------------------------- */
function initNav() {
  const nav = document.querySelector("[data-nav]");
  const sentinel = document.getElementById("nav-sentinel");
  if (!nav || !sentinel || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle("is-solid", !entry.isIntersecting),
    { threshold: 0 },
  );
  observer.observe(sentinel);
}

function start() {
  initReveals();
  initTilt();
  initCounters();
  initNav();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
