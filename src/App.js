import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchJobProvider } from "./context/SearchJobContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />
      <SearchJobProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </SearchJobProvider>
      <Footer />
    </div>
  );
}

export default App;
