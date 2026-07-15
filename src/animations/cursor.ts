import type { EffectContext } from "./context";

const PALETTE = ["#FF5C39", "#FFC53D", "#12B76A", "#2C6FF6", "#8B5CF6"];

function spawnSpark(x: number, y: number): void {
  if (document.querySelectorAll(".spark").length >= 14) return;
  const sp = document.createElement("span");
  sp.className = "spark";
  sp.textContent = "✦";
  sp.style.left = x + (Math.random() - 0.5) * 30 + "px";
  sp.style.top = y + (Math.random() - 0.5) * 30 + "px";
  sp.style.color = PALETTE[(Math.random() * PALETTE.length) | 0];
  sp.style.fontSize = 8 + Math.random() * 9 + "px";
  document.body.appendChild(sp);
  sp.addEventListener("animationend", () => sp.remove(), { once: true });
}

/** Creative cursor: spinning star dot, difference-blend ring, hover label, and sparkle trail. */
export function initCursor(ctx: EffectContext): void {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const label = document.getElementById("cursor-label");
  if (!dot || !ring || !window.matchMedia("(pointer:fine)").matches) return;

  dot.textContent = "✦";
  const state = { rx: -100, ry: -100, cx: -100, cy: -100, ang: 0, vel: 0, lastX: 0, lastY: 0, lastSpark: 0, shown: false };

  ctx.on(window, "mousemove", ((ev: MouseEvent) => {
    state.cx = ev.clientX;
    state.cy = ev.clientY;
    const dv = Math.abs(state.cx - state.lastX) + Math.abs(state.cy - state.lastY);
    state.vel = Math.min(30, state.vel + dv * 0.35);
    state.lastX = state.cx;
    state.lastY = state.cy;
    if (!state.shown) {
      state.shown = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    }
    const target = ev.target as Element;
    const overInteractive = target.closest?.("a,button,[data-magnetic]");
    ring.style.width = overInteractive ? "62px" : "36px";
    ring.style.height = overInteractive ? "62px" : "36px";
    if (label) label.style.opacity = target.closest?.(".prow,.post,.arc") ? "1" : "0";
    const now = performance.now();
    if (dv > 5 && now - state.lastSpark > 90) {
      state.lastSpark = now;
      spawnSpark(state.cx, state.cy);
    }
  }) as EventListener);

  const loop = () => {
    state.rx += (state.cx - state.rx) * 0.16;
    state.ry += (state.cy - state.ry) * 0.16;
    state.ang += 1.2 + state.vel * 0.5;
    state.vel *= 0.92;
    ring.style.left = state.rx + "px";
    ring.style.top = state.ry + "px";
    dot.style.left = state.cx + "px";
    dot.style.top = state.cy + "px";
    dot.style.transform = `translate(-50%,-50%) rotate(${state.ang.toFixed(1)}deg) scale(${(1 + state.vel * 0.02).toFixed(2)})`;
    if (label) {
      label.style.left = state.cx + "px";
      label.style.top = state.cy + "px";
    }
    ctx.raf(loop);
  };
  loop();

  ctx.on(document, "mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
    if (label) label.style.opacity = "0";
    state.shown = false;
  });
  ctx.addCleanup(() => document.querySelectorAll(".spark").forEach((s) => s.remove()));
}
