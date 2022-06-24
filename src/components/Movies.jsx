import React from "react";
import { useMoviesQuery } from "../getMovies";

const Movies = () => {
  const { data } = useMoviesQuery();
  console.log(data);
  return <div>Movies</div>;
};

export default Movies;
