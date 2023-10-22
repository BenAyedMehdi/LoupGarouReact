import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid, Box, Stack} from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from '../new/TextWidget';
import StaticPlayerWidget from '../new/StaticPlayerWidget';
import GameUpdatesTimeline from '../new/GameUpdatesTimeline';

// ----------------------------------------------------------------------

export default function DayPhase() {
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
        <Grid item xs={12} sm={6} md={3}>
          <GameUpdatesTimeline/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
        <Stack alignItems="center" spacing={3} >
         <Box
            component="img"
            src="/assets/illustrations/sun-icon.jpg"
            sx={{ width: 100, top: -50 , pt: 5, borderRadius: 2, position: 'relative' }}
          />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <></>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {showComponent1 ? (
            <StaticPlayerWidget name="Njoura" color="error" iconUrl={'/assets/images/avatars/avatar_2.jpg'} />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {showComponent2 ? (
            <StaticPlayerWidget name="Khabir" color="error" iconUrl={'/assets/images/avatars/avatar_5.jpg'} />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {showComponent4 ? (
            <StaticPlayerWidget name="Oussama" color="error" iconUrl={'/assets/images/avatars/avatar_19.jpg'} />
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}
