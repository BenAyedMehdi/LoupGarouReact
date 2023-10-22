import React, { useState, useEffect } from 'react';
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
import StartGameIntro from '../sections/game/StartGameIntro';
import { DayVote, PostNightAnnouncements, RoleNightTask } from '../sections/game';
import { TextWidget, PlayersJoining, InitialStepper, VotingStatus, CreateGameSettings } from '../sections/new';
// components
import Iconify from '../components/iconify';
import DayPhase from '../sections/game/DayPhase';
// ----------------------------------------------------------------------

export default function StartGamePage() {
  const [light, setLight] = React.useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Intro', 'Salvador', 'Loups', 'Sorciere', 'Announcements', 'Day', 'Vote'];

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
    if (currentStep === 4) {
      console.log('Day');
      setLight(true);
    }
    if (currentStep === 6) {
      console.log('Reset');
      setCurrentStep(0);
      setLight(false);
    }
  };

  const handleNightEnd = (e) => {
    e.preventDefault();
    console.log('Next');
    setCurrentStep(currentStep + 1);
    setLight(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Reset');
    setCurrentStep(0);
    setLight(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: light ? '#FFFCA2' : '#D4D4D4',
          padding: '20px',
          paddingBottom: '60px',
        }}
      >
        <Helmet>
          <title> Game Started </title>
        </Helmet>

        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" justifyContent="space-between">
            <InitialStepper currentStep={currentStep} steps={steps} />
            <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 56 }}>
              Next
            </Button>
          </Stack>
          {currentStep === 0 && (
            <>
              <StartGameIntro />
            </>
          )}
          {currentStep === 1 && (
            <>
              <RoleNightTask card="Salvador" />
            </>
          )}
          {currentStep === 2 && (
            <>
              <RoleNightTask card="Loup" />
            </>
          )}
          {currentStep === 3 && (
            <>
              <RoleNightTask card="Sorciere" />
            </>
          )}
          {currentStep === 4 && (
            <>
            <PostNightAnnouncements />
            </>
          )}
          {currentStep === 5 && (
            <>
              <DayPhase />
            </>
          )}
          {currentStep === 6 && (
            <>
              <DayVote />
            </>
          )}
        </Container>
      </div>
    </>
  );
}
