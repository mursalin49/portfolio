import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-orange/70"
    >
      <p className="text-xl font-bold text-cyan">{experience.job}</p>
      <p className="mt-2 text-orange">{experience.company}</p>
      <p className="mt-1 text-sm text-lightGrey">{experience.date}</p>
      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-lightGrey">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
