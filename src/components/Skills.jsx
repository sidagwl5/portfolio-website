import React from 'react';

const Skills = () => {
    const skills = {
        Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion'],
        Tools: ['Git & GitHub', 'Webpack', 'Vite', 'Postman', 'Vercel'],
        Testing: ['Jest', 'Cypress', 'Testing Library', 'Playwright'],
        DevOps: ['Docker', 'AWS (S3/EC2)', 'CI/CD Pipelines', 'Nginx', 'Firebase']
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-24" id="skills">
            <header className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold">Technical Stack</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Skills & <span className="text-primary">Expertise.</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                    As a React specialist, I focus on building pixel-perfect, accessible, and high-performance web applications using modern industry-standard tools and practices.
                </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <section key={category} className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="material-icons-round text-primary">
                                {category === 'Frontend' ? 'terminal' : category === 'Tools' ? 'build' : category === 'Testing' ? 'rule' : 'cloud_queue'}
                            </span>
                            <h2 className="text-xl font-semibold tracking-tight">{category}</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <div key={skill} className="skill-badge group flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50 dark:hover:border-primary/50 glow-hover cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    <span className="text-sm font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Skills;
