import { useState, useEffect } from 'react';

import { Grid } from '@mui/material';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function HostLobby() {

  return (
    <>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <PosterJoinGame />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
