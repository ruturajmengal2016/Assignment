import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const Navigation = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        backgroundColor: "primary.dark",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.5rem",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/contact"
        style={{
          fontSize: "1.5rem",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </Box>
  );
};

export default Navigation;
