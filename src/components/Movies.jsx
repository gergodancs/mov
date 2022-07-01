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
              className="p-6 max-w-[90%] md:max-w-[70%] mx-auto bg-slate-100 rounded-xl shadow-md flex flex-col items-center md:flex-row space-x-4 mt-10 cursor-pointer hover:scale-[0.98] duration-200"
              onClick={() => getMovieDetails(movie.id)}
            >
              <div className="flex flex-col gap-3 ">
                <h1 className="text-center font-bold text-2xl   hover:text-[#333] ">
                  {movie.name}
                </h1>
                <span>{movie.overview}</span>
              </div>

              <img
                className="max-h-[250px]"
                src={movie.poster?.medium}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
