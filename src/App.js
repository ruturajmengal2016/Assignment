import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function BoxSx() {
  const [temperature, setTemperature] = React.useState(0);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column ",
      }}
    >
      <Typography variant="h2">Temperature Controller</Typography>
      <Box
        sx={{
          height: "50%",
          width: "25%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "lightgray",
          boxSizing: "border-box",
          padding: "1.5rem",
          borderRadius: "2rem",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "60%",
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              temperature > 20
                ? temperature > 30
                  ? temperature > 50
                    ? "red"
                    : "orange"
                  : "yellow"
                : "lightblue",
            borderRadius: "50%",
          }}
        >
          <Typography variant="h4">
            {temperature} <sup>o</sup>C
          </Typography>
        </Box>
        <Box
          sx={{
            height: "20%",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0rem 1rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "1.5rem",
              bgcolor: "red",
              "&:hover": {
                bgcolor: "red",
              },
            }}
            onClick={() => {
              if (temperature) setTemperature(temperature - 10);
            }}
          >
            -
          </Button>
          <Button
            variant="contained"
            sx={{ fontSize: "1.5rem" }}
            onClick={() => {
              if (temperature !== 100) setTemperature(temperature + 10);
            }}
          >
            +
          </Button>
        </Box>
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={temperature > 19 && temperature < 49 && true}
          autoHideDuration={1000}
        >
          <Alert severity="warning" sx={{ width: "100%" }}>
            You are above the normal room temperatue!
          </Alert>
        </Snackbar>
        <Snackbar open={temperature > 49 && true} autoHideDuration={1000}>
          <Alert severity="error" sx={{ width: "100%" }}>
            Danger!
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
}
