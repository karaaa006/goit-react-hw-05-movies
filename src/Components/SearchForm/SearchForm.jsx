import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

import s from "./SearchForm.module.scss";

export default function SearchForm({ onSubmit, defaultValue }) {
  const [query, setQuery] = useState(defaultValue);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={s.searchForm}>
      <TextField
        name="query"
        label="Search movies"
        variant="outlined"
        onChange={handleChange}
        value={query || ""}
        sx={{ mr: 1 }}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
};
