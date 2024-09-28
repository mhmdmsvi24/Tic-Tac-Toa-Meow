import "./App.css";

import GameBoard from "./components/Gameboard";

function App() {
  return (
    <div className="grid w-full h-screen mx-auto bg-mint_cream-100 place-items-center">
      <main className="p-4 rounded-md bg-powder_blue-700">
        <GameBoard />
      </main>
    </div>
  );
}

export default App;
