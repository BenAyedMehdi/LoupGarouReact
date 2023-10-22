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
  "Mehdi", "Njoura", "Khabir", "Oussama"
];

export default function PlayersListTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
            >
               <PlayerBarName/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
