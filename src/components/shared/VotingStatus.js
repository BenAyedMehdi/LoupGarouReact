import { useState, useEffect } from 'react';

import { Button, Grid, LinearProgress } from '@mui/material';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import TextWidget from './TextWidget';
import StaticPlayerWidget from './StaticPlayerWidget';
import PlayersListTable from './PlayersListTable';
import CardsListTable from './CardsListTable';
import storage from '../../storage';

// ----------------------------------------------------------------------

export default function VotingStatus({sessionId, votingSession }) {
  const [error, setError] = useState(false);
  const [isVoteCompleted, setIsVoteCompleted] = useState(false);
  const [mostVotedPlayer, setMostVotedPlayer] = useState({ name: '' });
  const [currentSession, setCurrentSession] = useState(votingSession);

  useEffect(() => {
    if (votingSession != null || votingSession !== undefined) {
      getVotingSessionStatus();
    }
  }, []);

  const getVotingSessionStatus = async () => {
    console.log("passes voting session: ",votingSession);
    if (votingSession.votingSessionId !== null || votingSession.votingSessionId !== undefined) {
      const res = await apiCalls.getVotingSession(votingSession.votingSessionId);
      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const session = res.data;
        setCurrentSession(session);
        setError(false);
        console.log(session);
        if (session.isCompleted) {
          setIsVoteCompleted(true);
          const mostvotedGuid = session.result;
          await getMostVotedPlayer(mostvotedGuid);
        }
      }
    }
  };

  const getMostVotedPlayer = async (mostvotedGuid) => {
    if (mostvotedGuid !== null) {
      const res = await apiCalls.getPlayer(mostvotedGuid);
      if (res.error) {
        console.log(res.error);
        setError(true);
      } else {
        const player = res.data;
        setError(false);
        console.log('most voted player: ', player);
        setMostVotedPlayer(player);
      }
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable gameId={currentSession.gameId} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {!isVoteCompleted ? (
            <>
              <Button onClick={getVotingSessionStatus} variant="contained" sx={{ width: '100%', height: 66, m: 3 }}>
                Refresh
              </Button>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget
                title={sessionId}
                value="Waiting for everyone to vote"
                color="warning"
                icon={'ant-design:windows-filled'}
              />
            </>
          ) : (
            <StaticPlayerWidget
              name={mostVotedPlayer.name}
              description="is the village leader"
              color="error"
              iconUrl={'/assets/images/avatars/avatar_2.jpg'}
            />
          )}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable gameId={currentSession.gameId}/>
        </Grid>
      </Grid>
    </>
  );
}
