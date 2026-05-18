import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  amount = 0.2,
  className = "",
}) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
