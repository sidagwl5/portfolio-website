import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card-glow group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <a
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
            href={project.link}
          >
            <span className="material-symbols-outlined text-lg">
              {project.icon}
            </span>
            Live Demo
          </a>
          <a
            className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
            href={project.github}
          >
            <span className="material-symbols-outlined text-lg">code</span>
            Source
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
