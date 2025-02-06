import React from "react";
import { CustomLink, CustomPara } from "../ui";

const TopHeader = () => {
  return (
    <div className="flex justify-center items-center gap-2 bg-primary-black text-primary-white h-12">
      <div className="Text text-center text-light-gray ">
        <CustomPara>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </CustomPara>
      </div>
      <div className="underline">
        <CustomLink href="/">shop now</CustomLink>
      </div>
    </div>
  );
};

export default TopHeader;
