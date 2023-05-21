import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
const Task = () => {
  const [list, setList] = React.useState([]);
  const [task, setTask] = React.useState("");
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
      <Typography variant="h3">To Do List</Typography>
      <Box
        sx={{
          height: "10%",
          display: "flex",
          gap: "1rem",
        }}
      >
        <TextField
          required
          value={task}
          label="task"
          variant="filled"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <Button
          variant="text"
          onClick={() => {
            if (task) {
              setList([...list, task]);
              setTask("");
            }
          }}
        >
          Add Task
        </Button>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 500,
            width: 500,
            bgcolor: "lightcoral",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "1rem",
          }}
        >
          {list.map((ele, ind) => {
            return (
              <Box
                key={ind}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Typography variant="h5" width="50%">
                  {ele}
                </Typography>
                <Button
                  sx={{
                    width: "25%",
                  }}
                  variant="contained"
                  onClick={() => {
                    const newList = list.filter((ele, index) => {
                      return index !== ind;
                    });
                    setList(newList);
                  }}
                >
                  Delete
                </Button>
                &nbsp;
                <Button
                  sx={{
                    width: "25%",
                  }}
                  variant="contained"
                  onClick={() => {
                    list.splice(ind, 1);
                    setList([...list, task]);
                    setTask("");
                  }}
                >
                  Update
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
