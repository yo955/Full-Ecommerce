"use client";
import CustomList from "../ui/CustomList";
import { PageLinks } from "@/constant/enum";
import { useAuthStore } from "@/store/useAuthStore";

const navItems = [
  { href: PageLinks.HOME, title: "Home" },
  { href: PageLinks.CONTACT, title: "Contact" },
  { href: PageLinks.ABOUT, title: "About" },
  { href: PageLinks.SIGN_UP, title: "Sign Up" },
];

const NavLinks = () => {
  const { user, logout } = useAuthStore();
  return user ? (
    `hello ${user.name}`
  ) : (
    <ul className="inline relative lg:flex gap-10">
      <CustomList items={navItems} />
    </ul>
  );
};

export default NavLinks;
