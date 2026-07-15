import type { CSSProperties } from "react";
import { font } from "../../lib/tokens";

interface EyebrowProps {
  /** e.g. "( 01 — ABOUT )" */
  label: string;
  color: string;
  style?: CSSProperties;
}

/** The small mono "( NN — SECTION )" label that heads each section. */
export default function Eyebrow({ label, color, style }: EyebrowProps) {
  return (
    <span
      style={{
        fontFamily: font.mono,
        fontSize: "13px",
        color,
        fontWeight: 600,
        letterSpacing: ".04em",
        ...style,
      }}
    >
      {label}
    </span>
  );
}
