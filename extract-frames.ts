/**
 * Frame conversion script: PNG sequence → WebP frames with alpha.
 *
 * Reads PNGs from public/png-frames/ (any filenames, sorted naturally)
 * and writes alpha-preserving WebPs at two resolutions:
 * - Desktop: 1920x1080
 * - Mobile:  960x540
 *
 * Output: public/frames/desktop/0001.webp, public/frames/mobile/0001.webp ...
 *
 * Usage: bun run extract-frames
 * Requires: cwebp (brew install webp)
 */

import { $ } from "bun";
import {
  rmSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
import path from "node:path";

const SOURCE_DIR = path.resolve("public/png-frames");
const OUTPUT_DIR = path.resolve("public/frames");
const WEBP_QUALITY = 65;
const ALPHA_QUALITY = 90;
const PARALLEL_JOBS = 8;

const RESOLUTIONS = [
  { name: "desktop", width: 1920, height: 1080 },
  { name: "mobile", width: 960, height: 540 },
] as const;

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Source dir not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  try {
    await $`cwebp -version`.quiet();
  } catch {
    console.error("cwebp not installed. Run: brew install webp");
    process.exit(1);
  }

  const pngs = readdirSync(SOURCE_DIR)
    .filter((f) => f.toLowerCase().endsWith(".png"))
    .sort();

  if (pngs.length === 0) {
    console.error(`No PNG files in ${SOURCE_DIR}`);
    process.exit(1);
  }

  console.log(`Found ${pngs.length} PNG frames`);

  for (const res of RESOLUTIONS) {
    const dir = path.join(OUTPUT_DIR, res.name);
    if (existsSync(dir)) rmSync(dir, { recursive: true });
    mkdirSync(dir, { recursive: true });
  }

  for (const res of RESOLUTIONS) {
    console.log(`\nConverting → ${res.name} (${res.width}x${res.height})...`);
    const dir = path.join(OUTPUT_DIR, res.name);

    for (let i = 0; i < pngs.length; i += PARALLEL_JOBS) {
      const batch = pngs.slice(i, i + PARALLEL_JOBS);
      await Promise.all(
        batch.map(async (file, j) => {
          const inPath = path.join(SOURCE_DIR, file);
          const padded = String(i + j + 1).padStart(4, "0");
          const outPath = path.join(dir, `${padded}.webp`);
          await $`cwebp -q ${WEBP_QUALITY} -alpha_q ${ALPHA_QUALITY} -resize ${res.width} ${res.height} -mt ${inPath} -o ${outPath}`.quiet();
        }),
      );
      if ((i + batch.length) % 100 === 0 || i + batch.length === pngs.length) {
        console.log(`  ${i + batch.length}/${pngs.length}`);
      }
    }
  }

  console.log("\nDone.");
}

main();
