import React from "react";
import { useMoviesQuery } from "../getMovies";
import { Link } from "react-router-dom";

const Movies = (props) => {
  const { searchText, startFetch, setMovieId } = props;
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

  return (
    <div>
      <ul>
        {data.data.searchMovies.map((movie) => {
          return (
            <Link id={movie.id} key={movie.id} to={`/movies/${movie.name}`}>
              <li onClick={() => setMovieId(movie.id)}>{movie.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
