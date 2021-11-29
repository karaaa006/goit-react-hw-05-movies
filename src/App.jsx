import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";

const Layout = lazy(() => import("./pages/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
