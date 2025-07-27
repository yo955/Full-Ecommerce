"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import NavLinks from "../NavLinks";
import SearchInput from "../SearchInput";
import MobileUserMenu from "./MobileUserMenu";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // إغلاق عند الضغط خارج المكون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">القائمة</h2>
        <button onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-6 h-full justify-start">
        <SearchInput />
        <NavLinks onLinkClick={handleLinkClick} />
        <MobileUserMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
