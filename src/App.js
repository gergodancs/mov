import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes></Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
