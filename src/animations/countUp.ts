import type { EffectContext } from "./context";

type CountEl = HTMLElement & { __raf?: number };

/** Count-up for `[data-count]` numbers; re-runs from 0 each time it re-enters view. */
export function initCountUp(ctx: EffectContext): void {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as CountEl;
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const decimals = (el.dataset.count || "").includes(".") ? 1 : 0;
        if (el.__raf) cancelAnimationFrame(el.__raf);
        const t0 = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - k, 3);
          el.textContent = (target * eased).toFixed(decimals) + (k === 1 ? suffix : "");
          if (k < 1) el.__raf = requestAnimationFrame(tick);
        };
        el.__raf = requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 },
  );

  ctx.addCleanup(() => {
    document.querySelectorAll<CountEl>("[data-count]").forEach((el) => {
      if (el.__raf) cancelAnimationFrame(el.__raf);
    });
    cio.disconnect();
  });
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));
}
