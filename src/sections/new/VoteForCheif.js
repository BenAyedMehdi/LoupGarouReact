import { useState } from 'react';

import { Typography } from '@mui/material';
import VotingStatus from './VotingStatus';
import VotingPlayersGrid from './VotingPlayersGrid';

// ----------------------------------------------------------------------

export default function VoteForCheif({ voted }) {
  const [selected, setSelected] = useState(2);
  const [isVoted, setIsVoted] = useState(false);

  const PLAYERS = [
    { id: 1, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 2, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 3, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 4, name: 'Oussama', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
    { id: 5, name: 'Njoura', avatarUrl: '/assets/images/avatars/avatar_2.jpg' },
    { id: 6, name: 'Khabir', avatarUrl: '/assets/images/avatars/avatar_5.jpg' },
    { id: 7, name: 'Mehdi', avatarUrl: '/assets/images/avatars/avatar_12.jpg' },
    { id: 8, name: 'Oussama', avatarUrl: '/assets/images/avatars/avatar_19.jpg' },
  ];
  const changeChoice = (id) => {
    setSelected(id);
  };
  const handleVote = (id) => {
    setIsVoted(true);
    voted(id);
  };
  return (
    <>
      {!isVoted && (
        <>
          <Typography align="center" variant="h3" sx={{ mb: 3 }}>
            Please Vote For Your Village Chief
          </Typography>
          <VotingPlayersGrid voted={handleVote}/>
        </>
      )}
      {isVoted && <VotingStatus />}
    </>
  );
}
