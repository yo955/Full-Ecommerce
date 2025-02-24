import CustomList from "@/components/common/ui/CustomList";
import React from "react";

const Items = [
  { title: "Woman’s Fashion", href: "/women-fashion" },
  { title: "Men’s Fashion", href: "/mens-fashion" },
  { title: "Electronics", href: "/electronics" },
  { title: "Home & Lifestyle", href: "/home-lifestyle" },
  { title: "Medicine", href: "/medicine" },
  { title: "Sports & Outdoor", href: "/sports-outdoor" },
  { title: "Baby’s & Toys", href: "/babies-toys" },
  { title: "Groceries & Pets", href: "/groceries-pets" },
  { title: "Health & Beauty", href: "/health-beauty" },
];
const Sidebar = () => {
  return (
    <ul className="flex flex-col w-[217px] h-[344px] gap-4 pr-20 border-r border-black">
      <CustomList items={Items} />
    </ul>
  );
};

export default Sidebar;
