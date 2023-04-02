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
import ClickablePlayerWidget from './ClickablePlayerWidget';

// ----------------------------------------------------------------------

export default function VoteForCheif() {
  const [selected, setSelected] = useState(1);
  const PLAYERS = [
    { id: 1, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 2, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 3, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 4, name: 'Oussama', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
  ];
  const changeChoice = (id) => {
    console.log(id);
    setSelected(id)
  };
  return (
    <>
      <Grid container spacing={3}>
        {PLAYERS.map((player) => {
          if(player.id === selected){

            return (
              <Grid key={player.id} item xs={12} sm={6} md={3}>
              <ClickablePlayerWidget clicked={changeChoice} id={player.id} name={player.name} color="success" iconUrl={player.avatarUrl} />
            </Grid>
          );
        }
        return (
          <Grid key={player.id} item xs={12} sm={6} md={3}>
          <ClickablePlayerWidget clicked={changeChoice} id={player.id} name={player.name} color="primary" iconUrl={player.avatarUrl} />
        </Grid>
      );
        })}
      </Grid>
    </>
  );
}
