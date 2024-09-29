import { useState } from "react";

/*
  when I click on the button what should I do?
  1. I need to know the current player turn
  2. Based on that turn I must change the game data to re-render board
*/

export default function GameButton({ value, onSquareClick }) {
  return (
    <button
      className="font-sans basis-[32%] min-w-[120px] aspect-square text-4xl font-bold rounded-lg bg-mint_cream-600 hover:bg-mint_cream-700 text-oxford_blue-500"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
