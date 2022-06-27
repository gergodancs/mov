import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMoviesQuery } from "../getMovies";

const Movie = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(location);
  const title = queryParams.get("title");
  const id = queryParams.get("id");
  console.log(id);

  const { searchText, movieId } = props;

  // const paramsSearch = params.movieName;

  // const paramsId = params.movieId;

  //const dynamicSearchText = searchText;

  const { data, isFetching, isError, error } = useMoviesQuery(title);

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );

  const movie = data.data.searchMovies.filter((movie) => {
    return movie.id === id;
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 m-10">
      <h3>{movie[0].name}</h3>
    </div>
  );
};

export default Movie;
