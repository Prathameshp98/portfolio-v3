import { clamp01, easeOut } from "../lib/animation";
import type { EffectContext } from "./context";

/** Converts the writing section into a horizontal pinned rail when there are enough posts. */
function setupWritingRail(
  hwrap: HTMLElement | null,
  hsticky: HTMLElement | null,
  htrack: HTMLElement | null,
  wsec: HTMLElement | null,
): boolean {
  const horiz = !!(
    hwrap &&
    htrack &&
    htrack.children.length >= 5 &&
    window.matchMedia("(min-width:1000px) and (pointer:fine)").matches
  );
  if (!horiz || !wsec || !hwrap || !hsticky || !htrack) return horiz;
  wsec.style.maxWidth = "none";
  wsec.style.padding = "0";
  hwrap.style.height = "280vh";
  Object.assign(hsticky.style, {
    position: "sticky",
    top: "0",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 6vw",
  });
  Object.assign(htrack.style, { display: "flex", width: "max-content", gap: "28px", willChange: "transform" });
  [...htrack.children].forEach((c) => {
    Object.assign((c as HTMLElement).style, { width: "34vw", minWidth: "360px", flexShrink: "0" });
  });
  return horiz;
}

function scrubTimeline(xtimeline: HTMLElement | null, xfill: HTMLElement | null, xrows: HTMLElement[], vh: number): void {
  if (xtimeline && xfill) {
    const r = xtimeline.getBoundingClientRect();
    xfill.style.height = (clamp01((vh * 0.78 - r.top) / r.height) * 100).toFixed(1) + "%";
  }
  xrows.forEach((row) => {
    const r = row.getBoundingClientRect();
    const e = easeOut(clamp01((vh * 0.9 - r.top) / (vh * 0.48)));
    row.style.opacity = String(e);
    row.style.transform = `translateX(${((1 - e) * -120).toFixed(1)}px) skewX(${((1 - e) * 4).toFixed(2)}deg)`;
    const dot = row.querySelector("[data-xdot]") as HTMLElement | null;
    if (dot) {
      const back = 1 + 0.9 * Math.sin(e * Math.PI);
      dot.style.transform = e < 0.02 ? "scale(0)" : `scale(${(e >= 1 ? 1 : back * e).toFixed(2)})`;
    }
  });
}

function scrubPosts(posts: HTMLElement[], horiz: boolean, vh: number): void {
  if (!posts.length) return;
  const cx = window.innerWidth / 2;
  posts.forEach((card) => {
    if (card.matches(":hover")) {
      card.style.opacity = "1";
      return;
    }
    const r = card.getBoundingClientRect();
    if (horiz) {
      const d = (r.left + r.width / 2 - cx) / cx;
      const a = Math.abs(d);
      card.style.opacity = String(Math.max(0.15, 1 - a * 0.75));
      card.style.transform = `perspective(1000px) translateY(${(a * 95).toFixed(1)}px) rotateY(${(d * -18).toFixed(2)}deg) rotate(${(d * 6).toFixed(2)}deg) scale(${(1 - a * 0.16).toFixed(3)})`;
      const img = card.querySelector("img") as HTMLElement | null;
      if (img) img.style.transform = `translateX(${(d * -44).toFixed(1)}px) scale(1.25)`;
    } else {
      const e = easeOut(clamp01((vh * 0.92 - r.top) / (vh * 0.5)));
      card.style.opacity = String(e);
      card.style.transform = `translateY(${((1 - e) * 120).toFixed(1)}px) rotate(${((1 - e) * 3).toFixed(2)}deg) scale(${(0.86 + e * 0.14).toFixed(3)})`;
    }
  });
}

function scrubBigname(bigname: HTMLElement | null, vh: number): void {
  if (!bigname) return;
  const r = bigname.getBoundingClientRect();
  const p = clamp01((vh - r.top) / (vh + r.height));
  bigname.style.transform = `translateX(${(-6 - p * 22).toFixed(2)}vw)`;
}

function scrubManifesto(scrub: HTMLElement | null, sws: HTMLElement[], vh: number): void {
  if (!sws.length || !scrub) return;
  const r = scrub.getBoundingClientRect();
  const lit = Math.floor(clamp01((vh * 0.86 - r.top) / (r.height + vh * 0.45)) * sws.length);
  sws.forEach((w, i) => {
    const on = i < lit;
    w.style.opacity = on ? "1" : ".13";
    if (w.dataset.c) w.style.color = on ? w.dataset.c : "inherit";
  });
}

function scrubWriting(hwrap: HTMLElement | null, htrack: HTMLElement | null, horiz: boolean): void {
  if (!horiz || !hwrap || !htrack) return;
  const r = hwrap.getBoundingClientRect();
  const p = clamp01(-r.top / (r.height - window.innerHeight || 1));
  const travel = Math.max(0, htrack.scrollWidth - window.innerWidth * 0.88);
  htrack.style.transform = `translateX(${(-p * travel).toFixed(1)}px)`;
}

/** Composes every scroll-scrubbed transform behind a single rAF-batched scroll handler. */
export function initScrub(ctx: EffectContext): void {
  const scrub = document.getElementById("scrubText");
  const sws = scrub ? [...scrub.querySelectorAll<HTMLElement>(".sw")] : [];
  const bigname = document.getElementById("bigname");
  const hwrap = document.getElementById("hwrap");
  const hsticky = document.getElementById("hsticky");
  const htrack = document.getElementById("htrack");
  const wsec = document.getElementById("writing");
  const horiz = setupWritingRail(hwrap, hsticky, htrack, wsec);

  const xtimeline = document.getElementById("xtimeline");
  const xfill = document.getElementById("xfill");
  const xrows = [...document.querySelectorAll<HTMLElement>("[data-xrow]")];
  xrows.forEach((r) => (r.style.willChange = "transform,opacity"));

  const posts = htrack ? ([...htrack.children] as HTMLElement[]) : [];
  posts.forEach((c) => {
    c.style.transition = "box-shadow .3s ease";
    c.style.willChange = "transform,opacity";
    const img = c.querySelector("img");
    if (img) (img as HTMLElement).style.transition = "none";
  });

  const run = () => {
    const vh = window.innerHeight;
    scrubTimeline(xtimeline, xfill, xrows, vh);
    scrubPosts(posts, horiz, vh);
    scrubBigname(bigname, vh);
    scrubManifesto(scrub, sws, vh);
    scrubWriting(hwrap, htrack, horiz);
  };
  ctx.on(window, "scroll", () => requestAnimationFrame(run), { passive: true });
  run();
}
