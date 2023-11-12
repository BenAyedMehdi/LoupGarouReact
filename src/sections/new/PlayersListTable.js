/* eslint-disable react/prop-types */

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
  },
  {
    name: 'Njoura',
    isDead:false,
  },
  {
    name: 'Khabir',
    isDead:false,
  },
  {
    name: 'Jihed',
    isDead:false,
  },
  {
    name: 'Sahar',
    isDead:false,
  },
  {
    name: 'Ghassen',
    isDead:false,
  },
  {
    name: 'Iheb',
    isDead:false,
  },
];

export default function PlayersListTable({deadPlayer}) {
  let updatedRows = [];
  updatedRows = rows.map((row) => {
    if (row.name === deadPlayer) {
      return {
        ...row,
        isDead: true,
      };
    }
    return row;
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
