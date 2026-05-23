import { useState, useEffect } from "react";
import { useI18n, getRoles } from "../lib/i18n";

const INTERVAL = 1800;
const FADE_DURATION = 250;

export function Hero() {
  const { lang, t } = useI18n();
  const roles = getRoles(lang);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-end justify-center px-6 pb-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-2 md:gap-32">
          <h1 className="font-serif text-3xl md:text-4xl text-left md:text-right">
            {t("hero.amIa")}
          </h1>
          <div className="font-serif text-3xl md:text-4xl text-left h-[1.2em]">
            <span
              className={`inline-block text-accent transition-opacity ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${FADE_DURATION}ms` }}
            >
              {roles[currentIndex]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
