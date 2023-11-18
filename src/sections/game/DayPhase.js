import React from 'react';

// @mui
import { Grid, } from '@mui/material';
// utils
// components
import TextWidget from '../new/TextWidget';

import { CardsListTable, PlayersListTable } from '../new';

// ----------------------------------------------------------------------

export default function DayPhase() {


  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextWidget
            title="The chief will now organize the village"
            value='Speak, accuse, and get ready to vote'
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
