import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
import PlayerJoiningForm from '../sections/new/PlayerJoiningForm';
import useResponsive from '../hooks/useResponsive';
// components
import { HostLobby, InitialStepper, VoteForCheif, AssignedRole, PlayersLobby } from '../sections/new';
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function JoinGamePage() {
  const [player, setPlayer] = useState({});
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVoted, setIsVoted] = useState(false);
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Joined the game');
      navigate('/dashboard/game');
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePlayerCreated = (p) => {
    setPlayer(p);
    localStorage.setItem('player', JSON.stringify(player));
    nextStep();
  };

  const handleVote = (id) => {
    setIsVoted(true);
  };
  
  return (
    <>
      <Helmet>
        <title> Join a game </title>
      </Helmet>

      <Container sx={{ paddingTop: 5 }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center" mb={2}>
          {isDesktop ? (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          ) : (
            <></>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ width: '70%', height: 66, mb: 3 }}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Next
          </Button>
        </Stack>
        {currentStep === 0 && (
          <>
            <PlayerJoiningForm returnedPlayer={handlePlayerCreated} />
          </>
        )}
        {currentStep === 1 && (
          <>
            <PlayersLobby />
          </>
        )}
        {currentStep === 2 && (
          <>
            <AssignedRole />
          </>
        )}
        {currentStep === 3 && (
          <>
            <VoteForCheif voted={handleVote} key={1} />
          </>
        )}
      </Container>
    </>
  );
}
