import { useState } from "react";
import Dice from "./components/Dice.jsx";
import Player from "./components/Player.jsx";
import Game from "./components/Game.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Dice />
      <Player />
      <Game />
    </>
  );
}

export default App;
