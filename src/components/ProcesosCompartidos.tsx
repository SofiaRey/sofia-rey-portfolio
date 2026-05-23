import { FadeIn } from "./FadeIn";
import photo1 from "@/assets/process-1.png";
import photo2 from "@/assets/process-2.png";
import photo3 from "@/assets/process-3.png";
import { useT } from "../lib/i18n";

const PHOTOS = [
  { src: photo1, alt: "Shared process 1" },
  { src: photo2, alt: "Shared process 2" },
  { src: photo3, alt: "Shared process 3" },
];

export function ProcesosCompartidos() {
  const t = useT();
  return (
    <section className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Using same 2-col grid: text in left col (like versatility), images in right col (like curiosity) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-32 md:items-center">
          {/* Left col: text — left on mobile, right-aligned on desktop (like versatility) */}
          <FadeIn>
            <div className="text-left md:text-right">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {t("shared.title")}<br className="md:hidden" />
                {" "}<span className="text-accent">{t("shared.processes")}</span>
              </h2>
              <p className="text-sm leading-relaxed md:ml-auto max-w-md">
                {t("shared.body")}
              </p>
            </div>
          </FadeIn>

          {/* Right col: images — left-aligned (like curiosity) */}
          <FadeIn delay={200}>
            {/* Desktop: tall photo1 + stacked photo2/photo3 */}
            <div className="hidden md:grid grid-cols-[2fr_3fr] grid-rows-2 gap-4">
              <div className="group row-span-2 overflow-hidden border border-black">
                <img
                  src={PHOTOS[0]!.src}
                  alt={PHOTOS[0]!.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              {PHOTOS.slice(1).map((photo, i) => (
                <div
                  key={i}
                  className="group aspect-square overflow-hidden border border-black"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Mobile: auto-scrolling carousel — full bleed */}
        <div className="md:hidden w-screen -mx-6 overflow-hidden mt-8">
          <div className="flex animate-marquee gap-4">
            {[...PHOTOS, ...PHOTOS].map((photo, i) => (
              <div
                key={i}
                className="group w-64 h-64 shrink-0 overflow-hidden border border-black"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
