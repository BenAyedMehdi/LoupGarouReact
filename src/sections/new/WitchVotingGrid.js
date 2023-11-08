import React, { useState, useEffect } from 'react';

// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import TextWidget from './TextWidget';
import ClickablePlayerWidget from './ClickablePlayerWidget';
import VotingStatus from './VotingStatus';
import StaticPlayerWidget from './StaticPlayerWidget';
import YesOrNoWidget from './YesOrNoWidget';
import VotingPlayersGrid from './VotingPlayersGrid';

// ----------------------------------------------------------------------

export default function WitchVotingGrid({ voted }) {
  const [selected, setSelected] = useState(2);
  const [vote, setVote] = useState(1);
  const [reviveVoted, setReviveVoted] = useState(false);
  const [killVoted, setKillVoted] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const PLAYERS = [
    { id: 1, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 2, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 3, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 4, name: 'Oussama', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
    { id: 5, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 6, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 7, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 8, name: 'Oussama', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
  ];
  const changeChoice = (id) => {
    setSelected(id);
  };
  const handleReviveYesNo = (choice) => {
    setReviveVoted(true);
    console.log(choice);
  };

  const handleKillYesNo = (choice) => {
    console.log(choice);
    if (choice === 'y') {
      setKillVoted(true);
    }
    if (choice === 'n') {
      setIsDone(true);
      voted(-1);
    }
  };

  const handleVote = (id) => {
    setIsVoted(true);
    setVote(id);
    console.log(id);
    voted(id);
  };
  return (
    <>
      <Grid container spacing={3}>
        {!reviveVoted && (
          <>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={4} md={4}>
              <></>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <StaticPlayerWidget
                header={'The wolves killed'}
                name={'Mehdi'}
                color="success"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
            </Grid>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={4} md={4}>
              <></>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <YesOrNoWidget
                title={'Would you like to revive this player?'}
                color="warning"
                icon={'ant-design:windows-filled'}
                voted={handleReviveYesNo}
              />
            </Grid>
          </>
        )}
        {reviveVoted && (
          <>
            <Grid item xs={12} sm={12} md={12}>
              {!isDone && !killVoted && (
                <YesOrNoWidget
                  title={'Would you like to kill a player?'}
                  color="warning"
                  icon={'ant-design:windows-filled'}
                  voted={handleKillYesNo}
                />
              )}
            </Grid>
            {killVoted && (
              <>
                <VotingPlayersGrid voted={handleVote} />
              </>
            )}
          </>
        )}
      </Grid>
    </>
  );
}
