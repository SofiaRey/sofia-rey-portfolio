import tailwind from "bun-plugin-tailwind";
import { rm, cp, mkdir } from "node:fs/promises";
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

// Copy public/ assets needed at runtime into dist/.
const framesSrc = path.join(process.cwd(), "public/frames");
if (existsSync(framesSrc)) {
  await cp(framesSrc, path.join(outdir, "frames"), { recursive: true });
  console.log(" copied public/frames → dist/frames");
}

// Ship only the animated .webp orbs — source .mov / .apng / .gif are local-only
const videosSrc = path.join(process.cwd(), "public/videos");
if (existsSync(videosSrc)) {
  const videosDest = path.join(outdir, "videos");
  await mkdir(videosDest, { recursive: true });
  for await (const file of new Bun.Glob("process-*.webp").scan({ cwd: videosSrc })) {
    await cp(path.join(videosSrc, file), path.join(videosDest, file));
  }
  console.log(" copied public/videos/*.webp → dist/videos");
}

for (const f of ["favicon.png", "favicon-dark.png"]) {
  const src = path.join(process.cwd(), "public", f);
  if (existsSync(src)) {
    await cp(src, path.join(outdir, f));
    console.log(` copied public/${f} → dist/${f}`);
  }
}
