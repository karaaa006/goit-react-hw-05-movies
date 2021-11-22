import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { getMovieInfoById, getTrending } from "./api/api";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

getMovieInfoById("233");
console.log(getTrending());
