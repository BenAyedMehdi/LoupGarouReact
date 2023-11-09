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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useResponsive from '../hooks/useResponsive';

// sections
import StartGameIntro from '../sections/game/StartGameIntro';
import {PlayerNightAction,  DayVote, PlayerSleeping, PostNightAnnouncements, RoleNightTask } from '../sections/game';
import { TextWidget, HostLobby, InitialStepper, VotingStatus, CreateGameSettings, VotingPlayersGrid } from '../sections/new';
// components
import Iconify from '../components/iconify';
import DayPhase from '../sections/game/DayPhase';
// ----------------------------------------------------------------------

export default function PlayerGame() {
  const isDesktop = useResponsive('up', 'lg');
  const [light, setLight] = React.useState(false);
  const [voted, setVoted] = React.useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['GetReady','Intro', 'Salvador', 'Loups', 'Sorciere', 'Announcements', 'Day', 'Vote'];
  
  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
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

  const handleVote = (id) => {
    console.log('voted', id);
    setVoted(true);
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
          minHeight:500,
          backgroundColor: light ? '#FFFCA2' : '#D4D4D4',
          paddingBottom: '100%',
        }}
      >
        <Helmet>
          <title> Game Started </title>
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
            <Button onClick={handleNext} variant="contained" sx={{ width: '70%', height: 66, mb:3 }}>
              {currentStep === 0 && 'Ready'}
              {currentStep !== 0 && 'Next'}
            </Button>
          </Stack>
          {currentStep === 0 && (
            <>
              <StartGameIntro />
            </>
          )}
          {currentStep === 1 && (
            <>
              <PlayerSleeping />
            </>
          )}
          {currentStep === 2 && (
            <>
              <PlayerNightAction voted={handleVote} card="Salvador" />
            </>
          )}
          {currentStep === 3 && (
            <>
              <PlayerNightAction voted={handleVote} card="Loup" />
            </>
          )}
          {currentStep === 4 && (
            <>
              <PlayerNightAction voted={handleVote} card="Sorciere" />
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
            <TextWidget
              title={'One player will die at the end of the day'}
              value={'Vote on the player you would like to eliminate'}
              color="warning"
              icon={'ant-design:windows-filled'}
              sx={{ mb: 3 }}
            />
            <VotingPlayersGrid voted={handleVote} />
            </>
          )}
        </Container>
      </div>
    </>
  );
}
