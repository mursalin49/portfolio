import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <section id="about" className="relative mx-auto max-w-[1000px] px-4 py-16 md:py-24">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center text-center"
      >
        <AboutMeImage />
        <AboutMeText />
      </motion.div>
    </section>
  );
};

export default AboutMeMain;
