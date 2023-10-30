import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import PosterJoinGame from './PosterJoinGame';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function HostLobby() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowComponent1(true), 0);
    setTimeout(() => setShowComponent2(true), 2000);
    setTimeout(() => setShowComponent3(true), 4000);
    setTimeout(() => setShowComponent4(true), 6000);
  }, []);

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
