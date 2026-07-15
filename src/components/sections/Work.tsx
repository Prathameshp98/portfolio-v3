import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { archiveItems, projects } from "../../data/projects";
import { githubUrl } from "../../data/socials";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";

const revealStyle: CSSProperties = { opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)" };
const parrow: CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1.5px solid #3A342A",
  display: "grid",
  placeItems: "center",
  fontSize: "17px",
  transition: "background .3s, color .3s, border-color .3s, transform .4s cubic-bezier(.19,.8,.22,1)",
};
const mono = (extra: CSSProperties): CSSProperties => ({ fontFamily: font.mono, ...extra });

export default function Work() {
  return (
    <section id="work" style={{ background: "#1A1712", color: "#FBF7EF", padding: "110px 32px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div data-reveal style={{ ...revealStyle, marginBottom: "56px" }}>
          <Eyebrow label="( 03 — SELECTED WORK )" color={color.yellow} />
          <SectionTitle style={{ marginTop: "14px" }}>Things I've shipped.</SectionTitle>
        </div>

        <div id="plist" style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p) => (
            <a
              key={p.index}
              className="prow"
              data-fx="rise"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              data-img={p.img}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto 150px",
                alignItems: "center",
                gap: "22px",
                padding: "34px 10px",
                borderTop: "1px solid #3A342A",
                ...(p.borderBottom ? { borderBottom: "1px solid #3A342A" } : {}),
                color: "#FBF7EF",
              }}
            >
              <span className="pindex" style={mono({ fontSize: "13px", color: "#8C8577", transition: "color .3s" })}>
                {p.index}
              </span>
              <div style={{ minWidth: 0 }}>
                {p.img ? (
                  <span className="mthumb" style={{ display: "none" }}>
                    <img src={p.img} alt={p.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </span>
                ) : null}
                <h3 className="ptitle" style={{ fontFamily: font.display, fontWeight: 700, fontSize: "clamp(26px,3.8vw,46px)", lineHeight: 1.05, transition: "transform .35s cubic-bezier(.19,.8,.22,1), color .3s" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.5, color: "#9A9284", marginTop: "7px", transition: "color .3s" }}>{p.desc}</p>
              </div>
              <span className="ptags" style={mono({ fontSize: "12px", color: "#8C8577", textAlign: "right", transition: "color .3s" })}>
                {p.tags}
              </span>
              <span className="pmeta" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px" }}>
                <span style={mono({ fontSize: "12px", color: "#8C8577" })}>{p.year}</span>
                <span className="parrow" style={parrow}>↗</span>
              </span>
            </a>
          ))}
        </div>

        <div
          id="projPreview"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "330px",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 90,
            opacity: 0,
            transition: "opacity .25s ease",
            border: "2px solid #FBF7EF",
            boxShadow: "0 24px 60px rgba(0,0,0,.45)",
            background: "#221E18",
          }}
        >
          <img src={projects[0].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>

        {/* ARCHIVE */}
        <div data-reveal style={{ ...revealStyle, marginTop: "64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", marginBottom: "22px" }}>
            <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "22px" }}>The archive</h3>
            <a href={githubUrl} target="_blank" rel="noreferrer" style={mono({ fontSize: "12.5px", color: color.yellow })}>
              more on GitHub →
            </a>
          </div>
          <div className="archive-grid" data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {archiveItems.map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className={`arc ${a.accentClass}`}
                style={{ color: "#FBF7EF", background: "#221E18", border: "1.5px solid #3A342A", borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", transition: "border-color .25s,transform .25s" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "17px" }}>{a.title}</span>
                  {a.wip ? (
                    <span style={mono({ fontSize: "10.5px", color: color.yellow, border: "1px solid #3A342A", padding: "2px 7px", borderRadius: "6px" })}>WIP</span>
                  ) : (
                    <span style={mono({ fontSize: "11px", color: "#8C8577" })}>{a.year}</span>
                  )}
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "#9A9284" }}>{a.desc}</p>
                <div style={mono({ display: "flex", gap: "7px", flexWrap: "wrap", fontSize: "10.5px", color: "#8C8577" })}>{a.tags}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
