import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { fadeIn } from "../../framerMotion/variants";
import { heroStats } from "../../data/portfolioData";

const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-7 md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-sm uppercase tracking-[0.35em] text-cyan md:text-base"
      >
        Flutter Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="max-w-[760px] text-5xl font-bold leading-[1.02] text-white md:text-[4.3rem] lg:text-[5.4rem]"
      >
        Md. Mursalin Hasan <span className="text-orange">Nirob</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="max-w-[620px] text-lg leading-8 text-lightGrey md:text-xl"
      >
        I design and build clean, scalable Flutter applications with practical
        backend thinking, polished interfaces, and a bias for shipping useful
        products.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap items-center gap-4 md:justify-start sm:justify-center"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-cyan px-6 py-3 text-base font-bold text-black transition-all duration-300 hover:bg-orange"
        >
          View Projects
          <BsArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
        <a
          href="https://github.com/mursalin49"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:border-cyan hover:text-cyan"
        >
          <FaGithub />
          GitHub
        </a>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="grid max-w-[600px] grid-cols-3 gap-3 pt-4"
      >
        {heroStats.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur"
          >
            <p className="text-2xl font-bold text-white">{item.value}</p>
            <p className="mt-1 text-sm uppercase text-lightGrey">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
