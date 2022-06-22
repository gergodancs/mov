import React, { useState } from "react";
import { useQuery } from "react-query";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const movies_query = `{
    searchMovies(query: "${searchText}") {
      id
      keywords{
        name
      }
      similar{
        name
        overview
        poster{
          medium
        }
      }
      name
      poster{
        medium
      }
      overview
      releaseDate
      
    }
  }`;
  const fetchMoviesHandler = async () => {
    if (searchText === "" || searchText.length < 3) {
      return;
    }
    const response = await fetch("https://tmdb.sandbox.zoosh.ie/dev/grphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: movies_query }),
    });

    return response.json();
  };

  const { data, status } = useQuery("movies", fetchMoviesHandler);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error..</div>;
  }
  const submitForm = (e) => {
    e.preventDefault();
  };
  console.log(data);
  const loadingState = status === "loading" || (searchText.length > 2 && !data);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="search">Search Movies: </label>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        id="search"
      />
      <button>Get Movies</button>
      {loadingState && <div>Loading...</div>}
    </form>
  );
};

export default SearchBar;
