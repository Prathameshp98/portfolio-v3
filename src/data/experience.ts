import { color } from "../lib/tokens";
import type { ExperienceItem } from "../types/content";

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer (SDE1)",
    company: "HowNow",
    companyHref: "https://www.gethownow.com/",
    companyColor: color.blue,
    dotColor: color.blue,
    current: true,
    period: "Oct 2023 — Present",
    summary:
      "Introduced AA web accessibility (WCAG 2.0) across the entire platform. Built sleek, accessible, high-performing UI components and custom hooks, plus a Chrome extension so users can tap into the product more efficiently.",
    links: [
      { label: "↗ HowNow Learning", href: "https://www.gethownow.com/product/learning-experience" },
      { label: "↗ Chrome Extension", href: "https://chromewebstore.google.com/detail/hownow/lobcjkdmlmilmhiadfdlbapfcmbnbple" },
    ],
    tags: ["TypeScript", "ReactJS", "NextJS", "Localization", "Accessibility"],
  },
  {
    role: "Junior Fullstack Developer",
    company: "uFaber",
    companyHref: "https://ufaber.com/",
    companyColor: color.orange,
    dotColor: color.orange,
    period: "May 2022 — Sept 2023",
    summary:
      "Integrated Strapi CMS to enable webpage creation in 5–10 seconds, built a website error-detection webhook for real-time downtime alerts, and optimised React performance 30–40% across devices, achieving 90%+ scores.",
    links: [
      { label: "↗ Abroad Ninja", href: "https://abroadninja.in/" },
      { label: "↗ The Fluent Life", href: "https://thefluentlife.com/" },
      { label: "↗ Real School", href: "https://therealschool.in/" },
    ],
    tags: ["JavaScript", "TypeScript", "ReactJS", "NodeJS", "FastAPI", "Strapi", "GatsbyJS"],
  },
  {
    role: "Application Development Associate",
    company: "Accenture",
    companyHref: "https://www.accenture.com/in-en",
    companyColor: color.purple,
    dotColor: color.purple,
    period: "Sept 2021 — Apr 2022",
    summary:
      "Gained hands-on experience across HTML, CSS, JavaScript, React, Java and SQL. Designed database schemas in Node.js and authored optimised SQL queries to maximise database performance.",
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "Java", "SQL"],
  },
];
