import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { projects } from "../../data/portfolioData";
import Reveal from "../common/Reveal";

const ProjectsMain = () => {
  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-4 py-24">
      <Reveal direction="up" amount={0.1}>
        <ProjectsText />
      </Reveal>
      <div className="mx-auto mt-12 flex max-w-[980px] flex-col gap-8">
        {projects.map((project) => {
          return (
            <SingleProject
              key={project.name}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              apkLink={project.apkLink}
              githubLink={project.githubLink}
              type={project.type}
              description={project.description}
              accent={project.accent}
              visualLabel={project.visualLabel}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsMain;
