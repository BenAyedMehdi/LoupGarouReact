/* eslint-disable react/prop-types */

import { useEffect } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';

// ----------------------------------------------------------------------
const rows = [
  {
    name: 'Mehdi',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Njoura',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Khabir',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Jihed',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Sahar',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Ghassen',
    isDead:false,
    isProtected:false,
  },
  {
    name: 'Iheb',
    isDead:false,
    isProtected:false,
  },
];

export default function PlayersListTable({players, deadPlayer ,protectedPlayer }) {
  let updatedRows = players===null || players === undefined ? rows : players;
  updatedRows = updatedRows.map((player) => {
    if (player.name === deadPlayer) {
      return {
        ...player,
        isDead: true,
      };
    }
    if (player.name === protectedPlayer) {
      return {
        ...player,
        isProtected: true,
      };
    }
    return player;
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players ({updatedRows.length}) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedRows.map((row,index) => (
            <tr key={index}>
              <td>
                <PlayerBarName player={row}/>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
