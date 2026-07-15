import type { CSSProperties } from "react";

const chip: CSSProperties = {
  fontFamily: "'Space Grotesk'",
  fontWeight: 500,
  fontSize: "15px",
  background: "var(--tint)",
  padding: "8px 14px",
  borderRadius: "9px",
};
const cardBase: CSSProperties = {
  opacity: 0,
  transform: "translateY(64px)",
  transition: "all .85s cubic-bezier(.19,.8,.22,1)",
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "20px",
  padding: "30px",
};
const cardLabel: CSSProperties = {
  fontFamily: "'JetBrains Mono'",
  fontSize: "12px",
  color: "var(--mono2)",
  letterSpacing: ".08em",
  marginBottom: "16px",
};
const chipWrap: CSSProperties = { display: "flex", flexWrap: "wrap", gap: "10px" };

const groups = [
  { label: "LANGUAGES", shadow: "#2C6FF6", delay: undefined, items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  {
    label: "FRAMEWORKS & LIBRARIES",
    shadow: "#FF5C39",
    delay: "90",
    items: ["React", "Next.js", "Gatsby", "Tailwind CSS", "Node.js", "Express", "Jest"],
  },
  {
    label: "TOOLS & PLATFORMS",
    shadow: "#12B76A",
    delay: "180",
    items: ["AWS", "Git", "MongoDB", "Strapi", "MCP Servers", "AI Agents", "i18n", "a11y"],
  },
];

export default function Skills() {
  return (
    <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div
        data-reveal
        style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", marginBottom: "38px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "#FF5C39", fontWeight: 600, letterSpacing: ".04em" }}>
          ( 02 — TOOLKIT )
        </span>
        <h2
          style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "clamp(28px,4.2vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", marginTop: "14px" }}
        >
          The stack I reach for.
        </h2>
      </div>
      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
        {groups.map((g) => (
          <div
            key={g.label}
            data-reveal
            data-delay={g.delay}
            style={{ ...cardBase, boxShadow: `6px 6px 0 ${g.shadow}` }}
          >
            <div style={cardLabel}>{g.label}</div>
            <div style={chipWrap}>
              {g.items.map((it) => (
                <span key={it} style={chip}>
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
