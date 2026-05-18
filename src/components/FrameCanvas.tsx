import { useEffect, useRef } from "react";
import { loadFrames, TOTAL_FRAMES, INTRO_FRAMES, type FrameLoaderState } from "@/lib/frame-loader";

/**
 * FrameCanvas — Fixed full-viewport canvas that renders the scroll-driven
 * video frame sequence. Handles intro auto-play and scroll-driven mode.
 */
export function FrameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    frames: FrameLoaderState | null;
    introComplete: boolean;
    introStarted: boolean;
    animFrame: number;
  }>({
    frames: null,
    introComplete: false,
    introStarted: false,
    animFrame: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Resize canvas to match viewport ---
    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    resize();

    // --- Draw a single frame, clearing the canvas first ---
    function drawFrame(frameIndex: number) {
      const state = stateRef.current.frames;
      if (!canvas || !ctx || !state) return;

      frameIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));

      // Find the nearest loaded frame, biased toward earlier indices so
      // scrolling up never shows a "future" frame while later ones load first.
      let frame = state.frames[frameIndex];
      if (!frame) {
        for (let i = frameIndex - 1; i >= 0; i--) {
          if (state.frames[i]) { frame = state.frames[i]; break; }
        }
        if (!frame) {
          for (let i = frameIndex + 1; i < TOTAL_FRAMES; i++) {
            if (state.frames[i]) { frame = state.frames[i]; break; }
          }
        }
      }
      if (!frame) return;

      // Fill the canvas (object-fit: cover). When the frame is wider than the
      // canvas, crop from the right edge so the left side stays visible.
      const canvasAspect = canvas.width / canvas.height;
      const frameAspect = frame.naturalWidth / frame.naturalHeight;

      let sx = 0, sy = 0, sw = frame.naturalWidth, sh = frame.naturalHeight;

      if (frameAspect > canvasAspect) {
        sw = frame.naturalHeight * canvasAspect;
        // Shift the crop window left by a small amount so the scribble's
        // left edge isn't flush against the canvas edge on narrow viewports.
        sx = Math.max(0, (frame.naturalWidth - sw) / 2 - frame.naturalWidth * 0.04);
      } else {
        sh = frame.naturalWidth / canvasAspect;
        sy = (frame.naturalHeight - sh) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frame, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    }

    // --- Scroll-driven frame update ---
    function updateScrollFrame() {
      if (!stateRef.current.introComplete) return;

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        drawFrame(INTRO_FRAMES);
        return;
      }

      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      const scrollFrameCount = TOTAL_FRAMES - INTRO_FRAMES;
      const frameIndex = INTRO_FRAMES + Math.floor(scrollProgress * (scrollFrameCount - 1));

      drawFrame(frameIndex);
    }

    // --- Intro auto-play ---
    const introDuration = 5000;

    function playIntro() {
      if (stateRef.current.introStarted) return;
      stateRef.current.introStarted = true;

      const startTime = performance.now();

      function animate(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / introDuration, 1);
        const frameIndex = Math.floor(progress * (INTRO_FRAMES - 1));

        drawFrame(frameIndex);

        if (progress < 1) {
          stateRef.current.animFrame = requestAnimationFrame(animate);
        } else {
          stateRef.current.introComplete = true;
          updateScrollFrame();
        }
      }

      stateRef.current.animFrame = requestAnimationFrame(animate);
    }

    // --- Load frames ---
    loadFrames((state) => {
      stateRef.current.frames = state;

      if (state.introReady && !stateRef.current.introStarted) {
        // Mid-scroll reload: skip the intro
        if (window.scrollY > 0) {
          stateRef.current.introStarted = true;
          stateRef.current.introComplete = true;
          updateScrollFrame();
        } else {
          playIntro();
        }
      } else if (stateRef.current.introComplete) {
        // More frames loaded — refresh current target so canvas catches up
        updateScrollFrame();
      }
    }).then((state) => {
      stateRef.current.frames = state;
      if (stateRef.current.introComplete) updateScrollFrame();
    });

    // --- Event listeners ---
    function handleResize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const newWidth = window.innerWidth * dpr;
      const newHeight = window.innerHeight * dpr;
      if (canvas.width === newWidth && canvas.height === newHeight) return;
      resize();
      if (stateRef.current.introComplete) updateScrollFrame();
    }

    function handleScroll() {
      if (stateRef.current.introComplete) {
        requestAnimationFrame(updateScrollFrame);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(stateRef.current.animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen max-md:left-[30%] max-md:w-[70vw]"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
