import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import { TextWidget } from '../components';
import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container sx={{ paddingTop: 10 }} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
            <TextWidget value="Loup Garou" color="warning" icon={'ant-design:windows-filled'} />
          </Grid>
          
          <Grid item xs={12} sm={4} md={4}>
            <></>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Button
              href="create-game"
              variant="contained"
              sx={{ width: "100%", height: 100, fontSize: 40 }}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Game
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              href="join-game"
              variant="contained"
              sx={{ width: "100%", height: 100 , fontSize: 40}}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Join a game
            </Button>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
