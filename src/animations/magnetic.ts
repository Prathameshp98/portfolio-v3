import type { EffectContext } from "./context";

/** `[data-magnetic]` buttons drift toward the cursor and spring back on leave. */
export function initMagnetic(ctx: EffectContext): void {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    ctx.on(el, "mousemove", ((ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ev.clientX - r.left - r.width / 2;
      const y = ev.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.28}px, ${y * 0.42}px)`;
    }) as EventListener);
    ctx.on(el, "mouseleave", () => {
      el.style.transform = "translate(0,0)";
    });
  });
}
