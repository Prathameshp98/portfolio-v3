import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { certifications, education } from "../../data/certifications";
import Eyebrow from "../ui/Eyebrow";

const certCard: CSSProperties = {
  color: "var(--ink)",
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "16px",
  padding: "22px 24px",
  display: "block",
  transition: "box-shadow .25s",
};
const eyebrowBlock: CSSProperties = { display: "block", marginBottom: "20px" };

export default function CertsEducation() {
  return (
    <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div className="certedu" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "stretch" }}>
        <div data-fx="left">
          <Eyebrow label="( 06 — CERTIFICATIONS )" color={color.orange} style={eyebrowBlock} />
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {certifications.map((c) => (
              <a key={c.href} href={c.href} target="_blank" rel="noreferrer" className={c.accentClass} style={certCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                  <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: "19px" }}>{c.title}</div>
                  <span style={{ fontFamily: font.mono, fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>{c.period}</span>
                </div>
                <div style={{ fontFamily: font.mono, fontSize: "12.5px", color: "var(--mono2)", marginBottom: "10px" }}>{c.org}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--muted)" }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
        <div data-fx="right" style={{ display: "flex", flexDirection: "column" }}>
          <Eyebrow label="( 07 — EDUCATION )" color={color.blue} style={eyebrowBlock} />
          <div
            data-fx="tilt"
            style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: "16px", padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: "24px", marginBottom: "8px" }}>{education.degree}</div>
            <div style={{ fontSize: "15px", color: "#C7C0B3", marginBottom: "6px" }}>{education.school}</div>
            <div style={{ fontFamily: font.mono, fontSize: "12.5px", color: "var(--mono2)" }}>{education.period}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
