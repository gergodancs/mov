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
      className="w-full flex justify-center py-10 bg-slate-400"
    >
      <label htmlFor="search">Search Movies: </label>
      <input
        className="w-sm ml-5 mr-5 border border-gray-300 rounded-lg"
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
