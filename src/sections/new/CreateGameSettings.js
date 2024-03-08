import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Container, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import apiCalls from '../../apiCalls';
import RolesCountBar from './RolesCountBar';

// ----------------------------------------------------------------------

export default function CreateGameSettings({ returnedGame }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allRoles, setAllRoles] = useState([]);
  const [cards, setCards] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllRolesInDb();
  }, []);

  useEffect(() => {
    setCards(allRoles.map((role) => ({ role, numberOfCards: 1 })));
  }, [allRoles]);

  useEffect(() => {
    const total = cards.reduce((sum, card) => sum + card.numberOfCards, 0);
    console.log("total: ", total)
    setTotalPlayers(total);
  }, [cards]);

  const getAllRolesInDb = async (e) => {
    const roles = await apiCalls.getAllRoles();
    console.log(roles === null ? 'Network error' : roles);
    if (roles === null) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      setAllRoles(roles);
      setLoading(false);
    }
  };

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const request = {
      numberOfPlayers: totalPlayers,
      gameCards: cards
    }
    console.log(request)
    const game = await apiCalls.createGame(request);
    console.log(game === null ? 'Network error' : game.gameCode);
    if (game === null) {
      setError(true);
    } else {
      returnedGame(game);
      setError(false);
    } 
  };

  const handleCardsCountChange = (cardsToAdd) => {
    setCards((prevCards) => {
      const existingCardIndex = prevCards.findIndex((card) => card.role.roleId === cardsToAdd.role.roleId);
      if (existingCardIndex > -1) {
        // If the card already exists, update its count
        const updatedCards = [...prevCards];
        updatedCards[existingCardIndex] = cardsToAdd;
        return updatedCards;
      }
      // If the card doesn't exist, add it to the array
      return [...prevCards, cardsToAdd];
    });
  };

  return (
    <>
      <Container sx={{ width: '70%' }} maxWidth="xl">
        <Grid container spacing={3}>
          {error && (
            <Grid item xs={12} sm={12} md={12}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Unable to connect to the server.
              </Alert>
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={12}>
            <Button onClick={handleCreateGame} variant="contained" sx={{ width: '100%', height: 56 }}>
              Create Game
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography align="center" variant="h3" sx={{ m: 1 }}>
              Total number of Players: {totalPlayers}
            </Typography>
          </Grid>
          {loading && (
            <Container style={{ display: 'flex', height: '10vh', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress />
            </Container>
          )}

          <Grid item xs={12} sm={12} md={12}>
            <div>
              {allRoles.map((role, index) => (
                <RolesCountBar key={index} role={role} addCards={handleCardsCountChange} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
