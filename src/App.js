import Layout from "./components/Layout";
import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useState } from "react";

import Movies from "./components/Movies";
import Movie from "./components/Movie";
const queryClient = new QueryClient();

function App() {
  const [searchText, setSearchText] = useState("");

  const [movieId, setMovieId] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout searchText={searchText} setSearchText={setSearchText}>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route
            path="/movies"
            element={<Movies searchText={searchText} setMovieId={setMovieId} />}
          />
          <Route
            path="/movie"
            element={<Movie searchText={searchText} movieId={movieId} />}
          />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
