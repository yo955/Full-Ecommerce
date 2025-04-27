"use client";
import {Search} from "lucide-react";
import React,{useRef, useState} from "react";
import {useRouter} from "@/i18n/routing";
import {useLocale} from "next-intl";

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();
  const handleSearch = () => {
    if (search.trim() !== '') {
      window.location.href = (`/${locale}/products?searchQuery=${search}`);
    } else {
      router.push(`/products`);
    }
    router.refresh();
    setSearch('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-lg">
      <button
        type="button"
        onClick={handleSearch}
        className="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <Search className="h-5 w-5 text-gray-400"/>
      </button>
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default SearchInput;
