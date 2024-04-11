/* eslint-disable react/prop-types */
import React from 'react';
import useSound from 'use-sound';
// @mui
import { Grid } from '@mui/material';
// utils
// components
import TextWidget from '../shared/TextWidget';
import { CardsListTable, PlayersListTable } from '..';

// ----------------------------------------------------------------------

export default function PlayerSleeping() {
 
  const [playSound] = useSound('/assets/sounds/NightStart.m4a');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextWidget
            title="It's not your turn yet"
            value="Keep your eyes closed"
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
