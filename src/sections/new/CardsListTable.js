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
    name: "Salvador",
   },
   {
    name: "Loup garou",
   },
   {
    name: "Loup garou",
   },
   {
    name: "Witch",
   },
   {
    name: "Hunter",
   },
   {
    name: "Villager",
   },
   {
    name: "Villager",
   },
];

export default function CardsListTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Characters ({rows.length }) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
            >
               <PlayerBarName player={row}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
