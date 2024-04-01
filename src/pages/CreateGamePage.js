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
import RolesDistribution from '../sections/new/RolesDistribution';
import useResponsive from '../hooks/useResponsive';
// sections
import {
  HostLobby,
  InitialStepper,
  VotingStatus,
  CreateGameSettings,
} from '../sections/new';
// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [game, setGame] = useState({});
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };
  
  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Create a game');
      navigate('/dashboard/host');
    }
    setCurrentStep(currentStep + 1);
  };

  const handleGameCreated = (g) => {
    setGame(g);
    localStorage.setItem('memoryObject', JSON.stringify(g));
    nextStep();
  };

  const handleBoardingComplete = () => {
    console.log('Boarding complete');
    nextStep();
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
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center">
          {isDesktop ? (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          ) : (
            <></>
          )}
          <Button onClick={handleNext} variant="contained" sx={{ width: '70%', height: 66, mb: 3 }}>
            Next
          </Button>
        </Stack>
        {currentStep === 0 && (
          <>
            <CreateGameSettings returnedGame={handleGameCreated} />
          </>
        )}
        {currentStep === 1 && (
          <>
            <HostLobby boardingCompleted={handleBoardingComplete}/>
          </>
        )}
        {currentStep === 2 && (
          <>
            <RolesDistribution />
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
