import "./index.css";
import { FrameCanvas } from "./components/FrameCanvas";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Procesos } from "./components/Procesos";
import { ProcesosCompartidos } from "./components/ProcesosCompartidos";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <>
      {/* Layer 1: Fixed canvas background */}
      <FrameCanvas />

      {/* Layer 2: Page content */}
      <main className="relative z-10 max-md:max-w-[80%]">
        <Nav />
        <Hero />
        <About />
        <Procesos />
        <ProcesosCompartidos />
        <Contact />
      </main>

      {/* Layer 3: Noise overlay */}
      {/*<NoiseOverlay />*/}
    </>
  );
}

export default App;
