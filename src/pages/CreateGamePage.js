import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import {
  Box,
  Stack,
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// sections
import { TextWidget, PlayersJoining, InitialStepper, VotingStatus, CreateGameSettings, PlayersListTable, CardsListTable } from '../sections/new';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 3) {
      console.log('Create a game');
      navigate('/dashboard/host');
    }
    setCurrentStep(currentStep + 1);
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

      <Container sx={{ paddingTop: 5 }} maxWidth="xl">
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" justifyContent="center">
          <InitialStepper currentStep={currentStep} steps={steps} />
          <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 66 }}>
            Next
          </Button>
        </Stack>
        {currentStep === 0 && (
          <>
            <CreateGameSettings />
          </>
        )}
        {currentStep === 1 && (
          <>
            <PlayersJoining />
          </>
        )}
        {currentStep === 2 && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <PlayersListTable />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <TextWidget value="Please check your role" color="warning" icon={'ant-design:windows-filled'} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardsListTable />
              </Grid>
            </Grid>
          </>
        )}
        {currentStep === 3 && (
          <>
            <VotingStatus />
          </>
        )}
      </Container>
    </>
  );
}
