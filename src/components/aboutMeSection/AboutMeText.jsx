import { Link } from "react-scroll";

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
      <button className="mt-10 flex cursor-pointer items-center gap-2 rounded-full border border-orange/60 px-5 py-3 text-lg text-white transition-all duration-300 hover:bg-orange hover:text-black md:self-start sm:self-center">
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
    </div>
  );
};

export default AboutMeText;
