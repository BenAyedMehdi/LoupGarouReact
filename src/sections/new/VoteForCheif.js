import { useState, useEffect } from 'react';

import { Typography } from '@mui/material';
import VotingStatus from './VotingStatus';
import VotingPlayersGrid from './VotingPlayersGrid';
import apiCalls from '../../apiCalls';
import storage from '../../storage';
import DTOs from '../../DTOs';

// ----------------------------------------------------------------------

export default function VoteForCheif() {
  const [playersList, setPlayersList] = useState([]);
  const [votingSession, setVotingSession] = useState({});
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    getGamePlayers();
    getCurrentVotingSession();
  }, []);

  const gameId = storage.getGameId();

  const getGamePlayers = async () => {
    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);
      
      if (!res.error) {
        const players = res.data;
        console.log(players);
        setPlayersList(players);
      }
    }
  };

  const getCurrentVotingSession = async () => {
    if (gameId !== null) {
      const res = await apiCalls.getCurrentVotingSession(gameId);
      
      if (!res.error) {
        const votingSession = res.data;
        console.log(votingSession);
        setVotingSession(votingSession);
      }
    }
  };

  const handleVote = async (targetId, name) => {
    const voterId = storage.getPlayerId();
    const req = DTOs.createVoteRequest(voterId, targetId, votingSession.votingSessionId);
    const res = await apiCalls.createVote(req);
    if (!res.error) {
      const vote = res.data;
      console.log(vote);
      setIsVoted(true);
    }
  };
  return (
    <>
      {!isVoted && (
        <>
          <Typography align="center" variant="h3" sx={{ mb: 3 }}>
            Please Vote For Your Village Chief
          </Typography>
          <VotingPlayersGrid players={playersList} voted={handleVote} />
        </>
      )}
      {isVoted && <VotingStatus votingSession={votingSession}/>}
    </>
  );
}VotingStatus
