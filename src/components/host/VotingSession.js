import { useState, useEffect, useContext } from 'react';

import { Button } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import VotingStatus from '../shared/VotingStatus';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function VotingSession({sessionId, VoteEnded}) {
  const [error, setError] = useState(false);
  const [votingSession, setVotingSession] = useState({});
  const {gameDetails}=useContext(GameContext);
  useEffect(() => {
    console.log(sessionId)
    getCheifVotingSession(sessionId);
  }, []);

  const getCheifVotingSession = async (sessionId) => { 
    if (sessionId !== null || sessionId !== undefined) {
      const res = await apiCalls.getVotingSession(sessionId);
      console.log("Fetched session: ",res)
      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const votingSession = res.data;
        setError(false);
        setVotingSession(votingSession);
      }
    }
    else{  
      console.log("sessionId is null")
      alert("sessionId is null");
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
        else{
          alert("Voting is not completed yet")
        }
      }
    }
  };

  return (
    <>
      <Button onClick={handleStartGame} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
        Start Game
      </Button>

      <VotingStatus sessionId={sessionId} votingSession={votingSession} />
    </>
  );
}
