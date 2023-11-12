/* eslint-disable react/prop-types */

import React,{useState}  from 'react';

// @mui
import { Grid } from '@mui/material';

// components
import TextWidget from '../new/TextWidget';
import StaticPlayerWidget from '../new/StaticPlayerWidget';
import { CardsListTable, PlayersListTable,VotingPlayersGrid } from '../new';
import WitchVotingGrid from '../new/WitchVotingGrid';

// ----------------------------------------------------------------------
export default function PlayerNightAction({ card, voted }) {
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (id) => {
    console.log(id);
    setHasVoted(true);
    voted(id);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <PlayersListTable />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {card === 'Salvador' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb: 3 }}
                name="Salvador"
                card="It's your turn"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
              {!hasVoted && (
                <TextWidget
                  sx={{ mb: 3 }}
                  value={'Choose a player to protect this night'}
                  color="warning"
                  icon={'ant-design:windows-filled'}
                />
              )}
              <VotingPlayersGrid voted={handleVote} />
              {hasVoted && (
                <TextWidget
                  sx={{ m: 3 }}
                  value={'You can close your eyes now'}
                  color="warning"
                  icon={'ant-design:windows-filled'}
                />
              )}
            </>
          )}
          {card === 'Loup' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb: 3 }}
                name="Loup Garou"
                card="It's your turn"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
              {!hasVoted && (
                <TextWidget
                  title={'All wolves must vote on the same player'}
                  value={'Choose a player to kill this night'}
                  color="warning"
                  icon={'ant-design:windows-filled'}
                  sx={{ mb: 3 }}
                />
              )}
              <VotingPlayersGrid voted={handleVote} />
              {hasVoted && (
                <TextWidget
                sx={{ m: 3 }}
                value={'You can close your eyes now'}
                color="warning"
                icon={'ant-design:windows-filled'}
              />
              )}
            </>
          )}
          {card === 'Sorciere' && (
            <>
              <StaticPlayerWidget
                sx={{ marginLeft: '20%', marginRight: '20%', higth: '70%', mb:3 }}
                name="Sorciere"
                card="It's your turn"
                color="error"
                iconUrl={'/assets/images/avatars/avatar_12.jpg'}
              />
              <WitchVotingGrid voted={handleVote}/>
              {hasVoted && (
                <TextWidget
                sx={{ m: 3 }}
                value={'You can close your eyes now'}
                color="warning"
                icon={'ant-design:windows-filled'}
              />
              )}
            </>
          )}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
          <CardsListTable />
        </Grid>
      </Grid>
    </>
  );
}
