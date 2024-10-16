import React from "react";
import Dice from "./Dice";

const Player = ({ playerName, diceValue }) => {
  return (
    <div className="player">
      <p>{playerName}</p>
      <Dice value={diceValue} />
    </div>
  );
};

export default Player;
