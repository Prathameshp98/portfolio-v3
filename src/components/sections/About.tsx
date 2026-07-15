import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { stats } from "../../data/stats";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";

const statCard: CSSProperties = {
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "18px",
  padding: "26px 22px",
  transition: "transform .25s ease, box-shadow .25s ease",
};
const statNum: CSSProperties = { fontFamily: font.display, fontWeight: 800, fontSize: "44px", lineHeight: 1 };
const statLabel: CSSProperties = { fontFamily: font.mono, fontSize: "12.5px", color: "var(--muted)", marginTop: "8px" };
const bodyP: CSSProperties = { fontSize: "17px", lineHeight: 1.7, color: "var(--muted)", marginBottom: "16px" };
const strong: CSSProperties = { color: "var(--ink)" };

export default function About() {
  return (
    <section id="about" style={{ maxWidth: "1240px", margin: "0 auto", padding: "120px 32px 100px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
        <div className="about-top" style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "56px", alignItems: "center" }}>
          <div data-fx="pop" className="about-portrait" style={{ position: "relative", width: "100%" }}>
            <div className="blob-back" style={{ position: "absolute", inset: "-10px -18px 18px 10px", background: color.orange, zIndex: 0, opacity: 0.85 }} />
            <div
              className="blob"
              style={{ position: "relative", zIndex: 1, width: "100%", aspectRatio: "1", overflow: "hidden", border: "2px solid var(--ink)", background: color.yellow }}
            >
              <img
                className="portrait-img"
                src="/assets/portrait-cartoon.png"
                alt="Prathamesh Patil"
                width={340}
                height={340}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(26,23,18,.12) 1px,transparent 1.4px)", backgroundSize: "8px 8px", mixBlendMode: "multiply", pointerEvents: "none" }}
              />
            </div>
            <span style={{ position: "absolute", top: "-26px", right: "6%", fontSize: "30px", color: color.yellow, animation: "blink 2.3s ease-in-out infinite", zIndex: 2, pointerEvents: "none" }}>✦</span>
            <span style={{ position: "absolute", bottom: "-6px", left: "-20px", fontSize: "20px", color: color.purple, animation: "blink 3.1s ease-in-out .7s infinite", zIndex: 2, pointerEvents: "none" }}>✦</span>
            <span style={{ position: "absolute", top: "12%", left: "-30px", width: "52px", height: "52px", border: "2px dashed var(--ink)", borderRadius: "50%", animation: "spinSlow 13s linear infinite", zIndex: 0, pointerEvents: "none" }} />
            <span style={{ position: "absolute", bottom: "14%", right: "-24px", width: 0, height: 0, borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: `24px solid ${color.green}`, transform: "rotate(18deg)", animation: "floatC 6s ease-in-out infinite", zIndex: 2, pointerEvents: "none" }} />
            <span style={{ position: "absolute", top: "44%", right: "-34px", width: "14px", height: "14px", borderRadius: "50%", background: color.blue, animation: "floatA 7s ease-in-out infinite", zIndex: 2, pointerEvents: "none" }} />
          </div>
          <div data-reveal data-delay="120" style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)" }}>
            <Eyebrow label="( 01 — ABOUT )" color={color.orange} />
            <SectionTitle style={{ margin: "18px 0 22px" }}>
              Where design<br />meets engineering.
            </SectionTitle>
            <p style={bodyP}>
              Back in 2018 I built a clone of a well-known company's website — a self-initiated project that unexpectedly set the
              course of my career. Since then I've shipped software across the spectrum, from a{" "}
              <strong style={strong}>multinational</strong> to a <strong style={strong}>start-up</strong>.
            </p>
            <p style={bodyP}>
              My focus today is crafting <strong style={strong}>robust</strong>, <strong style={strong}>scalable</strong> solutions
              with exceptional interfaces — thriving where great aesthetics meet clean, functional code.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)" }}>
              Away from the keyboard, you'll find me exploring new places, riding my motorcycle, at the gym, or in the pool.
            </p>
          </div>
        </div>

        <div data-stagger className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
          {stats.map((s) => (
            <div key={s.label} className="stat-card" style={statCard}>
              <div style={{ ...statNum, color: s.color }}>
                {s.count ? (
                  <span data-count={s.count} data-suffix={s.suffix}>
                    {s.display}
                  </span>
                ) : (
                  s.display
                )}
              </div>
              <div style={statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
