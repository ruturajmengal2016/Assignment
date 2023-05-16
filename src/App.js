import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import Question from "./components/Question";
import Options from "./components/Options";
import Button from "@mui/material/Button";
import { setAnswers } from "./Redux/slice";
export default function App() {
  const [answer, setAnswer] = React.useState(0);
  const [marks, setMarks] = React.useState(0);
  const value = useSelector((state) => state.question.value);
  const [next, setNext] = React.useState(0);
  const dispatch = useDispatch();
  const handleAnswer = () => {
    dispatch(setAnswers({ answer: answer }));
  };
  const setHandleAnswer = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: 500,
          width: 500,
          boxSizing: "border-box",
          padding: "1rem",
          backgroundColor: "lightblue",
          display: {
            xs: "none",
            sm: "flex",
          },
          flexDirection: "column",
        }}
      >
        <Question question={value[next].question} />
        <Options
          options={value[next].options}
          question={value[next].question}
          setHandleAnswer={setHandleAnswer}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (value[next].answer == answer) setMarks(marks + 5);
            if (next < value.length - 1) {
              setNext(next + 1);
            } else {
              alert(`Your Total Marks are ${marks}`);
              setNext(0);
              setMarks(0);
            }
            handleAnswer();
          }}
        >
          {next < value.length - 1 ? "Next" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
}
