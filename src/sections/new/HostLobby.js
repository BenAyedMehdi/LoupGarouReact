import { useState, useEffect } from 'react';

import { Grid, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function HostLobby() {
  const [error, setError] = useState(false);
  const [allplayersJoined, setAllplayersJoined] = useState(false);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [gameRoles, setGameRoles] = useState([]);

  useEffect(() => {
    getGameRoles();
    getGamePlayers();
  }, []);

  useEffect(() => {
      setAllplayersJoined(gameRoles.length === gamePlayers.length);
  }, [gamePlayers, gameRoles]);

  const getGameRoles = async (e) => {
    const gameJson = localStorage.getItem('game');
    const gameId = gameJson ? JSON.parse(gameJson).gameId : null;
    if (gameId !== null) {
      const roles = await apiCalls.getGameRoles(gameId);
      console.log(roles === null ? 'Network error' : roles);
      if (roles === null) {
        setError(true);
      } else {
        setError(false);
        setGameRoles(roles);
      }
    }
  };

  const getGamePlayers = async (e) => {
    const gameJson = localStorage.getItem('game');
    const gameId = gameJson ? JSON.parse(gameJson).gameId : null;
    if (gameId !== null) {
      const players = await apiCalls.getGamePlayers(gameId);
      console.log(players === null ? 'Network error' : players);
      if (players === null) {
        setError(true);
      } else {
        setError(false);
        setGamePlayers(players);
      }
    }
  };

  const handleRefreshPlayers = async (e) => {
    e.preventDefault();
    await getGamePlayers();
  };

  return (
    <>
      <Grid container spacing={3}>
        {error && (
          <Grid item xs={12} sm={12} md={12}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Unable to connect to the server.
            </Alert>
          </Grid>
        )}
        {!allplayersJoined && (
          <Button onClick={handleRefreshPlayers} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Refresh
          </Button>
        )}
        {allplayersJoined && (
          <Button onClick={handleRefreshPlayers} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Start Game
          </Button>
        )}
        <Grid item xs={12} sm={6} md={3}>
          <PlayersListTable players={gamePlayers} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <PosterJoinGame />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable roles={gameRoles} />
        </Grid>
      </Grid>
    </>
  );
}
