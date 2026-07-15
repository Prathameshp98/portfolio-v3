/**
 * Fixed-position overlay elements driven imperatively by the animation modules:
 * the top scroll-progress bar and the custom cursor (star dot, difference ring, label).
 */
export default function Overlays() {
  return (
    <>
      <div id="progress" />
      <div id="cursor-dot" style={{ opacity: 0 }} />
      <div id="cursor-ring" style={{ opacity: 0 }} />
      <div id="cursor-label">VIEW</div>
    </>
  );
}
