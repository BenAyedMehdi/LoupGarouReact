import { useEffect, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Typography, Avatar } from '@mui/material';
import InputSlider from './InputSlider';
import DTOs from '../../DTOs';

// ----------------------------------------------------------------------

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
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

export default function RolesCountBar({ card, addCards }) {

  const handleValueChanged = (newValue) => {
    const cardsToAdd = DTOs.createSameCardsGroup(newValue, card);
    addCards(cardsToAdd);
  };

  return (
    <Box sx={{ m: 2.5 }}>
      <Link underline="none">
        <StyledAccount>
          <div>
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {card.cardName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Card
              </Typography>
            </Box>
          </div>
          <InputSlider valueChanged={handleValueChanged} />
          <Avatar src={account.photoURL} alt="photoURL" />
        </StyledAccount>
      </Link>
    </Box>
  );
}
