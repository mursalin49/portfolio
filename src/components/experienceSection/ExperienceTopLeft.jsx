import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex w-full max-w-[310px] flex-col gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <p className="text-center font-special text-3xl font-bold uppercase text-orange">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="7" text="Applications" />
      </div>
      <p className="text-center leading-7 text-lightGrey">
        Building user-friendly mobile applications while sharpening product
        thinking and app architecture.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
