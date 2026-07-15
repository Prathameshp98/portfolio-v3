import type { CSSProperties } from "react";

const socialLink: CSSProperties = {
  color: "#1A1712",
  background: "#FBF7EF",
  border: "1.5px solid #1A1712",
  padding: "11px 20px",
  borderRadius: "11px",
  transition: "transform .18s",
};

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#FF5C39", color: "#1A1712", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "220px", height: "220px", borderRadius: "50%", background: "#FFC53D", opacity: 0.8, animation: "floatA 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-50px", left: "10%", width: "120px", height: "120px", borderRadius: "28px", background: "#8B5CF6", opacity: 0.7, transform: "rotate(18deg)", animation: "floatB 12s ease-in-out infinite" }} />
      <div data-fx="rise" style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", fontWeight: 600, letterSpacing: ".04em" }}>( 08 — CONTACT )</span>
        <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: "clamp(40px,7vw,88px)", lineHeight: 0.98, letterSpacing: "-.03em", margin: "18px 0 28px" }}>
          Let's build<br />something good.
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 44px" }}>
          Open to frontend roles and freelance projects. Drop me a line — I reply fast.
        </p>
        <a
          href="mailto:prathameshpatil2812@gmail.com"
          className="biglink"
          style={{ color: "#1A1712", fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: "clamp(21px,3.6vw,44px)", letterSpacing: "-.02em", lineHeight: 1.1, wordBreak: "break-all" }}
        >
          prathameshpatil2812@gmail.com
        </a>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "34px", fontFamily: "'JetBrains Mono'", fontSize: "14px" }}>
          <a href="https://github.com/Prathameshp98" target="_blank" rel="noreferrer" style={socialLink} data-magnetic>GitHub</a>
          <a href="https://www.linkedin.com/in/prathamesh-patil-988442197/" target="_blank" rel="noreferrer" style={socialLink} data-magnetic>LinkedIn</a>
          <a href="https://dev.to/prathamesh_patil_98" target="_blank" rel="noreferrer" style={socialLink} data-magnetic>dev.to</a>
          <a href="tel:+917208790420" style={socialLink} data-magnetic>+91 72087 90420</a>
        </div>
      </div>
    </section>
  );
}
