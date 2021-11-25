import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "../api/api";
import { ReviewCard } from "../Components/ReviewCard/ReviewCard";

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getReviews(movieId);

        setReviews(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchInfo();
  }, [movieId]);
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {reviews.length ? (
        reviews.map(({ author, content, id }) => (
          <Grid item xs={12} key={id}>
            <ReviewCard author={author} content={content} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" component="div">
            We don't have any reviews for this movie!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
