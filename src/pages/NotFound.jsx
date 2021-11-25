import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>Not Found!</h1>
      <Link to="/">Return to HOME</Link>
    </Box>
  );
}
