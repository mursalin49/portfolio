import { Link } from "react-scroll";
import { navLinks } from "../../data/portfolioData";

const NavbarLinks = () => {
  return (
    <ul className="left-1/2 flex gap-5 py-4 text-center font-body text-white sm:absolute sm:top-[120%] sm:w-[calc(100%-2rem)] sm:-translate-x-1/2 sm:flex-col sm:rounded-2xl sm:border sm:border-white/10 sm:bg-black/90 sm:text-lg sm:backdrop-blur-xl lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:border-0 lg:bg-transparent lg:pr-4 lg:text-sm lg:backdrop-blur-0">
      {navLinks.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-lightGrey transition-all duration-300 hover:text-white"
            >
              {link.name}
            </Link>
            <div className="mx-auto h-[1px] w-0 bg-cyan transition-all duration-300 group-hover:w-full"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
