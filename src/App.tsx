import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import CertsEducation from "./components/CertsEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePortfolioEffects } from "./hooks/usePortfolioEffects";

export default function App() {
  usePortfolioEffects();

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <div id="progress" />
      <div id="cursor-dot" style={{ opacity: 0 }} />
      <div id="cursor-ring" style={{ opacity: 0 }} />
      <div id="cursor-label">VIEW</div>

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
