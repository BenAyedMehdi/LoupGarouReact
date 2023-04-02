import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button, TextField } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';
import {
  TextWidget,
} from '../sections/new';
// ----------------------------------------------------------------------

export default function CreateGamePage() {

  const [created, setCreated] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Game created")
    setCreated(true)
    }
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
              <Button onClick={handleSubmit} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                Create a game
              </Button>
            </Grid>
          </Grid>
        </>
        )}
        {created && (
        <>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Game created! Please join using the game ID
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <></>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <TextWidget title="Game ID" value="NXHA" color="warning" icon={'ant-design:windows-filled'} />
            </Grid>
          </Grid>
        </>
        )}
      </Container>
    </>
  );
}
