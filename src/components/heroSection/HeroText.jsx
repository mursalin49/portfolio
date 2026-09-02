import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <>
      {/* Main Headline */}
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-[1.85rem] font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-[2.3rem] md:text-[2.85rem] lg:text-[3.25rem]"
      >
        Hi, I'm a{" "}
        <span className="bg-gradient-to-r from-[#ff4d79] via-[#ff2a6d] to-[#e11d48] bg-clip-text text-transparent font-bold">
          Flutter Developer
        </span>{" "}
        who builds production-ready apps and ships what works.
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="mx-auto mt-5 max-w-[580px] text-sm leading-relaxed text-white/70 sm:text-base md:text-base md:leading-7"
      >
        Computer Science student & Flutter developer building cross-platform mobile apps for Android and iOS. Focused on clean architecture, responsive UI, and shipping products that users love.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="mt-7 flex flex-wrap items-center justify-center gap-3"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
        >
          Get in touch
          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <a
          href="https://www.linkedin.com/in/mursalin-nirob-388942390/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition-all duration-300 hover:border-pink-500 hover:bg-white/10 hover:text-pink-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/mursalin49"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition-all duration-300 hover:border-pink-500 hover:bg-white/10 hover:text-pink-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </motion.div>
    </>
  );
};

export default HeroText;
