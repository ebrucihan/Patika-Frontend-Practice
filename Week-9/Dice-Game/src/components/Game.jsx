import React, { useState } from "react";
import Player from "./Player";

const Game = () => {
  const [player1Dice, setPlayer1Dice] = useState(1);
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [result, setResult] = useState("Start!");
  const [player1Name, setPlayer1Name] = useState("Player 1");

  const rollDice = () => {
    setResult("Rolling...");

    let tempPlayer1Dice = 1;
    let tempPlayer2Dice = 1;
    let counter = 0;

    const interval = setInterval(() => {
      tempPlayer1Dice = Math.floor(Math.random() * 6) + 1;
      tempPlayer2Dice = Math.floor(Math.random() * 6) + 1;
      setPlayer1Dice(tempPlayer1Dice);
      setPlayer2Dice(tempPlayer2Dice);
      counter++;
      if (counter === 10) {
        clearInterval(interval);

        const finalPlayer1Dice = Math.floor(Math.random() * 6) + 1;
        const finalPlayer2Dice = Math.floor(Math.random() * 6) + 1;
        setPlayer1Dice(finalPlayer1Dice);
        setPlayer2Dice(finalPlayer2Dice);

        if (finalPlayer1Dice > finalPlayer2Dice) {
          setResult(`${player1Name} Wins!`);
        } else if (finalPlayer1Dice < finalPlayer2Dice) {
          setResult("Player 2 Wins!");
        } else {
          setResult("It's a Draw!");
        }
      }
    }, 300);
  };

  return (
    <div className="game">
      <h1>{result}</h1>
      <div className="players">
        <Player
          playerName={player1Name}
          diceValue={player1Dice}
          onNameChange={setPlayer1Name}
        />
        <Player playerName="Player 2" diceValue={player2Dice} />
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Game;
