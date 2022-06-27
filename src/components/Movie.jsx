import React from "react";
import { useParams } from "react-router-dom";
import { useMoviesQuery } from "../getMovies";

const Movie = (props) => {
  const params = useParams();
  const { searchText, startFetch, movieId } = props;

  const paramsSearch = params.movieName;

  const paramsId = params.movieId;

  const dynamicSearchText = searchText ? searchText : paramsSearch;

  const { data, isFetching, isError, error } = useMoviesQuery(
    dynamicSearchText,
    startFetch
  );

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );

  const movie = data.data.searchMovies.filter((movie) => {
    return movie.id === movieId ? movieId : paramsId;
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 m-10">
      <h3>{movie[0].name}</h3>
    </div>
  );
};

export default Movie;
