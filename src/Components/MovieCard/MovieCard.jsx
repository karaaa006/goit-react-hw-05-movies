import {
  CardActionArea,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MovieCard({ image, title, voteAverage, id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/movies/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={
              image
                ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${image}`
                : `https://via.placeholder.com/440x660?text=Image+not+found!`
            }
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Chip label={voteAverage} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
