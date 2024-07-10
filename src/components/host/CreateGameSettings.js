import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Typography, Container, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import RolesCountBar from '../shared/RolesCountBar';
import apiCalls from '../../apiCalls';
import DTOs from '../../DTOs';
import GameContext from "../../contexts/GameContext"

// ----------------------------------------------------------------------

export default function CreateGameSettings({createdGame}) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Unable to connect to the server.');
  const [loading, setLoading] = useState(false);
  const [allCardsFromDb, setAllCardsFromDb] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const {gameDetails, updateGameDetails} = useContext(GameContext);

  useEffect(() => {
    setLoading(true);
    getAllCardsInDb();
  }, []);

  useEffect(() => {
    setChosenCards(allCardsFromDb.map((card) => ({ card, numberOfCards: 1 })));
  }, [allCardsFromDb]);

  useEffect(() => {
    const total = chosenCards.reduce((sum, card) => sum + card.numberOfCards, 0);
    setTotalPlayers(total);
  }, [chosenCards]);

  const getAllCardsInDb = async (e) => {
    const res = await apiCalls.getAllCards();
    if (res.error) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      const cardsfromDb = res.data;
      setAllCardsFromDb(cardsfromDb);
      setLoading(false);
    }
  };

  const handleCreateGame = async (e) => {
    e.preventDefault();

    const request = DTOs.createGameRequest(totalPlayers, chosenCards);

    const res = await apiCalls.createGame(request);

    if (res.error) {
      setError(true);
      if (res.error.code === 'ERR_BAD_REQUEST' || res.error.code === 'ERR_NOT_FOUND') {
        setErrorMessage(res.error.response.data);
      } else {
        setErrorMessage('Unable to connect to the server.');
      }
    } else {
      const game = res.data;
      console.log(game);
      updateGameDetails(game)
      localStorage.setItem("gameObject", JSON.stringify(game));
      createdGame(game);      
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
      <Container sx={{ width: '90%' }} maxWidth="xl">
        <Grid container spacing={3}>
          {error && (
            <Grid item xs={12} sm={12} md={12}>
              <Alert severity="error">
                <AlertTitle>{errorMessage}</AlertTitle>
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
