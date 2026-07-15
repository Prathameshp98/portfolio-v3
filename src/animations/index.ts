import type { EffectContext } from "./context";
import { initTheme } from "./theme";
import { initNavigation } from "./navigation";
import { initReveal } from "./reveal";
import { initStagger } from "./stagger";
import { initMagnetic } from "./magnetic";
import { initTilt } from "./tilt";
import { initHeroName } from "./heroName";
import { initCursor } from "./cursor";
import { initScrollFx } from "./scrollFx";
import { initToolkit } from "./toolkit";
import { initScrub } from "./scrub";
import { initMarquee } from "./marquee";
import { initCountUp } from "./countUp";
import { initProjectPreview } from "./projectPreview";
import { initHeroSpotlight } from "./heroSpotlight";

/**
 * Composes every animation module against a shared context. Order matters only
 * where noted: the theme is applied before the nav reads it.
 */
export function initAnimations(ctx: EffectContext): void {
  initTheme(ctx);
  initNavigation(ctx);
  initReveal(ctx);
  initStagger(ctx);
  initMagnetic(ctx);
  initTilt(ctx);
  initHeroName();
  initCursor(ctx);
  initScrollFx(ctx);
  initToolkit(ctx);
  initScrub(ctx);
  initMarquee(ctx);
  initCountUp(ctx);
  initProjectPreview(ctx);
  initHeroSpotlight(ctx);
}
