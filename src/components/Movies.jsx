import React from "react";
import { useMoviesQuery } from "../getMovies";

const Movies = (props) => {
  const { searchText, startFetch } = props;
  const { data, isFetching, isLoading } = useMoviesQuery(
    searchText,
    startFetch
  );

  if (isFetching) return console.log("fetching");
  if (isLoading) return console.log("loading");
  if (data) return console.log(data);

  return <div>Movies</div>;
};

export default Movies;
