import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    answers: [],
    value: [
      {
        id: 0,
        question: "Which of the following is the correct name of React.js?",
        answer: 1,
        options: ["React", "React.js", "ReactJS", "All of the above"],
      },
      {
        id: 1,
        question:
          "Which of the following command is used to install create-react-app?",
        answer: 0,
        options: [
          "npm install -g create-react-app",
          "npm install create-react-app",
          "npm install -f create-react-app",
          "install -g create-react-app",
        ],
      },
      {
        id: 2,
        question:
          "What of the following is used in React.js to increase performance?",
        answer: 1,
        options: [
          "Original DOM",
          "Virtual DOM",
          "Both A and B",
          "None of the above",
        ],
      },
      {
        id: 3,
        question:
          " Which of the following acts as the input of a class-based component?",
        answer: 3,
        options: ["Class", "Factory", "Render", "Props"],
      },
      {
        id: 4,
        question:
          " Which of the following keyword is used to create a class inheritance?",
        answer: 2,
        options: ["Create", "Inherits", "Extends", "This"],
      },
      {
        id: 5,
        question: "What is the default port where webpack-server runs?",
        answer: 1,
        options: ["3000", "8080", "3030", "6060"],
      },
      {
        id: 6,
        question:
          "How many numbers of elements a valid react component can return?",
        answer: 0,
        options: ["1", "2", "4", "5"],
      },
      {
        id: 7,
        question: "How many ways of defining your variables in ES6?",
        answer: 1,
        options: ["1", "3", "5", "2"],
      },
      {
        id: 8,
        question: "What is a state in React?",
        answer: 1,
        options: [
          "A permanent storage.",
          "Internal storage of the component.",
          "External storage of the component.",
          "None of the above.",
        ],
      },
      {
        id: 9,
        question: "What are the two ways to handle data in React?",
        answer: 0,
        options: [
          "State & Props",
          "Services & Components",
          "State & Services",
          "State & Component",
        ],
      },
    ],
  },
  reducers: {
    setAnswers: (state, action) => {
      state.answers.push(action.payload.answer);
    },
    totalMarks: (state) => {
      let marks = 0;
      for (const i in state.value) {
        if (state.value[i].answer == state.answers[i]) {
          marks += 5;
        }
      }
      return marks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswers, totalMarks } = questionSlice.actions;
