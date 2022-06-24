import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import Movies from "./components/Movies";

function App() {
  const queryClient = new QueryClient();
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
