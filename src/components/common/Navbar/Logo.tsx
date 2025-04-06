import React from "react";
import CustomImg from "../ui/CustomImg";

const Logo = () => {
  return (
    <CustomImg
      src="/images/nav-logo.png"
      alt="nav-logo"
      width={150}
      height={150}
      className="w-[7rem] md:w-[10rem] lg:w-[12rem] "
    />
  );
};

export default Logo;
