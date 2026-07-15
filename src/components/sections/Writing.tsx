import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { posts } from "../../data/posts";
import { devtoUrl } from "../../data/socials";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";

const cardStyle: CSSProperties = {
  transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .3s,box-shadow .3s",
  color: "var(--ink)",
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

export default function Writing() {
  return (
    <section id="writing" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div id="hwrap">
        <div id="hsticky">
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "38px" }}
          >
            <div>
              <Eyebrow label="( 05 — WRITING )" color={color.blue} />
              <SectionTitle style={{ marginTop: "14px" }}>From the blog.</SectionTitle>
            </div>
            <a
              href={devtoUrl}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className="devto-btn"
              style={{ background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ink)", padding: "12px 20px", borderRadius: "11px", fontFamily: font.mono, fontSize: "13px", fontWeight: 500, transition: "transform .18s ease, background .2s, color .2s" }}
            >
              View all on dev.to →
            </a>
          </div>
          <div id="htrack" className="writing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {posts.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className={`post ${p.accentClass}`} data-post style={cardStyle}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--tint)", borderBottom: "1.5px solid var(--ink)" }}>
                  <img src={p.img} alt={p.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                  <div style={{ fontFamily: font.mono, fontSize: "11.5px", color: "var(--mono2)" }}>{p.meta}</div>
                  <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "20px", lineHeight: 1.15, flex: 1 }}>{p.title}</h3>
                  <span style={{ fontFamily: font.mono, fontSize: "12.5px", color: p.color }}>Read →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
