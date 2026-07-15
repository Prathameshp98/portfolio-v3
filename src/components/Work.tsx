import type { CSSProperties } from "react";

type Project = {
  href: string;
  img: string;
  index: string;
  title: string;
  alt: string;
  desc: string;
  tags: string;
  year: string;
  borderBottom?: boolean;
};

const projects: Project[] = [
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

type Archive = {
  href: string;
  cls: string;
  title: string;
  year: string;
  wip?: boolean;
  desc: string;
  tags: string;
};

const archive: Archive[] = [
  { href: "https://v1.prathameshpatil.in/", cls: "arc-yellow", title: "Portfolio V1", year: "2022", desc: "My very first portfolio — React frontend, Node.js backend. Where it all began.", tags: "ReactJS · NodeJS · MongoDB" },
  { href: "https://abroadninja.in/", cls: "arc-orange", title: "Abroad Ninja", year: "2022", desc: "Match your academic profile to the perfect university & scholarship.", tags: "Gatsby · GraphQL · SCSS" },
  { href: "https://zesty-rolypoly-7fbc41.netlify.app/", cls: "arc-blue", title: "Weather App", year: "2022", desc: "Worldwide meteorological data with geolocation, via the OpenWeather API.", tags: "TypeScript · React · API" },
  { href: "https://blogclub-prathameshpatil2812.b4a.run/", cls: "arc-purple", title: "Blog Club", year: "2022", desc: "A community blogging platform — sign up and start writing in minutes.", tags: "NodeJS · MongoDB · EJS" },
  { href: "https://github.com/Prathameshp98/time-tally-chrome-extension", cls: "arc-green", title: "Time Tally", year: "2025", desc: "Chrome extension that computes and displays time spent on any website.", tags: "ReactJS · Chrome API" },
  { href: "https://github.com/Prathameshp98/frontend-treasure", cls: "arc-yellow", title: "Frontend Treasure", year: "WIP", wip: true, desc: "A curated collection of reusable frontend UI components & utilities.", tags: "React · TypeScript · NextJS" },
];

const revealStyle: CSSProperties = { opacity: 0, transform: "translateY(64px)", transition: "all .85s cubic-bezier(.19,.8,.22,1)" };
const parrow: CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1.5px solid #3A342A",
  display: "grid",
  placeItems: "center",
  fontSize: "17px",
  transition: "background .3s, color .3s, border-color .3s, transform .4s cubic-bezier(.19,.8,.22,1)",
};

export default function Work() {
  return (
    <section id="work" style={{ background: "#1A1712", color: "#FBF7EF", padding: "110px 32px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div data-reveal style={{ ...revealStyle, marginBottom: "56px" }}>
          <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "#FFC53D", fontWeight: 600, letterSpacing: ".04em" }}>
            ( 03 — SELECTED WORK )
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "clamp(28px,4.2vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", marginTop: "14px" }}>
            Things I've shipped.
          </h2>
        </div>

        <div id="plist" style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p) => (
            <a
              key={p.index}
              className="prow"
              data-fx="rise"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              data-img={p.img}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto 150px",
                alignItems: "center",
                gap: "22px",
                padding: "34px 10px",
                borderTop: "1px solid #3A342A",
                ...(p.borderBottom ? { borderBottom: "1px solid #3A342A" } : {}),
                color: "#FBF7EF",
              }}
            >
              <span className="pindex" style={{ fontFamily: "'JetBrains Mono'", fontSize: "13px", color: "#8C8577", transition: "color .3s" }}>
                {p.index}
              </span>
              <div style={{ minWidth: 0 }}>
                {p.img ? (
                  <span className="mthumb" style={{ display: "none" }}>
                    <img src={p.img} alt={p.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </span>
                ) : null}
                <h3 className="ptitle" style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "clamp(26px,3.8vw,46px)", lineHeight: 1.05, transition: "transform .35s cubic-bezier(.19,.8,.22,1), color .3s" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.5, color: "#9A9284", marginTop: "7px", transition: "color .3s" }}>{p.desc}</p>
              </div>
              <span className="ptags" style={{ fontFamily: "'JetBrains Mono'", fontSize: "12px", color: "#8C8577", textAlign: "right", transition: "color .3s" }}>
                {p.tags}
              </span>
              <span className="pmeta" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px" }}>
                <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "12px", color: "#8C8577" }}>{p.year}</span>
                <span className="parrow" style={parrow}>↗</span>
              </span>
            </a>
          ))}
        </div>

        <div
          id="projPreview"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "330px",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 90,
            opacity: 0,
            transition: "opacity .25s ease",
            border: "2px solid #FBF7EF",
            boxShadow: "0 24px 60px rgba(0,0,0,.45)",
            background: "#221E18",
          }}
        >
          <img
            src="https://i.postimg.cc/8PV6jfsd/Screenshot-2026-07-04-at-1-02-27-PM.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        {/* ARCHIVE */}
        <div data-reveal style={{ ...revealStyle, marginTop: "64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", marginBottom: "22px" }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "22px" }}>The archive</h3>
            <a href="https://github.com/Prathameshp98" target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono'", fontSize: "12.5px", color: "#FFC53D" }}>
              more on GitHub →
            </a>
          </div>
          <div className="archive-grid" data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
            {archive.map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className={`arc ${a.cls}`}
                style={{ color: "#FBF7EF", background: "#221E18", border: "1.5px solid #3A342A", borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", transition: "border-color .25s,transform .25s" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: "17px" }}>{a.title}</span>
                  {a.wip ? (
                    <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "10.5px", color: "#FFC53D", border: "1px solid #3A342A", padding: "2px 7px", borderRadius: "6px" }}>WIP</span>
                  ) : (
                    <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", color: "#8C8577" }}>{a.year}</span>
                  )}
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "#9A9284" }}>{a.desc}</p>
                <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", fontFamily: "'JetBrains Mono'", fontSize: "10.5px", color: "#8C8577" }}>{a.tags}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
