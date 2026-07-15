import { type EffectContext, isDarkTheme } from "./context";

function updateNavBackdrop(nav: HTMLElement, y: number): void {
  const scrolled = y > 40;
  const dark = isDarkTheme();
  nav.style.background = scrolled ? (dark ? "rgba(22,18,11,0.82)" : "rgba(251,247,239,0.82)") : "transparent";
  nav.style.boxShadow = scrolled ? (dark ? "0 1px 0 rgba(244,238,225,0.12)" : "0 1px 0 rgba(26,23,18,0.10)") : "none";
  const blur = scrolled ? "saturate(1.2) blur(12px)" : "none";
  nav.style.backdropFilter = blur;
  (nav.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = blur;
}

function updateProgress(prog: HTMLElement, y: number): void {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
}

function updateHeroParallax(hero: HTMLElement, y: number): void {
  if (y >= window.innerHeight) return;
  hero.style.transform = `translateY(${y * 0.3}px) scale(${Math.max(0.9, 1 - y / (window.innerHeight * 6))})`;
  hero.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
}

/** Nav backdrop on scroll, top progress bar, and hero parallax/fade. */
export function initNavigation(ctx: EffectContext): void {
  const nav = document.getElementById("nav");
  const prog = document.getElementById("progress");
  const heroInner = document.getElementById("heroInner");

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) updateNavBackdrop(nav, y);
    if (prog) updateProgress(prog, y);
    if (heroInner) updateHeroParallax(heroInner, y);
  };

  ctx.on(window, "scroll", onScroll, { passive: true });
  onScroll();
}
