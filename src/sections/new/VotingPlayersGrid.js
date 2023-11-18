// VotingPlayersGrid to ClickablePlayerWidget:
// Within the VotingPlayersGrid, the ClickablePlayerWidget component is used to represent individual players for voting.
// The handleVoted function within ClickablePlayerWidget is triggered when the "Vote" button is clicked. This function calls voted(id) (passed down as voted={handleVote} from the PlayerNightAction), informing the VotingPlayersGrid of the voted player's id.

import { useState } from 'react';

import { Grid } from '@mui/material';
import ClickablePlayerWidget from './ClickablePlayerWidget';
import StaticPlayerWidget from './StaticPlayerWidget';

// ----------------------------------------------------------------------

export default function VotingPlayersGrid({ voted }) {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0);
  const [isVoted, setIsVoted] = useState(false);

  const PLAYERS = [
    { id: 1, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 2, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 3, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 4, name: 'Jihed', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
    { id: 5, name: 'Sahar', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 6, name: 'Ghassen', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 7, name: 'Iheb', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
  ];
  const changeChoice = (id) => {
    setSelected(id);
  };
  const handleVote = (id,name) => {
    setIsVoted(true);
    setVote(id);
    voted(name);
  };
  return (
    <>
      <Grid container spacing={3}>
        {!isVoted && (
          <>
            {PLAYERS.map((player) => {
              if (player.id === selected) {
                return (
                  <Grid key={player.id} item xs={6} sm={4} md={4}>
                    <ClickablePlayerWidget
                      voted={handleVote}
                      clicked={changeChoice}
                      id={player.id}
                      name={player.name}
                      color="success"
                      iconUrl={player.avatarUrl}
                    />
                  </Grid>
                );
              }
              return (
                <Grid key={player.id} item xs={6} sm={4} md={4}>
                  <ClickablePlayerWidget
                    voted={handleVote}
                    clicked={changeChoice}
                    id={player.id}
                    name={player.name}
                    color="primary"
                    iconUrl={player.avatarUrl}
                  />
                </Grid>
              );
            })}
          </>
        )}
        {isVoted && (
          <>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={4} md={4}>
              <></>
            </Grid>
            <Grid key={PLAYERS[vote - 1].id} item xs={12} sm={4} md={4}>
              <StaticPlayerWidget
                id={PLAYERS[vote - 1].id}
                header={'Your choice'}
                name={PLAYERS[vote - 1].name}
                color="success"
                iconUrl={PLAYERS[vote - 1].avatarUrl}
              />
            </Grid>
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={4} md={4}>
              <></>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
