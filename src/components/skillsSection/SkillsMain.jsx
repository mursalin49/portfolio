import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import Reveal from "../common/Reveal";

const SkillsMain = () => {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal direction="down" delay={0.2}>
          <SkillsText />
        </Reveal>
        <AllSkills />
      </div>
    </section>
  );
};

export default SkillsMain;
