import { FadeIn } from "./FadeIn";
import portrait from "@/assets/sofia-portrait.png";
import { useT } from "../lib/i18n";

export function About() {
  const t = useT();
  return (
    <section id="sobre-mi" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Portrait + Name (left col, right-aligned on desktop) and Bio (right col) */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-32 mb-32">
            {/* Left col: portrait, name, title — left on mobile, right on desktop */}
            <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
              <div className="group w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-black">
                <img
                  src={portrait}
                  alt="Sofía Rey"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">
                {t("about.greet")} <span className="text-accent">sofía rey</span>
              </h2>
              <p className="text-xs tracking-[0.25em] uppercase">
                {t("about.title")}
              </p>
            </div>

            {/* Right col: bio text — always left-aligned */}
            <div className="flex items-start pt-0 md:pt-8">
              <p className="max-w-md text-sm leading-relaxed text-left">
                {t("about.bio")}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Traits — zigzag using the same 2-col grid */}
        <div className="flex flex-col gap-12 md:gap-32">
          <FadeIn delay={0}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div className="text-left md:text-right">
                <h3 className="font-serif text-2xl mb-4">{t("about.t1.h")}</h3>
                <p className="text-sm leading-relaxed">{t("about.t1.p")}</p>
              </div>
              <div className="hidden md:block">{/* empty right col */}</div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div className="hidden md:block">{/* empty left col */}</div>
              <div className="text-left">
                <h3 className="font-serif text-2xl mb-4">{t("about.t2.h")}</h3>
                <p className="text-sm leading-relaxed">{t("about.t2.p")}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-32">
              <div className="text-left md:text-right">
                <h3 className="font-serif text-2xl mb-4">{t("about.t3.h")}</h3>
                <p className="text-sm leading-relaxed">{t("about.t3.p")}</p>
              </div>
              <div className="hidden md:block">{/* empty right col */}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
