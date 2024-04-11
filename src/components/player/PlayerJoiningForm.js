import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Switch } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';

// ----------------------------------------------------------------------

export default function PlayerJoiningForm({ returnedPlayer }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Unable to connect to the server.');
  const [name, setName] = useState('');
  const [gameID, setGameID] = useState('');
  const [valid, setValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGameIdChange = (e) => {
    setGameID(e.target.value);
  };

  const handleJoinGame = async (e) => {
    e.preventDefault();

    if (name === '' && gameID === '') {
      setValid(false);
    } else if (name !== '' && gameID !== '') {
      const req = {
        gameCode: gameID,
        playerName: name,
      };

      const res = await apiCalls.addPlayer(req);

      if (res.error) {
        console.log(res.error);
        setError(true);
        if (res.error.code === 'ERR_BAD_REQUEST' || res.error.code === 'ERR_NOT_FOUND') {
          setErrorMessage(res.error.response.data);
        } else {
          setErrorMessage('Unable to connect to the server.');
        }
      } else {
        const player = res.data;
        console.log(player);
        setError(false);
        returnedPlayer(player);
      }
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {error && (
          <Grid item xs={12} sm={12} md={12}>
            <Alert severity="error">
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} sm={3} md={4}>
          <></>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            value={name}
            onChange={handleNameChange}
            error={!valid && name === ''}
            helperText={!valid && name === '' ? 'Name is Required !' : ' '}
            margin="normal"
            required
            id="outlined-required"
            label="Name"
            fullWidth
          />
          <TextField
            value={gameID}
            onChange={handleGameIdChange}
            error={!valid && gameID === ''}
            helperText={!valid && name === '' ? 'GameID is Required !' : ' '}
            margin="normal"
            required
            id="outlined-required"
            label="Game ID"
            fullWidth
          />

          <Button onClick={handleJoinGame} variant="contained" sx={{ width: '100%', height: 66, mb: 3 }}>
            Join Game
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <></>
        </Grid>
      </Grid>
    </>
  );
}
