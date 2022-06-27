import React from "react";
import { useMoviesQuery } from "../getMovies";
import { useNavigate } from "react-router-dom";

const Movies = (props) => {
  const { searchText, setMovieId } = props;

  let navigate = useNavigate();

  const { data, isFetching, isError, error } = useMoviesQuery(searchText);

  if (isFetching) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: <p>{error}</p>
      </div>
    );
  const handleClick = (id) => {
    setMovieId(id);
    navigate(`/movie?title=${searchText}&?id=${id}`);
  };
  return (
    <div>
      <ul>
        {data.data.searchMovies.map((movie) => {
          return (
            <li
              id={movie.id}
              key={movie.id}
              className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 m-10"
              onClick={() => handleClick(movie.id)}
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
