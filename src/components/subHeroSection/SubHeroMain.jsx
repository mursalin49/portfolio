import { heroHighlights } from "../../data/portfolioData";

const SubHeroMain = () => {
  return (
    <section className="border-y border-white/10 px-4 py-6 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-4 md:justify-between">
        {heroHighlights.map((quality) => (
          <p
            key={quality}
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-lightGrey"
          >
            {quality}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SubHeroMain;
