import { Fragment } from "react";

const row1: Array<[string, string]> = [
  ["React", "#FF5C39"],
  ["Next.js", "#FFC53D"],
  ["TypeScript", "#12B76A"],
  ["Accessibility", "#8B5CF6"],
  ["Localization", "#2C6FF6"],
  ["Node.js", "#FF5C39"],
  ["Tailwind", "#FFC53D"],
  ["Performance", "#12B76A"],
];

const row2 = ["Clean Code", "Design Systems", "SEO", "AWS", "Testing", "AI Workflows", "Micro-interactions"];

function Row1Group({ hidden }: { hidden?: boolean }) {
  return (
    <span style={{ display: "flex", gap: 0 }} aria-hidden={hidden || undefined}>
      {row1.map(([word, color]) => (
        <Fragment key={word}>
          <span style={{ padding: "0 26px" }}>{word}</span>
          <span style={{ color, padding: "0 4px" }}>✦</span>
        </Fragment>
      ))}
    </span>
  );
}

function Row2Group() {
  return (
    <span style={{ display: "flex", gap: 0 }}>
      {row2.map((word) => (
        <Fragment key={word}>
          <span style={{ padding: "0 26px" }}>{word}</span>
          <span style={{ padding: "0 4px" }}>✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div
      id="mqband"
      style={{
        borderTop: "1.5px solid #1A1712",
        borderBottom: "1.5px solid #1A1712",
        background: "#1A1712",
        overflow: "hidden",
        padding: "16px 0",
        willChange: "transform",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 18s linear infinite",
          whiteSpace: "nowrap",
          fontFamily: "'Bricolage Grotesque'",
          fontWeight: 600,
          fontSize: "22px",
          color: "#FBF7EF",
        }}
      >
        <Row1Group />
        <Row1Group hidden />
      </div>
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          width: "max-content",
          animation: "marqueeR 22s linear infinite",
          whiteSpace: "nowrap",
          fontFamily: "'Bricolage Grotesque'",
          fontWeight: 700,
          fontSize: "22px",
          color: "transparent",
          WebkitTextStroke: "1px rgba(251,247,239,.42)",
          marginTop: "10px",
        }}
      >
        <Row2Group />
        <Row2Group />
      </div>
    </div>
  );
}
