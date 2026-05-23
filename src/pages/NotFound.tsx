import { useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { useT } from "../lib/i18n";
import { LangToggle } from "../components/LangToggle";

const FLOAT_ORBS = [
  { src: "/videos/process-1.webp", top: "12%",  left: "8%",   size: 110, anim: "animate-float-y",   delay: "0s"   },
  { src: "/videos/process-3.webp", top: "18%",  right: "10%", size: 140, anim: "animate-pulse-bob", delay: "0.6s" },
  { src: "/videos/process-2.webp", bottom: "14%", left: "12%", size: 95,  anim: "animate-pulse-bob", delay: "1.2s" },
  { src: "/videos/process-4.webp", bottom: "8%",  right: "6%",  size: 120, anim: "animate-float-y",   delay: "0.3s" },
] as const;

export function NotFound() {
  const t = useT();
  useEffect(() => {
    document.body.classList.add("case-grain");
    document.body.style.backgroundColor = "#fdfcf9";
    return () => {
      document.body.classList.remove("case-grain");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-paper text-foreground">
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute inset-0 z-0"
      >
        {FLOAT_ORBS.map((orb, i) => {
          const pos: Record<string, string> = {};
          if ("top" in orb && orb.top) pos.top = orb.top;
          if ("bottom" in orb && orb.bottom) pos.bottom = orb.bottom;
          if ("left" in orb && orb.left) pos.left = orb.left;
          if ("right" in orb && orb.right) pos.right = orb.right;
          return (
            <img
              key={i}
              src={orb.src}
              alt=""
              draggable="false"
              className={`absolute select-none opacity-80 ${orb.anim}`}
              style={{
                ...pos,
                width: orb.size,
                height: orb.size,
                animationDelay: orb.delay,
              }}
            />
          );
        })}
      </div>

      <header className="relative z-10 px-6 py-6 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-xl tracking-[0.3em] text-accent"
        >
          sofía
        </a>
        <LangToggle />
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          <FadeIn>
            <p className="case-label text-accent mb-6">{t("nf.error")}</p>
          </FadeIn>

          <FadeIn delay={80}>
            <h1
              className="font-serif lowercase text-pretty mb-6"
              style={{ fontSize: 48, lineHeight: 1.05 }}
            >
              {t("nf.h1a")}
              <br />
              <span className="italic text-accent">{t("nf.h1b")}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="text-sm md:text-base leading-[1.7] text-foreground/75 max-w-md mx-auto mb-10">
              {t("nf.body")}
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/"
                className="border border-black px-5 py-3 case-label hover:bg-foreground hover:text-paper transition-colors"
              >
                {t("nf.backHome")}
              </a>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
