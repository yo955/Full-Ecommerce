import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex justify-around items-center w-60 h-10 bg-secondary-gray p-2 rounded">
      <input
        type="text"
        className="outline-none border-none bg-transparent rounded-[4px]"
        placeholder="What are you looking for?"
      />
      <FaSearch />
    </div>
  );
};

export default SearchInput;
