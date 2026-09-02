import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`h-full rounded-lg border p-4 backdrop-blur transition-all duration-300 hover:-translate-y-2 ${
        index === 0
          ? "border-cyan/40 bg-cyan/[0.05] shadow-[0_0_30px_rgba(53,208,186,0.14)] hover:border-cyan/70"
          : "border-white/10 bg-white/[0.04] hover:border-orange/70"
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
          <img
            src={experience.logo}
            alt={experience.company}
            className="h-full w-full object-contain"
          />
        </div>
        <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-cyan" : "text-orange/80"}`}>
          {experience.date}
        </p>
      </div>
      <p className={`text-xl font-bold sm:text-[1.35rem] ${index === 0 ? "text-cyan" : "text-white"}`}>
        {experience.job}
      </p>
      {experience.company ? <p className="mt-1 text-sm font-semibold text-orange sm:text-base">{experience.company}</p> : null}
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-lightGrey sm:text-[15px]">
        {experience.responsibilities.map((resp, idx) => {
          return <li key={idx}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
