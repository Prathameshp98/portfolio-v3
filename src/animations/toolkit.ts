import { clamp01, easeOut } from "../lib/animation";
import type { EffectContext } from "./context";

function armChips(card: Element, entering: boolean): void {
  card.querySelectorAll<HTMLElement>("[data-chip]").forEach((ch, i) => {
    if (entering) {
      ch.style.animation = `chipPop .55s cubic-bezier(.34,1.56,.64,1) ${(0.1 + i * 0.06).toFixed(3)}s both`;
    } else {
      ch.style.animation = "none";
      ch.style.opacity = "0";
    }
  });
}

/** Toolkit cards: scroll-scrubbed 3D unfold + growing shadow, plus staggered chip pop-in. */
export function initToolkit(ctx: EffectContext): void {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-toolkit-card]")];
  if (!cards.length) return;

  cards.forEach((c) => {
    c.style.transition = "none";
    (c.style as unknown as { transformStyle: string }).transformStyle = "preserve-3d";
    c.style.willChange = "transform,opacity,box-shadow";
  });

  const run = () => {
    const vh = window.innerHeight;
    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const e = easeOut(clamp01((vh * 0.92 - r.top) / (vh * 0.55)), 3.2);
      const dir = i % 3 === 0 ? -1 : i % 3 === 2 ? 1 : 0;
      const rotY = ((1 - e) * dir * 32).toFixed(2);
      const rotX = ((1 - e) * 9).toFixed(2);
      const ty = ((1 - e) * 88).toFixed(1);
      const sc = (0.86 + e * 0.14).toFixed(3);
      card.style.opacity = String(e);
      card.style.transform = `perspective(1200px) translateY(${ty}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${sc})`;
      const off = (e * 6).toFixed(1);
      card.style.boxShadow = `${off}px ${off}px 0 ${card.getAttribute("data-shadow") || "var(--ink)"}`;
    });
  };
  ctx.on(window, "scroll", () => requestAnimationFrame(run), { passive: true });
  run();

  const chipIo = new IntersectionObserver(
    (entries) => entries.forEach((en) => armChips(en.target, en.isIntersecting)),
    { threshold: 0.35 },
  );
  ctx.addCleanup(() => chipIo.disconnect());
  cards.forEach((c) => chipIo.observe(c));
}
