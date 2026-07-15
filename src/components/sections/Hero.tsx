export default function Hero() {
  return (
    <header
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 32px 80px",
        overflow: "hidden",
      }}
    >
      <div id="herodots" />
      <div
        id="spot"
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          width: "520px",
          height: "520px",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(44,111,246,0.16),transparent 70%)",
          pointerEvents: "none",
          filter: "blur(8px)",
          transition: "left .25s ease, top .25s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "14%",
          right: "9%",
          width: "190px",
          height: "190px",
          borderRadius: "50%",
          background: "#FFC53D",
          opacity: 0.85,
          animation: "floatA 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "16%",
          right: "22%",
          width: "120px",
          height: "120px",
          borderRadius: "32px",
          background: "#8B5CF6",
          opacity: 0.9,
          animation: "floatB 7.5s ease-in-out infinite",
          transform: "rotate(12deg)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "26%",
          left: "6%",
          width: "88px",
          height: "88px",
          background: "#12B76A",
          opacity: 0.9,
          animation: "floatC 5.5s ease-in-out infinite",
          pointerEvents: "none",
          clipPath: "polygon(50% 0,100% 100%,0 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          left: "14%",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          border: "5px solid #FF5C39",
          animation: "floatA 7s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        id="heroInner"
        style={{ position: "relative", zIndex: 2, maxWidth: "1040px", margin: "0 auto", textAlign: "center", width: "100%" }}
      >
        <div
          className="rise"
          style={{
            animationDelay: "0s",
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            background: "var(--card)",
            border: "1.5px solid var(--ink)",
            padding: "8px 16px",
            borderRadius: "100px",
            fontFamily: "'JetBrains Mono'",
            fontSize: "12.5px",
            fontWeight: 500,
            marginBottom: "34px",
            boxShadow: "3px 3px 0 var(--ink)",
          }}
        >
          <span
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: "#12B76A",
              animation: "blink 1.6s ease-in-out infinite",
            }}
          />
          Fullstack Engineer · Mumbai, India
        </div>
        <span
          style={{
            position: "absolute",
            top: "-6px",
            left: "8%",
            fontSize: "28px",
            color: "#FFC53D",
            animation: "blink 2.1s ease-in-out infinite",
            pointerEvents: "none",
          }}
        >
          ✦
        </span>
        <span
          style={{
            position: "absolute",
            top: "34%",
            right: "3%",
            fontSize: "20px",
            color: "#8B5CF6",
            animation: "blink 2.9s ease-in-out .8s infinite",
            pointerEvents: "none",
          }}
        >
          ✦
        </span>
        <h1
          id="heroName"
          style={{
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 800,
            fontSize: "clamp(52px,9.4vw,132px)",
            lineHeight: 0.96,
            letterSpacing: "-.035em",
            marginBottom: "30px",
          }}
        >
          <span className="rise" style={{ display: "block", animationDelay: ".05s" }}>
            Prathamesh
          </span>
          <span className="rise" style={{ display: "block", animationDelay: ".16s" }}>
            Patil<span style={{ color: "#FF5C39" }}>.</span>
          </span>
        </h1>
        <p
          className="rise"
          style={{
            animationDelay: ".3s",
            fontFamily: "'Bricolage Grotesque'",
            fontWeight: 600,
            fontSize: "clamp(19px,2.6vw,28px)",
            lineHeight: 1.3,
            maxWidth: "760px",
            margin: "0 auto 18px",
          }}
        >
          I engineer experiences that are <span style={{ color: "#FF5C39", fontStyle: "italic" }}>pixel-perfect</span>,{" "}
          <span style={{ color: "#2C6FF6" }}>blazing fast</span> and <span style={{ color: "#12B76A" }}>accessible</span> to all.
        </p>
        <p
          className="rise"
          style={{
            animationDelay: ".42s",
            fontSize: "clamp(15px,1.8vw,18px)",
            lineHeight: 1.6,
            maxWidth: "540px",
            margin: "0 auto 42px",
            color: "var(--muted)",
          }}
        >
          4.5+ years shipping React &amp; Next.js at the intersection of design and clean code — currently at{" "}
          <strong style={{ color: "var(--ink)" }}>HowNow</strong>.
        </p>
        <div
          className="rise"
          style={{ animationDelay: ".54s", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#work"
            data-magnetic
            className="hero-btn-primary"
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "15px 28px",
              borderRadius: "13px",
              fontWeight: 600,
              fontSize: "15.5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              transition: "transform .18s ease, background .25s",
            }}
          >
            View my work <span>↓</span>
          </a>
          <a
            href="#contact"
            data-magnetic
            className="hero-btn-secondary"
            style={{
              background: "transparent",
              color: "var(--ink)",
              padding: "15px 28px",
              borderRadius: "13px",
              fontWeight: 600,
              fontSize: "15.5px",
              border: "1.5px solid var(--ink)",
              transition: "transform .18s ease, background .2s, color .2s",
            }}
          >
            Let's talk
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'JetBrains Mono'",
          fontSize: "11px",
          color: "var(--mono2)",
          letterSpacing: ".14em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        SCROLL
        <span style={{ width: "1.5px", height: "34px", background: "linear-gradient(var(--ink),transparent)" }} />
      </div>
    </header>
  );
}
