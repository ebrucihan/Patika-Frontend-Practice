import React from "react";

const Dice = ({ value }) => {
  const diceImage = `/img/dice${value}.png`;
  return (
    <div>
      {value && (
        <img src={diceImage} alt={`Dice showing ${value}`} className="dice" />
      )}
    </div>
  );
};

export default Dice;
