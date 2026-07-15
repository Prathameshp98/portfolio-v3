import type { CSSProperties } from "react";

const dot = (bg: string): CSSProperties => ({
  position: "absolute",
  left: "-43px",
  top: "4px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  background: bg,
  border: "3px solid var(--bg)",
  boxShadow: "0 0 0 2px var(--ink)",
  willChange: "transform",
});
const h3: CSSProperties = { fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "23px" };
const dateLine: CSSProperties = { fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "var(--mono2)", marginBottom: "16px" };
const para: CSSProperties = { fontSize: "15.5px", lineHeight: 1.65, color: "var(--muted)", marginBottom: "16px" };
const linkChip: CSSProperties = { fontFamily: "'JetBrains Mono'", fontSize: "12px", color: "var(--ink)", background: "var(--tint)", padding: "6px 12px", borderRadius: "8px" };
const techTag: CSSProperties = { fontFamily: "'JetBrains Mono'", fontSize: "11.5px", border: "1.5px solid var(--ink)", padding: "4px 10px", borderRadius: "7px" };
const wrap: CSSProperties = { display: "flex", flexWrap: "wrap", gap: "8px" };

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: "1000px", margin: "0 auto", padding: "110px 32px 100px" }}>
      <div
        data-reveal
        style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "56px" }}
      >
        <div>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "#FF5C39", fontWeight: 600, letterSpacing: ".04em" }}>
            ( 04 — EXPERIENCE )
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "clamp(28px,4.2vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", marginTop: "14px" }}>
            Where I've worked.
          </h2>
        </div>
        <a
          href="https://drive.google.com/file/d/1u_nMdWPc4rHTH08Hi22GgUdXoja7PdCO/view"
          target="_blank"
          rel="noreferrer"
          data-magnetic
          className="resume-btn"
          style={{ background: "var(--ink)", color: "var(--bg)", padding: "12px 20px", borderRadius: "11px", fontFamily: "'JetBrains Mono'", fontSize: "13px", fontWeight: 500, transition: "transform .18s ease, background .25s" }}
        >
          ↓ View full resume
        </a>
      </div>

      <div id="xtimeline" style={{ position: "relative", paddingLeft: "34px", display: "flex", flexDirection: "column", gap: "52px" }}>
        <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: "var(--tint)" }} />
        <span id="xfill" style={{ position: "absolute", left: 0, top: 0, height: 0, width: "2px", background: "linear-gradient(180deg,#2C6FF6,#FF5C39,#8B5CF6)", willChange: "height" }} />

        {/* HowNow */}
        <div data-xrow style={{ position: "relative" }}>
          <span data-xdot style={dot("#2C6FF6")} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
            <h3 style={h3}>
              Frontend Engineer (SDE1) ·{" "}
              <a href="https://www.gethownow.com/" target="_blank" rel="noreferrer" style={{ color: "#2C6FF6" }}>
                HowNow
              </a>
            </h3>
            <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "12px", background: "#12B76A", color: "#fff", padding: "3px 10px", borderRadius: "7px" }}>
              CURRENT
            </span>
          </div>
          <div style={dateLine}>Oct 2023 — Present</div>
          <p style={para}>
            Introduced AA web accessibility (WCAG 2.0) across the entire platform. Built sleek, accessible, high-performing UI
            components and custom hooks, plus a Chrome extension so users can tap into the product more efficiently.
          </p>
          <div style={{ ...wrap, marginBottom: "14px" }}>
            <a href="https://www.gethownow.com/product/learning-experience" target="_blank" rel="noreferrer" style={linkChip}>
              ↗ HowNow Learning
            </a>
            <a href="https://chromewebstore.google.com/detail/hownow/lobcjkdmlmilmhiadfdlbapfcmbnbple" target="_blank" rel="noreferrer" style={linkChip}>
              ↗ Chrome Extension
            </a>
          </div>
          <div style={wrap}>
            {["TypeScript", "ReactJS", "NextJS", "Localization", "Accessibility"].map((t) => (
              <span key={t} style={techTag}>{t}</span>
            ))}
          </div>
        </div>

        {/* uFaber */}
        <div data-xrow style={{ position: "relative" }}>
          <span data-xdot style={dot("#FF5C39")} />
          <h3 style={{ ...h3, marginBottom: "6px" }}>
            Junior Fullstack Developer ·{" "}
            <a href="https://ufaber.com/" target="_blank" rel="noreferrer" style={{ color: "#FF5C39" }}>
              uFaber
            </a>
          </h3>
          <div style={dateLine}>May 2022 — Sept 2023</div>
          <p style={para}>
            Integrated Strapi CMS to enable webpage creation in 5–10 seconds, built a website error-detection webhook for real-time
            downtime alerts, and optimised React performance 30–40% across devices, achieving 90%+ scores.
          </p>
          <div style={{ ...wrap, marginBottom: "14px" }}>
            <a href="https://abroadninja.in/" target="_blank" rel="noreferrer" style={linkChip}>↗ Abroad Ninja</a>
            <a href="https://thefluentlife.com/" target="_blank" rel="noreferrer" style={linkChip}>↗ The Fluent Life</a>
            <a href="https://therealschool.in/" target="_blank" rel="noreferrer" style={linkChip}>↗ Real School</a>
          </div>
          <div style={wrap}>
            {["JavaScript", "TypeScript", "ReactJS", "NodeJS", "FastAPI", "Strapi", "GatsbyJS"].map((t) => (
              <span key={t} style={techTag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Accenture */}
        <div data-xrow style={{ position: "relative" }}>
          <span data-xdot style={dot("#8B5CF6")} />
          <h3 style={{ ...h3, marginBottom: "6px" }}>
            Application Development Associate ·{" "}
            <a href="https://www.accenture.com/in-en" target="_blank" rel="noreferrer" style={{ color: "#8B5CF6" }}>
              Accenture
            </a>
          </h3>
          <div style={dateLine}>Sept 2021 — Apr 2022</div>
          <p style={para}>
            Gained hands-on experience across HTML, CSS, JavaScript, React, Java and SQL. Designed database schemas in Node.js and
            authored optimised SQL queries to maximise database performance.
          </p>
          <div style={wrap}>
            {["HTML", "CSS", "JavaScript", "ReactJS", "Java", "SQL"].map((t) => (
              <span key={t} style={techTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
