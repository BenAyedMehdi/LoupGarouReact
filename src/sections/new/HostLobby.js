import { useState, useEffect, useContext } from 'react';

import { Grid, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';
import GameContext from "../../contexts/GameContext"

// ----------------------------------------------------------------------

export default function HostLobby({gameId, boardingCompleted}) {
  const [error, setError] = useState(false);
  const [allplayersJoined, setAllplayersJoined] = useState(false);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [gameRoles, setGameRoles] = useState([]);
  const {gameDetails, updateGameDetails} = useContext(GameContext);

  useEffect(() => {
    getGameRoles();
    getGamePlayers();
  }, [gameDetails]);

  useEffect(() => {
    setAllplayersJoined(gameRoles.length === gamePlayers.length);
  }, [gamePlayers, gameRoles]);

  const getGameRoles = async () => {
    if (gameId !== null) {
      const res = await apiCalls.getGameRoles(gameId);
      if (res.error) {
        setError(true);
      } else {
        setError(false);
        const roles = res.data;
        setGameRoles(roles);
      }
    }
  };

  const getGamePlayers = async () => {
    const gameJson = gameDetails;
    const gameId = gameJson ? gameDetails.gameId : null;
    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);
      
      if (res.error) {
        setError(true);
      } else {
        const players = res.data;
        setError(false);
        setGamePlayers(players);
      }
    }
  };

  const handleRefreshPlayers = async (e) => {
    e.preventDefault();
    await getGamePlayers();
  };

  const handleStartGame = async (e) => {
    e.preventDefault();
    boardingCompleted();
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
          <Button onClick={handleStartGame} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Start Game
          </Button>
        )}
        <Grid item xs={12} sm={6} md={3}>
          <PlayersListTable players={gamePlayers} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <PosterJoinGame  />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable roles={gameRoles} />
        </Grid>
      </Grid>
    </>
  );
}
