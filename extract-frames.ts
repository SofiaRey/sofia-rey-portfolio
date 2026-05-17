/**
 * Frame extraction script for scroll-driven video animation.
 *
 * Extracts ~280 JPEG frames from the source video at two resolutions:
 * - Desktop: 1920x1080
 * - Mobile: 960x540
 *
 * Usage: bun run extract-frames
 * Requires: ffmpeg installed on the system
 */

import { $ } from "bun";
import { rmSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const SOURCE_VIDEO = path.resolve("src/assets/video.mp4");
const OUTPUT_DIR = path.resolve("public/frames");
const TOTAL_FRAMES = 280;
const VIDEO_DURATION = 27.033; // seconds (from ffprobe)
const FPS = TOTAL_FRAMES / VIDEO_DURATION; // ~10.36 fps extraction rate

const RESOLUTIONS = [
  { name: "desktop", width: 1920, height: 1080 },
  { name: "mobile", width: 960, height: 540 },
] as const;

async function main() {
  // Verify source video exists
  if (!existsSync(SOURCE_VIDEO)) {
    console.error(`Source video not found: ${SOURCE_VIDEO}`);
    process.exit(1);
  }

  // Verify ffmpeg is available
  try {
    await $`ffmpeg -version`.quiet();
  } catch {
    console.error("ffmpeg is not installed or not in PATH");
    process.exit(1);
  }

  // Clean and recreate output directories
  if (existsSync(OUTPUT_DIR)) {
    rmSync(OUTPUT_DIR, { recursive: true });
  }

  for (const res of RESOLUTIONS) {
    const dir = path.join(OUTPUT_DIR, res.name);
    mkdirSync(dir, { recursive: true });
  }

  console.log(`Extracting ${TOTAL_FRAMES} frames from ${SOURCE_VIDEO}`);
  console.log(`Extraction rate: ${FPS.toFixed(2)} fps\n`);

  for (const res of RESOLUTIONS) {
    const outputDir = path.join(OUTPUT_DIR, res.name);
    const outputPattern = path.join(outputDir, "%04d.jpg");

    console.log(`Extracting ${res.name} (${res.width}x${res.height})...`);

    await $`ffmpeg -i ${SOURCE_VIDEO} -vf fps=${FPS},scale=${res.width}:${res.height} -frames:v ${TOTAL_FRAMES} -q:v 5 -y ${outputPattern}`.quiet();

    // Verify output
    const files = await Array.fromAsync(
      new Bun.Glob("*.jpg").scan({ cwd: outputDir })
    );
    console.log(`  → ${files.length} frames extracted to ${outputDir}`);
  }

  console.log("\nDone!");
}

main();
