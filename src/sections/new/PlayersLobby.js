import { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';  
import apiCalls from '../../apiCalls';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function PlayersLobby() {
  const [error, setError] = useState(false);
  const [gamePlayers, setGamePlayers] = useState([]);

  useEffect(() => {
    getGamePlayers();
  }, []);

  const getGamePlayers = async (e) => {
    const playerJson = localStorage.getItem('player');
    const gameId = playerJson ? JSON.parse(playerJson).gameId : null;
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
        <Button onClick={handleRefreshPlayers} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
          Refresh
        </Button>
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
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
