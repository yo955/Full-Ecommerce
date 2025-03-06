const SectionTitle = ({ para = "", title = "" }) => {
  return (
    <div className="w-full max-h-[80px] flex flex-col gap-6  ">
      {para && (
        <div className="title-head w-[115px] h-10 grid grid-cols-3 items-center">
          <div className="color bg-red-700 span-1 w-5 h-10 rounded "></div>
          <p className="text-base leading-5 span-2 w-24  text-red-600 font-semibold">
            {para}
          </p>
        </div>
      )}
      {title && (
        <div className="title-body h-10 w-full ">
          <h2 className="text-4xl">{title}</h2>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
