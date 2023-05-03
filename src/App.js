import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import country from "./countries.json";

export default function Tags() {
  return (
    <Stack
      spacing={3}
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Autocomplete
        sx={{ width: "40%", alignSelf: "center" }}
        multiple
        id="tags-outlined"
        options={country}
        getOptionLabel={(option) => option.country}
        defaultValue={[country[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Country" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
