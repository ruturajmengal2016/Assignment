import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "lightcoral",
          width: "20%",
        }}
      >
        <IconButton
          onClick={() => {
            setCounter(counter + 10);
          }}
        >
          <ArrowDropUpIcon
            sx={{
              color: "green",
              fontSize: "5rem",
            }}
          />
        </IconButton>
        <Typography variant="h4">{counter}</Typography>
        <IconButton
          onClick={() => {
            setCounter(counter - 10);
          }}
        >
          <ArrowDropDownIcon
            sx={{
              color: "red",
              fontSize: "5rem",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default App;
