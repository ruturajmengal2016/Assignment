import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { addData } from "../redux/todoReducer";
export default function ComboBox() {
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Search your NPM package...</h3>
        &nbsp;
        <Autocomplete
          onInputChange={(event, value) => {
            dispatch(addData({ package: value }));
          }}
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="NPM" />}
        />
      </div>
    </>
  );
}

const top100Films = [
  { label: "Express" },
  { label: "AsyncJS" },
  { label: "Lodash" },
  { label: "Axios" },
  { label: "Karma" },
  { label: "Molecular" },
  { label: "Grunt" },
  {
    label: "PM2",
  },
  { label: "Mocha" },
];
