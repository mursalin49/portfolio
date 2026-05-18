import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import Reveal from "../common/Reveal";

const ExperienceMain = () => {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-24">
      <Reveal direction="down">
        <ExperienceText />
      </Reveal>
      <Reveal direction="down" delay={0.4} amount={0}>
        <ExperienceTop />
      </Reveal>
      <AllExperiences />
    </section>
  );
};

export default ExperienceMain;
