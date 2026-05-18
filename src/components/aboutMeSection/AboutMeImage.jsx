import { FiCheckCircle, FiCode, FiLayers, FiSmartphone } from "react-icons/fi";

const buildSteps = [
  "Plan user flow",
  "Build clean widgets",
  "Connect API/Firebase",
  "Polish real device UX",
];

const AboutMeImage = () => {
  return (
    <div className="about-signal-card">
      <div className="about-signal-card__header">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange">
            How I Work
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            From idea to working app
          </h3>
        </div>
        <FiSmartphone className="text-4xl text-cyan" />
      </div>

      <div className="about-stack-orbit" aria-hidden="true">
        <div className="about-stack-orbit__core">
          <FiCode />
        </div>
        <span className="about-stack-orbit__dot about-stack-orbit__dot--one"></span>
        <span className="about-stack-orbit__dot about-stack-orbit__dot--two"></span>
        <span className="about-stack-orbit__dot about-stack-orbit__dot--three"></span>
      </div>

      <div className="mt-8 grid gap-3">
        {buildSteps.map((step, index) => (
          <div
            key={step}
            className="about-build-step"
            style={{ animationDelay: `${index * 0.16}s` }}
          >
            <FiCheckCircle className="text-xl text-cyan" />
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="about-mini-stat">
          <FiLayers className="text-2xl text-orange" />
          <p className="mt-3 text-2xl font-bold text-white">7+</p>
          <span>Apps built</span>
        </div>
        <div className="about-mini-stat">
          <FiSmartphone className="text-2xl text-cyan" />
          <p className="mt-3 text-2xl font-bold text-white">Flutter</p>
          <span>Main stack</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMeImage;
