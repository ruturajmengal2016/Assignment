import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Typography from "@mui/material/Typography";
export default function InputAdornments() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ position: "absolute", top: "25%", fontFamily: "revert-layer" }}
      >
        pixel to rem conversion
      </Typography>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">px</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FormHelperText id="outlined-weight-helper-text">Pixel</FormHelperText>
      </FormControl>
      <DoubleArrowIcon sx={{ marginBottom: "1rem" }} />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <OutlinedInput
          readOnly
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">rem</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          value={value / 16}
        />
        <FormHelperText id="outlined-weight-helper-text">rem</FormHelperText>
      </FormControl>
    </Box>
  );
}
