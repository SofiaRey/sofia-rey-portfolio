import { serve, file } from "bun";
import index from "./index.html";
import path from "node:path";

const publicDir = path.resolve(import.meta.dir, "../public");

async function servePublicFile(req: Request) {
  const url = new URL(req.url);
  const filePath = path.join(publicDir, url.pathname);
  const f = file(filePath);
  if (await f.exists()) {
    const cacheControl =
      process.env.NODE_ENV === "production"
        ? "public, max-age=31536000, immutable"
        : "no-cache";
    return new Response(f, { headers: { "Cache-Control": cacheControl } });
  }
  return new Response("Not found", { status: 404 });
}

const server = serve({
  port: 3002,
  routes: {
    "/frames/*": servePublicFile,
    "/videos/*": servePublicFile,
    "/audio/*": servePublicFile,
    "/favicon.png": servePublicFile,
    "/favicon-dark.png": servePublicFile,

    // SPA: every other path renders index.html so React can route it
    // (known routes show the page; unknown ones render the 404).
    "/*": index,
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);
