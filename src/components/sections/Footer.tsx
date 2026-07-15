export default function Footer() {
  return (
    <>
      {/* BIG NAME STRIP */}
      <div style={{ background: "#1A1712", overflow: "hidden", padding: "80px 0 0" }}>
        <div
          id="bigname"
          style={{
            whiteSpace: "nowrap",
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 800,
            fontSize: "clamp(56px,9vw,140px)",
            lineHeight: 0.9,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(251,247,239,.38)",
            willChange: "transform",
          }}
        >
          PRATHAMESH PATIL <span style={{ WebkitTextStroke: 0, color: "#FF5C39" }}>✦</span> PRATHAMESH PATIL{" "}
          <span style={{ WebkitTextStroke: 0, color: "#FFC53D" }}>✦</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#1A1712", color: "#8C8577", padding: "34px 32px" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'JetBrains Mono'",
            fontSize: "12.5px",
          }}
        >
          <span>
            Crafted with love — built with <span style={{ color: "#C7C0B3" }}>Next.js</span> &amp;{" "}
            <span style={{ color: "#C7C0B3" }}>TypeScript</span>, deployed on <span style={{ color: "#C7C0B3" }}>Vercel</span>.
          </span>
          <span>
            © 2026 Prathamesh Patil{" "}
            <span style={{ display: "inline-block", animation: "waveHand 2.6s ease-in-out infinite", transformOrigin: "70% 70%" }}>👋</span>
          </span>
        </div>
      </footer>
    </>
  );
}
