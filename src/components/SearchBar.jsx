import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMoviesHandler } from "../getMovies";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const { isLoading, isError, data } = useQuery(["movies", searchText], () =>
    fetchMoviesHandler(searchText)
  );
  if (isLoading === "loading" && searchText.length > 3) {
    return <div>Loading...</div>;
  }
  if (isError === "error") {
    return <div>Error..</div>;
  }

  const isLoadingData =
    isLoading === "loading" || (searchText.length > 2 && !data);
  console.log(data);

  return (
    <form>
      <label htmlFor="search">Search Movies: </label>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button>
        <Link to="/movies">Get Movies</Link>
      </button>
      {isLoadingData && <div>Loading...</div>}
    </form>
  );
};

export default SearchBar;
