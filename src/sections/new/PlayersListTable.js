/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';
import apiCalls from '../../apiCalls';
import GameContext from '../../contexts/GameContext';


export default function PlayersListTable({players}) {
  const [playersList, setPlayersList] = useState([]);
  const {gameDetails, updateGameDetails}=useContext(GameContext)
  useEffect(() => {
    getGamePlayers();
  }, []);

  useEffect(() => {
    if(players!==null && players !== undefined){
      setPlayersList(players);
    }
  }, [players]);
  

  const getGamePlayers = async () => {
    const gameJson = gameDetails;
    const gameId = gameJson ? gameDetails.gameId : null;

    if (gameId !== null) {
      const res = await apiCalls.getGamePlayers(gameId);
      
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
