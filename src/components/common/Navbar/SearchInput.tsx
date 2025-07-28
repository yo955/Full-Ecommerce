"use client";

import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import styles from "@/styles/Navbar/searchInput.module.scss";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();

  const handleSearch = () => {
    if (search.trim() !== "") {
      window.location.href = `/${locale}/products?searchQuery=${search}`;
    } else {
      router.push(`/products`);
    }
    router.refresh();
    setSearch("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <button
          type="button"
          onClick={handleSearch}
          className={styles.searchIcon}
        >
          <Search className={styles.iconSvg} />
        </button>
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search..."
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default SearchInput;
