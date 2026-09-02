import SectionHeader from "../common/SectionHeader";
import {
  LocationIcon,
  educationData,
  sectionHeaders,
} from "../../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader {...sectionHeaders.education} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {educationData.map((edu) => (
            <article
              key={edu.degree}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan/60"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                  <img
                    src={edu.logo}
                    alt={edu.institute}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="inline-flex rounded-full border border-cyan/30 px-3 py-1 text-sm font-bold text-cyan">
                  {edu.year}
                </p>
              </div>
              <h3 className="text-xl font-bold leading-7 text-white">
                {edu.degree}
              </h3>
              <p className="mt-3 text-lightGrey">{edu.institute}</p>
              {edu.gpa ? <p className="mt-3 font-bold text-orange">{edu.gpa}</p> : null}
              <p className="mt-5 flex items-center gap-2 text-sm text-lightGrey">
                <LocationIcon className="text-cyan" />
                {edu.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
