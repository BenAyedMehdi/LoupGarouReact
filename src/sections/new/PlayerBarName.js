import React, { useState, useEffect } from 'react';
// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Box, Link, Typography, Button, Avatar, CardActionArea } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5, 1.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.52),
}));

const account = {
  displayName: 'Loup Garou',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

// ----------------------------------------------------------------------

export default function PlayerBarName({ clicked, id, player }) {
  const [vote, setVote] = useState('');

  const PlayerClicked = () => {
    clicked(id);
  };

  return (
    <Box sx={{ mb: 1, mx: 2.5 }}>
      <Link underline="none">
        <StyledAccount sx={[(player.isDead)&& {backgroundColor:'error.main'}]}>
          <Avatar src={account.photoURL} alt="photoURL" />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              {player.name} 
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {account.role}
            </Typography>
          </Box>
        </StyledAccount>
      </Link>
    </Box>
  );
}
