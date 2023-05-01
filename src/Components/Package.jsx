import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeItem } from "../redux/todoReducer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
const Package = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.npm.data);
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
          My NPM packages...
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
                <button
                  onClick={() => {
                    dispatch(addFavourite({ ind: ind }));
                  }}
                >
                  ⭐
                </button>
               
              </div>
            );
          })
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Add Packages
          </Button>
        )}
      </div>
    </div>
  );
};

export default Package;
