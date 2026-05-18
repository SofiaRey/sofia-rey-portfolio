import { useState, useEffect } from "react";

const ROLES = [
  "developer?",
  "ux designer?",
  "video editor?",
  "community manager?",
  "photographer?",
  "professor?",
  "entrepreneur?",
  "speaker?",
  "multimedia designer?",
];

const INTERVAL = 1800;
const FADE_DURATION = 250;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        setIsVisible(true);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-end justify-center px-6 pb-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-2 md:gap-32">
          <h1 className="font-serif text-3xl md:text-4xl text-left md:text-right">
            am i a
          </h1>
          <div className="font-serif text-3xl md:text-4xl text-left h-[1.2em]">
            <span
              className={`inline-block text-accent transition-opacity ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${FADE_DURATION}ms` }}
            >
              {ROLES[currentIndex]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
