import React from "react";

import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const { searchText, setSearchText, setStartFetch } = props;

  return (
    <form>
      <label htmlFor="search">Search Movies: </label>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button onClick={() => setStartFetch((prevState) => !prevState)}>
        <Link to="/movies">Get Movies</Link>
      </button>
    </form>
  );
};

export default SearchBar;
