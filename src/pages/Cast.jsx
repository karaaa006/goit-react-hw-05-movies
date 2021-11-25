import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCredits } from "../api/api";
import { ActorCard } from "../Components/ActorCard/ActorCard";

export function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await getCredits(movieId);

        setActors(data.cast);
      } catch (e) {
        console.log(e);
      }
    }
    fetchInfo();
  }, [movieId]);
  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      {actors.map(({ id, profile_path, name, character }) => (
        <Grid item xs={3} key={id}>
          <ActorCard image={profile_path} name={name} character={character} />
        </Grid>
      ))}
    </Grid>
  );
}
