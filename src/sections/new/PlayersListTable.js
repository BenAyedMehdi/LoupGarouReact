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
