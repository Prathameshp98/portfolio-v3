import type { EffectContext } from "./context";

/**
 * Fade/rise reveal for `[data-reveal]` elements. Re-arms on exit so it replays
 * every time the element scrolls back into view.
 */
export function initReveal(ctx: EffectContext): void {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          const delay = parseInt(el.getAttribute("data-delay") || "0", 10);
          el.style.transitionDelay = delay + "ms";
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "blur(0)";
        } else {
          el.style.transitionDelay = "0ms";
          el.style.opacity = "0";
          el.style.transform = el.dataset.revealTf || "translateY(64px)";
          if (el.dataset.revealBlur) el.style.filter = "blur(14px)";
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
  );
  ctx.addCleanup(() => io.disconnect());

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    el.dataset.revealTf = el.style.transform || "none";
    if ((el.style.transition || "").trim().startsWith("all")) {
      el.dataset.revealBlur = "1";
      el.style.filter = "blur(14px)";
    }
    io.observe(el);
  });
}
