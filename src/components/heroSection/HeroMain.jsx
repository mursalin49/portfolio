import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroThreeScene from "./HeroThreeScene";

const HeroMain = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-36 pb-16">
      <HeroThreeScene />
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="relative z-10 grid min-h-[calc(100vh-9rem)] max-w-[1200px] mx-auto grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-12 px-4">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
