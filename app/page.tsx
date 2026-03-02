import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import SmoothScroll from "./components/SmoothScroll";
import SectionDivider from "./components/ui/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <SmoothScroll />
      <Navbar />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Testimonials />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <ContactFooter />
    </div>
  );
}
