import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Lightbox } from "./Lightbox";
import photo1 from "@/assets/process-1.png";
import photo2 from "@/assets/process-2.png";
import photo3 from "@/assets/process-3.png";
import photo4 from "@/assets/process-4.png";

const PHOTOS = [
  { src: photo1, alt: "Shared process 1" },
  { src: photo2, alt: "Shared process 2" },
  { src: photo3, alt: "Shared process 3" },
  { src: photo4, alt: "Shared process 4" },
];

export function ProcesosCompartidos() {
  const [expanded, setExpanded] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <>
    <section className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Using same 2-col grid: text in left col (like versatility), images in right col (like curiosity) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-32 md:items-center">
          {/* Left col: text — left on mobile, right-aligned on desktop (like versatility) */}
          <FadeIn>
            <div className="text-left md:text-right">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                shared<br className="md:hidden" />
                {" "}<span className="text-accent">processes</span>
              </h2>
              <p className="text-sm leading-relaxed md:ml-auto max-w-md">
                Along the way I also learned to value what is shared: working
                in teams, crossing perspectives, and building with others. I
                believe design grows when it opens up to exchange, when
                different ways of thinking meet and turn an initial idea into
                something more meaningful.
              </p>
            </div>
          </FadeIn>

          {/* Right col: images — left-aligned (like curiosity) */}
          <FadeIn delay={200}>
            {/* Desktop: 2x2 grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {PHOTOS.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setExpanded(photo)}
                  aria-label={`Expand ${photo.alt}`}
                  className="aspect-square overflow-hidden border border-black p-0 bg-transparent"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Mobile: auto-scrolling carousel — full bleed */}
        <div className="md:hidden w-screen -mx-6 overflow-hidden mt-8">
          <div className="flex animate-marquee gap-4">
            {[...PHOTOS, ...PHOTOS].map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setExpanded(photo)}
                aria-label={`Expand ${photo.alt}`}
                className="w-64 h-64 shrink-0 overflow-hidden border border-black p-0 bg-transparent"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    {expanded && (
      <Lightbox
        src={expanded.src}
        alt={expanded.alt}
        onClose={() => setExpanded(null)}
      />
    )}
    </>
  );
}
