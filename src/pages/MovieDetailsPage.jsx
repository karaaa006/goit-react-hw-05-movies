import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getMovieInfoById } from "../api/api";
import { MovieDetails } from "../Components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getMovieInfoById(movieId);

        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchInfo();
  }, [movieId]);

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
      <Paper elevation={1} sx={{ p: 2 }}>
        <MovieDetails
          movieId={movie.id}
          title={movie.title}
          image={movie.poster_path}
          genres={movie.genres}
          description={movie.overview}
          score={movie.vote_average}
          releaseDate={movie.release_date}
        />
        <Outlet />
      </Paper>
    </>
  );
}
