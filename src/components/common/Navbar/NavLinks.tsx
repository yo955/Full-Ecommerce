"use client";
import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
// import "@/styles/Navbar/navbar.scss";

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
      <ul className="navLinks inline-flex relative  gap-2 sm:gap-5 lg:gap-10 max-[630px]:flex">
        {navItems.map((navItem, index) => (
          <li key={index} className="list-none">
            <Link
              href={navItem.href}
              onClick={navItem.onclick}
              className="custom-sm:text-sm custom-phone:text-[10px]"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
