const AboutMeImage = () => {
  return (
    <div className="relative mb-6">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/10 bg-[#0b1117] shadow-[0_10px_40px_rgba(0,0,0,0.6)] md:h-48 md:w-48">
        <img
          src="/images/profile.jpeg"
          alt="Md. Mursalin Hasan Nirob"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
