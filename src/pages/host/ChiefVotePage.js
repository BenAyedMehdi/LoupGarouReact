import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Stack,
  Container,
} from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// sections
import { InitialStepper, VotingSession } from '../../components';
// ----------------------------------------------------------------------

export default function ChiefVoteResultPage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(3); // 3= Vote for the leader
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId } = useParams();

  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Create a game');
      navigate('/host');
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container sx={{ paddingTop: 5 }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center">
          {isDesktop && (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          )}
        </Stack>

        <VotingSession VoteEnded={nextStep}/>
      
      </Container>
    </>
  );
}
