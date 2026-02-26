import { projectsData } from "../data/projectsData";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-[1080px] mx-auto px-6 pt-[72px] pb-16 md:pt-[92px] md:pb-20">
        <SectionHeader
          badge={projectsData.header.badge}
          title={projectsData.header.title}
          description={projectsData.header.description}
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
