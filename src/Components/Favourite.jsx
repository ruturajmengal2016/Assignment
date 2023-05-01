import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/todoReducer";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
const Favourite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.npm.favourites);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          border: "2px solid blue",
          height: "80%",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ position: "absolute", top: "0" }}>
          My Favourite NPM packages...
        </Typography>
        {selector.length ? (
          selector.map((ele, ind) => {
            return (
              <div
                key={ind}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "fit-content",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {ele}
                <button
                  onClick={() => {
                    dispatch(removeItem({ ind: ind }));
                  }}
                >
                  ❌
                </button>
                <br />
                <TextField
                  hiddenLabel
                  multiline
                  placeholder="Why is this Favourite"
                  id="outlined-basic"
                  variant="outlined"
                />
              </div>
            );
          })
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              navigate("/packages");
            }}
          >
            Add to Favourite
          </Button>
        )}
      </div>
    </div>
  );
};

export default Favourite;
