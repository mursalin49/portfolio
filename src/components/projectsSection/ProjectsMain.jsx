import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { projects } from "../../data/portfolioData";
import Reveal from "../common/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsMain = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="mx-auto w-full px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal direction="up" amount={0.1}>
          <ProjectsText />
        </Reveal>
        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-5 lg:gap-7">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, index) => {
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                <SingleProject
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
                  gallery={project.gallery}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

        {projects.length > 4 && (
          <motion.div
            className="mt-12 flex justify-center lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative inline-flex items-center gap-3 rounded-full border-2 border-cyan bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-cyan transition-all duration-300 hover:bg-cyan hover:text-black hover:shadow-lg hover:shadow-cyan/50"
            >
              <span>{isExpanded ? "Show Less" : "See More Projects"}</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsMain;
