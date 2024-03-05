import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Switch } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import RolesCountBar from './RolesCountBar';

// ----------------------------------------------------------------------

export default function CreateGameSettings({ returnedGame }) {
  const [error, setError] = useState(false);
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    getAllRolesInDb();
  }, []);

  const getAllRolesInDb = async (e) => {
    const roles = await apiCalls.getAllRoles();
    console.log(roles === null ? 'Network error' : roles);
    if (roles === null) {
      setError(true);
    } else {
      setError(false);
      setAllRoles(roles);
    }
  };
  const handleCreateGame = async (e) => {
    e.preventDefault();
    const game = await apiCalls.createGame();
    console.log(game === null ? 'Network error' : game.gameCode);
    if (game === null) {
      setError(true);
    } else {
      returnedGame(game);
    }
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
        <Grid item xs={12} sm={6} md={6}>
          <Button onClick={handleCreateGame} variant="contained" sx={{ width: '90%', height: 56, mx: 3 }}>
            Create Game
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="outlined-number"
            label="Number of players"
            type="number"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            {allRoles.map((role, index) => (
              <RolesCountBar key={index} role={role} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch />
            </Grid>
            <Grid sx={{ mb: '6px', mt: '0.5%' }} item xs={4} sm={4} md={4}>
              Loup
            </Grid>
            {/* <Grid item xs={4} sm={4} md={4}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch />
            </Grid>
            <Grid sx={{ mb: '6px', mt: '0.5%' }} item xs={4} sm={4} md={4}>
              Villagers
            </Grid>
            {/* numbers loup can vary depending on number of players , either we set a lot of conditions depending al number of players joined or we just let the backend handle it and decide hom many wolves/villagers to take in ratio of number of players */}
            {/* <Grid item xs={4} sm={4} md={4}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                required
                margin='normal'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch />
            </Grid>
            <Grid sx={{ mb: '6px', mt: '0.5%' }} item xs={4} sm={4} md={4}>
              Protector
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch defaultChecked={false} />
            </Grid>
            <Grid sx={{ mb: '6px', mt: '0.5%' }} item xs={4} sm={4} md={4}>
              Witcher
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
