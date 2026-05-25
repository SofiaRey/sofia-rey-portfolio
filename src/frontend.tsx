/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";
import { inject } from "@vercel/analytics";
import { App } from "./App";

inject();

// Inject favicons at runtime so Bun's HTML bundler doesn't try to resolve them
// (they're served by the dev/prod server at /favicon*.png, not bundled).
for (const [href, scheme] of [
  ["/favicon.png", "light"],
  ["/favicon-dark.png", "dark"],
] as const) {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;
  link.media = `(prefers-color-scheme: ${scheme})`;
  document.head.appendChild(link);
}

const elem = document.getElementById("root")!;
const app = (
  <>
    <App />
    {process.env.NODE_ENV === "development" && (
      <Agentation
        endpoint="http://localhost:4747"
        onSessionCreated={(sessionId) => {
          console.log("Session started:", sessionId);
        }}
      />
    )}
  </>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
