import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Nova Analytics Dash",
            description: "A real-time data visualization platform processing millions of events daily. Features custom WebGL charts and a modular widget system.",
            tags: ["React", "TypeScript", "D3.js"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABHVzMq_YZbYwzJ12CI1MoulnbYwKFThSJELhEbSvwKyjabWfK2I9v4yBNCtbHaUaEpiexolqu2W94czfGtaxhwwfVHiw4KuzbcRI010KPslAChHjrN20ghpRlhLuhbqdUovy_ifFM_4RDYSOsoGnESZbp20PZOK81TMwHxezPzLDjfogm57tjFoUNl_oH-6nZzDd8aOkhK1nkXJpCl6vVmoNMC1Bm_Oa-On0y_som1n_RE9LZkTP6TRcC2XLRvGtSS24M2ycOO_cj",
            link: "#",
            github: "#",
            icon: "open_in_new"
        },
        {
            title: "Vortex SaaS Engine",
            description: "A complete enterprise CRM solution focused on collaborative workflows. Built with complex state management and optimistic UI updates.",
            tags: ["Next.js", "Redux", "Tailwind"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9f20X3PbMKOK7grfmVraea0fLkl4T-6S928_MASO21kw1kiKwHlKVY9NmoiQgn6QLY22zR2awbzsb5EO3yLSTrjtTPBFsfl0TIvrjyWINCTisJY2_Efu1ROtP-DCAUZReG7L5ImQGxGgvfeYwj6-_a7DEFasksv18TdJ9c_sD_yzKD-z5leXlPYMZPz6IUY5YqmnfeEyQ7qwy53agJsr7ho1MGgme047kxeuHOogHdB9ewFUnOsGgzCw37TC_jxojGrYInGkxNt0e",
            link: "#",
            github: "#",
            icon: "rocket_launch"
        },
        {
            title: "Lumina E-store",
            description: "An ultra-fast headless e-commerce experience with integrated Stripe payments. Achieved a perfect 100 Lighthouse score.",
            tags: ["Next.js 14", "Sanity CMS", "Stripe"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiIcDZD_yN9tSAHXMmQBo_yMcctHMdExNdLyY1dgyAj3iuZg5YbUhMRSoU-JXe5KloOLif3Bb9oFrtHC6-W5YgZPeb2h7HEkPEvnuumo_E97aAbvaXM-7NWmwKLGx5nuk1-NLlWp-vqHfebDxEFxvsN25wrRR0PvWHIr5imcfw5biVimqbY8mmXEIyLoxynWBku92aNCD8QjrLl2mhJbqP7eloIKoyp-sNSPQfi08ZssM3pmOJThRKxs_4Cc7F7zFV-WM1KVD4t5UA",
            link: "#",
            github: "#",
            icon: "shopping_bag"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20" id="projects">
            <div className="mb-16">
                <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary-blue mb-3">Portfolio</h2>
                <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    Featured Projects
                </h1>
                <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    A selection of high-performance web applications built with React, Tailwind, and modern frontend architectures. Focused on accessibility and pixel-perfect execution.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <article key={project.title} className="project-card-glow group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
                        <div className="relative overflow-hidden aspect-video">
                            <img alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src={project.image} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary-blue transition-colors" href={project.link}>
                                    <span className="material-symbols-outlined text-lg">{project.icon}</span>
                                    Live Demo
                                </a>
                                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary-blue transition-colors" href={project.github}>
                                    <span className="material-symbols-outlined text-lg">code</span>
                                    Source
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Projects;
