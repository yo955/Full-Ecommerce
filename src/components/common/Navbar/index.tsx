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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopHeader />

      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-8 border-b bg-white relative z-50">
        {/* Left: Logo */}
        <div className="flex flex-1 lg:flex-none">
          <Logo />
        </div>

        {/* Center: NavLinks */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/*Desktop Right: Icons + LanguageSwitcher */}
        <div className="hidden lg:flex justify-end items-center gap-4">
          <Icons  />
          <AuthBtn />
          <LanguageSwitcherBtn />
        </div>

        {/* Mobile: Menu Icon + LanguageSwitcher */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcherBtn />
          <button onClick={() => setMenuOpen(true)} className="text-black">
            <Menu size={40} />
          </button>
        </div>
      </nav>

      {/* Desktop SearchInput*/}
      <div className="px-4 md:px-8 lg:px-16 py-4 border-b bg-white hidden lg:block">
        <SearchInput />
      </div>

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
