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

export default function PlayerSleeping() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  const [playSound] = useSound('/assets/sounds/NightStart.m4a');
  const [audio, SetAudio] = useState('');

  useEffect(() => {
    setTimeout(() => setShowComponent1(true), 0);
    setTimeout(() => setShowComponent2(true), 0);
    setTimeout(() => setShowComponent3(true), 0);
    setTimeout(() => setShowComponent4(true), 0);
  }, []);

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
