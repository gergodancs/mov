import React, { useState } from "react";

const MoviesCtx = React.createContext({});

export const MoviesCtxProvider = (props) => {
  const [searchText, setSearchText] = useState("");
  const movies_query = `{
    searchMovies(query: "${searchText}") {
      id
      keywords{
        name
      }
      similar{
        name
        overview
        poster{
          medium
        }
      }
      name
      poster{
        medium
      }
      overview
      releaseDate
      
    }
  }`;
  return (
    <MoviesCtx.Provider
      value={{
        searchText: searchText,
        setSearchText: setSearchText,
        movies_query: movies_query,
      }}
    >
      {props.children}
    </MoviesCtx.Provider>
  );
};
export default MoviesCtx;
