import type { EffectContext } from "./context";

/** 3D pointer tilt for `[data-tilt]` cards. */
export function initTilt(ctx: EffectContext): void {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    ctx.on(el, "mouseenter", () => {
      el.style.boxShadow = "0 30px 70px rgba(0,0,0,0.45)";
      el.style.borderColor = "#FFC53D";
      el.style.transition = "box-shadow .3s, border-color .3s, transform .12s ease-out";
    });
    ctx.on(el, "mousemove", ((ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1100px) rotateX(${(-py * 3.2).toFixed(2)}deg) rotateY(${(px * 3.2).toFixed(2)}deg) translateY(-4px)`;
    }) as EventListener);
    ctx.on(el, "mouseleave", () => {
      el.style.boxShadow = "none";
      el.style.borderColor = "#3A342A";
      el.style.transition = "box-shadow .3s, border-color .3s, transform .5s cubic-bezier(.19,.8,.22,1)";
      el.style.transform = "none";
    });
  });
}
