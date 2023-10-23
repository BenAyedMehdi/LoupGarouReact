// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Iconify from '../../components/iconify';
import PlayerBarName from './PlayerBarName';

// ----------------------------------------------------------------------
const rows = [
  {
    name: 'Mehdi',
  },
  {
    name: 'Njoura',
  },
  {
    name: 'Khabir',
  },
  {
    name: 'Jihed',
  },
  {
    name: 'Sahar',
  },
  {
    name: 'Ghassen',
  },
  {
    name: 'Iheb',
  },
];

export default function PlayersListTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players ({rows.length}) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <PlayerBarName player={row} />
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
