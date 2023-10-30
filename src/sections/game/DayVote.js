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
import { CardsListTable, PlayersListTable } from '../new';

// ----------------------------------------------------------------------

export default function DayVote() {
  const [deadPlayerName,setDeadPlayerName]  = useState("");
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowComponent1(false), 4000);
    setTimeout(() => {setShowComponent2(true);
                      setDeadPlayerName("Mehdi")}, 4000);
    setTimeout(() => setShowComponent3(true), 4500);
    setTimeout(() => setShowComponent4(true), 10000);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
        <PlayersListTable deadPlayer={deadPlayerName} />
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
            <>
              <TextWidget
                title="The player who got the most votes is killed"
                value="The village voted on"
                color="warning"
                icon={'ant-design:windows-filled'}
              />
              <StaticPlayerWidget
                sx={{ mt: 2, mx: '20%', higth: '70%', mb: 3 }}
                name="Mehdi"
                description="Salvador"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
