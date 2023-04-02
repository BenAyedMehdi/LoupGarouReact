import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Container, Typography, Button, TextField} from '@mui/material';
// components
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

export default function CreateGamePage() {

  return (
    <>
      <Helmet>
        <title> Create a game </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, you are the Host, let's create a game!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <TextField
          id="outlined-number"
          label="Number of players"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Create a game
          </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
