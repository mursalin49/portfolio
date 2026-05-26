import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-cyan/50 bg-cyan px-4 py-2 text-base font-bold text-black transition-all duration-300 hover:border-orange hover:bg-orange">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
