import GameButton from "./ui/GameButton";
import { useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function GameBoard() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Undo
  const history = [];

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    history.push([nextSquares, xIsNext]);
    console.log(history);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="py-3 text-2xl font-bold text-center rounded-md text-oxford_blue-500 bg-mint_cream-600">
          {status}
        </div>
        <div className="container flex items-center justify-center">
          <div className="flex flex-wrap justify-around items-center shrink bg-yale_blue-500 w-[400px] aspect-square shadow-md p-1 rounded-lg">
            {squares.map((square, squareIndex) => (
              <GameButton
                key={squareIndex}
                value={square}
                onSquareClick={() => handleClick(squareIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
