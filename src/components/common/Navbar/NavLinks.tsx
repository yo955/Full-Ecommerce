import React from "react";
// import { CustomLink } from "../ui";
import CustomList from "../ui/CustomList";

const navItems = [
  { href: "/", title: "Home" },
  { href: "/contact", title: "Contact" },
  { href: "/about", title: "About" },
  { href: "/SignUp", title: "Sign Up" },
];

const NavLinks = () => {
  return (
    <ul className="inline relative lg:flex gap-10">
      <CustomList items={navItems} />
    </ul>
  );
};

export default NavLinks;
