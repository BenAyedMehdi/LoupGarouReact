import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';
import AppOrderTimeline from './AppOrderTimeline';
// ----------------------------------------------------------------------

export default function GameUpdatesTimeline({
  voted,
  clicked,
  id,
  name,
  total,
  iconUrl,
  color = 'primary',
  sx,
  ...other
}) {
  return (
    <AppOrderTimeline
      title="How it works"
      list={[...Array(4)].map((_, index) => ({
        id: faker.datatype.uuid(),
        title: [
          'Start a game by choosing the roles and the number of players',
          'Each player will join then using the generate code',
          'Each player receives a card on their device',
          'Vote for the chief to start the game',
        ][index],
        type: `order${index + 1}`,
      }))}
    />
  );
}
