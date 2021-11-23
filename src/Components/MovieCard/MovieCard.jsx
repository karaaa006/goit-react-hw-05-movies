import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

export default function MovieCard({ image, title, voteAverage, id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`movies/${id}`}>
        <CardActionArea>
          <CardMedia component="img" image={image} alt={title} />
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
