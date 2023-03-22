import React, { useState } from "react";

function TicTactoe() {
  const [turn, setturn] = useState("X");
  const [cells, setcells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkWinners = (squares) => {
    let combos = {
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
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };
  const Cell = ({ num }) => {
    return (
      <td
        className="border-2 border-red-500 h-[100px] w-[100px] text-center"
        onClick={() => {
          handleClick(num);
        }}
      >
        {cells[num]}
      </td>
    );
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked!");
      return;
    }
    let squares = [...cells];
    if (turn === "X") {
      squares[num] = "X";
      setturn("O");
    } else {
      squares[num] = "O";
      setturn("X");
    }
    checkWinners(squares);
    setcells(squares);
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <table className="">
        Turn:{turn}
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
      {winner && (
        <>
          <p>{winner} is the winner!</p>
          <button>Play Again</button>
        </>
      )}
    </div>
  );
}

export default TicTactoe;
