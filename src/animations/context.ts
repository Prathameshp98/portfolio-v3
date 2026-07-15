/**
 * Shared execution context for animation modules. Centralises listener
 * registration, guarded rAF and teardown so every module stays free of
 * bookkeeping and the orchestrator can dispose everything at once (important
 * for React StrictMode's mount → unmount → mount cycle).
 */
export interface EffectContext {
  /** Add an event listener that is automatically removed on dispose. */
  on(
    target: Window | Document | HTMLElement | Element,
    type: string,
    handler: EventListenerOrEventListenerObject,
    opts?: boolean | AddEventListenerOptions,
  ): void;
  /** requestAnimationFrame that no-ops once disposed (stops recursive loops). */
  raf(fn: FrameRequestCallback): void;
  /** Register an arbitrary teardown callback. */
  addCleanup(fn: () => void): void;
  /** Whether the context is still active. */
  isAlive(): boolean;
}

export interface EffectController {
  ctx: EffectContext;
  dispose: () => void;
}

export function createEffectContext(): EffectController {
  let alive = true;
  const cleanups: Array<() => void> = [];

  const ctx: EffectContext = {
    on(target, type, handler, opts) {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    },
    raf(fn) {
      if (alive) requestAnimationFrame(fn);
    },
    addCleanup(fn) {
      cleanups.push(fn);
    },
    isAlive: () => alive,
  };

  const dispose = () => {
    alive = false;
    cleanups.forEach((fn) => fn());
  };

  return { ctx, dispose };
}

/** Convenience: current theme is dark. */
export const isDarkTheme = (): boolean => document.body.dataset.theme === "dark";

/** Trigger the registered scroll handlers (e.g. to refresh nav colours after a theme change). */
export const refreshScroll = (): void => {
  window.dispatchEvent(new Event("scroll"));
};
