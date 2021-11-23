import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { getMovieInfoById, getTrending } from "./api/api";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { HomePage } from "./pages/HomePage";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "primary.dark", p: 2, color: "white", mb: 2 }}
      >
        <Container>
          <Stack direction="row" spacing={2}>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </Stack>
        </Container>
      </Box>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieDetailsPage />} />
          <Route path="reviews" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

getMovieInfoById("233");
console.log(getTrending());
