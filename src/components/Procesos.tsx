import { FadeIn } from "./FadeIn";
import { useState } from "react";
import { useT } from "../lib/i18n";

const PROCESSES = [
  { id: 1, title: "Arathe",              src: "/videos/process-1.webp", href: "/case/arathe" },
  { id: 2, title: "Portfolio Video",     src: "/videos/process-2.webp", href: "/case/portfolio-video" },
  { id: 3, title: "Organigram Rebrand",  src: "/videos/process-3.webp", href: "/case/organigram-rebrand" },
  { id: 4, title: "Valorant Champions",  src: "/videos/process-4.webp", href: "/case/valorant-champions" },
  { id: 5, title: "The Winged Chariot",  src: "/videos/process-5.webp", href: "/case/winged-chariot-allegory" },
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
  const t = useT();
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
                {t("procesos.myMy")}<br className="md:hidden" />
                {" "}<span className="text-accent">{t("procesos.processes")}</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col items-start gap-8">
          {PROCESSES.map((process) => (
            <FadeIn key={process.id}>
              <a
                href={process.href}
                className="block w-44 h-44"
                aria-label={process.title}
              >
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
                    href={process.href}
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
