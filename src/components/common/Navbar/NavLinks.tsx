"use client";
import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/store/useAuthStore";

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
      <ul className="inline relative lg:flex gap-10">
        {navItems.map((navItem, index) => (
          <li key={index} className="list-none">
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
