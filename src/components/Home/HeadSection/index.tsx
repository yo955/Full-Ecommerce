import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";
import Products from "./products/page";


const HomeSection = () => {
  return (
    <article className="home-section">
      <Sidebar />
      <Advertise />
      <Products />
    </article>
  );
};

export default HomeSection;
