import { FadeIn } from "./FadeIn";
import portrait from "@/assets/sofia-portrait.png";

export function About() {
  return (
    <section id="sobre-mi" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Portrait + Name (left) and Bio (right) — same row */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-32">
            {/* Left: portrait, name, title */}
            <div className="flex flex-col items-start gap-4 md:max-w-sm">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                <img
                  src={portrait}
                  alt="Sofía Rey"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="font-serif italic text-3xl md:text-4xl">
                hola, soy sofía rey
              </h2>
              <p className="text-xs tracking-widest uppercase">
                Diseñadora Multimedia
              </p>
            </div>

            {/* Right: bio text */}
            <p className="max-w-md text-sm leading-relaxed md:text-right md:pt-8">
              I am a multimedia design student passionate about learning new
              things. This is one of my most notable characteristics. My vocation
              for design arises from the need to integrate a wide range of
              personal interests, including computer science, music, language
              studies and sports. This discipline allows me to mix and match my
              different interests, enhancing the final result of my work.
            </p>
          </div>
        </FadeIn>

        {/* Traits — zigzag: left, right, left */}
        <div className="flex flex-col gap-24 md:gap-32">
          <FadeIn delay={0}>
            <div className="md:max-w-sm">
              <h3 className="font-serif italic text-2xl mb-4">versatility</h3>
              <p className="text-sm leading-relaxed">
                It allows me to adapt my skills to the needs of the environment,
                both to work in teams and alone.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="md:max-w-sm md:ml-auto">
              <h3 className="font-serif italic text-2xl mb-4">curiosity</h3>
              <p className="text-sm leading-relaxed">
                I am a curious person, eager to learn and experiment with new
                tools as part of my constant development.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="md:max-w-sm">
              <h3 className="font-serif italic text-2xl mb-4">consciousness</h3>
              <p className="text-sm leading-relaxed">
                Understanding the logic behind each step is fundamental to design.
                Design is the perfect blend of intuition and rationality.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
