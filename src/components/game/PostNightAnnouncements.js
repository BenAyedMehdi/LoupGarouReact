import React from 'react';

// @mui
import { Grid } from '@mui/material';
// utils
// components
import TextWidget from '../shared/TextWidget';
import StaticPlayerWidget from '../shared/StaticPlayerWidget';
import { CardsListTable, PlayersListTable } from '..';
import GameUpdatesTimeline from '../shared/GameUpdatesTimeline';

// ----------------------------------------------------------------------

export default function PostNightAnnouncements() {


  return (
    <>
      <Grid container spacing={3}>
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={6} sm={6} md={3}>
          <PlayersListTable deadPlayer={"Mehdi"} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <>
            <TextWidget
              title="The game continues"
              value="A player died at night"
              color="warning"
              icon={'ant-design:windows-filled'}
            />
            <StaticPlayerWidget
              sx={{ mt: 2, mx: '20%', higth: '70%', mb: 3 }}
              name="Mehdi"
              description="Salvador"
              card={'-Dead-'}
              color="error"
              iconUrl={'/assets/images/avatars/avatar_12.jpg'}
            />
            <GameUpdatesTimeline />
          </>
        </Grid>
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={6} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
