import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="rounded-full border border-cyan/40 p-3 text-2xl text-cyan transition-colors duration-300 hover:border-orange hover:text-orange"
      onClick={setToggleMenu}
      aria-label="Toggle navigation"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
