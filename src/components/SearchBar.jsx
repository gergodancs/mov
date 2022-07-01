import React, { useState } from "react";

import { useNavigate, createSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const showMoviesList = (e) => {
    e.preventDefault();

    if (!searchText || searchText.trim().length < 2) {
      return alert("type at least two characters");
    }
    navigate({
      pathname: "movies",
      search: createSearchParams({
        title: searchText,
      }).toString(),
    });
  };

  return (
    <form
      onSubmit={showMoviesList}
      className=" flex flex-col gap-2 md:flex-row mx-auto  p-10 bg-slate-400 "
    >
      <label
        className="font-bold tracking-[0.2em] text-gray-100 sm:text-s lg:text-2xl "
        htmlFor="search"
      >
        Search Movies:
      </label>
      <input
        className="md:w-[50%] px-5 focus:outline-none   border border-gray-300 rounded-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button className="w-sm bg-gray-300 px-10 rounded-lg shadow-sm">
        Get Movies
      </button>
    </form>
  );
};

export default SearchBar;
