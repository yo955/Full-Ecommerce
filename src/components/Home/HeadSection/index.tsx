import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import SectionLayout from "@/components/common/ProdutsSection";
import SwiperButton from "@/components/common/ProdutsSection/SwiperButton";

// import Products from "./products/page";

const HomeSection = () => {
  return (
    <article>
      <div className="home-section">
        <Sidebar />
        <Advertise />
      </div>
      <SectionLayout>
        <SwiperButton />
      </SectionLayout>
    </article>
  );
};

export default HomeSection;
