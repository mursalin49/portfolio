const SingleInfo = ({ text, Icon }) => {
  return (
    <div className="flex items-center justify-start gap-4 text-lightGrey">
      <Icon className="text-3xl text-cyan" />
      <p className="break-all">{text}</p>
    </div>
  );
};

export default SingleInfo;
