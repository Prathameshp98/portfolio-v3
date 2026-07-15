import type { CSSProperties } from "react";

const navLink: CSSProperties = {
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
              fontFamily: "'Bricolage Grotesque'",
              fontWeight: 800,
              fontSize: "19px",
              transform: "rotate(-6deg)",
            }}
          >
            P
          </span>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", fontWeight: 500, letterSpacing: ".02em" }}>
            prathamesh<span style={{ color: "#FF5C39" }}>.patil</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'JetBrains Mono'", fontSize: "13px" }}>
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <a href="#about" style={navLink}>about</a>
            <a href="#work" style={navLink}>work</a>
            <a href="#experience" style={navLink}>experience</a>
            <a href="#writing" style={navLink}>writing</a>
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
