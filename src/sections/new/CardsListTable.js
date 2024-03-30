import { useState, useEffect } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components
import PlayerBarName from './PlayerBarName';
import CardBarName from './CardBarName';
import apiCalls from '../../apiCalls';


export default function CardsListTable({roles}) {
  
  const [rolesList, setRolesList] = useState([]);

  useEffect(() => {
    getGameRoles();
  }, []);

  useEffect(() => {
    if(roles!==null && roles !== undefined){
      setRolesList(roles);
    }
  }, [roles]);
  
  const getGameRoles = async () => {
    const jsonObject = localStorage.getItem('memoryObject');
    const gameId = jsonObject ? JSON.parse(jsonObject).gameId : null;
    
    if (gameId !== null) {
      const res = await apiCalls.getGameRoles(gameId);
      if (!res.error) {
        const roles = res.data;
        setRolesList(roles);
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Characters ({rolesList.length}) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rolesList.map((role, index) => (
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
