import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid, LinearProgress } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function VotingStatus() {
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
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {showComponent1 ? (
            <>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget
                title="Voting for village chief"
                value="Waiting for everyone to vote"
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          ) : null}
          {showComponent2 ? (
            <StaticPlayerWidget
              name="Njoura"
              description="is the village leader"
              color="error"
              iconUrl={'/assets/images/avatars/avatar_2.jpg'}
            />
          ) : null}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
