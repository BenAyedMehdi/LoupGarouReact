import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameDetails, setGameDetails] = useState(
    JSON.parse(localStorage.getItem("gameObject")) || null 
  );
  const [playerDetails,setPlayerDetails]=useState(
    JSON.parse(localStorage.getItem("playerObject")) || null 
  )
  return (
    <GameContext.Provider value={[gameDetails, setGameDetails,playerDetails,setPlayerDetails]}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
