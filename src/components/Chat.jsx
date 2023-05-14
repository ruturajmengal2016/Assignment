import React from "react";
import Box from "@mui/material/Box";
import Hi from "../Hi.jpg";
import { Message } from "./Message";
const Chat = ({ messages }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current?.scrollIntoView();
  }, [messages]);
  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "blue",
        height: "90%",
        width: "100%",
        backgroundImage: `url(${Hi})`,
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: "white",
        overflowY: "auto",
        boxSizing: "border-box",
        padding: "0rem 1rem",
      }}
    >
      {messages.map((message, ind) => {
        return (
          <Message answer={message.message} key={ind} person={message.user} />
        );
      })}
    </Box>
  );
};

export default Chat;