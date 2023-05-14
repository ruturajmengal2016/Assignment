import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
export const Message = ({ answer, person }) => {
  const You = useSelector((state) => state.connection.value.Name);
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        minHeight: "fit-content",
        width: "fit-content",
        alignSelf: `${You === person ? "flex-end" : "flex-start"}`,
        backgroundColor: `${You === person ? "gray" : "black"}`,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Box
        component="div"
        sx={{
          alignSelf: `${You === person ? "flex-end" : "flex-start"}`,
          color: "greenyellow",
        }}
      >
        {person}
      </Box>
      <Box component="div" sx={{ float: "right" }}>
        {answer}
      </Box>
    </Box>
  );
};
