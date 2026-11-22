// bring-the-humans-03 — tiny deterministic runner.
// Reads VIDEO.json located next to this file, copies it into the
// output directory, and prints a fixed confirmation.
// The output is intentionally stable: no network calls, no clock,
// no randomness — the same input always yields the same two lines.
import { readFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const videoPath = join(here, "VIDEO.json");
const raw = readFileSync(videoPath, "utf8");
const data = JSON.parse(raw);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));

console.log(data.url);
console.log("VIDEO.json copied to output");
