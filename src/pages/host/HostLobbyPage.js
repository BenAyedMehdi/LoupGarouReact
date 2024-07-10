import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// sections
import { HostLobby, InitialStepper } from '../../components';
// ----------------------------------------------------------------------

export default function HostLobbyPage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1= Players joining
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId } = useParams();

  const handleBoardingComplete = () => {
    console.log('Boarding complete');
    const url = `/assign-roles/${gameId}`;
    navigate(url);
  };

  return (
    <>
      <Helmet>
        <title> Waiting for players </title>
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
          )}
        </Stack>
        
        <HostLobby gameId={gameId} boardingCompleted={handleBoardingComplete} />
      </Container>
    </>
  );
}
