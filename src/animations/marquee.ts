import type { EffectContext } from "./context";

/** Skews the skills marquee band proportionally to scroll velocity. */
export function initMarquee(ctx: EffectContext): void {
  const band = document.getElementById("mqband");
  if (!band) return;
  let lastY = window.scrollY;
  let skew = 0;
  const loop = () => {
    const y = window.scrollY;
    const target = Math.max(-13, Math.min(13, (y - lastY) * 0.6));
    lastY = y;
    skew += (target - skew) * 0.1;
    band.style.transform = `skewX(${skew.toFixed(2)}deg)`;
    ctx.raf(loop);
  };
  loop();
}
