import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Advertise from "./advertise/Advertise";


const HomeSection = () => {
  return (
    <article className="home-section">
      <Sidebar />
      <Advertise />
    </article>
  );
};

export default HomeSection;
