import { useState, useEffect } from 'react';

import { Typography } from '@mui/material';
import VotingStatus from './VotingStatus';
import VotingPlayersGrid from './VotingPlayersGrid';
import apiCalls from '../../apiCalls';
import storage from '../../storage';

// ----------------------------------------------------------------------

export default function VoteForCheif({ voted }) {
  const [playersList, setPlayersList] = useState([]);
  const [votingSession, setVotingSession] = useState({});
  const [selected, setSelected] = useState(2);
  const [isVoted, setIsVoted] = useState(false);
  
  useEffect(() => {
    getGamePlayers();
    getCurrentVotingSession();
  }, []);
  
  const gameId = storage.getGameId();

  const getCurrentVotingSession = async () => {

    if (gameId !== null) {
      const res = await apiCalls.getCurrentVotingSession(gameId);
      console.log(res);
        
      if (!res.error) {
        const votingSession = res.data;
        setVotingSession(votingSession);
      }
    }
  }


  const getGamePlayers = async () => {

    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);
      console.log(res);
        
      if (!res.error) {
        const players = res.data;
        setPlayersList(players);
      }
    }
  };


  const changeChoice = (id) => {
    setSelected(id);
  };
  const handleVote = (id) => {
    setIsVoted(true);
    voted(id);
  };
  return (
    <>
      {!isVoted && (
        <>
          <Typography align="center" variant="h3" sx={{ mb: 3 }}>
            Please Vote For Your Village Chief
          </Typography>
          <VotingPlayersGrid players={playersList} voted={handleVote}/>
        </>
      )}
      {isVoted && <VotingStatus />}
    </>
  );
}
