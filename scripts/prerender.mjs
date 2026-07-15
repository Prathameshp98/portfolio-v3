// Static prerender (SSG): renders <App/> to HTML and injects it into the built
// dist/index.html so crawlers and first paint get the full markup. The client
// then hydrates the same tree.
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const indexPath = resolve(projectRoot, "dist/index.html");
const serverEntry = resolve(projectRoot, "dist-server/entry-server.js");

if (!existsSync(indexPath)) {
  console.error("[prerender] dist/index.html not found — run `vite build` first.");
  process.exit(1);
}
if (!existsSync(serverEntry)) {
  console.error("[prerender] dist-server/entry-server.js not found — run the SSR build first.");
  process.exit(1);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

let html = readFileSync(indexPath, "utf-8");

if (!html.includes('<div id="root"></div>')) {
  console.error('[prerender] Could not find empty <div id="root"></div> in dist/index.html');
  process.exit(1);
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, html, "utf-8");

// Clean up the transient server bundle.
rmSync(resolve(projectRoot, "dist-server"), { recursive: true, force: true });

console.log("[prerender] Injected prerendered HTML into dist/index.html ✓");
