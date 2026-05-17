import { serve, file } from "bun";
import index from "./index.html";
import path from "node:path";

const publicDir = path.resolve(import.meta.dir, "../public");

const server = serve({
  port: 3002,
  routes: {
    "/": index,
  },
  async fetch(req) {
    const url = new URL(req.url);

    // Serve static files from public/
    if (url.pathname.startsWith("/frames/")) {
      const filePath = path.join(publicDir, url.pathname);
      const f = file(filePath);
      if (await f.exists()) {
        return new Response(f, {
          headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
      return new Response("Not found", { status: 404 });
    }

    // Fallback: serve index.html for SPA routes
    return new Response(file(path.resolve(import.meta.dir, "./index.html")));
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);
