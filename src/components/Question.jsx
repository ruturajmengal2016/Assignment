import React from "react";
import Box from "@mui/material/Box";
const Question = ({ question }) => {
  return (
    <Box
      sx={{
        height: 50,
        width: 400,
        boxSizing: "border-box",
        padding: "0.2rem",
        maxHeight: "fit-content",
        backgroundColor: "lightcoral",
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
      }}
    >
      {question}
    </Box>
  );
};

export default Question;
