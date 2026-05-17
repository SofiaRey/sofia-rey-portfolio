import { useState, useEffect } from "react";

const ROLES = [
  "diseñadora",
  "video editor",
  "photographer",
  "ux designer",
  "graphic designer",
];

const INTERVAL = 3000; // 3 seconds per word

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        setIsAnimating(false);
      }, 400); // transition duration
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative z-10 min-h-screen flex items-end justify-center px-6 pb-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-32">
          <h1 className="font-serif text-3xl md:text-4xl text-right">
            soy
          </h1>
          <div className="font-serif text-3xl md:text-4xl text-left overflow-hidden h-[1.2em] relative">
            <span
              className={`inline-block text-accent transition-transform duration-400 ease-in-out ${
                isAnimating ? "-translate-y-full" : "translate-y-0"
              }`}
            >
              {ROLES[currentIndex]}
            </span>
            <span className="text-accent">?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
