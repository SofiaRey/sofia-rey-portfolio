/**
 * Frame extraction script for scroll-driven video animation.
 *
 * Extracts frames from the source video at two resolutions, then converts to WebP:
 * - Desktop: 1920x1080
 * - Mobile: 960x540
 *
 * Usage: bun run extract-frames
 * Requires: ffmpeg and cwebp installed on the system
 */

import { $ } from "bun";
import { rmSync, mkdirSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import path from "node:path";

const SOURCE_VIDEO = path.resolve("src/assets/video.mp4");
const OUTPUT_DIR = path.resolve("public/frames");
const TOTAL_FRAMES = 378;
const VIDEO_DURATION = 27.033; // seconds (from ffprobe)
const FPS = TOTAL_FRAMES / VIDEO_DURATION; // ~13.98 fps extraction rate
const WEBP_QUALITY = 65; // good balance for video frames

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

  // Verify cwebp is available
  try {
    await $`cwebp -version`.quiet();
  } catch {
    console.error("cwebp is not installed or not in PATH. Install with: brew install webp");
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
  console.log(`Extraction rate: ${FPS.toFixed(2)} fps`);
  console.log(`WebP quality: ${WEBP_QUALITY}\n`);

  for (const res of RESOLUTIONS) {
    const outputDir = path.join(OUTPUT_DIR, res.name);
    const outputPattern = path.join(outputDir, "%04d.jpg");

    console.log(`Extracting ${res.name} (${res.width}x${res.height})...`);

    // Extract as JPEG first (ffmpeg lacks webp encoder on most installs)
    await $`ffmpeg -i ${SOURCE_VIDEO} -vf fps=${FPS},scale=${res.width}:${res.height} -frames:v ${TOTAL_FRAMES} -q:v 5 -y ${outputPattern}`.quiet();

    // Convert each JPEG to WebP
    const jpgFiles = readdirSync(outputDir).filter(f => f.endsWith(".jpg")).sort();
    console.log(`  Converting ${jpgFiles.length} frames to WebP (q${WEBP_QUALITY})...`);

    // Process in batches of 20 for parallelism without overwhelming the system
    const BATCH_SIZE = 20;
    for (let i = 0; i < jpgFiles.length; i += BATCH_SIZE) {
      const batch = jpgFiles.slice(i, i + BATCH_SIZE);
      await Promise.all(
        batch.map(async (file) => {
          const jpgPath = path.join(outputDir, file);
          const webpPath = path.join(outputDir, file.replace(".jpg", ".webp"));
          await $`cwebp -q ${WEBP_QUALITY} ${jpgPath} -o ${webpPath}`.quiet();
          unlinkSync(jpgPath); // remove the JPEG
        })
      );
    }

    // Verify output
    const webpFiles = readdirSync(outputDir).filter(f => f.endsWith(".webp"));
    console.log(`  → ${webpFiles.length} WebP frames in ${outputDir}`);
  }

  console.log("\nDone!");
}

main();
