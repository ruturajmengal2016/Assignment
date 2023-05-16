import React from "react";
import Box from "@mui/material/Box";
const Options = ({ options, question, setHandleAnswer }) => {
  return (
    <Box
      component="div"
      sx={{
        maxHeight: "fit-content",
        width: 400,
        boxSizing: "border-box",
        padding: "1rem",
        backgroundColor: "lightblue",
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {options.map((option, ind) => {
        return (
          <div key={ind}>
            <input
              type="radio"
              name={question}
              value={ind}
              id="radio"
              onChange={(e) => {
                setHandleAnswer(e);
              }}
            />
            {option}
          </div>
        );
      })}
    </Box>
  );
};

export default Options;
