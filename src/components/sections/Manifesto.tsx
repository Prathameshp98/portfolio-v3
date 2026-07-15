import { Fragment } from "react";
import { font } from "../../lib/tokens";
import { manifestoWords } from "../../data/manifesto";

export default function Manifesto() {
  return (
    <section className="sec-pad" style={{ maxWidth: "1080px", margin: "0 auto", padding: "150px 32px 30px" }}>
      <p
        id="scrubText"
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: "clamp(27px,4.4vw,52px)",
          lineHeight: 1.3,
          letterSpacing: "-.02em",
        }}
      >
        {manifestoWords.map(({ word, color }, i) => (
          <Fragment key={i}>
            <span className="sw" data-c={color} style={{ opacity: 0.13 }}>
              {word}
            </span>{" "}
          </Fragment>
        ))}
      </p>
    </section>
  );
}
