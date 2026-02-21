import React from 'react';

const Experience = () => {
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
        <section className="pt-32 pb-20 px-6" id="experience">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        SA<span className="text-primary">.</span>
                    </div>
                </div>
                <header className="mb-20">
                    <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Career Path</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Professional Experience
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                        I specialize in building accessible, high-performance web applications using React and the modern frontend ecosystem. Here's a look at my journey through top-tier engineering teams.
                    </p>
                </header>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
                    <div className="space-y-16 md:space-y-24">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-start group`}>
                                <div className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-400 dark:bg-slate-600'} z-10 hidden md:block`}></div>
                                <div className={`${idx % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                                    <span className={`text-sm font-mono ${exp.current ? 'text-primary' : 'text-slate-500'} mb-2 block`}>{exp.year}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                    <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">{exp.company} <span className="material-symbols-outlined text-sm align-middle">north_east</span></p>
                                    <div className={`flex flex-wrap ${idx % 2 === 0 ? 'md:justify-end' : ''} gap-2 mt-4`}>
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${idx % 2 === 0 ? '' : 'md:order-1'} bg-white dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 glow-hover transition-all duration-300`}>
                                    <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                                        {exp.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start">
                                                <span className="material-symbols-outlined text-primary mr-3 text-sm mt-1">arrow_forward</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
