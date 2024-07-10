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
      list={[...Array(5)].map((_, index) => ({
        id: faker.datatype.uuid(),
        title: ['Start a new game',
           'Choose the roles and the number of player',
            'The player join using the generate code',
             'Each player receives a card on their device',
              'Vote for the village chief'][index],
        type: `order${index + 1}`,
      }))}
    />
  );
}
