import tailwind from "bun-plugin-tailwind";
import { rm, cp, mkdir, readFile, writeFile } from "node:fs/promises";
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
  publicPath: "/",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

// Rewrite relative asset references in the generated HTML to absolute paths
// so deep-linked URLs like /case/arathe can still resolve /chunk-*.js.
const indexHtmlPath = path.join(outdir, "index.html");
let baseHtml = "";
if (existsSync(indexHtmlPath)) {
  baseHtml = await readFile(indexHtmlPath, "utf8");
  baseHtml = baseHtml.replace(/(href|src)="\.\//g, '$1="/');
}

const SITE_ORIGIN = "https://sofiarey.me";
const ROOT_TITLE = "Sofía Rey — Multimedia Designer";
const ROOT_DESCRIPTION =
  "Sofía Rey's design portfolio: process, craft, and the work behind it.";
const ROOT_IMAGE = `${SITE_ORIGIN}/og-image.png`;
const ROOT_IMAGE_ALT = "Sofía Rey — Multimedia Designer";

type RouteMeta = {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
};

function applyMeta(html: string, meta: RouteMeta): string {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`,
    )
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${meta.url}$2`)
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${meta.url}$2`,
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${meta.image}$2`,
    )
    .replace(
      /(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/,
      `$1${meta.imageAlt}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
      `$1${meta.image}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/,
      `$1${meta.imageAlt}$2`,
    );
}

// Static-site generation: emit per-route HTML with route-specific meta tags.
type CaseRoute = {
  slug: string;
  folder: string;
  name: string;
  description: string;
};

const CASES: CaseRoute[] = [
  {
    slug: "arathe",
    folder: "arathe",
    name: "Arathe",
    description:
      "A multisensory astronomy experience that makes the sky accessible through touch, sound, and vibration.",
  },
  {
    slug: "portfolio-video",
    folder: "portfolio-video",
    name: "Portfolio Video",
    description:
      "An AI-assisted audiovisual piece introducing Sofía Rey's portfolio in motion.",
  },
  {
    slug: "organigram-rebrand",
    folder: "organigram",
    name: "Organigram Rebrand",
    description:
      "A speculative cannabis-brand rebrand exploring refined, trustworthy identity beyond obvious symbols.",
  },
  {
    slug: "valorant-champions",
    folder: "valorant-champions",
    name: "Valorant Champions",
    description:
      "An animated broadcast identity system for Valorant Champions, from static graphics to final motion pieces.",
  },
  {
    slug: "winged-chariot-allegory",
    folder: "winged-chariot",
    name: "The Winged Chariot",
    description:
      "A motion piece translating Plato's allegory into a visual language of digital collage and symbolic imagery.",
  },
];

// OG images are generated locally (ffmpeg isn't available on Vercel) and
// shipped from public/og/.  Just copy them into dist.
const ogSrcDir = path.join(process.cwd(), "public", "og");
if (existsSync(ogSrcDir)) {
  await cp(ogSrcDir, path.join(outdir, "og"), { recursive: true });
  console.log(" copied public/og → dist/og");
}

if (baseHtml) {
  // Root index — already has root meta, but normalize via applyMeta for safety.
  const rootHtml = applyMeta(baseHtml, {
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    url: `${SITE_ORIGIN}/`,
    image: ROOT_IMAGE,
    imageAlt: ROOT_IMAGE_ALT,
  });
  await writeFile(indexHtmlPath, rootHtml);

  for (const c of CASES) {
    const title = `${c.name} — Sofía Rey`;
    const caseHtml = applyMeta(baseHtml, {
      title,
      description: c.description,
      url: `${SITE_ORIGIN}/case/${c.slug}`,
      image: `${SITE_ORIGIN}/og/${c.slug}.png`,
      imageAlt: `${c.name} — Sofía Rey case study`,
    });
    const routeDir = path.join(outdir, "case", c.slug);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, "index.html"), caseHtml);
    console.log(` emitted dist/case/${c.slug}/index.html`);
  }

  await writeFile(path.join(outdir, "404.html"), rootHtml);
  console.log(" emitted dist/404.html");
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

for (const f of ["favicon.png", "favicon-dark.png", "og-image.png"]) {
  const src = path.join(process.cwd(), "public", f);
  if (existsSync(src)) {
    await cp(src, path.join(outdir, f));
    console.log(` copied public/${f} → dist/${f}`);
  }
}
