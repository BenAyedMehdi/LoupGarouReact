/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';
import apiCalls from '../../apiCalls';


export default function PlayersListTable({players, gameId}) {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    if(players!==null && players !== undefined){
      setPlayersList(players);
    }
    else{
      getGamePlayers();
    }
  }, [players, gameId]);
  

  const getGamePlayers = async () => {

    if (gameId !== null && gameId !== undefined) {
      const res = await apiCalls.getGamePlayers(gameId);
      
      console.log("game players:",res)
      if (!res.error) {
        const players = res.data;
        setPlayersList(players);
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players ({playersList.length}) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playersList.map((row,index) => (
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
