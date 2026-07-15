import type { CSSProperties } from "react";

type Post = {
  href: string;
  cls: string;
  img: string;
  alt: string;
  meta: string;
  title: string;
  color: string;
};

const posts: Post[] = [
  {
    href: "https://dev.to/prathamesh_patil_98/debouncing-in-js-building-better-web-apps-4g8h",
    cls: "post-blue",
    img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftasmu6qagd6kp0vk9saq.png",
    alt: "Debouncing in JS",
    meta: "2024 · 2 min read",
    title: "Debouncing in JS: Building Better Web Apps",
    color: "#2C6FF6",
  },
  {
    href: "https://dev.to/prathamesh_patil_98/a-complete-guide-to-accessibility-compliance-with-wcag-21-2of",
    cls: "post-orange",
    img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flvjc3pe11ku04gk8x5cj.png",
    alt: "WCAG 2.1 accessibility guide",
    meta: "2024 · 3 min read",
    title: "A Complete Guide to Accessibility Compliance with WCAG 2.1",
    color: "#FF5C39",
  },
  {
    href: "https://dev.to/prathamesh_patil_98/good-frontend-dev-good-coder-2onn",
    cls: "post-green",
    img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fk38t86pnpymy0333ihvd.png",
    alt: "Good frontend dev vs good coder",
    meta: "2024 · 2 min read",
    title: "Good Frontend Dev ≠ Good Coder",
    color: "#12B76A",
  },
];

const cardStyle: CSSProperties = {
  transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .3s,box-shadow .3s",
  color: "var(--ink)",
  background: "var(--card)",
  border: "1.5px solid var(--ink)",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

export default function Writing() {
  return (
    <section id="writing" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px 110px" }}>
      <div id="hwrap">
        <div id="hsticky">
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "38px" }}
          >
            <div>
              <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "#2C6FF6", fontWeight: 600, letterSpacing: ".04em" }}>
                ( 05 — WRITING )
              </span>
              <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "clamp(28px,4.2vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", marginTop: "14px" }}>
                From the blog.
              </h2>
            </div>
            <a
              href="https://dev.to/prathamesh_patil_98"
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className="devto-btn"
              style={{ background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ink)", padding: "12px 20px", borderRadius: "11px", fontFamily: "'JetBrains Mono'", fontSize: "13px", fontWeight: 500, transition: "transform .18s ease, background .2s, color .2s" }}
            >
              View all on dev.to →
            </a>
          </div>
          <div id="htrack" className="writing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {posts.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className={`post ${p.cls}`} data-post style={cardStyle}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--tint)", borderBottom: "1.5px solid var(--ink)" }}>
                  <img src={p.img} alt={p.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "22px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                  <div style={{ fontFamily: "'JetBrains Mono'", fontSize: "11.5px", color: "var(--mono2)" }}>{p.meta}</div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "20px", lineHeight: 1.15, flex: 1 }}>{p.title}</h3>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "12.5px", color: p.color }}>Read →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
