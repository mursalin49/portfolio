import { BsArrowUpRightCircleFill, BsGooglePlay } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div className={`${className} animate-pulse bg-white/5`}></div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          loading="lazy"
        />
      )}
    </>
  );
};

const ProjectVisual = ({
  image,
  name,
  type,
  accent = "cyan",
  visualLabel,
  gallery = [],
}) => {
  const accentClass = accent === "orange" ? "project-visual--orange" : "project-visual--cyan";

  return (
    <div className={`project-visual ${accentClass}`}>
      <div className="project-visual__halo"></div>
      <div className="project-visual__phone">
        {image && gallery.length === 0 ? (
          <OptimizedImage src={image} alt={`${name} preview`} className="project-visual__image" />
        ) : (
          <div className="project-visual__fallback">
            <div className="project-visual__status">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="project-visual__app-title">{visualLabel}</div>
            <div className="project-visual__tiles">
              {Array.from({ length: 4 }).map((_, index) => {
                const tileImage = gallery[index];

                return (
                  <span key={tileImage || `tile-${index}`}>
                    {tileImage ? (
                      <OptimizedImage
                        src={tileImage}
                        alt={`${name} screen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </span>
                );
              })}
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
  gallery,
}) => {
  return (
    <article
      className={`group grid w-full items-center gap-4 rounded-lg border border-white/10 bg-[#0a0f14] p-3 sm:p-4 md:gap-6 md:p-5 lg:gap-8 lg:p-6 backdrop-blur transition-all duration-300 ease-out hover:border-cyan/60 hover:bg-[#0d141a] md:grid-cols-[0.95fr_1.05fr] ${
        align === "left" ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      <ProjectVisual
        image={image}
        name={name}
        type={type}
        accent={accent}
        visualLabel={visualLabel}
        gallery={gallery}
      />

      <div className="flex flex-col">
        <p className="mb-2 inline-flex w-fit rounded-full border border-orange/30 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-orange">
          {type}
        </p>
        <h3 className="text-lg sm:text-xl font-bold leading-tight text-white md:text-2xl">
          {name}
        </h3>
        <p className="mt-1 font-special text-sm sm:text-base font-thin text-lightGrey">{year}</p>

        <ul className="mt-4 space-y-2.5 leading-6 text-sm text-lightGrey">
          {description.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href={apkLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-3 py-2 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-orange"
          >
            <BsGooglePlay className="text-xs sm:text-sm" />
            <span className="hidden sm:inline">App</span>
            <BsArrowUpRightCircleFill className="text-xs sm:text-sm" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-cyan hover:text-cyan"
          >
            <FaGithub className="text-xs sm:text-sm" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
