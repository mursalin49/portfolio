const SubSkills = () => {
  return (
    <div className="relative h-[260px] overflow-hidden border-y border-white/10 md:h-[360px]">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/35 to-cyan/35"></div>
      <img
        src="images/subSkills.jpg"
        alt="subSkills image"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-20 mx-auto flex max-w-[1200px] items-center px-4">
        <p className="max-w-[520px] text-3xl font-bold leading-tight text-white md:text-5xl">
          Building apps with thoughtful UI, reliable data, and maintainable
          code.
        </p>
      </div>
    </div>
  );
};

export default SubSkills;
