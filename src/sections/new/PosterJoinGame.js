import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Box, Card, Typography } from '@mui/material';
import TextWidget from './TextWidget';

// ----------------------------------------------------------------------
const StyledProductImg = styled('img')({
  width: '200px',
  height: '200px',
});

export default function PosterJoinGame({ title, value, color = 'primary', sx, ...other }) {

  const gameJson = localStorage.getItem('game')
  const gameCode = gameJson ? JSON.parse(gameJson).gameCode : 'XYZK'


  return (
    <>
      <Card
        sx={{
          mb: 2,
          boxShadow: 0,
          textAlign: 'center',
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
      >
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" m={5} mb={2}>
          <Box>
            <Typography variant="h6" sx={{ opacity: 0.72 }}>
              Navigate to this link
            </Typography>

            <Typography variant="h2" sx={{ mr: 2, opacity: 0.72 }}>
              loupgarou.netlify.app
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ opacity: 0.72 }}>
              Or use the QR code
            </Typography>
            <Box component="img" src="/assets/images/qrcode.png" sx={{ minWidth:100, width: "100%", pt: 2 }} />
          </Box>
        </Stack>
        <TextWidget title="Game ID" value={gameCode} color="warning" sx={{ m: 3 }} />
      </Card>
    </>
  );
}
