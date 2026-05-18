import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="fixed left-1/2 top-3 z-30 mx-auto flex w-full max-w-[1300px] -translate-x-1/2 gap-3 px-4">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-full border border-white/10 bg-black/75 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex items-center justify-center rounded-full border border-white/10 bg-black/75 p-5 backdrop-blur-xl lg:hidden sm:block">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
