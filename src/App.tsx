import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Manifesto from "./components/sections/Manifesto";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Experience from "./components/sections/Experience";
import Writing from "./components/sections/Writing";
import CertsEducation from "./components/sections/CertsEducation";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Overlays from "./components/ui/Overlays";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects";

export default function App() {
  usePortfolioEffects();

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <Overlays />
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Writing />
      <CertsEducation />
      <Contact />
      <Footer />
    </div>
  );
}
