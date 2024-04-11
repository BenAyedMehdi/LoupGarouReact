import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
import PlayerJoiningForm from '../../components/player/PlayerJoiningForm';
import useResponsive from '../../hooks/useResponsive';
// components
import { HostLobby, InitialStepper, VoteForCheif, AssignedRole, PlayersLobby } from '../../components';
import Iconify from '../../components/iconify';
import GameContext from "../../contexts/GameContext"
// ----------------------------------------------------------------------

export default function JoinGamePage() {
  const {playerDetails,updatePlayerDetails} = useContext(GameContext);
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // 0 = Join a game
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const nextStep = () => {
    if (currentStep === 3) {
      console.log('Joined the game');
      navigate('/game');
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePlayerCreated = (p) => {
    updatePlayerDetails(p);    
    nextStep();
  };
  useEffect(()=>{
    console.log("context player details",playerDetails)
  },[playerDetails])

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
            <VoteForCheif key={1} />
          </>
        )}
      </Container>
    </>
  );
}
