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
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Text */}
          <FadeIn className="md:w-1/2">
            <div>
              <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
                procesos <span className="text-accent">compartidos</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-md">
                En este recorrido también aprendí a valorar lo compartido:
                trabajar en equipo, cruzar perspectivas y construir con otros.
                Creo que el diseño crece cuando se abre al intercambio, cuando
                distintas formas de pensar se encuentran y transforman una idea
                inicial en algo más significativo.
              </p>
            </div>
          </FadeIn>

          {/* Desktop: 2x2 grid */}
          <FadeIn className="hidden md:block md:w-1/2" delay={200}>
            <div className="grid grid-cols-2 gap-4">
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

          {/* Mobile: auto-scrolling carousel */}
          <div className="md:hidden w-full overflow-hidden">
            <div className="flex animate-marquee gap-4">
              {/* Duplicate for seamless loop */}
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
      </div>
    </section>
  );
}
