import React from "react";
import CustomImg from "../ui/CustomImg";

const Logo = () => {
  return (
    <CustomImg
      src="/images/nav-logo.png"
      alt="nav-logo"
      width={150}
      height={150}
      className="min-w-48"
      
    />
  );
};

export default Logo;
