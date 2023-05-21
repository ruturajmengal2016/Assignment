import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Contact() {
  const [details, setDetails] = React.useState({
    fname: "",
    lname: "",
    email: "",
    Mob_no: null,
  });
  const fields = ["fname", "lname", "email", "Mob_no"];

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("user", JSON.stringify(details));
          setDetails({
            fname: "",
            lname: "",
            email: "",
            Mob_no: 0,
          });
        }}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxSizing: "border-box",
          border: "1px solid red",
          padding: "5rem",
        }}
      >
        {fields.map((ele, ind) => {
          return (
            <TextField
              required
              key={ind}
              value={details[ele]}
              placeholder={ele}
              type={
                ele === "fname"
                  ? "text"
                  : ele === "email"
                  ? "email"
                  : ele === "lname"
                  ? "text"
                  : "number"
              }
              id="standard-basic"
              label=""
              variant="standard"
              name={ele}
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
          );
        })}
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </Box>
  );
}
