import SingleExperience from "./SingleExperience";
import { experiences } from "../../data/portfolioData";

const AllExperiences = () => {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-[14.2fr_1fr]">
      {experiences.map((experience, index) => (
        <SingleExperience
          key={experience.job}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
};

export default AllExperiences;
