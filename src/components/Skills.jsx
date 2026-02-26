import { skillsData } from "../data/skillsData";
import SectionHeader from "./ui/SectionHeader";

const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-[1080px] mx-auto px-6 pt-[72px] pb-16 md:pt-[108px] md:pb-24">
        <SectionHeader
          badge={skillsData.header.badge}
          title={
            <>
              {skillsData.header.title.main}{" "}
              <span>{skillsData.header.title.accent}</span>
            </>
          }
          description={skillsData.header.description}
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData.categories).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-icons-round text-primary">
                  {category === "Frontend"
                    ? "terminal"
                    : category === "Tools"
                      ? "build"
                      : category === "Testing"
                        ? "rule"
                        : "cloud_queue"}
                </span>
                <h2 className="text-xl font-semibold tracking-tight">
                  {category}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="skill-badge group flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50 dark:hover:border-primary/50 glow-hover cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
