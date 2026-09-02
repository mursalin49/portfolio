import HeroText from "./HeroText";
import HeroThreeScene from "./HeroThreeScene";

const HeroMain = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      <HeroThreeScene />
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0c1218]/90 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.4)] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            </span>
            Available for work!
          </div>
        </div>

        <div className="w-full max-w-[760px]">
          <HeroText />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
