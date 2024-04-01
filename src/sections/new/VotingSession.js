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
    const gameId = storage.getGameId();

    if (gameId !== null) {
      const req = DTOs.createVotingSessionRequest(gameId, 'chief');
      const res = await apiCalls.createVotingSession(req);
      console.log(res);

      if (res.error) {
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
