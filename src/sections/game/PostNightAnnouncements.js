import React, { useState, useEffect } from 'react';

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
import GameUpdatesTimeline from '../new/GameUpdatesTimeline';

// ----------------------------------------------------------------------

export default function PostNightAnnouncements() {
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
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={6} sm={6} md={3}>
          <PlayersListTable deadPlayer={"Mehdi"} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <>
            <TextWidget
              title="The game continues"
              value="A player died at night"
              color="warning"
              icon={'ant-design:windows-filled'}
            />
            <StaticPlayerWidget
              sx={{ mt: 2, mx: '20%', higth: '70%', mb: 3 }}
              name="Mehdi"
              description="Salvador"
              card={'-Dead-'}
              color="error"
              iconUrl={'/assets/images/avatars/avatar_12.jpg'}
            />
            <GameUpdatesTimeline />
          </>
        </Grid>
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item xs={6} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
