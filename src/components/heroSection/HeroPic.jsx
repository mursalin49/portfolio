import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="relative flex h-full items-center justify-center"
    >
      <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan/20 blur-2xl" />
            <img
              src="/images/profile.jpeg"
              alt="Mursalin Nirob"
              className="relative h-44 w-44 rounded-full border-4 border-cyan/40 object-cover shadow-[0_0_30px_rgba(53,208,186,0.35)] sm:h-52 sm:w-52"
            />
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-400">
              Flutter Developer
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Mursalin Nirob</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "12+ Apps",
              "1+ Years",
              "Production Ready",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-lightGrey"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
