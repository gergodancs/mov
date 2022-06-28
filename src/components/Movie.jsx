import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMoviesQuery } from "../getMovies";

const Movie = () => {
  const location = useLocation();
  const params = useParams();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get("title");
  const paramsId = params.id;

  const { data, isFetching, isError, error } = useMoviesQuery(title);

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );

  const movie = data?.data?.searchMovies?.filter((movie) => {
    return movie.id === paramsId;
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 m-10">
      <h3>{movie[0]?.name}</h3>
    </div>
  );
};

export default Movie;
