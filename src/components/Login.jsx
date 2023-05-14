import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { addUser } from "../Redux/slice";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";

export default function FormDialog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [details, setDetails] = React.useState({ Name: "", Mob: "" });
  const fields = ["Name", "Mob"];
  return (
    <>
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            height: "40vh",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box
          component="form"
          sx={{
            height: "50vh",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addUser({ details: details }));
            navigate("/chat");
          }}
        >
          <Typography variant="h5">Login Form</Typography>
          {fields.map((field, ind) => {
            return (
              <TextField
                placeholder={field}
                name={field}
                key={ind}
                required
                onChange={(e) => {
                  setDetails({ ...details, [e.target.name]: e.target.value });
                }}
              />
            );
          })}
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
