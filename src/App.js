import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// React_Query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Components
import HomePage from "./components/HomePage";
import SuperHeroePage from "./components/SuperHeroePage";
import RQSuperHeroe from "./components/RQSuperHeroe";
import CustomRQSuperHeroe from "./components/CustomRQSuperHeroe";
import CustomRQSuperHeroeId from "./components/CustomRQSuperHeroeId";
import ParallelQuerysPage from "./components/ParallelQuerysPage";
import DaynamicParallelPage from "./components/DaynamicParallelPage";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroe-page"> SuperHeroePage</Link>
            </li>
            <li>
              <Link to="/rq-super-heroe"> RQSuperHeroe</Link>
            </li>
            <li>
              <Link to="custom-rq-super-heroe"> Custom RQSuperHeroe</Link>
            </li>
            <li>
              <Link to="/parallel-querys-page">ParallelQuerysPage</Link>
            </li>
            <li>
              <Link to="/rq-dependent">rq-dependent</Link>
            </li>
            <li>
              <Link to="/rq-paginated">rq-paginated</Link>
            </li>
            <li>
              <Link to="/rq-infinite">rq-infinite</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroe-page" element={<SuperHeroePage />} />
          <Route path="/rq-super-heroe" element={<RQSuperHeroe />} />
          <Route
            path="/rq-super-heroe/:heroeId"
            element={<CustomRQSuperHeroeId />}
          />
          <Route
            path="/custom-rq-super-heroe"
            element={<CustomRQSuperHeroe />}
          />
          <Route
            path="/parallel-querys-page"
            element={<ParallelQuerysPage />}
          />
          <Route
            path="/daynamic-parallel-page"
            element={<DaynamicParallelPage heroeId={[1, 3]} />}
          />
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="vishwas@example.com" />}
          />
          <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
          <Route path='/rq-infinite' element={ <InfiniteQueriesPage />}/>
        </Routes>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
