import type { CSSProperties } from "react";

const eyebrow = (color: string): CSSProperties => ({
  fontFamily: "'JetBrains Mono'",
  fontSize: "13px",
  color,
  fontWeight: 600,
  letterSpacing: ".04em",
  display: "block",
  marginBottom: "20px",
});
const certCard: CSSProperties = {
  color: "var(--ink)",
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "16px",
  padding: "22px 24px",
  display: "block",
  transition: "box-shadow .25s",
};

export default function CertsEducation() {
  return (
    <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div className="certedu" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "stretch" }}>
        <div data-fx="left">
          <span style={eyebrow("#FF5C39")}>( 06 — CERTIFICATIONS )</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <a
              href="https://drive.google.com/file/d/10gH1QgvDjtfhDP3VaS2nqxzIaIrijJJX/view"
              target="_blank"
              rel="noreferrer"
              className="cert-blue"
              style={certCard}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "19px" }}>AWS Certified Cloud Practitioner</div>
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>2025 — 2028</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "12.5px", color: "var(--mono2)", marginBottom: "10px" }}>Amazon Web Services</div>
              <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--muted)" }}>
                Foundational certification demonstrating cloud computing knowledge and AWS services understanding.
              </p>
            </a>
            <a
              href="https://drive.google.com/file/d/1YCXmsQ7quxtp2DFbyC7KOHtG_v-Juimm/view"
              target="_blank"
              rel="noreferrer"
              className="cert-orange"
              style={certCard}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "19px" }}>Frontend System Design</div>
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>Jul 2025</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "12.5px", color: "var(--mono2)", marginBottom: "10px" }}>NamasteDev.com</div>
              <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--muted)" }}>
                Covering frontend architecture, scalability, and system design principles.
              </p>
            </a>
          </div>
        </div>
        <div data-fx="right" style={{ display: "flex", flexDirection: "column" }}>
          <span style={eyebrow("#2C6FF6")}>( 07 — EDUCATION )</span>
          <div
            data-fx="tilt"
            style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: "16px", padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "24px", marginBottom: "8px" }}>Bachelor of Engineering</div>
            <div style={{ fontSize: "15px", color: "#C7C0B3", marginBottom: "6px" }}>Saraswati College of Engineering</div>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "12.5px", color: "var(--mono2)" }}>Aug 2017 — Jul 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}
