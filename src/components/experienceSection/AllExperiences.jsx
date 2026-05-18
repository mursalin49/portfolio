import SingleExperience from "./SingleExperience";
import { experiences } from "../../data/portfolioData";

const AllExperiences = () => {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
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
