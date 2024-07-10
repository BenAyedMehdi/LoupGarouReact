// PlayerNightAction to VotingPlayersGrid:
// In the PlayerNightAction component, the handleVote function is passed down as voted={handleVote} to the VotingPlayersGrid component.
// When a player is selected and the vote is confirmed within the VotingPlayersGrid, the handleVote function is called, which updates the state within the PlayerNightAction to denote that a vote has been made (setHasVoted(true)).




/* eslint-disable react/prop-types */

import React,{useState,useEffect, useContext}  from 'react';

// @mui
import { Grid } from '@mui/material';

// components
import TextWidget from '../shared/TextWidget';
import StaticPlayerWidget from '../shared/StaticPlayerWidget';
import { CardsListTable, PlayersListTable,VotingPlayersGrid } from '..';
import WitchVotingGrid from '../player/WitchVotingGrid';
// ----------------------------------------------------------------------
export default function PlayerNightAction({ card, voted }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [protectedPlayer,setProtectedPlayer]=useState("");
  const [deadPlayer,setDeadPlayer]=useState("");


  const handleVote = (id) => {
    setHasVoted(true);
    voted(id);
    if (card==='Salvador'){
    setProtectedPlayer(id);
    }
  if (card==='Loup')
  {setDeadPlayer(id);
  }
  };
  useEffect(() => {
    console.log(`Dead Player in PlayerNightAction: ${deadPlayer}`);
  }, [deadPlayer]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={6} md={3}>
        {/* if the protectedPlayer state is updated using useState and it's passed as a prop to the PlayerListTable component, every time the protectedPlayer state changes, the PlayerListTable component will re-render. */}
          <PlayersListTable deadPlayer={deadPlayer} protectedPlayer={protectedPlayer}/>
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
              <WitchVotingGrid voted={handleVote} deadPlayer={deadPlayer}/>
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
