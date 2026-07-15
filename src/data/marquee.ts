import { color } from "../lib/tokens";
import type { MarqueeItem } from "../types/content";

/** Top row: solid text with coloured star separators (scrolls left). */
export const marqueePrimary: MarqueeItem[] = [
  { word: "React", color: color.orange },
  { word: "Next.js", color: color.yellow },
  { word: "TypeScript", color: color.green },
  { word: "Accessibility", color: color.purple },
  { word: "Localization", color: color.blue },
  { word: "Node.js", color: color.orange },
  { word: "Tailwind", color: color.yellow },
  { word: "Performance", color: color.green },
];

/** Bottom row: outlined text, uncoloured stars (scrolls right). */
export const marqueeSecondary: string[] = [
  "Clean Code",
  "Design Systems",
  "SEO",
  "AWS",
  "Testing",
  "AI Workflows",
  "Micro-interactions",
];
