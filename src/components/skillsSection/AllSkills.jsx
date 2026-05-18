import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { skills } from "../../data/portfolioData";

const AllSkills = () => {
  return (
    <div className="mt-12">
      <div className="mx-auto grid max-w-[1050px] grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
              key={index}
            >
              <SingleSkill
                text={item.skill}
                Icon={item.Icon}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
