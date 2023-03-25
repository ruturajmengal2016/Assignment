import React, { useState } from "react";

function App() {
  const [cell, setcell] = useState(Array(9).fill(""));
  const [user, setuser] = useState("X");
  const [winner, setWinner] = useState();
  function Cell({ num }) {
    return (
      <td
        className="border-2 border-purple-500 w-[50px] h-[50px]"
        onClick={() => {
          handleClick(num);
        }}
      >
        {cell[num]}
      </td>
    );
  }
  function handleClick(num) {
    if (cell[num] !== "") {
      alert("You Clicked already!");
      return;
    }
    const squares = [...cell];
    if (user === "X") {
      squares[num] = "X";
      setuser("O");
    } else {
      squares[num] = "O";
      setuser("X");
    }
    checkWinner(squares);
    setcell(squares);
  }
  function checkWinner(squares) {
    const Combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in Combos) {
      Combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  }
  return (
    <div className="flex justify-center h-screen flex-col">
      <table className="h-[200px] w-[200px] self-center text-center">
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <div className="self-center">
        {winner && (
          <>
            <span>{winner}</span>
            <span>This is Winner</span>
            <button
              onClick={() => {
                setcell(Array(9).fill(""));
                setWinner("");
              }}
              className="border-2 border-green-500 p-2"
            >
              Rest
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
