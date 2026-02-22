import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"]
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform spring-dampened progress to a percentage for circle positioning
    const circleY = useTransform(springProgress, [0, 1], ["0%", "100%"]);

    const experiences = [
        {
            year: "2024 — PRESENT",
            role: "Senior Frontend Engineer",
            company: "Klaviyo",
            points: [
                "Leading the architectural shift to a unified design system, improving component reuse by 40% across 12 product squads.",
                "Championing WCAG 2.1 compliance, reducing accessibility-related support tickets by 60% within the first year.",
                "Mentoring 4 mid-level developers through regular pair programming and deep-dive technical RFC reviews."
            ],
            tags: ["React", "TypeScript", "Accessibility"],
            current: true
        },
        {
            year: "2018 — 2024",
            role: "Lead Engineer",
            company: "Upstatement",
            points: [
                "Delivered high-impact digital experiences for clients including Harvard, PBS, and The 19th News.",
                "Spearheaded the internal migration from REST to GraphQL, reducing frontend data fetching boilerplate by 50%.",
                "Established engineering best practices for code reviews, testing strategies, and automated CI/CD pipelines."
            ],
            tags: ["Next.js", "GraphQL", "Node.js"],
            current: false
        }
    ];

    return (
        <section className="pt-20 md:pt-32 pb-20 md:pb-32 px-6" id="experience" ref={containerRef}>
            <div className="max-w-5xl mx-auto">
                <header className="mb-12 md:mb-20">
                    <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Career Path</h2>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Professional Experience
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        I specialize in building accessible, high-performance web applications using React and the modern frontend ecosystem.
                    </p>
                </header>

                <div className="relative">
                    {/* Timeline Line Container */}
                    <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-1/2 h-[calc(100%-48px)] w-[2px] hidden md:block">
                        {/* Static Background Line */}
                        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-full" />

                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-primary origin-top rounded-full"
                            style={{ height: '100%', scaleY: springProgress }}
                        />

                        {/* Fluid Progress Circle at the tip */}
                        <motion.div
                            style={{ top: circleY }}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-zinc-950 shadow-[0_0_15px_rgba(94,234,212,0.6)] z-20 transition-colors"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-start group`}>
                                {/* No individual circles anymore */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className={`${idx % 2 === 0 ? 'md:text-right text-left pl-8 md:pl-0' : 'md:order-2 pl-8 md:pl-0'}`}
                                >
                                    <span className={`text-sm font-mono ${exp.current ? 'text-primary' : 'text-slate-500'} mb-2 block uppercase tracking-wider`}>{exp.year}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">{exp.role}</h3>
                                    <p className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 mt-1 mb-4">{exp.company}</p>
                                    <div className={`flex flex-wrap ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'} gap-2`}>
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-[0.65rem] font-mono font-bold uppercase tracking-wider rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className={`${idx % 2 === 0 ? '' : 'md:order-1'} bg-white dark:bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden`}
                                >
                                    <ul className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {exp.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                                                <span className="text-sm md:text-base">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
