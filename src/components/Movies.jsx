import React from "react";
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
  const getMovieDetails = (id) => {
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
            <li
              id={movie.id}
              key={movie.id}
              className="p-6 max-w-[90%] md:max-w-[70%] mx-auto bg-slate-100 rounded-xl shadow-md flex items-center space-x-4 mt-10"
              onClick={() => getMovieDetails(movie.id)}
            >
              {movie.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
