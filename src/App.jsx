import React from 'react';
// Force refresh after LiquidGlass removal
import ContactFooter from './components/ContactFooter';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {


    // Initialize smooth scroll
    useSmoothScroll();



    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            <Navbar />

            <Hero />

            <section className="py-24 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-slate-400 dark:text-slate-500 font-display font-semibold uppercase tracking-[0.3em] text-xs">
                        Core Expertise Below
                    </h2>
                </div>
            </section>

            <Skills />
            <Experience />
            <Projects />
            <ContactFooter />
        </div>
    );
}

export default App;
