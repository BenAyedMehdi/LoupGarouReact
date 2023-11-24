import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
import useResponsive from '../hooks/useResponsive';
// components
import { HostLobby, InitialStepper, VoteForCheif, AssignedRole, PlayersLobby } from '../sections/new';
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function JoinGamePage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gameID, setGameID] = useState('');
  const [valid,setValid]=useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVoted, setIsVoted] = useState(false);
  const steps = ['Join  a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];

  const handleNext = (e) => {
    e.preventDefault();
    if ((name==="") && (gameID==="")){
      setValid(false);
    }
    else if ((name!=="") && (gameID!=="")){
    if (currentStep === 3) {
      console.log('Joined the game');
      navigate('/dashboard/game');
    }
    setCurrentStep(currentStep + 1);
  }
  };

  const handleVote = (id) => {
    setIsVoted(true);
  };
const handleNameChange=(e)=>{
  setName(e.target.value);
}
const handleGameIdChange=(e)=>{
  setGameID(e.target.value)
}
  
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3} md={4}>
              <></>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField value={name} onChange={handleNameChange} error={!valid && name===""} helperText={!valid && name===""?"Name is Required !": " " } margin="normal" required id="outlined-required" label="Name" fullWidth />
                <TextField value={gameID} onChange={handleGameIdChange} error={!valid && gameID===""} helperText={!valid && name===""?"GameID is Required !":" "} margin="normal" required id="outlined-required" label="Game ID" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <></>
            </Grid>
          </Grid>
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
