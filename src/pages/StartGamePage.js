import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
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
import GetReadyToStart  from '../sections/game/GetReadyToStart';
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
  const steps = ['GetReady','Intro', 'Salvador', 'Loups', 'Sorciere', 'Announcements', 'Day', 'Vote'];
  const currentSound = `/assets/sounds/${steps[currentStep+1]}.m4a`;
  const [playSound, {stop}] = useSound(currentSound);
  
  const handleNext = (e) => {
    stop(); // Not working yet
    e.preventDefault();
    playSound();
    setCurrentStep(currentStep + 1);
    console.log(currentSound)
    if (currentStep === 5) {
      console.log('Day');
      setLight(true);
    }
    if (currentStep === 7) {
      console.log('Reset');
      setCurrentStep(0);
      setLight(false);
    }
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
            {currentStep === 0 && ("Start")}
            {currentStep !== 0 && ("Next")}
            </Button>
          </Stack>
          {currentStep === 0 && (
            <>
              <GetReadyToStart />
            </>
          )}
          {currentStep === 1 && (
            <>
              <StartGameIntro />
            </>
          )}
          {currentStep === 2 && (
            <>
              <RoleNightTask card="Salvador" />
            </>
          )}
          {currentStep === 3 && (
            <>
              <RoleNightTask card="Loup" />
            </>
          )}
          {currentStep === 4 && (
            <>
              <RoleNightTask card="Sorciere" />
            </>
          )}
          {currentStep === 5 && (
            <>
              <PostNightAnnouncements />
            </>
          )}
          {currentStep === 6 && (
            <>
              <DayPhase />
            </>
          )}
          {currentStep === 7 && (
            <>
              <DayVote />
            </>
          )}
        </Container>
      </div>
    </>
  );
}
