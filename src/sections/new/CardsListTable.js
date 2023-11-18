// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
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
          {rows.map((row, index) => (
            <TableRow
              key={index}
            >
              <td>
               <PlayerBarName player={row}/>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
