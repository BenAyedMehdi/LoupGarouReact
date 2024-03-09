import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Container, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import RolesCountBar from './RolesCountBar';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';

// ----------------------------------------------------------------------

export default function CreateGameSettings({ returnedGame }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allCardsFromDb, setAllCardsFromDb] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllCardsInDb();
  }, []);

  useEffect(() => {
    setChosenCards(allCardsFromDb.map((card) => ({ card, numberOfCards: 1 })));
  }, [allCardsFromDb]);

  useEffect(() => {
    const total = chosenCards.reduce((sum, card) => sum + card.numberOfCards, 0);
    console.log("total: ", total)
    setTotalPlayers(total);
  }, [chosenCards]);

  const getAllCardsInDb = async (e) => {
    const cardsfromDb = await apiCalls.getAllCards();
    console.log(cardsfromDb === null ? 'Network error' : cardsfromDb);
    if (cardsfromDb === null) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      setAllCardsFromDb(cardsfromDb);
      setLoading(false);
    }
  };

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const request = DTOs.createGameRequest(totalPlayers, chosenCards);
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
    setChosenCards((prevCards) => {
      const existingCardIndex = prevCards.findIndex((cardsGroup) => cardsGroup.card.cardId === cardsToAdd.card.cardId);
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
              {allCardsFromDb.map((card, index) => (
                <RolesCountBar key={index} card={card} addCards={handleCardsCountChange} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
