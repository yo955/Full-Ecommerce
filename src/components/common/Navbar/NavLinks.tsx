"use client";
import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
// import "@/styles/Navbar/navbar.scss";
import { FaBars } from "react-icons/fa";
const NavLinks = () => {
  const { user, logout } = useAuthStore();
  const navItems = [
    { href: PageLinks.HOME, title: "Home" },
    { href: PageLinks.CONTACT, title: "Contact" },
    { href: PageLinks.ABOUT, title: "About" },
    user
      ? { href: PageLinks.HOME, title: "Log out", onclick: logout }
      : { href: PageLinks.SIGN_UP, title: "Sign Up" },
  ];

  return (
    <>
      <input id="menu-toggle" type="checkbox" className="peer hidden" />
      <label
        htmlFor="menu-toggle"
        className="block sm:hidden cursor-pointer text-xl"
      >
        <FaBars />
      </label>
      <ul className="navLinks hidden sm:inline-flex sm:relative  gap-2 sm:gap-5 lg:gap-10 max-[630px]:flex">
      {navItems.map((navItem, index) => (
          <li key={index}>
            <Link href={navItem.href} onClick={navItem.onclick}>
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden peer-checked:flex flex-col gap-3 relative top-14 bg-[#f8f8f8] shadow-md p-4 rounded z-50 w-40 lg:hidden">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link href={navItem.href} onClick={navItem.onclick}>
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
