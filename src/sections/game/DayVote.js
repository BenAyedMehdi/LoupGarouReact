import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid, LinearProgress } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from '../new/TextWidget';
import StaticPlayerWidget from '../new/StaticPlayerWidget';

// ----------------------------------------------------------------------

export default function DayVote() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowComponent1(false), 4000);
    setTimeout(() => setShowComponent2(true), 4000);
    setTimeout(() => setShowComponent3(true), 4500);
    setTimeout(() => setShowComponent4(true), 10000);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <></>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          {showComponent1 ? (
            <>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget
                title="Vote for a player to kill"
                value="Waiting for everyone to vote..."
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          ) : null}
          {showComponent2 ? (
            <TextWidget
              title="The player who got the most votes is killed"
              value="The village voted on"
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <></>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <></>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {showComponent3 ? (
            <StaticPlayerWidget card={"Loup"} name="Njoura" color="error" iconUrl={'/assets/images/avatars/avatar_2.jpg'} />
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <></>
        </Grid>
      </Grid>
    </>
  );
}