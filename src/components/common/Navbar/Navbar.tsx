"use client";
import TopHeader from "../top-header/TopHeader";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchInput from "./SearchInput";
import Icons from "./Icons";
import LanguageSwitcherBtn from "./LanguageSwitcherBtn";
import MobileMenu from "./Mobile/MobileMenu";
import { useState } from "react";
import { Menu } from "lucide-react";
import AuthBtn from "./AuthBtn";
import useDeviceType from "@/hooks/getDeviceType/useDeviceType";
import styles from "@/styles/Navbar/navbar.module.scss";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isXL } = useDeviceType();
  return (
    <>
      <TopHeader />

      <div className={styles.container}>
        {/* Left: Logo */}
        <Logo />

        {/* Center: NavLinks */}
        {isXL && <NavLinks />}

        {/*Desktop Right: Icons + LanguageSwitcher */}
        {isXL && (
          <div className={styles.flex_gap}>
            <Icons />
            <AuthBtn />
            <LanguageSwitcherBtn />
          </div>
        )}

        {/* Mobile: Menu Icon + LanguageSwitcher */}
        {!isXL && (
          <div className={styles.flex_gap}>
            <LanguageSwitcherBtn />
            <button onClick={() => setMenuOpen(true)} className="text-black">
              <Menu size={40} />
            </button>
          </div>
        )}
      </div>

      {/* SearchInput*/}
      <SearchInput />

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
