import { Grid, Box, Typography } from '@mui/material';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function PlayersLobby() {

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography align="center" variant="h6" sx={{ opacity: 0.72 }}>
            Share the QR code with your friends
          </Typography>
          <Box component="img" src="/assets/images/qrcode.png" sx={{ width: "100%", pt: 2 }} />
        </Grid>

        <Grid item sx={{ display:  { xs:'none' , sm: 'none', md:'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
