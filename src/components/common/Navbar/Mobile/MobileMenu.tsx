"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import NavLinks from "../NavLinks";
import SearchInput from "../SearchInput";
import MobileUserMenu from "./MobileUserMenu";
import styles from "@/styles/Navbar/navbar.module.scss";
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the menu
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={`${styles.mobileMenu} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>القائمة</h2>
        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        <SearchInput />
        <NavLinks onLinkClick={handleLinkClick} />
        <MobileUserMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
