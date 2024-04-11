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
      title="Story Timeline"
      list={[...Array(5)].map((_, index) => ({
        id: faker.datatype.uuid(),
        title: ['Met dhib', 'Met salvador', 'Metet sorciere', 'Metet l 9arya lkol', 'Met l narrateur'][index],
        type: `order${index + 1}`,
      }))}
    />
  );
}
