import React from "react";
import { CustomLink } from "./CustomLink";

interface NavItem {
  href: string;
  title: string;
}

interface ListProps {
  items: NavItem[];
}
const CustomList: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index: number) => (
        <li key={index} className="list-none">
          <CustomLink href={item.href}>{item.title}</CustomLink>
        </li>
      ))}
    </>
  );
};

export default CustomList;
