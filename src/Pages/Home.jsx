import React from "react";
import { Box, Typography, Button } from "@mui/material";
const Home = () => {
  const [value, setValue] = React.useState(false);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Welcome to Home page</Typography>
      {localStorage.getItem("user") && (
        <Box component="h1">
          {JSON.parse(localStorage.getItem("user")).fname || ""}
          &nbsp;
          {JSON.parse(localStorage.getItem("user")).lname || ""}
        </Box>
      )}
      <Button
        variant="contained"
        onClick={() => {
          const isTrue = window.confirm(
            "Do you want to remove the data from localStorage"
          );
          setValue(isTrue);
          if (value) {
            localStorage.removeItem("user");
          }
        }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default Home;
