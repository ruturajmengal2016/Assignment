import React from "react";
import quotes from "./Quotes.json";
import { Box, Typography } from "@mui/material";
const App = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "5rem",
      }}
    >
      <Typography variant="h3">Motivational quotes</Typography>
      <Typography
        variant="h4"
        sx={{
          width: "50%",
          minHeight: "fit-content",
          bgcolor: "lightcoral",
          boxSizing: "border-box",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        {quotes.quotes[Math.floor(Math.random() * (9 - 0 + 1)) + 0]}
      </Typography>
    </Box>
  );
};

export default App;
