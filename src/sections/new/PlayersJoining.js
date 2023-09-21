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

// ----------------------------------------------------------------------

export default function PlayersJoining() {
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
          <PlayersListTable/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextWidget title="Game ID" value="NXHA" color="warning" icon={'ant-design:windows-filled'} />
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
          {showComponent3 ? (
            <StaticPlayerWidget name="Mehdi" color="error" iconUrl={'/assets/images/avatars/avatar_12.jpg'} />
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
