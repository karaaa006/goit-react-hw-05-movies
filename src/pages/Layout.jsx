import { Outlet, NavLink } from "react-router-dom";

import { Box, Stack, Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <header>
        <Box
          sx={{
            backgroundColor: "primary.dark",
            p: 2,
            color: "#ffffff",
            mb: 2,
          }}
        >
          <Container>
            <Stack direction="row" spacing={2}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="movies">Movies</NavLink>
            </Stack>
          </Container>
        </Box>
      </header>

      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </>
  );
}
