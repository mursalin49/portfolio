const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-sm font-black text-black">
        MN
      </span>
      <h1 className="text-lg font-bold text-white sm:hidden md:block">
        Mursalin Nirob
      </h1>
    </div>
  );
};

export default NavbarLogo;
