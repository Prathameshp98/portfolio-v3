import { color } from "../lib/tokens";
import type { SkillGroup } from "../types/content";

export const skillGroups: SkillGroup[] = [
  { label: "LANGUAGES", shadow: color.blue, items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  {
    label: "FRAMEWORKS & LIBRARIES",
    shadow: color.orange,
    items: ["React", "Next.js", "Gatsby", "Tailwind CSS", "Node.js", "Express", "Jest"],
  },
  {
    label: "TOOLS & PLATFORMS",
    shadow: color.green,
    items: ["AWS", "Git", "MongoDB", "Strapi", "MCP Servers", "AI Agents", "i18n", "a11y"],
  },
];
