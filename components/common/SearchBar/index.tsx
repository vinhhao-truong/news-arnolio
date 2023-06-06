"use client";

import { FormEventHandler, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const router = useRouter();

  const onSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (searchInput) {
      router.push(`/keyword?q=${searchInput}`);
      setIsSearching(false);
      setSearchInput("");
    }
  };

  return (
    <form onSubmit={onSearch} className="relative pl-8 bg-black">
      <motion.button
        whileHover={{ scale: 0.9 }}
        className="flex items-center pr-2 text-white md:pr-0"
        onClick={() => {
          setIsSearching(true);
        }}
      >
        <BiSearchAlt className="text-2xl" />
      </motion.button>

      {isSearching && (
        <div className="absolute right-0 top-[calc(100%+0.7rem)]">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onBlur={(e) => {
              setIsSearching(false);
              setSearchInput("");
            }}
            autoFocus={isSearching}
            value={searchInput}
            className="px-4 py-2 text-sm shadow-2xl outline-black w-[300px] max-w-[100vw]"
            placeholder="keyword, name, topic, etc..."
          />
          {searchInput && (
            <p className="absolute right-0 shadow-2xl bg-white top-[calc(100%+0.1rem)] w-full truncate text-center py-2">
              Searching &ldquo;{searchInput}&rdquo;?
            </p>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
