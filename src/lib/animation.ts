/** Small, pure animation math helpers shared across the animation modules. */

/** Clamp a value into the 0..1 range. */
export const clamp01 = (v: number): number => Math.max(0, Math.min(1, v));

/** Ease-out with a configurable power (3 = classic cubic; 3.4 is used for scrubs). */
export const easeOut = (t: number, power = 3.4): number => 1 - Math.pow(1 - t, power);

/** Linear scroll progress of an element through the viewport (0 below, 1 fully entered). */
export const enterProgress = (top: number, vh: number, span = 0.55, trigger = 0.92): number =>
  clamp01((vh * trigger - top) / (vh * span));
