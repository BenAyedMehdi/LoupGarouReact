import { useState, useEffect } from 'react';

import { Grid, LinearProgress } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';
import storage from '../../storage';

// ----------------------------------------------------------------------

export default function VotingStatus({votingSession}) {
  const [error, setError] = useState(false);
  const [isVoteCompleted, setIsVoteCompleted] = useState(false);

  useEffect(() => {
    getVotingSessionStatus();
  }, []);

  const getVotingSessionStatus = async () => {
    // TODO
    // const gameId = storage.getGameId();
    
    // if (gameId !== null) {
    //   const req = DTOs.createVotingSessionRequest(gameId, 'chief');
    //   const res = await apiCalls.createVotingSession(req);
    //   console.log(res);
      
    //   if (res.error) {
    //     setError(true);
    //   } else {
    //     const votingSessions = res.data;
    //     setError(false);
    //     console.log(votingSessions);
    //   }
    // }
    
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {!isVoteCompleted ? (
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
          ) : (
          <StaticPlayerWidget
              name="Njoura"
              description="is the village leader"
              color="error"
              iconUrl={'/assets/images/avatars/avatar_2.jpg'}
            />)
            }
          
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
