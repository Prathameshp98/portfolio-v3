import { useEffect } from "react";

/**
 * Faithful port of the original Portfolio.dc.html `componentDidMount`.
 * All logic, constants and easing are preserved 1:1; the only additions are
 * React-friendly teardown (listeners removed, rAF loops stopped, observers
 * disconnected) so it behaves correctly under StrictMode double-invocation.
 */
export function usePortfolioEffects() {
  useEffect(() => {
    const root = document;
    let alive = true;
    const cleanups: Array<() => void> = [];

    const on = (
      target: Window | Document | HTMLElement | Element,
      type: string,
      handler: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions,
    ) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };
    const raf = (fn: FrameRequestCallback) => {
      if (!alive) return;
      requestAnimationFrame(fn);
    };

    // --- Nav background on scroll ---
    const nav = root.getElementById("nav");
    const prog = root.getElementById("progress");
    const heroInner = root.getElementById("heroInner");
    const isDark = () => document.body.dataset.theme === "dark";
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) {
        const s = y > 40;
        nav.style.background = s ? (isDark() ? "rgba(22,18,11,0.82)" : "rgba(251,247,239,0.82)") : "transparent";
        nav.style.boxShadow = s ? (isDark() ? "0 1px 0 rgba(244,238,225,0.12)" : "0 1px 0 rgba(26,23,18,0.10)") : "none";
        nav.style.backdropFilter = s ? "saturate(1.2) blur(12px)" : "none";
        (nav.style as any).webkitBackdropFilter = s ? "saturate(1.2) blur(12px)" : "none";
      }
      if (prog) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
      if (heroInner && y < window.innerHeight) {
        heroInner.style.transform = `translateY(${y * 0.3}px) scale(${Math.max(0.9, 1 - y / (window.innerHeight * 6))})`;
        heroInner.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
      }
    };
    on(window, "scroll", onScroll, { passive: true });
    onScroll();

    // --- Theme: init + animated circular toggle ---
    // Explicit saved choice wins; otherwise default to the OS/system color scheme.
    const schemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("pp-theme");
    const startDark = stored ? stored === "dark" : schemeMq.matches;
    if (startDark) document.body.dataset.theme = "dark";
    else delete document.body.dataset.theme;
    const tbtn = root.getElementById("themeToggle");
    const setIcon = () => {
      if (tbtn) tbtn.textContent = isDark() ? "☀" : "☾";
    };
    setIcon();
    // Follow live system changes unless the visitor has made an explicit choice.
    const onScheme = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("pp-theme")) return;
      if (e.matches) document.body.dataset.theme = "dark";
      else delete document.body.dataset.theme;
      setIcon();
      onScroll();
    };
    schemeMq.addEventListener("change", onScheme);
    cleanups.push(() => schemeMq.removeEventListener("change", onScheme));
    if (tbtn)
      on(tbtn, "click", ((ev: MouseEvent) => {
        const next = isDark() ? "light" : "dark";
        const apply = () => {
          if (next === "dark") document.body.dataset.theme = "dark";
          else delete document.body.dataset.theme;
          localStorage.setItem("pp-theme", next);
          setIcon();
          onScroll();
        };
        tbtn.style.transform = "rotate(360deg)";
        setTimeout(() => {
          tbtn.style.transition = "transform 0s";
          tbtn.style.transform = "none";
          setTimeout(() => {
            tbtn.style.transition = "transform .55s cubic-bezier(.19,.8,.22,1), background .2s";
          }, 40);
        }, 560);
        if ((document as any).startViewTransition) {
          const x = ev.clientX || window.innerWidth - 80,
            yy = ev.clientY || 40;
          const vt = (document as any).startViewTransition(apply);
          vt.ready
            .then(() => {
              const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(yy, window.innerHeight - yy));
              document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${yy}px)`, `circle(${r}px at ${x}px ${yy}px)`] },
                { duration: 650, easing: "cubic-bezier(.3,.7,.3,1)", pseudoElement: "::view-transition-new(root)" },
              );
            })
            .catch(() => {});
        } else apply();
      }) as EventListener);

    // --- Scroll reveal ---
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const d = parseInt(el.getAttribute("data-delay") || "0", 10);
            el.style.transitionDelay = d + "ms";
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.filter = "blur(0)";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    cleanups.push(() => io.disconnect());
    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if ((el.style.transition || "").trim().startsWith("all")) el.style.filter = "blur(14px)";
      io.observe(el);
    });

    // --- Staggered child reveal for tagged grids ---
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            [...(e.target.children as any)].forEach((ch: HTMLElement, i: number) => {
              ch.style.opacity = "1";
              ch.style.transform = "none";
              ch.style.filter = "blur(0)";
              setTimeout(() => {
                ch.style.transition = ch.dataset.origT || "";
              }, 750 + i * 90);
            });
            sio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    cleanups.push(() => sio.disconnect());
    root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((c) => {
      c.style.transition = "none";
      c.style.opacity = "1";
      c.style.transform = "none";
      [...(c.children as any)].forEach((ch: HTMLElement, i: number) => {
        ch.dataset.origT = ch.style.transition || "";
        ch.style.opacity = "0";
        ch.style.transform = "translateY(64px) scale(.88) rotate(2deg)";
        ch.style.filter = "blur(10px)";
        ch.style.transition = `opacity .7s cubic-bezier(.19,.8,.22,1) ${i * 110}ms, transform .7s cubic-bezier(.19,.8,.22,1) ${i * 110}ms, filter .7s ease ${i * 110}ms`;
      });
      sio.observe(c);
    });

    const fallbackTimer = setTimeout(() => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (getComputedStyle(el).opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "blur(0)";
        }
      });
      root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((c) => {
        [...(c.children as any)].forEach((ch: HTMLElement) => {
          if (getComputedStyle(ch).opacity === "0") {
            ch.style.opacity = "1";
            ch.style.transform = "none";
            ch.style.filter = "blur(0)";
          }
        });
      });
    }, 1600);
    cleanups.push(() => clearTimeout(fallbackTimer));

    // --- Magnetic buttons ---
    root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      on(el, "mousemove", ((ev: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = ev.clientX - r.left - r.width / 2;
        const y = ev.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.28}px, ${y * 0.42}px)`;
      }) as EventListener);
      on(el, "mouseleave", () => {
        el.style.transform = "translate(0,0)";
      });
    });

    // --- Project card 3D tilt on hover ---
    root.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      on(el, "mouseenter", () => {
        el.style.boxShadow = "0 30px 70px rgba(0,0,0,0.45)";
        el.style.borderColor = "#FFC53D";
        el.style.transition = "box-shadow .3s, border-color .3s, transform .12s ease-out";
      });
      on(el, "mousemove", ((ev: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - 0.5;
        const py = (ev.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1100px) rotateX(${(-py * 3.2).toFixed(2)}deg) rotateY(${(px * 3.2).toFixed(2)}deg) translateY(-4px)`;
      }) as EventListener);
      on(el, "mouseleave", () => {
        el.style.boxShadow = "none";
        el.style.borderColor = "#3A342A";
        el.style.transition = "box-shadow .3s, border-color .3s, transform .5s cubic-bezier(.19,.8,.22,1)";
        el.style.transform = "none";
      });
    });

    // --- Hero name: letter split + gradient word ---
    const hn = root.getElementById("heroName");
    if (hn) {
      const lines = [...hn.querySelectorAll<HTMLElement>(".rise")];
      if (lines[0]) {
        const txt = lines[0].textContent || "";
        lines[0].textContent = "";
        lines[0].style.animation = "none";
        lines[0].style.opacity = "1";
        [...txt].forEach((ch, i) => {
          const s = document.createElement("span");
          s.className = "hletter";
          s.textContent = ch;
          s.style.animation = `riseIn .7s cubic-bezier(.19,.8,.22,1) ${(0.05 + i * 0.045).toFixed(3)}s both`;
          s.addEventListener("animationend", () => {
            s.style.animation = "none";
          }, { once: true });
          lines[0].appendChild(s);
        });
      }
      if (lines[1]) {
        lines[1].style.backgroundImage = "linear-gradient(90deg,#FF5C39,#FFC53D,#2C6FF6,#8B5CF6,#FF5C39)";
        lines[1].style.backgroundSize = "300% 100%";
        (lines[1].style as any).webkitBackgroundClip = "text";
        lines[1].style.backgroundClip = "text";
        (lines[1].style as any).webkitTextFillColor = "transparent";
        lines[1].style.animation = "riseIn .9s cubic-bezier(.19,.8,.22,1) .2s both, gradShift 5s ease-in-out 1.3s infinite";
      }
    }

    // --- Creative cursor: spinning star + difference ring + sparkles + label ---
    const dot = root.getElementById("cursor-dot");
    const ring = root.getElementById("cursor-ring");
    const clabel = root.getElementById("cursor-label");
    if (dot && ring && window.matchMedia("(pointer:fine)").matches) {
      dot.textContent = "✦";
      const palette = ["#FF5C39", "#FFC53D", "#12B76A", "#2C6FF6", "#8B5CF6"];
      let rx = -100,
        ry = -100,
        cx = -100,
        cy = -100,
        shown = false;
      let ang = 0,
        vel = 0,
        lastX = 0,
        lastY = 0,
        lastSpark = 0;
      on(window, "mousemove", ((ev: MouseEvent) => {
        cx = ev.clientX;
        cy = ev.clientY;
        const dv = Math.abs(cx - lastX) + Math.abs(cy - lastY);
        vel = Math.min(30, vel + dv * 0.35);
        lastX = cx;
        lastY = cy;
        if (!shown) {
          shown = true;
          dot.style.opacity = "1";
          ring.style.opacity = "1";
        }
        const target = ev.target as Element;
        const t = target.closest && target.closest("a,button,[data-magnetic]");
        ring.style.width = t ? "62px" : "36px";
        ring.style.height = t ? "62px" : "36px";
        if (clabel) {
          const view = target.closest && target.closest(".prow,.post,.arc");
          clabel.style.opacity = view ? "1" : "0";
        }
        const now = performance.now();
        if (dv > 5 && now - lastSpark > 90 && document.querySelectorAll(".spark").length < 14) {
          lastSpark = now;
          const sp = document.createElement("span");
          sp.className = "spark";
          sp.textContent = "✦";
          sp.style.left = cx + (Math.random() - 0.5) * 30 + "px";
          sp.style.top = cy + (Math.random() - 0.5) * 30 + "px";
          sp.style.color = palette[(Math.random() * palette.length) | 0];
          sp.style.fontSize = 8 + Math.random() * 9 + "px";
          document.body.appendChild(sp);
          sp.addEventListener("animationend", () => sp.remove(), { once: true });
        }
      }) as EventListener);
      const loop = () => {
        rx += (cx - rx) * 0.16;
        ry += (cy - ry) * 0.16;
        ang += 1.2 + vel * 0.5;
        vel *= 0.92;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        dot.style.left = cx + "px";
        dot.style.top = cy + "px";
        dot.style.transform = `translate(-50%,-50%) rotate(${ang.toFixed(1)}deg) scale(${(1 + vel * 0.02).toFixed(2)})`;
        if (clabel) {
          clabel.style.left = cx + "px";
          clabel.style.top = cy + "px";
        }
        raf(loop);
      };
      loop();
      on(document, "mouseleave", () => {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        if (clabel) clabel.style.opacity = "0";
        shown = false;
      });
    }

    // --- Scroll-scrubbed FX (Apple-style: progress follows scroll both ways) ---
    const fxEls = [...root.querySelectorAll<HTMLElement>("[data-fx]")];
    if (fxEls.length) {
      fxEls.forEach((el) => {
        el.style.transition = "none";
        el.style.willChange = "transform,opacity";
      });
      const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
      const runFx = () => {
        const vh = window.innerHeight;
        fxEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          const t = clamp01((vh - r.top) / (vh * 0.62));
          const e = 1 - Math.pow(1 - t, 3.4);
          const kind = el.dataset.fx;
          if (kind === "pop") {
            el.style.opacity = String(e);
            el.style.transform = `scale(${(0.62 + e * 0.38 + (e > 0.85 ? Math.sin(((e - 0.85) / 0.15) * Math.PI) * 0.03 : 0)).toFixed(3)}) rotate(${((1 - e) * -9).toFixed(2)}deg)`;
          } else if (kind === "tilt") {
            el.style.opacity = String(e);
            el.style.transform = `translateY(${((1 - e) * 130).toFixed(1)}px) rotate(${((1 - e) * 6.5).toFixed(2)}deg) scale(${(0.9 + e * 0.1).toFixed(3)})`;
          } else if (kind === "rise") {
            el.style.opacity = String(e);
            el.style.transform = `translateY(${((1 - e) * 150).toFixed(1)}px) scale(${(0.86 + e * 0.14).toFixed(3)})`;
          } else if (kind === "left") {
            el.style.opacity = String(e);
            el.style.transform = `translateX(${((1 - e) * -190).toFixed(1)}px) rotate(${((1 - e) * -5).toFixed(2)}deg) scale(${(0.94 + e * 0.06).toFixed(3)})`;
          } else if (kind === "right") {
            el.style.opacity = String(e);
            el.style.transform = `translateX(${((1 - e) * 190).toFixed(1)}px) rotate(${((1 - e) * 5).toFixed(2)}deg) scale(${(0.94 + e * 0.06).toFixed(3)})`;
          }
        });
      };
      on(window, "scroll", () => requestAnimationFrame(runFx), { passive: true });
      runFx();
    }

    // --- Manifesto word scrub ---
    const scrub = root.getElementById("scrubText");
    const sws = scrub ? [...scrub.querySelectorAll<HTMLElement>(".sw")] : [];
    // --- Big name strip slide ---
    const bigname = root.getElementById("bigname");
    // --- Horizontal pinned writing (desktop) ---
    const hwrap = root.getElementById("hwrap");
    const hsticky = root.getElementById("hsticky");
    const htrack = root.getElementById("htrack");
    const wsec = root.getElementById("writing");
    // Horizontal pinned rail only makes sense when the track is meaningfully wider
    // than the viewport. With few cards it just reserves ~280vh of near-empty scroll,
    // so fall back to the clean responsive grid unless there are enough posts.
    const horiz = !!(
      hwrap &&
      htrack &&
      htrack.children.length >= 5 &&
      window.matchMedia("(min-width:1000px) and (pointer:fine)").matches
    );
    if (horiz && wsec && hwrap && hsticky && htrack) {
      wsec.style.maxWidth = "none";
      wsec.style.padding = "0";
      hwrap.style.height = "280vh";
      hsticky.style.position = "sticky";
      hsticky.style.top = "0";
      hsticky.style.height = "100vh";
      hsticky.style.overflow = "hidden";
      hsticky.style.display = "flex";
      hsticky.style.flexDirection = "column";
      hsticky.style.justifyContent = "center";
      hsticky.style.padding = "0 6vw";
      htrack.style.display = "flex";
      htrack.style.width = "max-content";
      htrack.style.gap = "28px";
      htrack.style.willChange = "transform";
      [...(htrack.children as any)].forEach((c: HTMLElement) => {
        c.style.width = "34vw";
        c.style.minWidth = "360px";
        c.style.flexShrink = "0";
      });
    }
    const clampP = (v: number) => Math.max(0, Math.min(1, v));

    // --- Experience: timeline draw + scrubbed entries ---
    const xtimeline = root.getElementById("xtimeline");
    const xfill = root.getElementById("xfill");
    const xrows = [...root.querySelectorAll<HTMLElement>("[data-xrow]")];
    xrows.forEach((r) => {
      r.style.willChange = "transform,opacity";
    });
    const posts = htrack ? [...(htrack.children as any)] as HTMLElement[] : [];
    posts.forEach((c) => {
      c.style.transition = "box-shadow .3s ease";
      c.style.willChange = "transform,opacity";
      const im = c.querySelector("img");
      if (im) (im as HTMLElement).style.transition = "none";
    });

    const runScrub = () => {
      const vh = window.innerHeight;
      if (xtimeline && xfill) {
        const r = xtimeline.getBoundingClientRect();
        const p = clampP((vh * 0.78 - r.top) / r.height);
        xfill.style.height = (p * 100).toFixed(1) + "%";
      }
      xrows.forEach((row) => {
        const r = row.getBoundingClientRect();
        const e = 1 - Math.pow(1 - clampP((vh * 0.9 - r.top) / (vh * 0.48)), 3.4);
        row.style.opacity = String(e);
        row.style.transform = `translateX(${((1 - e) * -120).toFixed(1)}px) skewX(${((1 - e) * 4).toFixed(2)}deg)`;
        const dotEl = row.querySelector("[data-xdot]") as HTMLElement | null;
        if (dotEl) {
          const back = 1 + 0.9 * Math.sin(e * Math.PI); // bigger overshoot pop
          dotEl.style.transform = e < 0.02 ? "scale(0)" : `scale(${(e >= 1 ? 1 : back * e).toFixed(2)})`;
        }
      });
      if (posts.length) {
        const cx = window.innerWidth / 2;
        posts.forEach((card) => {
          if (card.matches(":hover")) {
            card.style.opacity = "1";
            return;
          }
          const r = card.getBoundingClientRect();
          if (horiz) {
            const d = (r.left + r.width / 2 - cx) / cx; // -1..1 from center
            const a = Math.abs(d);
            card.style.opacity = String(Math.max(0.15, 1 - a * 0.75));
            card.style.transform = `perspective(1000px) translateY(${(a * 95).toFixed(1)}px) rotateY(${(d * -18).toFixed(2)}deg) rotate(${(d * 6).toFixed(2)}deg) scale(${(1 - a * 0.16).toFixed(3)})`;
            const img = card.querySelector("img") as HTMLElement | null;
            if (img) img.style.transform = `translateX(${(d * -44).toFixed(1)}px) scale(1.25)`;
          } else {
            const e = 1 - Math.pow(1 - clampP((vh * 0.92 - r.top) / (vh * 0.5)), 3.4);
            card.style.opacity = String(e);
            card.style.transform = `translateY(${((1 - e) * 120).toFixed(1)}px) rotate(${((1 - e) * 3).toFixed(2)}deg) scale(${(0.86 + e * 0.14).toFixed(3)})`;
          }
        });
      }
      if (bigname) {
        const r = bigname.getBoundingClientRect();
        const p = clampP((vh - r.top) / (vh + r.height));
        bigname.style.transform = `translateX(${(-6 - p * 22).toFixed(2)}vw)`;
      }
      if (sws.length && scrub) {
        const r = scrub.getBoundingClientRect();
        const p = clampP((vh * 0.86 - r.top) / (r.height + vh * 0.45));
        const lit = Math.floor(p * sws.length);
        sws.forEach((w, i) => {
          const isOn = i < lit;
          w.style.opacity = isOn ? "1" : ".13";
          if (w.dataset.c) w.style.color = isOn ? w.dataset.c : "inherit";
        });
      }

      if (horiz && hwrap && htrack) {
        const r = hwrap.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = clampP(-r.top / (total || 1));
        const travel = Math.max(0, htrack.scrollWidth - window.innerWidth * 0.88);
        htrack.style.transform = `translateX(${(-p * travel).toFixed(1)}px)`;
      }
    };
    on(window, "scroll", () => requestAnimationFrame(runScrub), { passive: true });
    runScrub();

    // --- Marquee velocity skew ---
    const mqband = root.getElementById("mqband");
    if (mqband) {
      let lastY = window.scrollY,
        skew = 0;
      const skewLoop = () => {
        const y = window.scrollY;
        const target = Math.max(-13, Math.min(13, (y - lastY) * 0.6));
        lastY = y;
        skew += (target - skew) * 0.1;
        mqband.style.transform = `skewX(${skew.toFixed(2)}deg)`;
        raf(skewLoop);
      };
      skewLoop();
    }

    // --- Stat count-up ---
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const targetV = parseFloat(el.dataset.count || "0");
          const suf = el.dataset.suffix || "";
          const dec = (el.dataset.count || "").includes(".") ? 1 : 0;
          const t0 = performance.now(),
            dur = 1200;
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / dur);
            const ez = 1 - Math.pow(1 - k, 3);
            el.textContent = (targetV * ez).toFixed(dec) + (k === 1 ? suf : "");
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.6 },
    );
    cleanups.push(() => cio.disconnect());
    root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));

    // --- Floating project preview (fine pointers) ---
    const pv = root.getElementById("projPreview");
    const pvImg = pv ? (pv.querySelector("img") as HTMLImageElement | null) : null;
    if (pv && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      let px = 0,
        py = 0,
        tx = 0,
        ty = 0;
      on(window, "mousemove", ((e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
      }) as EventListener);
      const lp = () => {
        px += (tx - px) * 0.14;
        py += (ty - py) * 0.14;
        pv.style.transform = `translate(${px + 28}px, ${py - 110}px) rotate(${Math.max(-6, Math.min(6, (tx - px) * 0.05))}deg)`;
        raf(lp);
      };
      lp();
      root.querySelectorAll<HTMLElement>(".prow").forEach((r) => {
        on(r, "mouseenter", () => {
          const s = r.getAttribute("data-img");
          if (!s) {
            pv.style.opacity = "0";
            return;
          }
          if (pvImg && !pvImg.src.endsWith(s)) pvImg.src = s;
          pv.style.opacity = "1";
        });
        on(r, "mouseleave", () => {
          pv.style.opacity = "0";
        });
      });
    }

    // --- Hero spotlight follows pointer ---
    const hero = root.getElementById("hero");
    const spot = root.getElementById("spot");
    if (hero && spot) {
      on(hero, "pointermove", ((ev: PointerEvent) => {
        const r = hero.getBoundingClientRect();
        spot.style.left = ev.clientX - r.left + "px";
        spot.style.top = ev.clientY - r.top + "px";
        spot.style.transform = "translate(-50%,-50%)";
      }) as EventListener);
    }

    return () => {
      alive = false;
      cleanups.forEach((fn) => fn());
      document.querySelectorAll(".spark").forEach((s) => s.remove());
    };
  }, []);
}
