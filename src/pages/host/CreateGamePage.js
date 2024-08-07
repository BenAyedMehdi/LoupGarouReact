import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// sections
import { InitialStepper, CreateGameSettings } from '../../components';

// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // 0 = create game
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const gameCreated = (game) => {
    const id = game.gameId;
    const url = `/host-lobby/${id}`;
    navigate(url);
  };

  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container sx={{
          minHeight: '95vh',
          paddingTop: 5,
          backgroundImage: 'url(/assets/darkvillage.png)',
          backgroundSize: 'cover',
          minWidth: '100vw'
      }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center">
          {isDesktop && (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          ) }
        </Stack>

        <CreateGameSettings createdGame={gameCreated} />

      </Container>
    </>
  );
}
