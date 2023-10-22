import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppOrderTimeline,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function MainPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to the village
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <Button href='create-game' variant="contained" sx={{width: 166, height: 66 }} startIcon={<Iconify icon="eva:plus-fill" />}>
            New Game
          </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Button href='join-game' variant="contained" sx={{width: 166, height: 66 }} startIcon={<Iconify icon="eva:plus-fill" />}>
            Join a game
          </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <></>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
