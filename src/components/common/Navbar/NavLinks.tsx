"use client";
import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { Home, Mail, Info, ShoppingBasket } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import styles from "@/styles/Navbar/navbar.module.scss";
const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navbar");
  const isHomePage = pathname === `/${locale}`;

  const navItems = [
    {
      href: PageLinks.HOME,
      title: t("navLinks.home"),
      icon: <Home size={18} />,
      isActive: isHomePage,
    },
    {
      href: PageLinks.ABOUT,
      title: t("navLinks.about"),
      icon: <Info size={18} />,
      isActive: pathname.endsWith("/about"),
    },
    {
      href: PageLinks.CONTACT,
      title: t("navLinks.contact"),
      icon: <Mail size={18} />,
      isActive: pathname.endsWith("/contact"),
    },
    {
      href: PageLinks.PRODUCTS,
      title: t("navLinks.products"),
      icon: <ShoppingBasket />,
      isActive: pathname.endsWith("/products"),
    },
  ];

  return (
    <nav className={styles.navLinks}>
      <ul
        className={styles.navList}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              href={navItem.href}
              onClick={onLinkClick}
              className={`group flex items-center gap-1 relative transition-colors duration-200 ${
                navItem.isActive
                  ? "text-[#b91c1c]"
                  : "text-foreground hover:text-[#b91c1c]"
              }`}
            >
              {navItem.icon}
              <span>{navItem.title}</span>
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#b91c1c] transition-all duration-300 ${
                  navItem.isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
