import Layout from "./components/Layout";
import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Movies from "./components/Movies";
import Movie from "./components/Movie";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
