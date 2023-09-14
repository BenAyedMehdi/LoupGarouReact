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

// sections
import StartGameIntro from '../sections/game/StartGameIntro';
import { DayVote, PostNightAnnouncements, RoleNightTask } from '../sections/game';
import { TextWidget, PlayersJoining, InitialStepper, VotingStatus, CreateGameSettings } from '../sections/new';
// components
import Iconify from '../components/iconify';
import DayPhase from '../sections/game/DayPhase';
// ----------------------------------------------------------------------

const themeLight = createTheme({
 /* 
 
        <ThemeProvider theme={light ? themeLight : themeDark}>
          <CssBaseline />

 palette: {
    backgroundColor: {
      default: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  */
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    backgroundColor: {
      default: '#000000',
    },
    text: {
      default: '#000000',
    },
  },
});

export default function PlayerGame() {
  const [light, setLight] = React.useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Intro', 'Salvador', 'Loups', 'Sorciere', 'Announcements', 'Day', 'Vote'];
  const handleNext = (e) => {
    e.preventDefault();
    console.log('Next');
    setCurrentStep(currentStep + 1);
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
          paddingBottom: '60px'
        }}
      >
        <Helmet>
          <title> Game Started </title>
        </Helmet>
          <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>

          <Container maxWidth="xl">
            <InitialStepper currentStep={currentStep} steps={steps} />
            {currentStep === 0 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    The night is falling, the game is starting!
                  </Typography>
                  <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 56 }}>
                    Next
                  </Button>
                </Stack>
                <StartGameIntro />
              </>
            )}
            {currentStep === 1 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Salvador is waking up... Protect someone!
                  </Typography>
                  <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <RoleNightTask card="Salvador" />
              </>
            )}
            {currentStep === 2 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Wolves are waking up... Kill someone!
                  </Typography>
                  <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <RoleNightTask card="Loup" />
              </>
            )}
            {currentStep === 3 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Sorciere is waking up... Will you use your power?!
                  </Typography>
                  <Button onClick={handleNightEnd} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <RoleNightTask card="Sorciere" />
              </>
            )}
            {currentStep === 4 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    The night has ended, a new day starts
                  </Typography>
                  <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <PostNightAnnouncements />
              </>
            )}
            {currentStep === 5 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Day
                  </Typography>
                  <Button onClick={handleNext} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <DayPhase />
              </>
            )}
            {currentStep === 6 && (
              <>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={5}
                >
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Vote
                  </Typography>
                  <Button onClick={handleReset} variant="contained" sx={{ width: 166, height: 66 }}>
                    Next
                  </Button>
                </Stack>

                <DayVote />
              </>
            )}
          </Container>
      </div>
    </>
  );
}
