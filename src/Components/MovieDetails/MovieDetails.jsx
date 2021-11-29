import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Chip, Grid, Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function MovieDetails({
  title = "",
  description = "",
  genres = [],
  score,
  releaseDate,
  image,
}) {
  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
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
            {title} {releaseDate && `(${releaseDate.slice(0, 4)})`}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {`User Score: ${score * 10}%`}
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
          <Stack direction="row" spacing={1} justifyContent="center">
            <Link to="cast">
              <Item>Cast</Item>
            </Link>
            <Link to="reviews">
              <Item>Reviews</Item>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

MovieDetails.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  score: PropTypes.number,
  releaseDate: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
};
