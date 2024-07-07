import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container, Button } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// components
import { InitialStepper, VoteForCheif } from '../../components';
import Iconify from '../../components/iconify';
import GameContext from '../../contexts/GameContext';
// ----------------------------------------------------------------------

export default function ChiefVotePage() {
  // const { playerDetails, updatePlayerDetails } = useContext(GameContext);
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2); // 2= See Role
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId, playerId } = useParams();

  // useEffect(() => {
  //   console.log('context player details', playerDetails);
  // }, [playerDetails]);

  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Joined the game');
      navigate('/game');
    }
    console.log('next step');
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Helmet>
        <title> Join a game </title>
      </Helmet>

      <Container sx={{ paddingTop: 5 }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center" mb={2}>
          {isDesktop && (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          )}
        </Stack>

        <VoteForCheif gameId={gameId} playerId={playerId} />

      </Container>
    </>
  );
}
