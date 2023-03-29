import React, { useRef, useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  const [qIndex, setIndex] = useState(0);
  const [score, setscore] = useState(0);
  const input = useRef();
  const Question = [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      options: [
        { Ans: "Virtual Dom", correct: true },
        { Ans: "Real Dom", correct: false },
        { Ans: "Both 1 and 2", correct: false },
        { Ans: "None of the above", correct: false },
      ],
    },
    {
      question: "What is ReactJS?",
      options: [
        { Ans: "Server-side framework", correct: false },
        { Ans: "User interface framework", correct: true },
        { Ans: "Both 1 and 2", correct: false },
        { Ans: "None of the above", correct: false },
      ],
    },
    {
      question:
        "Identify the one which is used to pass data to components from outside",
      options: [
        { Ans: "Render and arguments", correct: false },
        { Ans: "setState", correct: false },
        { Ans: "PropsType", correct: false },
        { Ans: "Props", correct: true },
      ],
    },
    {
      question: "Who created React.js?",
      options: [
        { Ans: "Jordan Mike", correct: false },
        { Ans: "Jordan Walke", correct: true },
        { Ans: "Tim lee", correct: false },
        { Ans: "Jordan lee", correct: false },
      ],
    },
    {
      question: "In which language is React.js written?",
      options: [
        { Ans: "Python", correct: false },
        { Ans: "Javascript", correct: true },
        { Ans: "Java", correct: false },
        { Ans: "PHP", correct: false },
      ],
    },
    {
      question: " What is Babel?",
      options: [
        { Ans: "Javascript Compiler", correct: true },
        { Ans: "Javascript Interpreter", correct: false },
        { Ans: "Javascript transpiler", correct: false },
        { Ans: "None of the above", correct: false },
      ],
    },
    {
      question: "ES6 stands for ____.",
      options: [
        { Ans: "ECMAScript 6", correct: true },
        { Ans: "Extended-JavaScript Version 6", correct: false },
        { Ans: "Extensive-JavaScript 6", correct: false },
        { Ans: "Expanded-JavaScript 6", correct: false },
      ],
    },
    {
      question: "Which method is used to generate lists?",
      options: [
        { Ans: "map()", correct: true },
        { Ans: "generate()", correct: false },
        { Ans: "new()", correct: false },
        { Ans: "maps()", correct: false },
      ],
    },
    {
      question: "How many types of the components in ReactJS?",
      options: [
        { Ans: "5", correct: false },
        { Ans: "3", correct: false },
        { Ans: "2", correct: true },
        { Ans: "1", correct: false },
      ],
    },
    {
      question: "In ReactJS, what is State?",
      options: [
        { Ans: "It's a temporary storage of the elements", correct: false },
        {
          Ans: "It's a state of the execution of the ReactJS application",
          correct: false,
        },
        { Ans: "It's an internal storage of the components", correct: true },
        { Ans: "All of the above", correct: false },
      ],
    },
  ];
  function handleNext() {
    if (input.current) {
      setscore(score + 2);
    }
    const next = qIndex + 1;
    if (next < Question.length) {
      setIndex(qIndex + 1);
    } else {
      setshow(true);
    }
    input.current = null;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[25rem] w-[25rem] rounded-md flex flex-col justify-around items-center border-2 border-purple-500">
        {show ? (
          <>
            <div className="font-mono text-[1.5rem]">
              Your Score is {score} out of 20
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center box-border p-2 gap-2 w-[100%]">
              <div className="self-center font-semibold text-[1.2rem] text-emerald-400">
                Question {qIndex + 1}/10
              </div>
              <div className="self-center text-red-600 font-medium">
                {Question[qIndex].question}
              </div>
              <div className="flex flex-col justify-start box-border w-[100%] gap-2 items-center">
                {Question[qIndex].options.map((element, index) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        name={Question[qIndex].question}
                        value={Question[qIndex].options[index].correct}
                        key={index}
                        ref={input}
                        onChange={(event) => {
                          input.current = event.target.value;
                        }}
                      />
                      {element.Ans}
                    </div>
                  );
                })}
                <button
                  onClick={handleNext}
                  className="p-1 border-2 border-red-600 bg-red-600 w-[6rem] rounded-md"
                >
                  {qIndex === 9 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
