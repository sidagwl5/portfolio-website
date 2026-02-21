import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactFooter from './components/ContactFooter';
import Navbar from './components/Navbar';

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

    const toggleTheme = () => {
        if (!document.startViewTransition) {
            setIsDark(!isDark);
            return;
        }

        document.startViewTransition(() => {
            setIsDark(!isDark);
        });
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            <Navbar isDark={isDark} setIsDark={toggleTheme} currentTime={currentTime} />

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
