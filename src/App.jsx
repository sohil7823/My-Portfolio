import "./App.css";
import { useTheme } from "./hooks/useTheme";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyHireMe />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
