// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';
import CardBarName from './CardBarName';

// ----------------------------------------------------------------------
const rows = [
  {
    name: 'Salvador',
  },
  {
    name: 'Loup garou',
  },
  {
    name: 'Loup garou',
  },
  {
    name: 'Witch',
  },
  {
    name: 'Hunter',
  },
  {
    name: 'Villager',
  },
  {
    name: 'Villager',
  },
];

export default function CardsListTable({ roles }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Characters ({roles.length}) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role, index) => (
            <TableRow key={index}>
              <td>
                <CardBarName card={role.card} />
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
