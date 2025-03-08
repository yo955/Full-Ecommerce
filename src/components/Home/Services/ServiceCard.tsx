interface prarTypes {
  head: string;
  para: string;
  icon?: React.ElementType;
}
const ServiceCard = ({ head, para, icon: Icon }: prarTypes) => {
  return (
    <div className="flex flex-col justify-center text-center items-center mb-5 ">
      <div className="rounded-full w-14 h-14 bg-slate-300 flex justify-center items-center mb-3">
        <div className="rounded-full w-10 h-10 bg-black flex justify-center items-center text-white text-xl">
          {/* <TbTruckDelivery /> */}
          {Icon && <Icon />}
        </div>
      </div>
      <h4 className="font-semibold">{head}</h4>
      <p className="text-xs mt-1">{para}</p>
    </div>
  );
};

export default ServiceCard;
