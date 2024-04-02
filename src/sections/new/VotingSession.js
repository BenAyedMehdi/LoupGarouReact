import { useState, useEffect, useContext } from 'react';

import { Grid, LinearProgress } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';
import storage from '../../storage';
import VotingStatus from './VotingStatus';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function VotingSession() {
  const [error, setError] = useState(false);
  const [votingSession, setVotingSession] = useState({});
  const [gameDetails]=useContext(GameContext);
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

  return (
    <>
      <VotingStatus votingSession={votingSession} />
    </>
  );
}
