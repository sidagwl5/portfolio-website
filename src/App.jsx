import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactFooter from './components/ContactFooter';

function App() {
    const [isDark, setIsDark] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-GB', { hour12: false }));

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Update time
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
        }, 1000);

        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return () => {
            lenis.destroy();
            clearInterval(timer);
        };
    }, [isDark]);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
                <div className="hidden md:block pointer-events-auto">
                    <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400 dark:text-slate-500">IND/IST</span>
                </div>
                <nav className="pointer-events-auto">
                    <div className="nav-pill flex items-center gap-1 bg-white/70 dark:bg-zinc-900/80 border border-slate-200/50 dark:border-zinc-800/50 rounded-full px-2 py-1.5 shadow-sm">
                        <a className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center" href="#">
                            <span className="material-symbols-rounded text-slate-600 dark:text-slate-300">home</span>
                        </a>
                        <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 mx-1"></div>
                        <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#skills">
                            <span className="material-symbols-rounded text-slate-400">person</span>
                            About
                        </a>
                        <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#experience">
                            <span className="material-symbols-rounded text-slate-400">grid_view</span>
                            Work
                        </a>
                        <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#projects">
                            <span className="material-symbols-rounded text-slate-400">image</span>
                            Gallery
                        </a>
                        <a className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-xs font-medium text-slate-600 dark:text-slate-300" href="#contact">
                            <span className="material-symbols-rounded text-slate-400">mail</span>
                            Contact
                        </a>
                        <div className="h-4 w-px bg-slate-200 dark:bg-zinc-800 mx-1"></div>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center text-slate-600 dark:text-slate-300"
                        >
                            <span className="material-symbols-rounded">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                    </div>
                </nav>
                <div className="hidden md:block pointer-events-auto">
                    <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400 dark:text-slate-500">
                        {currentTime}
                    </span>
                </div>
            </header>

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
