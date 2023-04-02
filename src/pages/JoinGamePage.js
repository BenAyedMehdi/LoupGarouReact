import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button, TextField} from '@mui/material';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function JoinGamePage() {

  return (
    <>
      <Helmet>
        <title> Join a game </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, enter your name and the game ID
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <TextField
          margin='normal'
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
          margin='normal'
          required
          id="outlined-required"
          label="Game ID"
        />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Join the game
          </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
