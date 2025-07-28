"use client";
import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { Home, Mail, Info, ShoppingBasket } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import styles from "@/styles/Navbar/navLinks.module.scss";
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
    <nav className={styles.navLinks} dir={locale === "ar" ? "rtl" : "ltr"}>
      <ul className={styles.navList}>
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              href={navItem.href}
              onClick={onLinkClick}
              className={`${styles.navLink} ${
                navItem.isActive ? styles.active : ""
              }`}
            >
              {navItem.icon}
              <span>{navItem.title}</span>
              <span
                className={`${styles.underline} ${
                  navItem.isActive ? styles.underlineActive : ""
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
