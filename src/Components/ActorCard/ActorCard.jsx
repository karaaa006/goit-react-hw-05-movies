import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function ActorCard({ image, name, character }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={
          image
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${image}`
            : `https://via.placeholder.com/440x660?text=Image+not+found!`
        }
        alt={name}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          Character: {character}
        </Typography>
      </CardContent>
    </Card>
  );
}
