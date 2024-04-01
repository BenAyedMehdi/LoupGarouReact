import { useState, useEffect } from 'react';

import { Grid, LinearProgress } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';
import storage from '../../storage';
import VotingStatus from './VotingStatus';

// ----------------------------------------------------------------------

export default function VotingSession() {
  const [error, setError] = useState(false);
  const [votingSession, setVotingSession] = useState({});

  useEffect(() => {
    createCheifVotingSession();
  }, []);

  const createCheifVotingSession = async () => {
    const game = storage.getGame();

    if (game !== null) {
      const req = DTOs.createVotingSessionRequest(game.gameId, 'chief', game.numberOfPlayers);
      const res = await apiCalls.createVotingSession(req);
      
      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const votingSession = res.data;
        setError(false);
        console.log(votingSession);
        setVotingSession(votingSession);
      }
    }
  };

  return (
    <>
      <VotingStatus votingSession={votingSession} />
    </>
  );
}
