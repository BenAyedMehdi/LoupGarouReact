import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container } from '@mui/material';
import PlayerJoiningForm from '../../components/player/PlayerJoiningForm';
import useResponsive from '../../hooks/useResponsive';
// components
import { InitialStepper} from '../../components';
import GameContext from '../../contexts/GameContext';
// ----------------------------------------------------------------------

export default function JoinGamePage() {
  const { playerDetails, updatePlayerDetails } = useContext(GameContext);
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // 0 = Join a game
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const PlayerJoined = (player) => {
    updatePlayerDetails(player);
    const { playerId, gameId } = player;
    const url = `/${gameId}/lobby/${playerId}`;
    navigate(url);
  };

  return (
    <>
      <Helmet>
        <title> Join a game </title>
      </Helmet>

      <Container sx={{
          minHeight: '95vh',
          paddingTop: 5,
          backgroundImage: 'url(/assets/darkvillage.png)',
          backgroundSize: 'cover',
          minWidth: '100vw'
      }} maxWidth="xl">
        <Stack direction={{ xs: 'row', sm: 'row' }} alignItems="stretch" justifyContent="center" mb={2}>
          {isDesktop && (
            <>
              <InitialStepper currentStep={currentStep} steps={steps} />
            </>
          )}
        </Stack>

        <PlayerJoiningForm returnedPlayer={PlayerJoined} />

      </Container>
    </>
  );
}
