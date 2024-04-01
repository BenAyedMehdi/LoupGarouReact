/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';
import apiCalls from '../../apiCalls';
import storage from '../../storage';


export default function PlayersListTable({players}) {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    getGamePlayers();
  }, []);

  useEffect(() => {
    if(players!==null && players !== undefined){
      setPlayersList(players);
    }
  }, [players]);
  

  const getGamePlayers = async () => {
    const gameId = storage.getGameId();

    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);
      console.log(res);
        
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
