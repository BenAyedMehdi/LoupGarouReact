import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container, Button } from '@mui/material';
import apiCalls from '../../apiCalls';
import useResponsive from '../../hooks/useResponsive';
// components
import { InitialStepper, PlayersLobby } from '../../components';
import Iconify from '../../components/iconify';
import GameContext from '../../contexts/GameContext';
// ----------------------------------------------------------------------

export default function PlayerLobbyPage() {
  const { playerDetails, updatePlayerDetails } = useContext(GameContext);
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1= Players joining
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId, playerId } = useParams();

  useEffect(() => {
    console.log('context player details', playerDetails);
  }, [playerDetails]);

  
  const handleSeeMyCard = async () => {
    try {
      const { data, error } = await apiCalls.getPlayerRole(playerId);
      if (error) {
        console.error("Error fetching player role:", error);
        alert("All players should join first. Please wait.");
        return;
      }
      const url = `/${gameId}/role/${playerId}`;
      navigate(url);
      // if (data && data.role) { // Assuming the API returns an object with a role property
      // } else {
      //   alert("Your role has not been assigned yet. Please wait.");
      // }
    } catch (e) {
      console.error("An unexpected error occurred:", e);
      alert("There was an unexpected error. Please try again.");
    }
  };
  return (
    <>
      <Helmet>
        <title> Waiting for players  </title>
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

        <PlayersLobby playerName={playerDetails.name} gameId={gameId} seeMyCard={handleSeeMyCard}/>

      </Container>
    </>
  );
}
