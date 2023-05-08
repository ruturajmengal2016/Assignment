import React from "react";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import io from "socket.io-client";
import { TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from "@mui/material/IconButton";
import TextFormatIcon from "@mui/icons-material/TextFormat";
const socket = io("https://server-fgm1.onrender.com");
const App = () => {
  const [answer, setAnswer] = React.useState();
  const [change, setChange] = React.useState(true);
  const [messages, setMessages] = React.useState([]);
  const name = React.useMemo(() => {
    return prompt("Enter your name");
  }, []);
  function handleSubmit() {
    if (typeof answer === "object") {
      const reader = new FileReader();
      reader.readAsDataURL(answer);
      reader.addEventListener(
        "load",
        (e) => {
          const data = e.target.result;
          socket.emit("send message", { data: data, name: name });
        },
        true
      );
    } else {
      socket.emit("send message", { data: answer, name: name });
    }
  }
  React.useEffect(() => {
    socket.on("message", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "lightcoral",
          width: "80%",
          height: "80%",
          maxHeight: "fit-content",
        }}
      >
        <Box
          component="div"
          height="90%"
          width="100%"
          sx={{ bgcolor: "#f44336", overflowY: "auto", padding: "0.5rem 0rem" }}
        >
          {messages.map((ele, ind) => {
            return <ChatBox answer={ele.data} key={ind} name={ele.name} />;
          })}
        </Box>
        <Box height="10%" width="100%" sx={{ display: "flex" }}>
          <IconButton
            onClick={() => {
              setChange(!change);
            }}
          >
            {change ? <TextFormatIcon /> : <ImageIcon />}
          </IconButton>
          {change ? (
            <TextField
              name="userName"
              variant="outlined"
              type="file"
              sx={{ width: "85%" }}
              onChange={(e) => {
                setAnswer(e.target.files[0]);
              }}
            />
          ) : (
            <TextField
              name="userName"
              variant="outlined"
              type="text"
              sx={{ width: "85%" }}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          )}

          <Button
            variant="contained"
            sx={{ width: "15%" }}
            onClick={handleSubmit}
          >
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
function ChatBox({ answer, name }) {
  return (
    <Box
      component="div"
      width="50%"
      sx={{
        bgcolor: "lightblue",
        minHeight: "2rem",
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        borderRadius: "0.5rem",
        padding: "0.75rem",
        textAlign: "start",
      }}
    >
      <span>{name}</span>
      {answer.length > 1000 ? <img src={answer} alt="photos" /> : answer}
    </Box>
  );
}

export default App;
