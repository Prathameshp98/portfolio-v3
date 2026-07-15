import type { EffectContext } from "./context";

/** Floating screenshot preview that trails the cursor over project rows (fine pointers). */
export function initProjectPreview(ctx: EffectContext): void {
  const pv = document.getElementById("projPreview");
  const pvImg = pv ? (pv.querySelector("img") as HTMLImageElement | null) : null;
  if (!pv || !window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;

  let px = 0;
  let py = 0;
  let tx = 0;
  let ty = 0;
  ctx.on(window, "mousemove", ((e: MouseEvent) => {
    tx = e.clientX;
    ty = e.clientY;
  }) as EventListener);

  const loop = () => {
    px += (tx - px) * 0.14;
    py += (ty - py) * 0.14;
    pv.style.transform = `translate(${px + 28}px, ${py - 110}px) rotate(${Math.max(-6, Math.min(6, (tx - px) * 0.05))}deg)`;
    ctx.raf(loop);
  };
  loop();

  document.querySelectorAll<HTMLElement>(".prow").forEach((row) => {
    ctx.on(row, "mouseenter", () => {
      const src = row.getAttribute("data-img");
      if (!src) {
        pv.style.opacity = "0";
        return;
      }
      if (pvImg && !pvImg.src.endsWith(src)) pvImg.src = src;
      pv.style.opacity = "1";
    });
    ctx.on(row, "mouseleave", () => {
      pv.style.opacity = "0";
    });
  });
}
