import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <section className="flex justify-around gap-4 sm:gap-6 md:gap-8 lg:flex-row flex-col items-center px-4 my-10">
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
    </section>
  );
};

// Enhanced ServiceCard Component


export default Services;