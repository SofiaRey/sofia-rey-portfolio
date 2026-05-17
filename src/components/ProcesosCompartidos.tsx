import { FadeIn } from "./FadeIn";
import photo1 from "@/assets/process-1.png";
import photo2 from "@/assets/process-2.png";
import photo3 from "@/assets/process-3.png";
import photo4 from "@/assets/process-4.png";

const PHOTOS = [
  { src: photo1, alt: "Proceso compartido 1" },
  { src: photo2, alt: "Proceso compartido 2" },
  { src: photo3, alt: "Proceso compartido 3" },
  { src: photo4, alt: "Proceso compartido 4" },
];

export function ProcesosCompartidos() {
  return (
    <section className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Using same 2-col grid: text in left col (like versatility), images in right col (like curiosity) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-32">
          {/* Left col: text — left on mobile, right-aligned on desktop (like versatility) */}
          <FadeIn>
            <div className="text-left md:text-right">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                procesos<br className="md:hidden" />
                {" "}<span className="text-accent">compartidos</span>
              </h2>
              <p className="text-sm leading-relaxed md:ml-auto max-w-md">
                En este recorrido también aprendí a valorar lo compartido:
                trabajar en equipo, cruzar perspectivas y construir con otros.
                Creo que el diseño crece cuando se abre al intercambio, cuando
                distintas formas de pensar se encuentran y transforman una idea
                inicial en algo más significativo.
              </p>
            </div>
          </FadeIn>

          {/* Right col: images — left-aligned (like curiosity) */}
          <FadeIn delay={200}>
            {/* Desktop: 2x2 grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {PHOTOS.map((photo, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
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
                className="w-64 h-64 shrink-0 overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
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
