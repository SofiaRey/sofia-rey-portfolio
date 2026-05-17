import { FadeIn } from "./FadeIn";
import { useState } from "react";

/**
 * Abstract organic SVG shape for process items.
 * Each gets a unique seed for slight variation.
 */
function ProcessSVG({ seed }: { seed: number }) {
  const paths = [
    "M50,25 C60,10 80,15 85,30 C90,45 80,60 65,65 C50,70 35,65 25,55 C15,45 20,30 30,20 C40,10 55,15 60,25 C65,35 55,50 45,55 C35,60 25,50 30,40 C35,30 45,25 50,30",
    "M45,20 C65,15 80,25 82,40 C84,55 70,70 55,72 C40,74 25,65 20,50 C15,35 25,20 40,18 C55,16 70,30 68,45 C66,60 50,68 40,62 C30,56 28,42 35,35",
    "M55,22 C70,18 85,30 83,45 C81,60 68,72 52,70 C36,68 22,58 24,42 C26,26 42,18 55,22 M40,35 C48,30 58,32 60,40 C62,48 55,55 47,53 C39,51 35,43 40,35",
    "M48,18 C68,14 88,28 85,48 C82,68 62,80 42,75 C22,70 12,52 18,35 C24,18 44,12 58,20 C72,28 75,48 65,58 C55,68 38,65 32,52 C26,39 35,28 48,25",
    "M52,20 C72,16 90,32 86,52 C82,72 64,82 44,78 C24,74 14,56 20,38 C26,20 46,14 62,22 C78,30 82,50 72,62 C62,74 42,72 34,58 C26,44 36,30 50,26",
  ];

  return (
    <svg
      viewBox="0 0 100 90"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <path d={paths[seed % paths.length]} />
    </svg>
  );
}

const PROCESSES = [
  { id: 1, title: "Proceso 1" },
  { id: 2, title: "Proceso 2" },
  { id: 3, title: "Proceso 3" },
  { id: 4, title: "Proceso 4" },
  { id: 5, title: "Proceso 5" },
];

const CIRCLE_RADIUS = 140; // px, radius of the orbit
const CIRCLE_RADIUS_MOBILE = 100;

export function Procesos() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="procesos" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif italic text-3xl md:text-5xl text-center mb-20">
            mis <span className="text-accent">procesos</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div
            className="relative mx-auto w-[260px] h-[260px] md:w-[340px] md:h-[340px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Rotating container */}
            <div
              className="absolute inset-0 animate-spin-slow"
              style={{
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {PROCESSES.map((process, i) => {
                const angle = (360 / PROCESSES.length) * i;
                return (
                  <a
                    key={process.id}
                    href="#"
                    className="group absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 -ml-8 -mt-8 md:-ml-10 md:-mt-10 transition-transform duration-300 hover:scale-125"
                    style={{
                      transform: `rotate(${angle}deg) translateY(calc(-1 * var(--radius))) rotate(-${angle}deg)`,
                      ["--radius" as string]: `${CIRCLE_RADIUS_MOBILE}px`,
                    }}
                    aria-label={process.title}
                  >
                    {/* Counter-rotate to keep SVGs upright */}
                    <div
                      className="w-full h-full animate-spin-slow-reverse"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    >
                      <ProcessSVG seed={process.id} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .animate-spin-slow a {
            --radius: ${CIRCLE_RADIUS}px;
          }
        }
      `}</style>
    </section>
  );
}
