/**
 * Design tokens — single source of truth for the brand fonts and accent palette.
 * CSS variables (--bg, --ink, --card, --tint, --muted, --mono2) live in base.css
 * because they switch with the theme; these are the fixed brand values.
 */
export const font = {
  display: "'Bricolage Grotesque'",
  sans: "'Space Grotesk'",
  mono: "'JetBrains Mono'",
} as const;

export const color = {
  orange: "#FF5C39",
  yellow: "#FFC53D",
  green: "#12B76A",
  blue: "#2C6FF6",
  purple: "#8B5CF6",
  ink: "#1A1712",
  cream: "#FBF7EF",
} as const;

export type AccentColor = (typeof color)[keyof typeof color];
