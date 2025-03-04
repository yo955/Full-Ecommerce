import PathLinks from "@/components/common/ui/PathLinks";
// import Link from "next/link";
import React from "react";
import SideBarUl from "./SideBarUl";

interface MenuItem {
  title: string;
  lis?: string[];
}

const uls: MenuItem[] = [
  {
    title: "Manage My Account",
    lis: ["My Profile", "Address Book", "Ny Payment Options"],
  },
  {
    title: "My Orders",
    lis: ["My Returns", "My Cancellations"],
  },
  {
    title: "My WishList",
    
  },
];
const Accountpage = () => {
  return (
    <div className="my-28 mx-auto w-[80%]">
      <div className=" flex justify-between ">
        <PathLinks titles={["My Account"]} />
        <h5 className="text-xs font-extralight">
          Welcome! <span className="text-red-600">ya 3lk</span>
        </h5>
      </div>
      <div className="my-12 flex gap-10">
        <div className="sidebar flex flex-col gap-4">
          {uls.map((i, index) => (
            <SideBarUl key={index} title={i.title} theLink={i.lis} />
          ))}
        </div>
        <div>
          <h1>section</h1>
        </div>
      </div>
    </div>
  );
};

export default Accountpage;
