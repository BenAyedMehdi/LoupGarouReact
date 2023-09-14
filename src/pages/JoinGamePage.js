import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
// components
import { PlayersJoining, InitialStepper, VoteForCheif, AssignedRole } from '../sections/new';
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function JoinGamePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVoted, setIsVoted] = useState(false);
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const handleJoinGame = (e) => {
    e.preventDefault();
    console.log('player joined');
    setCurrentStep(1);
  };

  const handleReady = (e) => {
    e.preventDefault();
    setCurrentStep(2);
    console.log('player ready');
  };

  const handleStartVote = (e) => {
    e.preventDefault();
    setCurrentStep(3);
    console.log('I know my role');
  };

  const handleVote = () => {
    setIsVoted(true);
  };

  return (
    <>
      <Helmet>
        <title> Join a game </title>
      </Helmet>

      <Container maxWidth="xl">
        <InitialStepper currentStep={currentStep} steps={steps} />
        {currentStep === 0 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, enter your name and the game ID
              </Typography>
              <Button
                variant="contained"
                onClick={handleJoinGame}
                sx={{ height: 56, marginTop: 2 }}
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Join the game
              </Button>
            </Stack>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField margin="normal" required id="outlined-required" label="Name" fullWidth />
                <TextField margin="normal" required id="outlined-required" label="Game ID" fullWidth />
              </Grid>
            </Grid>
          </>
        )}
        {currentStep === 1 && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                The game will start when everyone join, be ready!
              </Typography>
              <Button onClick={handleReady} variant="contained" sx={{ width: 166, height: 66 }}>
                I am ready
              </Button>
            </Stack>
            <PlayersJoining />
          </>
        )}
        {currentStep === 2 && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Your role was assigned to you
              </Typography>
              <Button onClick={handleStartVote} variant="contained" sx={{ width: 166, height: 66 }}>
                Done
              </Button>
            </Stack>
            <AssignedRole />
          </>
        )}
        {currentStep === 3 && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Please vote for the player you want to lead the village
              </Typography>
              {isVoted && (
                <Button href="game" variant="contained" sx={{ width: 166, height: 66 }}>
                  Ready
                </Button>
              )}
            </Stack>
            <VoteForCheif voted={handleVote} key={1} />
          </>
        )}
      </Container>
    </>
  );
}
