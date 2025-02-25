import { Link } from "@/i18n/routing";
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
      {Items.map((item) => (
        <li key={item.title} className="list-none">
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
