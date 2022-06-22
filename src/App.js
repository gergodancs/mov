import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Movies from "./components/Movies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
