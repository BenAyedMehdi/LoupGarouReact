import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';
import AppOrderTimeline from '../@dashboard/AppOrderTimeline';
// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(12),
  height: theme.spacing(12),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------


export default function GameUpdatesTimeline({ voted, clicked, id, name, total, iconUrl, color = 'primary', sx, ...other }) {
  const [vote, setVote] = useState('');

  const PlayerClicked = () => {
    clicked(id);
  };
  const handleVoted = (e) => {
    e.preventDefault();
    setVote(name);
    voted();
    console.log('player voted for: ', name);
  };
  return (
    <AppOrderTimeline
              title="Story Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Met dhib',
                  'Met salvador',
                  'Metet sorciere',
                  'Metet l 9arya lkol',
                  'Met l narrateur',
                ][index],
                type: `order${index + 1}`,
              }))}
            />
  );
}