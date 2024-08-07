import { useState, useEffect, useContext } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import { Grid, LinearProgress, Box, Button } from '@mui/material';
// utils
// components
import apiCalls from '../../apiCalls';
import TextWidget from '../shared/TextWidget';
import GameContext from '../../contexts/GameContext';

// ----------------------------------------------------------------------

export default function AssignedRole({cardIsSeen}) {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [role, setRole] = useState({});
  const {playerDetails}=useContext(GameContext)

  useEffect(() => {
    getPlayerRole();
  }, []);

  const getPlayerRole = async () => {
    
    const playerId = playerDetails ? playerDetails.playerId : null;
    
    if (playerId !== null) {
      const res = await apiCalls.getPlayerRole(playerId);
      if (!res.error) {
        const role = res.data;
        console.log(role); 
        setRole(role);
      }else{
        console.log(res.error)
        setRole({card:{cardName:'Error',imageName:'error'}});
      }
    }
  };

  const handleCardSeen = async (e) => {
    e.preventDefault();
    cardIsSeen();
  };


  useEffect(() => {
    setTimeout(() => setShowComponent1(false), 1000);
    setTimeout(() => setShowComponent2(true), 1000);
  }, []);

  const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  });
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <></>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          {showComponent1 ? (
            <>
              <LinearProgress color="warning" />
              <LinearProgress color="error" />
              <TextWidget title="Assigning role..." value={"Hide your phone"} color="warning"/>
            </>
          ) : null}
          {showComponent2 ? (
            <>
            <Button onClick={handleCardSeen} variant="contained" sx={{ width: '90%', height: 66, m: 3 }}>
              Vote for chief
            </Button>
            <TextWidget title="Your role is" value={role.card.cardName} color="warning" icon={'ant-design:windows-filled'} />
            <Box sx={{ mt: 3, pt: '100%', position: 'relative' }}>
              <StyledProductImg alt={'card'} src={`/assets/images/cards/${role.card.imageName}.png`} />
            </Box>
            </>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <></>
        </Grid>
      </Grid>
    </>
  );
}
