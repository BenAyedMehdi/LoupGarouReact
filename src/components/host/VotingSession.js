import { useState, useEffect, useContext } from 'react';

import { Button } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import VotingStatus from '../shared/VotingStatus';
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
  const handleStartGame = async (e) => {
    e.preventDefault();
    if(votingSession !== null){
      const res = await apiCalls.getVotingSession(votingSession.votingSessionId);
      if(res.error){
        console.log(res.error)
        setError(true)
      }else{
        const session = res.data;
        setError(false);
        console.log(session);
        setVotingSession(session);
        if (session.isCompleted) {
          VoteEnded();
        }
      }
    }
  };

  return (
    <>
      <Button onClick={handleStartGame} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
        Start Game
      </Button>

      <VotingStatus votingSession={votingSession} />
    </>
  );
}
