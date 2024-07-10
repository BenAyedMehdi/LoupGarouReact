import { useState, useEffect, useContext } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import PlayersListTable from '../shared/PlayersListTable';
import CardsListTable from '../shared/CardsListTable';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function PlayersLobby({ playerName, gameId, seeMyCard }) {
  const [error, setError] = useState(false);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [gameRoles, setGameRoles] = useState([]);
  const [allplayersJoined, setAllplayersJoined] = useState(false);

  useEffect(() => {
    getGameRoles();
    getGamePlayers();
  }, [gameId]);

  useEffect(() => {
    setAllplayersJoined(gameRoles.length === gamePlayers.length);
  }, [gamePlayers, gameRoles]);

  const getGamePlayers = async (e) => {
    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);

      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const players = res.data;
        setError(false);
        console.log(players);
        setGamePlayers(players);
      }
    }
  };

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

  const handleRefreshPlayers = async (e) => {
    e.preventDefault();
    await getGamePlayers();
  };

  const handleReceiveCard = async (e) => {
    e.preventDefault();
    seeMyCard();
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
        <Typography align="center" variant="h6" sx={{ opacity: 0.72, m: 3 }}>
          Hi {playerName}! Sit back and relax while your friends join the game.
        </Typography>
        {!allplayersJoined && (
          <Button onClick={handleRefreshPlayers} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Refresh
          </Button>
        )}
        {allplayersJoined && (
          <Button onClick={handleReceiveCard} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Receive my card
          </Button>
        )}
        <Grid item xs={12} sm={6} md={3}>
          <PlayersListTable players={gamePlayers}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography align="center" variant="h6" sx={{ opacity: 0.72 }}>
            Share the QR code with your friends
          </Typography>
          <Box component="img" src="/assets/images/qrcode.png" sx={{ width: '100%', pt: 2 }} />
        </Grid>

        <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable gameId={gameId} />
        </Grid>
      </Grid>
    </>
  );
}
