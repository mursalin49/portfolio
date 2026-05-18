import { BsArrowUpRightCircleFill, BsGooglePlay } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectVisual = ({ image, name, type, accent = "cyan", visualLabel }) => {
  const accentClass = accent === "orange" ? "project-visual--orange" : "project-visual--cyan";

  return (
    <div className={`project-visual ${accentClass}`}>
      <div className="project-visual__halo"></div>
      <div className="project-visual__phone">
        {image ? (
          <img src={image} alt={`${name} preview`} className="project-visual__image" />
        ) : (
          <div className="project-visual__fallback">
            <div className="project-visual__status">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="project-visual__app-title">{visualLabel}</div>
            <div className="project-visual__tiles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="project-visual__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="project-visual__badge">{type.split(",")[0]}</div>
    </div>
  );
};

const SingleProject = ({
  name,
  year,
  align,
  image,
  apkLink,
  githubLink,
  type,
  description,
  accent,
  visualLabel,
}) => {
  return (
    <article
      className={`group grid w-full items-center gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-cyan/60 md:grid-cols-[0.95fr_1.05fr] ${
        align === "left" ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      <ProjectVisual
        image={image}
        name={name}
        type={type}
        accent={accent}
        visualLabel={visualLabel}
      />

      <div className="flex flex-col">
        <p className="mb-3 inline-flex w-fit rounded-full border border-orange/30 px-3 py-1 text-sm font-bold text-orange">
          {type}
        </p>
        <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
          {name}
        </h3>
        <p className="mt-2 font-special text-lg font-thin text-lightGrey">{year}</p>

        <ul className="mt-5 space-y-3 leading-7 text-lightGrey">
          {description.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={apkLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-4 py-2 font-bold text-black transition-all duration-300 hover:bg-orange"
          >
            <BsGooglePlay />
            APK
            <BsArrowUpRightCircleFill />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-cyan hover:text-cyan"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
