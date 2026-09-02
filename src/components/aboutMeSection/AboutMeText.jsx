import { Link } from "react-scroll";
import { FiDownload, FiEye, FiArrowRight } from "react-icons/fi";

const cvLink = "/cv/mursalin_nirob.pdf";

const AboutMeText = () => {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        About Me
      </h2>

     <p className="mt-6 text-base leading-relaxed text-lightGrey md:text-[1.1rem] md:leading-8">
  I’m Md. Mursalin Hasan Nirob, a Flutter Developer specializing in building
  high-quality, cross-platform mobile applications for Android and iOS. With
  hands-on experience in production-level applications, I work primarily with
  Flutter, Dart, Firebase, REST APIs, and modern state management solutions.
  I focus on creating responsive, scalable, and maintainable applications with
  clean architecture and intuitive user experiences.
</p>

<p className="mt-4 text-base leading-relaxed text-lightGrey md:text-[1.1rem] md:leading-8">
  Beyond mobile development, I have experience working with Java, JavaScript,
  Python, and backend technologies, which helps me understand the complete
  product development workflow—from API integration and data management to
  application performance and deployment. I enjoy transforming real-world
  problems into reliable digital solutions that are simple, efficient, and
  built for long-term scalability.
</p>


      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-orange/60 bg-orange/10 px-5 py-2.5 text-sm font-semibold text-orange transition-all duration-300 hover:scale-[1.02] hover:bg-orange hover:text-black md:text-base"
        >
          Explore Projects
          <FiArrowRight />
        </Link>

        <a
          href={cvLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan/50 bg-cyan px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:border-orange hover:bg-orange md:text-base"
        >
          <FiEye className="text-lg" />
          View CV
        </a>

        <a
          href={cvLink}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-cyan hover:bg-white/10 hover:text-cyan md:text-base"
        >
          <FiDownload className="text-lg" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
