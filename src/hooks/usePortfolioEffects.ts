import { useEffect } from "react";
import { createEffectContext } from "../animations/context";
import { initAnimations } from "../animations";

/**
 * Mounts all imperative scroll/pointer animations once, then tears them down on
 * unmount. Each behaviour lives in its own module under `src/animations/`; this
 * hook only owns the lifecycle (create context → init → dispose).
 */
export function usePortfolioEffects(): void {
  useEffect(() => {
    const { ctx, dispose } = createEffectContext();
    initAnimations(ctx);
    return dispose;
  }, []);
}
