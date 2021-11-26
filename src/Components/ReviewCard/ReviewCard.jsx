import { Card, CardContent, Typography } from "@mui/material";

export function ReviewCard({ author, content }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Author: {author}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
