import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  { id: "inicio", label: "INICIO" },
  { id: "sobre-mi", label: "SOBRE MÍ" },
  { id: "procesos", label: "PROCESOS" },
  { id: "contacto", label: "CONTACTO" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    // Observe all sections after a short delay (DOM needs to be ready)
    const timeout = setTimeout(() => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) observerRef.current?.observe(el);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="font-serif italic text-xl tracking-wide cursor-pointer border-none bg-transparent"
          >
            sofía
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-xs tracking-widest cursor-pointer border-none bg-transparent transition-colors duration-200 ${
                  activeSection === section.id
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer border-none bg-transparent p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex items-center justify-center transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`font-serif italic text-2xl tracking-wide cursor-pointer border-none bg-transparent transition-colors duration-200 ${
                activeSection === section.id
                  ? "text-accent"
                  : "text-foreground"
              }`}
            >
              {section.label.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
