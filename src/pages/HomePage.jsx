import { getTrending } from "../api/api";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import Grid from "@mui/material/Grid";

export function HomePage() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    async function fetchPopular() {
      try {
        const { results } = await getTrending();

        setPopularList(results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPopular();
  }, []);

  return (
    <Grid container spacing={2}>
      {popularList.map((item) => (
        <Grid item xs={3} key={item.id}>
          <MovieCard
            image={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
            title={item.title}
            voteAverage={item.vote_average.toFixed(1)}
            id={item.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
