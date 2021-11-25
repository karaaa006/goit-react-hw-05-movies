import { getMoviesByQuery } from "../api/api";
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

export function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { results } = await getMoviesByQuery(query);

      setMoviesList(results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          name="query"
          label="Search movies"
          variant="outlined"
          onChange={handleChange}
          value={query}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <Grid container spacing={2}>
        {moviesList.map((item) => (
          <Grid item xs={3} key={item.id}>
            <MovieCard
              image={item.poster_path}
              title={item.title}
              voteAverage={item.vote_average.toFixed(1)}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
