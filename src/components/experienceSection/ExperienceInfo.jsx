const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-5xl font-bold text-cyan">{number}</p>
      <p className="mt-1 text-sm font-bold uppercase text-lightGrey">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
