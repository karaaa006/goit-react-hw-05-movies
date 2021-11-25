import { Routes, Route } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { HomePage } from "./pages/HomePage";
import { Cast } from "./pages/Cast";
import { Reviews } from "./pages/Reviews";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
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
  );
}

export default App;
