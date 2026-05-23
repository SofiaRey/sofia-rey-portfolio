import { useEffect, useRef } from "react";
import { FadeIn } from "../FadeIn";
import type { CaseData } from "./types";
import { useLoc } from "../../lib/i18n";

type Orb = {
  src: string;
  top: string;
  side: "left" | "right";
  offset: string;
  size: number;
  speed: number;
};

const ORBS: Orb[] = [
  { src: "/videos/process-1.webp", top: "700px",  side: "right", offset: "4%",  size: 130, speed: 0.18 },
  { src: "/videos/process-2.webp", top: "1900px", side: "left",  offset: "3%",  size: 110, speed: -0.12 },
  { src: "/videos/process-3.webp", top: "3300px", side: "right", offset: "8%",  size: 150, speed: 0.22 },
  { src: "/videos/process-4.webp", top: "4700px", side: "left",  offset: "6%",  size: 120, speed: -0.16 },
  { src: "/videos/process-5.webp", top: "6100px", side: "right", offset: "5%",  size: 135, speed: 0.14 },
  { src: "/videos/process-2.webp", top: "7500px", side: "left",  offset: "9%",  size: 100, speed: -0.2 },
];

function ParallaxOrb({ orb }: { orb: Orb }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translate3d(0, ${(-y * orb.speed).toFixed(1)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [orb.speed]);

  const positionStyle =
    orb.side === "left"
      ? { left: orb.offset, top: orb.top }
      : { right: orb.offset, top: orb.top };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute pointer-events-none will-change-transform"
      style={positionStyle}
    >
      <img
        src={orb.src}
        alt=""
        draggable="false"
        style={{ width: orb.size, height: orb.size }}
        className="block select-none opacity-80"
      />
    </div>
  );
}

export function CaseOrbs() {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none z-[1]">
      {ORBS.map((orb, i) => (
        <ParallaxOrb key={i} orb={orb} />
      ))}
    </div>
  );
}

export function VisualArchive({ data }: { data: NonNullable<CaseData["archive"]> }) {
  const loc = useLoc();
  const layouts = [
    "col-span-2 md:col-span-4",
    "col-span-2 md:col-span-3",
    "col-span-1 md:col-span-5",
    "col-span-1 md:col-span-3",
    "col-span-2 md:col-span-4",
    "col-span-1 md:col-span-5",
    "col-span-2 md:col-span-4",
    "col-span-1 md:col-span-3",
    "col-span-2 md:col-span-5",
  ];

  return (
    <section id="archive" className="relative z-10 py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16 items-end">
            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl md:text-4xl leading-[1.05] text-pretty">
                {loc(data.title)}
              </h3>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-sm leading-relaxed text-foreground/75 max-w-sm md:text-right md:ml-auto">
                {loc(data.note)}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {data.items.map((it, i) => {
            const span = layouts[i % layouts.length];
            const toneCls =
              it.tone === "dark"
                ? "ph-stripes--dark"
                : it.tone === "bone"
                  ? "ph-stripes--bone"
                  : "ph-stripes";
            const alt = loc(it.alt) || loc(it.label);
            return (
              <FadeIn key={i} delay={i * 60} className={`${span} group h-full`}>
                <figure className="relative w-full h-full">
                  <div className="absolute inset-0 border border-black overflow-hidden">
                    {it.src ? (
                      <img
                        src={it.src}
                        alt={alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${toneCls}`}
                      />
                    )}
                  </div>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
