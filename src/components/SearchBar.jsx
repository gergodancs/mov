import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MoviesCtx from "../store/movies-context";

const SearchBar = () => {
  const ctx = useContext(MoviesCtx);

  return (
    <form>
      <label htmlFor="search">Search Movies: </label>
      <input
        value={ctx.searchText}
        onChange={(e) => ctx.setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button>
        <Link to="/movies">Get Movies</Link>
      </button>
    </form>
  );
};

export default SearchBar;
