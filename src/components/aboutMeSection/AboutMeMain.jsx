import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import Reveal from "../common/Reveal";


const AboutMeMain = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-[1200px] items-center justify-between gap-12 px-4 py-28 md:flex-row sm:flex-col"
    >
      <Reveal direction="right">
        <AboutMeText />
      </Reveal>
      <Reveal direction="left">
        <AboutMeImage />
      </Reveal>
    </section>
  );
};

export default AboutMeMain;
