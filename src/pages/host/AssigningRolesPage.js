import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container } from '@mui/material';
import RolesDistribution from '../../components/host/RolesDistribution';
import useResponsive from '../../hooks/useResponsive';
// sections
import { InitialStepper } from '../../components';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
// ----------------------------------------------------------------------

export default function AssigningRolesPage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2); // 2= Assigning roles
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId } = useParams();

  const handleDistributedRoles = async ()  => {
    const session = await createNewVotingSessions(gameId);
    console.log('Created voting session: ', session);
    
    const url = `/chief-vote-session/${gameId}/${session.votingSessionId}`;
    navigate(url);
  };

  const createNewVotingSessions = async (gameId) => {
    // get current game
    const res = await apiCalls.getGame(gameId);

    if (res.error) {
      console.log(res.error);
    } else {
      const game = res.data;
      if (game.gameId !== null || game.gameId !== undefined) {
        const req = DTOs.createVotingSessionRequest(game.gameId, 'chief', game.numberOfPlayers);
        const res = await apiCalls.createVotingSession(req);
        console.log('create chief vote session req ', req);
        console.log('create chief vote session res ', res);
        if (res.error) {
          console.log(res.error);
        } else {
          const votingSession = res.data;
          return votingSession;
        }
      }
    }
    return null;
  };

  return (
    <>
      <Helmet>
        <title> Distributing roles </title>
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

        <RolesDistribution gameId={gameId} rolesDistributed={handleDistributedRoles} />
      </Container>
    </>
  );
}
