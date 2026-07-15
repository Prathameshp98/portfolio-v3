import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { skillGroups } from "../../data/skills";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";

const chip: CSSProperties = {
  fontFamily: font.sans,
  fontWeight: 500,
  fontSize: "15px",
  background: "var(--tint)",
  padding: "8px 14px",
  borderRadius: "9px",
  opacity: 0,
  willChange: "transform,opacity",
};
const cardBase: CSSProperties = {
  opacity: 0,
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "20px",
  padding: "30px",
  willChange: "transform,opacity",
};
const cardLabel: CSSProperties = { fontFamily: font.mono, fontSize: "12px", color: "var(--mono2)", letterSpacing: ".08em", marginBottom: "16px" };
const chipWrap: CSSProperties = { display: "flex", flexWrap: "wrap", gap: "10px" };

export default function Skills() {
  return (
    <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div data-reveal style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", marginBottom: "38px" }}>
        <Eyebrow label="( 02 — TOOLKIT )" color={color.orange} />
        <SectionTitle style={{ marginTop: "14px" }}>The stack I reach for.</SectionTitle>
      </div>
      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
        {skillGroups.map((g) => (
          <div key={g.label} data-toolkit-card data-shadow={g.shadow} style={cardBase}>
            <div style={cardLabel}>{g.label}</div>
            <div style={chipWrap}>
              {g.items.map((it) => (
                <span key={it} data-chip style={chip}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
