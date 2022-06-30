import React from "react";
import { useMoviesQuery } from "../getMovies";
import {
  useNavigate,
  useLocation,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get("title");

  let navigate = useNavigate();

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
      pathname: `movies/${id}`,
      search: createSearchParams({
        title: title,
      }).toString(),
    });
    navigate(`/movie/${id}?title=${title}`);
  };

  return (
    <div>
      <ul>
        {data?.data?.searchMovies?.map((movie) => {
          return (
            <li
              id={movie.id}
              key={movie.id}
              className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mb-10"
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
