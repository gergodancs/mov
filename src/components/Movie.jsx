import React from "react";
import { useParams } from "react-router-dom";
import { useMoviesQuery } from "../getMovies";

const Movie = (props) => {
  const params = useParams();
  const { searchText, startFetch, movieId } = props;

  const { data, isFetching, isError, error } = useMoviesQuery(
    searchText,
    startFetch
  );

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );
  console.log(movieId);

  const movie = data.data.searchMovies.filter((movie) => {
    return movie.id === movieId;
  });

  console.log("ez", movie);

  return (
    <div>
      <h3>{movie[0].name}</h3>
    </div>
  );
};

export default Movie;
