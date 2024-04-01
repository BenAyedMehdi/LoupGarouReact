import { useState, useEffect } from 'react';

import { Grid, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';
import TextWidget from './TextWidget';
import storage from '../../storage';

// ----------------------------------------------------------------------

export default function RolesDistribution() {
  const [error, setError] = useState(false);

  useEffect(() => {
    assignRolesToPlayers();
  }, []);

  const assignRolesToPlayers = async () => {
    const gameId = storage.getGameId();

    if (gameId !== null) {
      const res = await apiCalls.assignRolesToPlayer(gameId);
      console.log(res);
      
      if (res.error) {
        setError(true);
      } else {
        const updatedGame = res.data;
        setError(false);
        console.log(updatedGame);
      }
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
