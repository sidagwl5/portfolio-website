import { ExternalLink, Github } from "lucide-react";
import { useState, useRef } from "react";

const ProjectCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
        "--accent-color": project.color?.accent || "var(--primary)",
        "--glow-color": project.color?.glow || "rgba(59, 130, 246, 0.15)",
      }}
      className="project-card-glow group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div
        className="card-spotlight hidden md:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color?.glow || "rgba(255, 255, 255, 0.06)"}, transparent 40%)`,
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.1]"
        style={{ backgroundColor: project.color?.accent || "transparent" }}
      ></div>

      <div className="relative overflow-hidden aspect-[16/10] z-0">
        <img
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg"
            title="View Source"
            style={{ borderColor: project.color?.accent }}
          >
            <Github size={18} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary text-white hover:scale-110 transition-all shadow-lg shadow-primary/20"
            title="Live Demo"
            style={{
              backgroundColor: project.color?.accent
                ? project.color.accent.replace("0.5", "1")
                : "var(--primary)",
            }}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-md border transition-colors duration-300 ${project.color?.text || "text-primary"} ${project.color?.bg || "bg-primary/10"}`}
              style={{ borderColor: project.color?.accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="font-display text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300"
          style={{
            "--primary": project.color?.accent
              ? project.color.accent.replace("0.5", "1")
              : "var(--primary)",
          }}
        >
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors group/link"
            style={{
              "--primary": project.color?.accent
                ? project.color.accent.replace("0.5", "1")
                : "var(--primary)",
            }}
          >
            Explore Project
            <span className="material-symbols-rounded text-base transition-transform group-hover/link:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
