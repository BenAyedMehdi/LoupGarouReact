import { useState, useEffect, useContext } from 'react';

import { Grid, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';
import TextWidget from './TextWidget';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function RolesDistribution({gameId, rolesDistributed}) {
  const [error, setError] = useState(false);
  const {gameDetails, updateGameDetails} = useContext(GameContext);

  useEffect(() => {
    AssignRolesIfNotAlreadyAssigned();
  }, []);
  

  const AssignRolesIfNotAlreadyAssigned = async () => {
    console.log("gameDetails: ", gameDetails)
    if (gameDetails.currentPhase !== 'assign-roles') {
      console.log("Roles not assigned yet..")
      assignRolesToPlayers();
    }
  };


  const assignRolesToPlayers = async () => {
    console.log("Assigning roles.. ")

    if (gameId !== null) {
      const res = await apiCalls.assignRolesToPlayer(gameId);
      console.log(res);

      if (res.error) {
        setError(true);
      } else {
        const updatedGame = res.data;
        setError(false);
        console.log(updatedGame);
        updateGameDetails(updatedGame);
      }
    }
  };

  const handleNext =  (e) => {
    e.preventDefault();
    console.log("next: ", gameDetails)
    if (gameDetails.currentPhase === 'assign-roles') {
      console.log("Roles assigned ")
      rolesDistributed();
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {error && (
          <Grid item xs={12} sm={12} md={12}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Unable to connect to the server.
            </Alert>
          </Grid>
        )}
        
        <Button onClick={handleNext} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
            Next
        </Button>
          
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextWidget
            title="Make sure to hide your phone from everyone"
            value="Check your role"
            color="warning"
            icon={'ant-design:windows-filled'}
          />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
