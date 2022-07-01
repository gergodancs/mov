import React from "react";
import MovieCard from "./MovieCard";
import { useMoviesQuery } from "../getMovies";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const { data, isLoading, isError, error } = useMoviesQuery(title);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );
  const getMovieDetails = (id, name) => {
    navigate({
      pathname: `/movie/${id}`,
      search: createSearchParams({
        title: title,
      }).toString(),
    });
  };

  return (
    <div>
      <ul>
        {data?.data?.searchMovies?.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.name}
              overview={movie.overview}
              imgUrl={movie.poster?.medium}
              getMovieDetails={getMovieDetails}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
