import "./index.css";
import { useEffect, useState } from "react";
import { FrameCanvas } from "./components/FrameCanvas";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Procesos } from "./components/Procesos";
import { ProcesosCompartidos } from "./components/ProcesosCompartidos";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { MusicButton } from "./components/MusicButton";
import { CaseStudy, CASES } from "./pages/CaseStudy";
import { NotFound } from "./pages/NotFound";
import { I18nProvider } from "./lib/i18n";

function resolveRoute(pathname: string): "home" | "case" | "not-found" {
  if (pathname === "/") return "home";
  if (pathname === "/case-study") return "case";
  const m = pathname.match(/^\/case\/([^/]+)\/?$/);
  if (m && m[1] && CASES[m[1]]) return "case";
  return "not-found";
}

function Home() {
  return (
    <>
      <FrameCanvas />
      <main className="relative z-10 max-md:max-w-[80%]">
        <Nav />
        <Hero />
        <About />
        <Procesos />
        <ProcesosCompartidos />
        <Contact />
      </main>
      <Footer />
      <NoiseOverlay />
      <MusicButton />
    </>
  );
}

export function App() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const on = () => setPath(window.location.pathname);
    window.addEventListener("popstate", on);
    return () => window.removeEventListener("popstate", on);
  }, []);

  const route = resolveRoute(path);
  return (
    <I18nProvider>
      <Loader />
      {route === "case" ? (
        <CaseStudy />
      ) : route === "not-found" ? (
        <NotFound />
      ) : (
        <Home />
      )}
    </I18nProvider>
  );
}

export default App;
