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
    firstFrameDrawn: boolean;
  }>({
    frames: null,
    introComplete: false,
    introStarted: false,
    animFrame: 0,
    firstFrameDrawn: false,
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

    // --- Draw a frame to the canvas ---
    function drawFrame(frameIndex: number) {
      const state = stateRef.current.frames;
      if (!canvas || !ctx || !state) return;

      // Clamp frame index
      frameIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));

      // Find the nearest available frame
      let frame = state.frames[frameIndex];
      if (!frame) {
        for (let offset = 1; offset < 30; offset++) {
          if (frameIndex - offset >= 0) {
            frame = state.frames[frameIndex - offset];
            if (frame) break;
          }
          if (frameIndex + offset < TOTAL_FRAMES) {
            frame = state.frames[frameIndex + offset];
            if (frame) break;
          }
        }
      }
      if (!frame) return;

      // Draw frame covering the full canvas (object-fit: cover)
      const canvasAspect = canvas.width / canvas.height;
      const frameAspect = frame.naturalWidth / frame.naturalHeight;

      let sx = 0, sy = 0, sw = frame.naturalWidth, sh = frame.naturalHeight;

      if (frameAspect > canvasAspect) {
        sw = frame.naturalHeight * canvasAspect;
        sx = (frame.naturalWidth - sw) / 2;
      } else {
        sh = frame.naturalWidth / canvasAspect;
        sy = (frame.naturalHeight - sh) / 2;
      }

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
    function playIntro() {
      if (stateRef.current.introStarted) return;
      stateRef.current.introStarted = true;

      const startTime = performance.now();
      const introDuration = 5000; // 5 seconds intro playback

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
    console.log("[FrameCanvas] Starting frame load...");
    loadFrames((state) => {
      stateRef.current.frames = state;

      // Draw first frame as soon as it's available (immediate visual feedback)
      if (!stateRef.current.firstFrameDrawn && state.frames[0]) {
        stateRef.current.firstFrameDrawn = true;
        console.log("[FrameCanvas] Drawing first frame");
        drawFrame(0);
      }

      // Start intro once all intro frames are loaded
      if (state.introLoaded && !stateRef.current.introStarted) {
        console.log("[FrameCanvas] All intro frames loaded, starting playback");
        playIntro();
      }
    }).then((state) => {
      stateRef.current.frames = state;
      if (!stateRef.current.introStarted) {
        playIntro();
      }
    });

    // --- Event listeners ---
    function handleResize() {
      resize();
      if (stateRef.current.introComplete) {
        updateScrollFrame();
      } else if (stateRef.current.firstFrameDrawn) {
        drawFrame(0);
      }
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
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 md:left-0 w-screen h-screen max-md:left-[30%] max-md:w-[70vw]"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
