
export default class DTOs {
  static createGameRequest(totalPlayers, cards) {
    return {
      numberOfPlayers: totalPlayers,
      gameCards: cards
    };
  }
  
  static createSameCardsGroup(count, card) {
    return {
      card,
      numberOfCards: count
    }
  }
  
  // Define other DTOs here...
}
