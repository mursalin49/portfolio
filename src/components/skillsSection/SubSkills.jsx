import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

const insightItems = [
  { label: "UI Flow", value: "Clean", Icon: FiSmartphone },
  { label: "Data", value: "Reliable", Icon: FiDatabase },
  { label: "API", value: "Ready", Icon: FiRefreshCw },
  { label: "Code", value: "Modular", Icon: FiCode },
];

const SubSkills = () => {
  return (
    <div className="sub-skills-showcase relative min-h-[430px] overflow-hidden border-y border-white/10">
      <div className="sub-skills-grid" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[920px] items-center justify-center px-4 py-14">
        <div className="sub-skills-info" aria-hidden="true">
          <div className="sub-skills-orbit">
            <span></span>
            <span></span>
          </div>
          <div className="sub-skills-phone">
            <div className="sub-skills-phone__top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <FiLayers className="sub-skills-phone__icon" />
            <div className="sub-skills-phone__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="sub-skills-phone__secure">
              <FiShield />
              Secure
            </div>
          </div>
          <div className="sub-skills-signal sub-skills-signal--one"></div>
          <div className="sub-skills-signal sub-skills-signal--two"></div>
          <div className="sub-skills-insights">
            {insightItems.map(({ label, value, Icon }, index) => (
              <div
                className="sub-skills-insight"
                key={label}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <Icon />
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSkills;
