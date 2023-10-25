import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from '../new/TextWidget';
import StaticPlayerWidget from '../new/StaticPlayerWidget';
import { CardsListTable, PlayersListTable } from '../new';

// ----------------------------------------------------------------------

export default function RoleNightTask({ card }) {
  const [audio, SetAudio] = useState('');
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowComponent1(true), 0);
    setTimeout(() => setShowComponent2(true), 0);
    setTimeout(() => setShowComponent3(true), 0);
    setTimeout(() => setShowComponent4(true), 0);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
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
          <PlayersListTable />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
