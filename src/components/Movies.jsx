import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import MoviesCtx from "../store/movies-context";

const Movies = () => {
  const ctx = useContext(MoviesCtx);

  const fetchMoviesHandler = async () => {
    if (ctx.searchText === "" || ctx.searchText.length < 3) {
      return;
    }
    const response = await fetch("https://tmdb.sandbox.zoosh.ie/dev/grphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ctx.movies_query }),
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

  const loadingState =
    status === "loading" || (ctx.searchText.length > 2 && !data);
  console.log(data);
  return (
    <div>
      Movies
      {loadingState && <span>loading...</span>}
    </div>
  );
};

export default Movies;
