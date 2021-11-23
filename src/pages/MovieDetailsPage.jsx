import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieInfoById } from "../api/api";
import { MovieDetails } from "../Components/MovieDetails/MovieDetails";

export function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
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
  }, []);
  return <MovieDetails id={movie.id} />;
}
