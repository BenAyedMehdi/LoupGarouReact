import { Grid, TextField, Switch } from '@mui/material';

// ----------------------------------------------------------------------

export default function CreateGameSettings() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={4}>
          <Grid container direction="row" justifyContent="center" alignItems="center"  spacing={3} >       
            <Grid item xs={4} sm={4} md={4}>
              <Switch/>
            </Grid>
            <Grid sx={{mb:'6px', mt:'0.5%'}} item xs={4} sm={4} md={4}>
              Loup
            </Grid>
            {/* <Grid item xs={4} sm={4} md={4}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center"   spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch/>
            </Grid>
            <Grid sx={{mb:'6px', mt:'0.5%'}} item xs={4} sm={4} md={4}>
              Villagers
            </Grid>
            {
              /* numbers loup can vary depending on number of players , either we set a lot of conditions depending al number of players joined or we just let the backend handle it and decide hom many wolves/villagers to take in ratio of number of players */ 
            }
            {/* <Grid item xs={4} sm={4} md={4}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                required
                margin='normal'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center"   spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch/>
            </Grid>
            <Grid sx={{mb:'6px', mt:'0.5%'}} item xs={4} sm={4} md={4}>
              Protector
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center"   spacing={3}>
            <Grid item xs={4} sm={4} md={4}>
              <Switch defaultChecked={false} />
            </Grid>
            <Grid sx={{mb:'6px', mt:'0.5%'}} item xs={4} sm={4} md={4}>
              Witcher
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
