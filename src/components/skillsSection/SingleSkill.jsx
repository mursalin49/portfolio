const SingleSkill = ({ Icon, text }) => {
  return (
    <div className="group h-full rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan/60 hover:bg-cyan/10">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-4xl text-cyan transition-all duration-300 group-hover:border-orange/70 group-hover:text-orange">
          <Icon />
        </div>
        <p className="font-bold text-white">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
