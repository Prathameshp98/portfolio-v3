import { type EffectContext, isDarkTheme, refreshScroll } from "./context";

function playToggleSpin(btn: HTMLElement): void {
  btn.style.transform = "rotate(360deg)";
  setTimeout(() => {
    btn.style.transition = "transform 0s";
    btn.style.transform = "none";
    setTimeout(() => {
      btn.style.transition = "transform .55s cubic-bezier(.19,.8,.22,1), background .2s";
    }, 40);
  }, 560);
}

function playCircularReveal(ev: MouseEvent, apply: () => void): void {
  if (typeof document.startViewTransition !== "function") {
    apply();
    return;
  }
  const x = ev.clientX || window.innerWidth - 80;
  const y = ev.clientY || 40;
  const vt = document.startViewTransition(apply);
  vt.ready
    .then(() => {
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.3,.7,.3,1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
}

/** Theme init (system default, saved override), the animated toggle, and live OS-change following. */
export function initTheme(ctx: EffectContext): void {
  const schemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const stored = localStorage.getItem("pp-theme");
  const startDark = stored ? stored === "dark" : schemeMq.matches;
  if (startDark) document.body.dataset.theme = "dark";
  else delete document.body.dataset.theme;

  const btn = document.getElementById("themeToggle");
  const setIcon = () => {
    if (btn) btn.textContent = isDarkTheme() ? "☀" : "☾";
  };
  setIcon();

  // Follow live OS changes unless the visitor has made an explicit choice.
  const onScheme = (e: MediaQueryListEvent) => {
    if (localStorage.getItem("pp-theme")) return;
    if (e.matches) document.body.dataset.theme = "dark";
    else delete document.body.dataset.theme;
    setIcon();
    refreshScroll();
  };
  schemeMq.addEventListener("change", onScheme);
  ctx.addCleanup(() => schemeMq.removeEventListener("change", onScheme));

  if (!btn) return;
  ctx.on(btn, "click", ((ev: MouseEvent) => {
    const next = isDarkTheme() ? "light" : "dark";
    const apply = () => {
      if (next === "dark") document.body.dataset.theme = "dark";
      else delete document.body.dataset.theme;
      localStorage.setItem("pp-theme", next);
      setIcon();
      refreshScroll();
    };
    playToggleSpin(btn);
    playCircularReveal(ev, apply);
  }) as EventListener);
}
