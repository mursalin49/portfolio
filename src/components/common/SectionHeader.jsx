const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange">
        {eyebrow}
      </p>
      <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-8 text-lightGrey">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
