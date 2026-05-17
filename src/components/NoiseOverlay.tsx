/**
 * NoiseOverlay — Animated film-grain texture overlay.
 * Sits on top of all content with pointer-events: none.
 * Modular: easy to swap between animated/static or disable entirely.
 */

import { useEffect, useRef } from "react";

type NoiseConfig = {
  /** Whether the noise animates or stays static */
  animated?: boolean;
  /** Opacity of the noise layer (0-1) */
  opacity?: number;
  /** Animation interval in ms (lower = more flicker) */
  interval?: number;
  /** Size of the noise canvas tile in px */
  tileSize?: number;
};

const DEFAULT_CONFIG: Required<NoiseConfig> = {
  animated: true,
  opacity: 0.04,
  interval: 100,
  tileSize: 200,
};

export function NoiseOverlay(props: NoiseConfig = {}) {
  const config = { ...DEFAULT_CONFIG, ...props };
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = config.tileSize;
    canvas.height = config.tileSize;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const generateNoise = () => {
      const imageData = ctx.createImageData(config.tileSize, config.tileSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        data[i + 3] = 255;   // A (full, opacity handled by CSS)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    generateNoise();

    if (config.animated) {
      intervalRef.current = setInterval(generateNoise, config.interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [config.animated, config.interval, config.tileSize]);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999, opacity: config.opacity }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          imageRendering: "pixelated",
          width: "100%",
          height: "100%",
          objectFit: "none",
          objectPosition: "0 0",
        }}
      />
    </div>
  );
}
