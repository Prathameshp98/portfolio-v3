import type { EffectContext } from "./context";

type StaggerGrid = HTMLElement & { __timers?: number[] };

const staggerTransition = (i: number): string =>
  `opacity .7s cubic-bezier(.19,.8,.22,1) ${i * 110}ms, transform .7s cubic-bezier(.19,.8,.22,1) ${i * 110}ms, filter .7s ease ${i * 110}ms`;

const hideChild = (ch: HTMLElement, i: number): void => {
  ch.style.transition = staggerTransition(i);
  ch.style.opacity = "0";
  ch.style.transform = "translateY(64px) scale(.88) rotate(2deg)";
  ch.style.filter = "blur(10px)";
};

/**
 * Staggered child reveal for `[data-stagger]` grids (stat cards, archive cards).
 * Re-arms on exit and hands each child's transition back to its own once the
 * entrance finishes, keeping hover snappy.
 */
export function initStagger(ctx: EffectContext): void {
  const sio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const grid = e.target as StaggerGrid;
        (grid.__timers || []).forEach((t) => clearTimeout(t));
        grid.__timers = [];
        const kids = [...grid.children] as HTMLElement[];
        if (e.isIntersecting) {
          kids.forEach((ch, i) => {
            ch.style.transition = staggerTransition(i);
            ch.style.opacity = "1";
            ch.style.transform = "none";
            ch.style.filter = "blur(0)";
            const t = window.setTimeout(() => {
              ch.style.transition = ch.dataset.origT || "";
            }, 750 + i * 90);
            grid.__timers!.push(t);
          });
        } else {
          kids.forEach((ch, i) => hideChild(ch, i));
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );

  ctx.addCleanup(() => {
    document.querySelectorAll<StaggerGrid>("[data-stagger]").forEach((grid) => {
      (grid.__timers || []).forEach((t) => clearTimeout(t));
    });
    sio.disconnect();
  });

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((grid) => {
    grid.style.transition = "none";
    grid.style.opacity = "1";
    grid.style.transform = "none";
    [...grid.children].forEach((child, i) => {
      const ch = child as HTMLElement;
      ch.dataset.origT = ch.style.transition || "";
      hideChild(ch, i);
    });
    sio.observe(grid);
  });
}
