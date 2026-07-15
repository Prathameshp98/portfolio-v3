import { Fragment } from "react";
import { font } from "../../lib/tokens";
import { marqueePrimary, marqueeSecondary } from "../../data/marquee";

function PrimaryGroup({ hidden }: { hidden?: boolean }) {
  return (
    <span style={{ display: "flex", gap: 0 }} aria-hidden={hidden || undefined}>
      {marqueePrimary.map(({ word, color }) => (
        <Fragment key={word}>
          <span style={{ padding: "0 26px" }}>{word}</span>
          <span style={{ color, padding: "0 4px" }}>✦</span>
        </Fragment>
      ))}
    </span>
  );
}

function SecondaryGroup() {
  return (
    <span style={{ display: "flex", gap: 0 }}>
      {marqueeSecondary.map((word) => (
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
          fontFamily: font.display,
          fontWeight: 600,
          fontSize: "22px",
          color: "#FBF7EF",
        }}
      >
        <PrimaryGroup />
        <PrimaryGroup hidden />
      </div>
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          width: "max-content",
          animation: "marqueeR 22s linear infinite",
          whiteSpace: "nowrap",
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: "22px",
          color: "transparent",
          WebkitTextStroke: "1px rgba(251,247,239,.42)",
          marginTop: "10px",
        }}
      >
        <SecondaryGroup />
        <SecondaryGroup />
      </div>
    </div>
  );
}
