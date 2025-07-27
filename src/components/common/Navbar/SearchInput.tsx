"use client";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

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
    <div className="relative w-full max-w-lg mx-auto">
      <button
        type="button"
        onClick={handleSearch}
        className="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <Search className="h-5 w-5 text-gray-500" />
      </button>
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 bg-white/10 text-black placeholder:text-black/50 rounded-md border outline-gray-300 border-gray-300 focus:outline-none   focus:border-gray-400 transition"
      />
    </div>
  );
};

export default SearchInput;
