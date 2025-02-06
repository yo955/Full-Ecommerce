import React from "react";
import { CustomLink } from "../ui";

const NavArray = [
  { href: "/", title: "Home" },
  { href: "/contact", title: "Contact" },
  { href: "/about", title: "About" },
  { href: "/SignUp", title: "Sign Up" },
];

const NavLinks = () => {
  return (
    <ul className="flex gap-10">
      {NavArray.map((link) => (
        <li key={link.title}>
          <CustomLink href={link.href}>{link.title}</CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
