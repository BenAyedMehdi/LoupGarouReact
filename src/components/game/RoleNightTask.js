/* eslint-disable react/prop-types */

import React from 'react';

import { Grid } from '@mui/material';
// utils
// components
import TextWidget from '../shared/TextWidget';
import StaticPlayerWidget from '../shared/StaticPlayerWidget';
import { CardsListTable, PlayersListTable } from '..';

// ----------------------------------------------------------------------

export default function RoleNightTask({ card }) {


  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {card === 'Salvador' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb: 3 }}
                name="Salvador"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />

              <TextWidget
                value={'Choose a player to protect this night'}
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          )}
          {card === 'Loup' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb: 3 }}
                name="Loup Garou"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />

              <TextWidget
                title={'Find the other wolves'}
                value={'Choose a player to kill this night'}
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          )}
          {card === 'Sorciere' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb: 3 }}
                name="Sorciere"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextWidget
                    title={'You can bring the dead back to life once in the game'}
                    value={'Revive'}
                    color="warning"
                    icon={'ant-design:windows-filled'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextWidget
                    title={'You can kill someone once in the game'}
                    value={'Kill'}
                    color="warning"
                    icon={'ant-design:windows-filled'}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
