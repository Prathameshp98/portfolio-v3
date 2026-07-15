import type { CSSProperties } from "react";
import { color, font } from "../../lib/tokens";
import { navLinks } from "../../data/nav";

const linkStyle: CSSProperties = {
  color: "var(--ink)",
  padding: "8px 13px",
  borderRadius: "9px",
  transition: "background .2s",
};

export default function Nav() {
  return (
    <nav
      id="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background .35s ease, box-shadow .35s ease, backdrop-filter .35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--ink)" }}>
          <span
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "11px",
              background: "var(--ink)",
              color: "var(--bg)",
              display: "grid",
              placeItems: "center",
              fontFamily: font.display,
              fontWeight: 800,
              fontSize: "19px",
              transform: "rotate(-6deg)",
            }}
          >
            P
          </span>
          <span style={{ fontFamily: font.mono, fontSize: "13px", fontWeight: 500, letterSpacing: ".02em" }}>
            prathamesh<span style={{ color: color.orange }}>.patil</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: font.mono, fontSize: "13px" }}>
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>
          <button
            id="themeToggle"
            aria-label="Toggle theme"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              border: "1.5px solid var(--ink)",
              background: "transparent",
              color: "var(--ink)",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: 1,
              display: "grid",
              placeItems: "center",
              fontFamily: "inherit",
              transition: "transform .55s cubic-bezier(.19,.8,.22,1), background .2s",
            }}
          >
            ☾
          </button>
          <a
            href="#contact"
            data-magnetic
            className="nav-cta"
            style={{
              marginLeft: "6px",
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "10px 18px",
              borderRadius: "10px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "transform .18s ease, background .2s",
            }}
          >
            contact →
          </a>
        </div>
      </div>
    </nav>
  );
}
