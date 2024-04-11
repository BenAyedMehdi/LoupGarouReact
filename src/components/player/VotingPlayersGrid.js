// VotingPlayersGrid to ClickablePlayerWidget:
// Within the VotingPlayersGrid, the ClickablePlayerWidget component is used to represent individual players for voting.
// The handleVoted function within ClickablePlayerWidget is triggered when the "Vote" button is clicked. This function calls voted(id) (passed down as voted={handleVote} from the PlayerNightAction), informing the VotingPlayersGrid of the voted player's id.

import { useState } from 'react';

import { Grid } from '@mui/material';
import ClickablePlayerWidget from '../shared/ClickablePlayerWidget';
import StaticPlayerWidget from '../shared/StaticPlayerWidget';

// ----------------------------------------------------------------------

export default function VotingPlayersGrid({ players,  voted }) {
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

  const avatars = [
    '/assets/images/avatars/avatar_2.jpg' ,
    '/assets/images/avatars/avatar_5.jpg',
    '/assets/images/avatars/avatar_12.jpg' ,
    '/assets/images/avatars/avatar_19.jpg',
    '/assets/images/avatars/avatar_2.jpg' ,
    '/assets/images/avatars/avatar_5.jpg',
    '/assets/images/avatars/avatar_12.jpg',
    '/assets/images/avatars/avatar_2.jpg' ,
    '/assets/images/avatars/avatar_5.jpg',
    '/assets/images/avatars/avatar_12.jpg' ,
    '/assets/images/avatars/avatar_19.jpg',
  ];

  const changeChoice = (id) => {
    setSelected(id);
  };
  const handleVote = (id,name) => {
    setIsVoted(true);
    setVote(id);
    voted(id, name);
  };
  return (
    <>
      <Grid container spacing={3}>
        {!isVoted && (
          <>
            {players.map((player, index) => {
              if (player.id === selected) {
                return (
                  <Grid key={player.playerId} item xs={6} sm={4} md={4}>
                    <ClickablePlayerWidget
                      voted={handleVote}
                      clicked={changeChoice}
                      id={player.playerId}
                      name={player.name}
                      color="success"
                      iconUrl={avatars[index]? avatars[index]: '/assets/images/avatars/avatar_2.jpg'}
                    />
                  </Grid>
                );
              }
              return (
                <Grid key={player.playerId} item xs={6} sm={4} md={4}>
                  <ClickablePlayerWidget
                    voted={handleVote}
                    clicked={changeChoice}
                    id={player.playerId}
                    name={player.name}
                    color="primary"
                    iconUrl={avatars[index]? avatars[index]: '/assets/images/avatars/avatar_2.jpg'}
                  />
                </Grid>
              );
            })}
          </>
        )}
        {/* {isVoted && (
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
        )} */}
      </Grid>
    </>
  );
}
