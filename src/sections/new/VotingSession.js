import { useState, useEffect, useContext } from 'react';

import { Button } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import VotingStatus from './VotingStatus';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function VotingSession({VoteEnded}) {
  const [error, setError] = useState(false);
  const [votingSession, setVotingSession] = useState({});
  const {gameDetails}=useContext(GameContext);
  useEffect(() => {
    createCheifVotingSession();
  }, []);

  const createCheifVotingSession = async () => {
    const game = gameDetails;
    if (game !== null) {
      const req = DTOs.createVotingSessionRequest(game.gameId, 'chief', game.numberOfPlayers);
      const res = await apiCalls.createVotingSession(req);
      console.log("create vhieve vote session req ",req)
      console.log("create vhieve vote session res ",res)
      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const votingSession = res.data;
        setError(false);
        setVotingSession(votingSession);
      }
    }
  };
  const handleNext =  (e) => {
    e.preventDefault();
    console.log("next: ", gameDetails)
    if (gameDetails.currentPhase === 'assign-roles') {
      console.log("Roles assigned ")
      VoteEnded();
    }
  };

  return (
    <>
      <Button onClick={handleNext} variant="contained" sx={{ width: '100%', height: 66, mb: 3 }}>
        Next
      </Button>
      
      <VotingStatus votingSession={votingSession} />
    </>
  );
}
