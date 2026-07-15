import { color } from "../lib/tokens";
import type { Post } from "../types/content";

const devto = (slug: string) => `https://dev.to/prathamesh_patil_98/${slug}`;
const devImg = (id: string) =>
  `https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F${id}.png`;

export const posts: Post[] = [
  {
    href: devto("debouncing-in-js-building-better-web-apps-4g8h"),
    accentClass: "post-blue",
    img: devImg("tasmu6qagd6kp0vk9saq"),
    alt: "Debouncing in JS",
    meta: "2024 · 2 min read",
    title: "Debouncing in JS: Building Better Web Apps",
    color: color.blue,
  },
  {
    href: devto("a-complete-guide-to-accessibility-compliance-with-wcag-21-2of"),
    accentClass: "post-orange",
    img: devImg("lvjc3pe11ku04gk8x5cj"),
    alt: "WCAG 2.1 accessibility guide",
    meta: "2024 · 3 min read",
    title: "A Complete Guide to Accessibility Compliance with WCAG 2.1",
    color: color.orange,
  },
  {
    href: devto("good-frontend-dev-good-coder-2onn"),
    accentClass: "post-green",
    img: devImg("k38t86pnpymy0333ihvd"),
    alt: "Good frontend dev vs good coder",
    meta: "2024 · 2 min read",
    title: "Good Frontend Dev ≠ Good Coder",
    color: color.green,
  },
];
