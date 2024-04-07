import React, { createContext, useState, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameDetails, setGameDetails] = useState(
    JSON.parse(localStorage.getItem("gameObject")) || null
  );
  const [playerDetails, setPlayerDetails] = useState(
    JSON.parse(localStorage.getItem("playerObject")) || null
  );

  // Custom setter for gameDetails
  const updateGameDetails = (details) => {
    setGameDetails(details);
    localStorage.setItem("gameObject", JSON.stringify(details));
  };

  // Custom setter for playerDetails
  const updatePlayerDetails = (details) => {
    setPlayerDetails(details);
    localStorage.setItem("playerObject", JSON.stringify(details));
  };

  return (
    <GameContext.Provider value={{gameDetails, updateGameDetails, playerDetails, updatePlayerDetails}}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
