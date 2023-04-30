import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Box, Stack, Grid, Container, Typography, Button, TextField,FormGroup,FormControlLabel,Switch } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// sections
import { TextWidget, PlayersJoining, InitialStepper, VotingStatus, CreateGameSettings} from '../sections/new';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const handleCreateGame = (e) => {
    e.preventDefault();
    console.log('Game created');
    setCurrentStep(1);
  };
  const handleBoardingComplete = (e) => {
    e.preventDefault();
    console.log('Boarding complete');
    setCurrentStep(2);
  };
  const handleStartVote = (e) => {
    e.preventDefault();
    console.log('Starting vote');
    setCurrentStep(3);
  };
  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container maxWidth="xl">
        <InitialStepper currentStep={currentStep} steps={steps} />
        {currentStep === 0 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, you are the Host, let's create a game!
              </Typography>
              <Button
                onClick={handleCreateGame}
                variant="contained"
                sx={{ width: 166, height: 56 }}
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Create a game
              </Button>
            </Stack>
            <CreateGameSettings/>
          </>
        )}
        {currentStep === 1 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Game created! Please join using the game ID
              </Typography>
              <Button onClick={handleBoardingComplete} variant="contained" sx={{ width: 166, height: 66 }}>
                Boarding Complete
              </Button>
            </Stack>

            <PlayersJoining />
          </>
        )}
        {currentStep === 2 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Assigning roles...
              </Typography>
              <Button onClick={handleStartVote} variant="contained" sx={{ width: 166, height: 66 }}>
                Vote for the leader
              </Button>
            </Stack>
            <TextWidget value="Please check your phone" color="warning" icon={'ant-design:windows-filled'} />
          </>
        )}
        {currentStep === 3 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Please vote for the player you want to lead the village
              </Typography>
              <Button variant="contained" sx={{ width: 166, height: 66 }}>
                Start game
              </Button>
            </Stack>

            <VotingStatus />
          </>
        )}
      </Container>
    </>
  );
}
