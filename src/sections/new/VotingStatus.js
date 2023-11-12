import { useState, useEffect } from 'react';

import { Grid, LinearProgress } from '@mui/material';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';

// ----------------------------------------------------------------------

export default function VotingStatus() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowComponent1(false), 4000);
    setTimeout(() => setShowComponent2(true), 4000);

  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {showComponent1 ? (
            <>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget
                title="Voting for village chief"
                value="Waiting for everyone to vote"
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          ) : null}
          {showComponent2 ? (
            <StaticPlayerWidget
              name="Njoura"
              description="is the village leader"
              color="error"
              iconUrl={'/assets/images/avatars/avatar_2.jpg'}
            />
          ) : null}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
