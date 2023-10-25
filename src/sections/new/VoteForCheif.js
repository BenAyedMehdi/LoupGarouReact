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

// ----------------------------------------------------------------------

export default function VoteForCheif({ voted }) {
  const [selected, setSelected] = useState(2);
  const [isVoted, setIsVoted] = useState(false);

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
    console.log(id);
    setSelected(id);
  };
  const handleVote = () => {
    setIsVoted(true);
    voted();
  };
  return (
    <>
      {!isVoted && (
        <>
          <Typography align="center" variant="h3" sx={{ mb: 3 }}>
            Please Vote For Your Village Chief
          </Typography>
          <Grid container spacing={3}>
            {PLAYERS.map((player) => {
              if (player.id === selected) {
                return (
                  <Grid key={player.id} item xs={4} sm={3} md={2}>
                    <ClickablePlayerWidget
                      voted={handleVote}
                      clicked={changeChoice}
                      id={player.id}
                      name={player.name}
                      color="success"
                      iconUrl={player.avatarUrl}
                    />
                  </Grid>
                );
              }
              return (
                <Grid key={player.id} item xs={4} sm={3} md={2}>
                  <ClickablePlayerWidget
                    voted={handleVote}
                    clicked={changeChoice}
                    id={player.id}
                    name={player.name}
                    color="primary"
                    iconUrl={player.avatarUrl}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
      {isVoted && <VotingStatus />}
    </>
  );
}
