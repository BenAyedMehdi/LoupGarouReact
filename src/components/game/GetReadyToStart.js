import React from 'react';
// @mui
import { Grid } from '@mui/material';
// components
import TextWidget from '../shared/TextWidget';
import { CardsListTable, PlayersListTable } from '..';

// ----------------------------------------------------------------------

export default function GetReadyToStart() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextWidget
            title="Is everyone ready?"
            value='Press "Ready"'
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
