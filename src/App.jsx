import "./App.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import { getMovieInfoById, getTrending } from "./api/api";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { HomePage } from "./pages/HomePage";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { Cast } from "./pages/Cast";
import { Reviews } from "./pages/Reviews";
function App() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "primary.dark", p: 2, color: "white", mb: 2 }}
      >
        <Container>
          <Stack direction="row" spacing={2}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fcba03" : "white",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="movies"
              style={({ isActive }) => ({
                color: isActive ? "#fcba03" : "white",
              })}
            >
              Movies
            </NavLink>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

getMovieInfoById("233");
console.log(getTrending());
