import { FadeIn } from "./FadeIn";
import { useState } from "react";

const PROCESSES = [
  { id: 1, title: "Process 1", src: "/videos/process-1.apng" },
  { id: 2, title: "Process 2", src: "/videos/process-2.apng" },
  { id: 3, title: "Process 3", src: "/videos/process-3.apng" },
  { id: 4, title: "Process 4", src: "/videos/process-4.apng" },
  { id: 5, title: "Process 5", src: "/videos/process-5.apng" },
];

const CIRCLE_RADIUS = 200;

function ProcessVideo({ src, title }: { src: string; title: string }) {
  return (
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover"
    />
  );
}

export function Procesos() {
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="procesos" className="relative z-10 py-16 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-32 mb-20">
            <div>{/* empty left col */}</div>
            <div className="text-left">
              <h2 className="font-serif text-3xl md:text-5xl">
                my<br className="md:hidden" />
                {" "}<span className="text-accent">processes</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col items-start gap-8">
          {PROCESSES.map((process) => (
            <FadeIn key={process.id}>
              <a href="#" className="block w-24 h-24" aria-label={process.title}>
                <ProcessVideo src={process.src} title={process.title} />
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: rotating circle */}
        <FadeIn delay={200}>
          <div
            className="hidden md:block relative mx-auto w-[480px] h-[480px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="absolute inset-0 animate-spin-slow"
              style={{
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {PROCESSES.map((process, i) => {
                const angle = (360 / PROCESSES.length) * i;
                const scale = hoveredId === process.id ? 1.25 : 1;
                return (
                  <a
                    key={process.id}
                    href="#"
                    onMouseEnter={() => setHoveredId(process.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${CIRCLE_RADIUS}px) rotate(-${angle}deg) scale(${scale})`,
                      transition: "transform 300ms",
                    }}
                    aria-label={process.title}
                  >
                    {/* Counter-rotate to keep videos upright */}
                    <div
                      className="w-full h-full animate-spin-slow-reverse"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    >
                      <ProcessVideo src={process.src} title={process.title} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
