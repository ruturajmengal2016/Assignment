import React from "react";
import Box from "@mui/material/Box";
import Chat from "./components/Chat";
import io from "socket.io-client";
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
let socket;
const App = () => {
  const { Name } = useSelector((state) => state.connection.value);
  const [myId, setId] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [newUsers, setNewUsers] = React.useState([Name]);
  const send = () => {
    if (answer) {
      socket.emit("message", { id: myId, message: answer });
      setAnswer("");
    } else {
      return -1;
    }
  };
  React.useEffect(() => {
    socket = io("https://server-x509.onrender.com");
    socket.on("connect", () => {
      setId(socket.id);
    });
    socket.emit("join", Name);
    return () => {
      socket.off();
    };
  }, [Name]);

  React.useEffect(() => {
    socket.on("left", (data) => {
      newUsers.splice(
        newUsers.findIndex((ele) => {
          return ele.user === data.user;
        }),
        1
      );
      setMessages([...messages, data]);
    });
    socket.on("Hello", (data) => {
      setMessages([...messages, data]);
      setNewUsers([...newUsers, data.user]);
    });
    socket.on("send", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "80%",
          width: "80%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            border: "1px solid black",
            height: "100%",
            width: "25%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "1rem",
            overflowY: "auto",
            boxSizing: "border-box",
            background: `rgb(34,43,195)`,
            background: `linear-gradient(7deg, rgba(34,43,195,0.768032212885154) 40%, rgba(224,18,53,0) 100%)`,
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            New Connections
          </Typography>
          {newUsers.map((ele, ind) => {
            return (
              <Box
                component="div"
                sx={{
                  boxSizing: "border-box",
                  padding: "0.5rem",
                  backgroundColor: "lightcoral",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                key={ind}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{
                    bgcolor: "lightseagreen",
                  }}
                >
                  {ele[0]}
                </Avatar>
                <Typography variant="h6">{ele}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            border: "1px solid blue",
            height: "100%",
            width: { xs: "100%", sm: "75%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chat messages={messages} />
          <Box
            sx={{
              height: "10%",
              width: "100%",
              display: "flex",
            }}
          >
            <TextField
              type="text"
              value={answer}
              placeholder="Enter your message..."
              sx={{
                width: "90%",
                "& fieldset": {
                  border: "none",
                },
              }}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  send();
                }
              }}
            />
            <Button
              variant="contained"
              onClick={send}
              sx={{
                width: "10%",
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
