import type { EffectContext } from "./context";

/** The radial spotlight in the hero follows the pointer. */
export function initHeroSpotlight(ctx: EffectContext): void {
  const hero = document.getElementById("hero");
  const spot = document.getElementById("spot");
  if (!hero || !spot) return;
  ctx.on(hero, "pointermove", ((ev: PointerEvent) => {
    const r = hero.getBoundingClientRect();
    spot.style.left = ev.clientX - r.left + "px";
    spot.style.top = ev.clientY - r.top + "px";
    spot.style.transform = "translate(-50%,-50%)";
  }) as EventListener);
}
