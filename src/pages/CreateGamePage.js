import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import {Box, Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// sections
import { TextWidget, PlayerWidget,PlayersJoining, InitialStepper } from '../sections/new';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const [created, setCreated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Create a game',
    'Players joining...',
    'Vote for the cheif',
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Game created');
    setCreated(true);
    setCurrentStep(1)
  };
  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container maxWidth="xl">
        <InitialStepper currentStep={currentStep} steps={steps} />
        {currentStep===0 && (
          <>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
              Hi, you are the Host, let's create a game!
            </Typography>
            <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ width: 166, height: 56 }}
                  startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Create a game
                </Button>
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="outlined-number"
                  label="Number of players"
                  type="number"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </>
        )}
        {currentStep===1 && (
          <>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Game created! Please join using the game ID
              </Typography>
              <Button variant="contained" sx={{ width: 166, height: 66 }}>
                Start vote
              </Button>
            </Stack>

          <PlayersJoining/>
          </>
        )}
      </Container>
    </>
  );
}
