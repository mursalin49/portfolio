import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       I’m Md. Mursalin Hasan Nirob, a Flutter Developer with a deep passion for crafting efficient, scalable, and aesthetically pleasing cross-platform mobile applications. My core expertise lies in Dart and Flutter, empowering me to build high-performance apps for both Android and iOS from a single codebase.

Beyond mobile development, I bring additional versatility to the table with proficiency in Java, JavaScript, and Python. This full-stack capability enables me to contribute to backend API development, dynamic frontend interfaces, and powerful automation scripts.

I thrive in collaborative environments, love solving real-world problems through code, and enjoy continuously exploring new technologies to stay ahead in the rapidly evolving tech landscape.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
