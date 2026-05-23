import { useEffect, useRef } from "react";
import { useTransition } from "../lib/transition";
import {
  getTransitionState,
  loadTransitionFrames,
  TRANSITION_DURATION_MS,
  TRANSITION_TOTAL_FRAMES,
} from "../lib/transition-loader";

const FADE_MS = 400;

/**
 * TransitionOverlay — full-viewport canvas that plays the landing→case
 * transition. First half plays on landing, then we pushState to the case URL
 * and play the second half on top of the freshly-mounted case page.
 */
export function TransitionOverlay() {
  const { phase, href, setPhase } = useTransition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
    idle(() => {
      loadTransitionFrames();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let rafId = 0;
    let swapped = false;

    function drawFrame(index: number) {
      const s = getTransitionState();
      if (!s || !canvas || !ctx) return;
      let frame = s.frames[index];
      if (!frame) {
        for (let i = index - 1; i >= 0; i--) {
          if (s.frames[i]) { frame = s.frames[i]; break; }
        }
      }
      if (!frame) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const fw = frame.naturalWidth;
      const fh = frame.naturalHeight;
      const cAspect = cw / ch;
      const fAspect = fw / fh;

      let sx = 0, sy = 0, sw = fw, sh = fh;
      if (fAspect > cAspect) {
        sw = fh * cAspect;
        sx = (fw - sw) / 2;
      } else {
        sh = fw / cAspect;
        sy = (fh - sh) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(frame, sx, sy, sw, sh, 0, 0, cw, ch);
    }

    loadTransitionFrames().then(() => {
      if (cancelled) return;

      const startTime = performance.now();
      const half = TRANSITION_DURATION_MS / 2;

      function tick(now: number) {
        if (cancelled) return;
        const elapsed = now - startTime;

        if (!swapped && elapsed >= half) {
          swapped = true;
          if (href) {
            history.pushState(null, "", href);
            window.dispatchEvent(new PopStateEvent("popstate"));
            window.scrollTo(0, 0);
          }
        }

        if (elapsed < TRANSITION_DURATION_MS) {
          const progress = elapsed / TRANSITION_DURATION_MS;
          const frameIndex = Math.min(
            TRANSITION_TOTAL_FRAMES - 1,
            Math.floor(progress * TRANSITION_TOTAL_FRAMES),
          );
          drawFrame(frameIndex);
          rafId = requestAnimationFrame(tick);
        } else {
          drawFrame(TRANSITION_TOTAL_FRAMES - 1);
          setPhase("fading");
        }
      }

      rafId = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [phase, href, setPhase]);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => setPhase("idle"), FADE_MS);
    return () => window.clearTimeout(t);
  }, [phase, setPhase]);

  const visible = phase === "playing" || phase === "fading";

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ transitionDuration: `${FADE_MS}ms` }}
      className={`fixed inset-0 z-[300] pointer-events-none transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      } ${phase === "idle" ? "hidden" : ""}`}
    />
  );
}
