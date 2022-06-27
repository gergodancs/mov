import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useState } from "react";

import Movies from "./components/Movies";
const queryClient = new QueryClient();

function App() {
  const [searchText, setSearchText] = useState("");
  const [startFetch, setStartFetch] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        searchText={searchText}
        setSearchText={setSearchText}
        setStartFetch={setStartFetch}
      >
        <Routes>
          <Route
            path="/movies"
            element={<Movies searchText={searchText} startFetch={startFetch} />}
          />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
