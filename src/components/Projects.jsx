import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section id="projects">
            <div className="max-w-[1080px] mx-auto px-6 py-16 md:py-20">
                <div className="mb-12 md:mb-16">
                    <h2 className="font-display text-xs md:text-sm font-semibold tracking-widest uppercase text-primary-blue mb-3">{projectsData.header.badge}</h2>
                    <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
                        {projectsData.header.title}
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {projectsData.header.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.projects.map((project) => (
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
        </section>
    );
};

export default Projects;
