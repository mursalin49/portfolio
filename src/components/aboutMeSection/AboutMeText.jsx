import { Link } from "react-scroll";
import { FiDownload, FiEye } from "react-icons/fi";

const cvLink = "/cv/mursalin_nirob.pdf";

const AboutMeText = () => {
  return (
    <div className="flex max-w-[660px] flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange">
        About Me
      </p>
      <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
        I build mobile products that feel simple, fast, and dependable.
      </h2>
      <p className="text-lg leading-8 text-lightGrey">
        I am Md. Mursalin Hasan Nirob, a Flutter developer focused on
        cross-platform apps for Android and iOS. My core stack is Dart,
        Flutter, Firebase, SQLite, and clean UI implementation.
      </p>
      <p className="mt-5 text-lg leading-8 text-lightGrey">
        Alongside mobile development, I use Java, JavaScript, and Python to
        understand APIs, automation, and the broader product workflow. I enjoy
        turning real problems into interfaces that are easy to use and easy to
        maintain.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 md:justify-start sm:justify-center">
        <button className="flex cursor-pointer items-center gap-2 rounded-full border border-orange/60 px-5 py-3 text-lg text-white transition-all duration-300 hover:bg-orange hover:text-black">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer transition-all duration-300"
          >
            Explore Projects
          </Link>
        </button>
        <a
          href={cvLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan/50 bg-cyan px-5 py-3 text-lg font-bold text-black transition-all duration-300 hover:border-orange hover:bg-orange"
        >
          <FiEye />
          View CV
        </a>
        <a
          href={cvLink}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-lg font-bold text-white transition-all duration-300 hover:border-cyan hover:text-cyan"
        >
          <FiDownload />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
