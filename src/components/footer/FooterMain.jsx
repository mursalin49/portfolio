import { Link } from "react-scroll";
import { navLinks } from "../../data/portfolioData";

const FooterMain = () => {
  return (
    <footer className="px-4">
      <div className="mt-12 h-[1px] w-full bg-white/10"></div>
      <div className="mx-auto mt-6 hidden max-w-[1200px] justify-between md:flex">
        <p className="text-2xl font-bold text-white">Md. Mursalin Hasan Nirob</p>
        <ul className="flex gap-4 text-lg text-lightGrey">
          {navLinks.map((item) => (
            <li key={item.section}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="cursor-pointer transition-all duration-300 hover:text-cyan"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mb-12 mt-4 max-w-[1200px] text-right text-sm text-lightGrey">
        Copyright 2026 Nirob. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
