import { clamp01, easeOut } from "../lib/animation";
import type { EffectContext } from "./context";

type FxTransform = (e: number) => string;

/** Per-kind transform for `[data-fx]` elements, keyed by the attribute value. */
const transforms: Record<string, FxTransform> = {
  pop: (e) =>
    `scale(${(0.62 + e * 0.38 + (e > 0.85 ? Math.sin(((e - 0.85) / 0.15) * Math.PI) * 0.03 : 0)).toFixed(3)}) rotate(${((1 - e) * -9).toFixed(2)}deg)`,
  tilt: (e) => `translateY(${((1 - e) * 130).toFixed(1)}px) rotate(${((1 - e) * 6.5).toFixed(2)}deg) scale(${(0.9 + e * 0.1).toFixed(3)})`,
  rise: (e) => `translateY(${((1 - e) * 150).toFixed(1)}px) scale(${(0.86 + e * 0.14).toFixed(3)})`,
  left: (e) => `translateX(${((1 - e) * -190).toFixed(1)}px) rotate(${((1 - e) * -5).toFixed(2)}deg) scale(${(0.94 + e * 0.06).toFixed(3)})`,
  right: (e) => `translateX(${((1 - e) * 190).toFixed(1)}px) rotate(${((1 - e) * 5).toFixed(2)}deg) scale(${(0.94 + e * 0.06).toFixed(3)})`,
};

/** Scroll-scrubbed entrance transforms for `[data-fx]` elements (reversible). */
export function initScrollFx(ctx: EffectContext): void {
  const els = [...document.querySelectorAll<HTMLElement>("[data-fx]")];
  if (!els.length) return;
  els.forEach((el) => {
    el.style.transition = "none";
    el.style.willChange = "transform,opacity";
  });

  const run = () => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const fn = transforms[el.dataset.fx || ""];
      if (!fn) return;
      const r = el.getBoundingClientRect();
      const e = easeOut(clamp01((vh - r.top) / (vh * 0.62)));
      el.style.opacity = String(e);
      el.style.transform = fn(e);
    });
  };
  ctx.on(window, "scroll", () => requestAnimationFrame(run), { passive: true });
  run();
}
