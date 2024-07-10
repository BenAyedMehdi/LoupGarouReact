import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import GameUpdatesTimeline from '../components/shared/GameUpdatesTimeline';
import { TextWidget } from '../components';
import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title> Roles Distributor - Warewolf</title>
      </Helmet>

      <Container
        sx={{
          minHeight: '95vh',
          paddingTop: 5,
          backgroundImage: 'url(/assets/darkvillage.png)',
          backgroundSize: 'cover',
          minWidth: '100vw',
        }}
        maxWidth="xl"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <TextWidget value="Roles Distributor" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Button
              href="create-game"
              variant="contained"
              color='warning'
              sx={{ width: '100%', height: 100, fontSize: 40 }}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Start a game
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              href="join-game"
              variant="contained"
              color="success"
              sx={{ width: '100%', height: 100, fontSize: 40, marginRight: '10px' }}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Get your role
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <GameUpdatesTimeline />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
