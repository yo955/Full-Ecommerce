import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import ProductsSection from "@/components/common/ProdutsSection";
// import Products from "./products/page";

const HomeSection = () => {
  return (
    <article>
      <div className="home-section">
        <Sidebar />
        <Advertise />
      </div>
      <ProductsSection />
    </article>
  );
};

export default HomeSection;
