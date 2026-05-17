import tailwind from "bun-plugin-tailwind";
import { rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

// Copy public/frames to dist/frames for static deployment
const framesDir = path.join(process.cwd(), "public/frames");
if (existsSync(framesDir)) {
  const destFrames = path.join(outdir, "frames");
  await cp(framesDir, destFrames, { recursive: true });
  console.log(`\n Copied frames to dist/frames`);
}
