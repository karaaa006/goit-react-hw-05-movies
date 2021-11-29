import { getMoviesByQuery } from "../api/api";

import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import SearchForm from "../Components/SearchForm/SearchForm";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchInfo() {
      try {
        const { results } = await getMoviesByQuery(searchParams.get("query"));

        setMoviesList(results);
      } catch (e) {
        console.log(e);
      }
    }

    if (searchParams.has("query")) fetchInfo();
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target.query;
    if (value) setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm
        onSubmit={handleSubmit}
        defaultValue={searchParams.get("query")}
      />
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
