import ServiceCard from "./ServiceCard";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";


const Services = () => {
  return (
    <div className="flex justify-around  gap-8 tab-large-screen:gap-6 custom-sm:flex-col custom-sm:items-center custom-sm:gap-4">
    <ServiceCard
      head="FREE AND FAST DELIVERY"
      para="Free delivery for all orders over $140"
      icon={TbTruckDelivery}
    />
    <ServiceCard
      head="24/7 CUSTOMER SERVICE"
      para="Friendly 24/7 customer support"
      icon={FaHeadphones}
    />
    <ServiceCard
      head="MONEY BACK GUARANTEE"
      para="We return money within 30 days"
      icon={BsShieldCheck}
    />
  </div>
  

  );
};

export default Services;
