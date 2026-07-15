import { color } from "../lib/tokens";

export interface Stat {
  display: string;
  /** numeric target for the count-up animation; omit for non-numeric stats */
  count?: string;
  suffix?: string;
  label: string;
  color: string;
}

export const stats: Stat[] = [
  { display: "4.5+", count: "4.5", suffix: "+", label: "years of experience", color: color.blue },
  { display: "10+", count: "10", suffix: "+", label: "products shipped to production", color: color.orange },
  { display: "40%", count: "40", suffix: "%", label: "performance gains delivered", color: color.green },
  { display: "AI-first", label: "agentic workflows, shipped daily", color: color.purple },
];
