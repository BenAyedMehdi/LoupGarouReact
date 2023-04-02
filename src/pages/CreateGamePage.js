import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Stack, Grid, Container, Typography, Button, TextField } from '@mui/material';
// sections
import { TextWidget, PlayerWidget,PlayersJoining } from '../sections/new';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function CreateGamePage() {
  const [created, setCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Game created');
    setCreated(true);
  };
  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container maxWidth="xl">
        {!created && (
          <>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Hi, you are the Host, let's create a game!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  id="outlined-number"
                  label="Number of players"
                  type="number"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ width: 166, height: 56 }}
                  startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Create a game
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {created && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Game created! Please join using the game ID
              </Typography>
              <Button variant="contained" sx={{ width: 166, height: 66 }}>
                Start game
              </Button>
            </Stack>

          <PlayersJoining/>
          </>
        )}
      </Container>
    </>
  );
}
