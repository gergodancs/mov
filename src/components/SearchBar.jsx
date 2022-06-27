import React from "react";

import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <form className="w-full flex justify-center py-10 bg-slate-400">
      <label htmlFor="search">Search Movies: </label>
      <input
        className="w-sm ml-5 mr-5 border border-gray-300 rounded-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button className="w-sm bg-gray-300 px-10 rounded-lg shadow-sm">
        <Link to="/movies">Get Movies</Link>
      </button>
    </form>
  );
};

export default SearchBar;
