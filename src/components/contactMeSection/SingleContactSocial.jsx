const SingleContactSocial = ({ Icon, link, label }) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange/50 p-3 text-2xl text-orange transition-all duration-300 hover:border-cyan hover:text-cyan">
      <a
        href={link}
        className="cursor-pointer"
        target="_blank"
        rel="noreferrer"
        aria-label={label}
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
