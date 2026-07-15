import { Fragment } from "react";

// [word, optional color]
const words: Array<[string, string?]> = [
  ["I"], ["obsess"], ["over"], ["the"], ["details", "#FF5C39"], ["people"], ["feel"], ["but"], ["never"], ["name"],
  ["—"], ["the"], ["easing", "#2C6FF6"], ["of"], ["a"], ["transition,"], ["the"], ["rhythm", "#12B76A"], ["of"],
  ["a"], ["grid,"], ["the"], ["way"], ["an"], ["interface"], ["answers", "#8B5CF6"], ["back."],
];

export default function Manifesto() {
  return (
    <section className="sec-pad" style={{ maxWidth: "1080px", margin: "0 auto", padding: "150px 32px 30px" }}>
      <p
        id="scrubText"
        style={{
          fontFamily: "'Bricolage Grotesque'",
          fontWeight: 700,
          fontSize: "clamp(27px,4.4vw,52px)",
          lineHeight: 1.3,
          letterSpacing: "-.02em",
        }}
      >
        {words.map(([word, color], i) => (
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
