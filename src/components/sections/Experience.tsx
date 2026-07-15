import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { experience } from "../../data/experience";
import { resumeUrl } from "../../data/socials";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";

const dotStyle = (bg: string): CSSProperties => ({
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
const roleStyle: CSSProperties = { fontFamily: font.display, fontWeight: 700, fontSize: "23px", marginBottom: "6px" };
const dateLine: CSSProperties = { fontFamily: font.mono, fontSize: "13px", color: "var(--mono2)", marginBottom: "16px" };
const para: CSSProperties = { fontSize: "15.5px", lineHeight: 1.65, color: "var(--muted)", marginBottom: "16px" };
const linkChip: CSSProperties = { fontFamily: font.mono, fontSize: "12px", color: "var(--ink)", background: "var(--tint)", padding: "6px 12px", borderRadius: "8px" };
const techTag: CSSProperties = { fontFamily: font.mono, fontSize: "11.5px", border: "1.5px solid var(--ink)", padding: "4px 10px", borderRadius: "7px" };
const wrap: CSSProperties = { display: "flex", flexWrap: "wrap", gap: "8px" };

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: "1000px", margin: "0 auto", padding: "110px 32px 100px" }}>
      <div
        data-reveal
        style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "56px" }}
      >
        <div>
          <Eyebrow label="( 04 — EXPERIENCE )" color={color.orange} />
          <SectionTitle style={{ marginTop: "14px" }}>Where I've worked.</SectionTitle>
        </div>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          data-magnetic
          className="resume-btn"
          style={{ background: "var(--ink)", color: "var(--bg)", padding: "12px 20px", borderRadius: "11px", fontFamily: font.mono, fontSize: "13px", fontWeight: 500, transition: "transform .18s ease, background .25s" }}
        >
          ↓ View full resume
        </a>
      </div>

      <div id="xtimeline" style={{ position: "relative", paddingLeft: "34px", display: "flex", flexDirection: "column", gap: "52px" }}>
        <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: "var(--tint)" }} />
        <span id="xfill" style={{ position: "absolute", left: 0, top: 0, height: 0, width: "2px", background: "linear-gradient(180deg,#2C6FF6,#FF5C39,#8B5CF6)", willChange: "height" }} />

        {experience.map((x) => {
          const heading = (
            <>
              {x.role} ·{" "}
              <a href={x.companyHref} target="_blank" rel="noreferrer" style={{ color: x.companyColor }}>
                {x.company}
              </a>
            </>
          );
          return (
          <div key={x.company} data-xrow style={{ position: "relative" }}>
            <span data-xdot style={dotStyle(x.dotColor)} />
            {x.current ? (
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                <h3 style={{ ...roleStyle, marginBottom: 0 }}>{heading}</h3>
                <span style={{ fontFamily: font.mono, fontSize: "12px", background: color.green, color: "#fff", padding: "3px 10px", borderRadius: "7px" }}>
                  CURRENT
                </span>
              </div>
            ) : (
              <h3 style={roleStyle}>{heading}</h3>
            )}
            <div style={dateLine}>{x.period}</div>
            <p style={para}>{x.summary}</p>
            {x.links ? (
              <div style={{ ...wrap, marginBottom: "14px" }}>
                {x.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" style={linkChip}>
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
            <div style={wrap}>
              {x.tags.map((t) => (
                <span key={t} style={techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
