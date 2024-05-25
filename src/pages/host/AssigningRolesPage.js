
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Stack,
  Container,
} from '@mui/material';
import RolesDistribution from '../../components/host/RolesDistribution';
import useResponsive from '../../hooks/useResponsive';
// sections
import { InitialStepper } from '../../components';
// ----------------------------------------------------------------------

export default function AssigningRolesPage() {
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2); // 2= Assigning roles
  const steps = ['Create a game', 'Players joining...', 'Assigning roles', 'Vote for the leader'];
  const { gameId } = useParams();

  const handleDistributedRoles = () => {
    console.log('All roles distributed');
    const url = `/chief-vote-session/${gameId}`;
    navigate(url);
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
        
        <RolesDistribution gameId={gameId} rolesDistributed= {handleDistributedRoles}/>
        
      </Container>
    </>
  );
}
