import { getTrending } from "../api/api";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function HomePage() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    async function fetchPopular() {
      try {
        const { results } = await getTrending();

        setPopularList(results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPopular();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {popularList.map((item) => (
          <Grid item xs={3}>
            <Item>{item.name || item.title}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
