import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { email, socials } from "../../data/socials";
import Eyebrow from "../ui/Eyebrow";

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
    <section id="contact" style={{ background: color.orange, color: "#1A1712", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "220px", height: "220px", borderRadius: "50%", background: color.yellow, opacity: 0.8, animation: "floatA 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-50px", left: "10%", width: "120px", height: "120px", borderRadius: "28px", background: color.purple, opacity: 0.7, transform: "rotate(18deg)", animation: "floatB 12s ease-in-out infinite" }} />
      <div data-fx="rise" style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <Eyebrow label="( 08 — CONTACT )" color="#1A1712" />
        <h2 style={{ fontFamily: font.display, fontWeight: 800, fontSize: "clamp(40px,7vw,88px)", lineHeight: 0.98, letterSpacing: "-.03em", margin: "18px 0 28px" }}>
          Let's build<br />something good.
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 44px" }}>
          Open to frontend roles and freelance projects. Drop me a line — I reply fast.
        </p>
        <a
          href={`mailto:${email}`}
          className="biglink"
          style={{ color: "#1A1712", fontFamily: font.display, fontWeight: 800, fontSize: "clamp(21px,3.6vw,44px)", letterSpacing: "-.02em", lineHeight: 1.1, wordBreak: "break-all" }}
        >
          {email}
        </a>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "34px", fontFamily: font.mono, fontSize: "14px" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              style={socialLink}
              data-magnetic
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
