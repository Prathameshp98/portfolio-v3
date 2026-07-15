import type { ArchiveItem, Project } from "../types/content";

export const projects: Project[] = [
  {
    href: "https://caratlogic.com/",
    img: "https://i.postimg.cc/8PV6jfsd/Screenshot-2026-07-04-at-1-02-27-PM.png",
    index: "01",
    title: "CaratLogic",
    alt: "CaratLogic",
    desc: "Cloud-based diamond & gem inventory ERP for wholesalers and manufacturers",
    tags: "ReactJS · Tailwind · AWS",
    year: "2026",
  },
  {
    href: "https://www.daliladiamonds.com/",
    img: "https://i.postimg.cc/HkcBd7Nc/Screenshot-2026-07-04-at-12-53-06-PM.png",
    index: "02",
    title: "Dalila Diamonds",
    alt: "Dalila Diamonds",
    desc: "Premium B2B natural-diamond supplier in Belgium — 50+ years of family expertise",
    tags: "ReactJS · NodeJS · SEO",
    year: "2025",
  },
  {
    href: "https://www.ufaber.com/",
    img: "https://i.postimg.cc/G3hLjChk/Screenshot-2024-08-24-at-10-39-31-PM.png",
    index: "03",
    title: "uFaber",
    alt: "uFaber",
    desc: "Corporate site for uFaber Edutech — home to brands like The Fluent Life and Abroad Ninja",
    tags: "ReactJS · Strapi · SEO",
    year: "2023",
  },
  {
    href: "https://thefluentlife.com/",
    img: "https://i.postimg.cc/38GSb4Wh/Screenshot-2024-08-24-at-11-04-02-PM.png",
    index: "04",
    title: "The Fluent Life",
    alt: "The Fluent Life",
    desc: "Platform for language fluency and confident social presence",
    tags: "Gatsby · GraphQL · SCSS",
    year: "2023",
    borderBottom: true,
  },
];

export const archiveItems: ArchiveItem[] = [
  { href: "https://v1.prathameshpatil.in/", accentClass: "arc-yellow", title: "Portfolio V1", year: "2022", desc: "My very first portfolio — React frontend, Node.js backend. Where it all began.", tags: "ReactJS · NodeJS · MongoDB" },
  { href: "https://abroadninja.in/", accentClass: "arc-orange", title: "Abroad Ninja", year: "2022", desc: "Match your academic profile to the perfect university & scholarship.", tags: "Gatsby · GraphQL · SCSS" },
  { href: "https://zesty-rolypoly-7fbc41.netlify.app/", accentClass: "arc-blue", title: "Weather App", year: "2022", desc: "Worldwide meteorological data with geolocation, via the OpenWeather API.", tags: "TypeScript · React · API" },
  { href: "https://blogclub-prathameshpatil2812.b4a.run/", accentClass: "arc-purple", title: "Blog Club", year: "2022", desc: "A community blogging platform — sign up and start writing in minutes.", tags: "NodeJS · MongoDB · EJS" },
  { href: "https://github.com/Prathameshp98/time-tally-chrome-extension", accentClass: "arc-green", title: "Time Tally", year: "2025", desc: "Chrome extension that computes and displays time spent on any website.", tags: "ReactJS · Chrome API" },
  { href: "https://github.com/Prathameshp98/frontend-treasure", accentClass: "arc-yellow", title: "Frontend Treasure", year: "WIP", wip: true, desc: "A curated collection of reusable frontend UI components & utilities.", tags: "React · TypeScript · NextJS" },
];
