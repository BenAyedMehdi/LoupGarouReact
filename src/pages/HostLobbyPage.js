import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Stack,
  Container,
  Button,
} from '@mui/material';
import RolesDistribution from '../sections/new/RolesDistribution';
import useResponsive from '../hooks/useResponsive';
// sections
import { HostLobby, InitialStepper, VotingSession } from '../sections/new';
// ----------------------------------------------------------------------

export default function HostLobbyPage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1= Players joining
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId } = useParams();

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Create a game');
      navigate('/host');
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBoardingComplete = () => {
    console.log('Boarding complete');
    nextStep();
  };

  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container sx={{ paddingTop: 5 }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center">
          {isDesktop ?? (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          )}
          <Button onClick={handleNext} variant="contained" sx={{ width: '70%', height: 66, mb: 3 }}>
            Next
          </Button>
        </Stack>
        {currentStep === 1 && (
          <>
            <HostLobby gameId={gameId} boardingCompleted={handleBoardingComplete}/>
          </>
        )}
        {currentStep === 2 && (
          <>
            <RolesDistribution />
          </>
        )}
        {currentStep === 3 && (
          <>
            <VotingSession />
          </>
        )}
      </Container>
    </>
  );
}
