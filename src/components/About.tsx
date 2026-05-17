import { FadeIn } from "./FadeIn";
import portrait from "@/assets/sofia-portrait.png";

export function About() {
  return (
    <section id="sobre-mi" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Portrait + Name (left col, right-aligned on desktop) and Bio (right col) */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-32 mb-32">
            {/* Left col: portrait, name, title — left on mobile, right on desktop */}
            <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <img
                  src={portrait}
                  alt="Sofía Rey"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">
                hola, soy <span className="text-accent">sofía rey</span>
              </h2>
              <p className="text-xs tracking-widest uppercase">
                Diseñadora Multimedia
              </p>
            </div>

            {/* Right col: bio text — always left-aligned */}
            <div className="flex items-start pt-0 md:pt-8">
              <p className="max-w-md text-sm leading-relaxed text-left">
                I am a multimedia design student passionate about learning new
                things. This is one of my most notable characteristics. My
                vocation for design arises from the need to integrate a wide
                range of personal interests, including computer science, music,
                language studies and sports. This discipline allows me to mix
                and match my different interests, enhancing the final result of
                my work.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Traits — zigzag using the same 2-col grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          <FadeIn delay={0}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div className="text-left md:text-right">
                <h3 className="font-serif text-2xl mb-4">versatility</h3>
                <p className="text-sm leading-relaxed">
                  It allows me to adapt my skills to the needs of the
                  environment, both to work in teams and alone.
                </p>
              </div>
              <div>{/* empty right col */}</div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div>{/* empty left col */}</div>
              <div className="text-left">
                <h3 className="font-serif text-2xl mb-4">curiosity</h3>
                <p className="text-sm leading-relaxed">
                  I am a curious person, eager to learn and experiment with new
                  tools as part of my constant development.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div className="text-left md:text-right">
                <h3 className="font-serif text-2xl mb-4">consciousness</h3>
                <p className="text-sm leading-relaxed">
                  Understanding the logic behind each step is fundamental to
                  design. Design is the perfect blend of intuition and
                  rationality.
                </p>
              </div>
              <div>{/* empty right col */}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
