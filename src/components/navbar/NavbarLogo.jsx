const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="navbar-profile-frame">
        <img
          src="/images/profile.jpeg"
          alt="Mursalin Nirob"
          className="navbar-profile-image"
        />
      </span>
      <h1 className="text-lg font-bold text-white sm:hidden md:block">
        Mursalin Nirob
      </h1>
    </div>
  );
};

export default NavbarLogo;
