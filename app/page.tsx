"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import useSmoothScroll from "./hooks/useSmoothScroll";
import React from "react";

const SectionDivider: React.FC = () => (
  <div className="w-full max-w-[1080px] mx-auto px-4 md:px-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-80"></div>
  </div>
);

export default function Home() {
  // Initialize smooth scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
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
