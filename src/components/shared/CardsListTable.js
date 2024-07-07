import { useState, useEffect,useContext } from 'react';
// @mui
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// utils
// components

import CardBarName from './CardBarName';
import apiCalls from '../../apiCalls';


export default function CardsListTable({roles, gameId}) {
  
  const [rolesList, setRolesList] = useState([]);

  useEffect(() => {
    if(roles!==null && roles !== undefined){
      setRolesList(roles);
    }
    else{
      getGameRoles();
    }
  }, [roles, gameId]);
  
  const getGameRoles = async () => {
    
    if (gameId !== null && gameId !== undefined) {
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
            <TableCell>Roles ({rolesList.length}) </TableCell>
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
