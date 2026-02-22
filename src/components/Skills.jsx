import { skillsData } from '../data/skillsData';

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24" id="skills">
            <header className="mb-12 md:mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold">{skillsData.header.badge}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                    {skillsData.header.title.main} <span className="text-primary">{skillsData.header.title.accent}</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
                    {skillsData.header.description}
                </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skillsData.categories).map(([category, items]) => (
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
