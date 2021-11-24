import { Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export function MovieDetails({
  movieId = "",
  title = "",
  description = "",
  genres = [],
  score = "",
  year = "",
  image = "",
}) {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Grid item s={12} md={3}>
          <img
            src={
              image &&
              `https://www.themoviedb.org/t/p/w440_and_h660_face/${image}`
            }
            alt={title}
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item s={12} md={9}>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            User Score: {`${score}%`}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Overview
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {description}
          </Typography>
          <Stack direction="row" spacing={1}>
            {genres.map(({ name }, idx) => (
              <Chip label={name} key={idx} />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 1 }}>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
