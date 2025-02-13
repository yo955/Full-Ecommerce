const SectionTitle = ({ para = "Today’s", title = "Flash Sales" }) => {
  return (
    <div className="max-w-[211px] max-h-[80px] flex flex-col gap-6  ">
      <div className="title-head w-[100px] h-10 grid grid-cols-3 items-center">
        <div className="color bg-red-700 span-1 w-5 h-10 rounded "></div>
        <p className="text span-2 text-red-600 font-semibold">{para}</p>
      </div>
      <div className="title-body h-10 w-full ">
        <h2 className="text-4xl">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
