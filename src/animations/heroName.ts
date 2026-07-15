type MutableStyle = CSSStyleDeclaration & { webkitBackgroundClip: string; webkitTextFillColor: string };

function splitIntoLetters(line: HTMLElement): void {
  const text = line.textContent || "";
  line.textContent = "";
  line.style.animation = "none";
  line.style.opacity = "1";
  [...text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "hletter";
    span.textContent = ch;
    span.style.animation = `riseIn .7s cubic-bezier(.19,.8,.22,1) ${(0.05 + i * 0.045).toFixed(3)}s both`;
    span.addEventListener("animationend", () => {
      span.style.animation = "none";
    }, { once: true });
    line.appendChild(span);
  });
}

function applyGradient(line: HTMLElement): void {
  const style = line.style as MutableStyle;
  style.backgroundImage = "linear-gradient(90deg,#FF5C39,#FFC53D,#2C6FF6,#8B5CF6,#FF5C39)";
  style.backgroundSize = "300% 100%";
  style.webkitBackgroundClip = "text";
  style.backgroundClip = "text";
  style.webkitTextFillColor = "transparent";
  style.animation = "riseIn .9s cubic-bezier(.19,.8,.22,1) .2s both, gradShift 5s ease-in-out 1.3s infinite";
}

/** Hero headline: split line 1 into individually-animating letters, gradient-animate line 2. */
export function initHeroName(): void {
  const hn = document.getElementById("heroName");
  if (!hn) return;
  const lines = [...hn.querySelectorAll<HTMLElement>(".rise")];
  if (lines[0]) splitIntoLetters(lines[0]);
  if (lines[1]) applyGradient(lines[1]);
}
