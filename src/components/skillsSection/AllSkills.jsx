import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { skillsCategories } from "../../data/portfolioData";

const AllSkills = () => {
  return (
    <div className="mt-16 lg:mt-20">
      <div className="mx-auto max-w-[1050px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsCategories.map((categoryItem, categoryIndex) => (
            <motion.div
              key={categoryItem.category}
              variants={fadeIn("up", categoryIndex * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
              className="space-y-4"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-white mb-3 md:mb-4">
                {categoryItem.category}
              </h3>
              
              {/* Skills for this category */}
              <div className="flex flex-wrap gap-2">
                {categoryItem.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-lightGrey transition-all duration-300 hover:border-cyan hover:bg-cyan/10 hover:text-cyan cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
