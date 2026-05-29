import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const distDir = path.resolve(projectRoot, "dist");

// Load .env from the project root so the same single source of truth that
// feeds Vite (envDir) also feeds this static-page injector. Shell env vars
// still take precedence.
function loadDotEnv(file) {
  if (!fsSync.existsSync(file)) return;
  const content = fsSync.readFileSync(file, "utf8");
  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv(path.join(projectRoot, ".env"));

const measurementId = process.env.VITE_GA4_MEASUREMENT_ID || "";
const debug = process.env.VITE_GA4_DEBUG || "";

const files = ["pricing.html", "refund-policy.html"];

async function inject(file) {
  const fullPath = path.join(distDir, file);
  const html = await fs.readFile(fullPath, "utf8");

  const next = html
    .replaceAll("__GA4_MEASUREMENT_ID__", measurementId)
    .replaceAll("__GA4_DEBUG__", debug);

  await fs.writeFile(fullPath, next, "utf8");
}

await Promise.all(files.map(inject));

