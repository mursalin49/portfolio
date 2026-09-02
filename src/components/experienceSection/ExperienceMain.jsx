import AllExperiences from "./AllExperiences";
import Reveal from "../common/Reveal";

const ExperienceMain = () => {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-20 lg:py-24">
      <Reveal direction="down">
        <div className="mb-12 lg:mb-16 text-center">
          <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-orange">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Growth
          </h2>
          <p className="mx-auto max-w-[620px] text-sm sm:text-base text-lightGrey">
            Building production-ready applications through hands-on work at SparkTech Agency and academic research projects across multiple technologies.
          </p>
        </div>
      </Reveal>
      <AllExperiences />
    </section>
  );
};

export default ExperienceMain;
