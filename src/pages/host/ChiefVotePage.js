import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
// sections
import { InitialStepper, VotingSession } from '../../components';
import apiCalls from '../../apiCalls';
// ----------------------------------------------------------------------

export default function ChiefVoteResultPage() {
  const isDesktop = useResponsive('up', 'lg');
  const [votingSession, setVotingSession] = useState({});
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(3); // 3= Vote for the leader
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId, sessionId } = useParams();

  useEffect(() => {
    console.log('from params', sessionId);
    getCheifVotingSession();
  }, []);

  
  const getCheifVotingSession = async () => { 
    if (sessionId !== null || sessionId !== undefined) {
      const res = await apiCalls.getVotingSession(sessionId);
      console.log("Fetched session: ",res)
      if (res.error) {
        console.log(res.error);
      } else {
        const votingSession = res.data;
        setVotingSession(votingSession);
      }
    }
    else{  
      console.log("sessionId is null")
      alert("sessionId is null");
    }
  };

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

        <VotingSession sessionId={sessionId} VoteEnded={nextStep} />
      </Container>
    </>
  );
}
