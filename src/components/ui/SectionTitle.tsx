import type { CSSProperties, ReactNode } from "react";
import { font } from "../../lib/tokens";

interface SectionTitleProps {
  children: ReactNode;
  style?: CSSProperties;
}

/** The large display heading used by every section (margins supplied by the caller). */
export default function SectionTitle({ children, style }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontFamily: font.display,
        fontWeight: 700,
        fontSize: "clamp(28px,4.2vw,48px)",
        lineHeight: 1.05,
        letterSpacing: "-.02em",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
