import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getMovieInfoById } from "../api/api";
import { MovieDetails } from "../Components/MovieDetails/MovieDetails";

export function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movie);
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
      <MovieDetails
        movieId={movie.id}
        title={movie.title}
        image={movie.poster_path}
        genres={movie.genres}
        description={movie.overview}
        score={movie.vote_average * 10}
      />
      <Outlet />
    </>
  );
}
