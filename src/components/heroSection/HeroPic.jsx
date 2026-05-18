import { FiDatabase, FiShield, FiSmartphone, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const flowItems = [
  { label: "Flutter UI", Icon: FiSmartphone },
  { label: "Secure Auth", Icon: FiShield },
  { label: "REST API", Icon: FiDatabase },
  { label: "Realtime UX", Icon: FiZap },
];

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="relative flex h-full items-center justify-center lg:justify-end"
    >
      <div className="hero-info-showcase relative w-full max-w-[500px]">
        <div className="hero-info-card">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan">
                App Systems
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Mobile product workflow
              </h2>
            </div>
            <div className="hero-live-pill">
              <span></span>
              Building
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {flowItems.map((item, index) => (
              <div
                key={item.label}
                className="hero-flow-item"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <item.Icon className="text-2xl text-cyan" />
                <div>
                  <p className="font-bold text-white">{item.label}</p>
                  <p className="text-sm text-lightGrey">
                    {index % 2 === 0 ? "Clean structure" : "Product ready"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-phone-system mt-8">
            <div className="hero-phone-frame">
              <div className="hero-phone-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="hero-phone-title">Sprint Board</div>
              <div className="hero-progress-row">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="hero-mini-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="hero-system-lines" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="hero-floating-note hero-floating-note--left">
          <span>01</span>
          Auth, roles, API flow
        </div>
        <div className="hero-floating-note hero-floating-note--right">
          <span>02</span>
          UI, booking, realtime data
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
