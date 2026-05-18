import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="mt-12 flex items-center justify-center gap-6 lg:flex-row sm:flex-col">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
