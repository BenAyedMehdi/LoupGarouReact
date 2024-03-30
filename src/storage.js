export default class storage {
  static getGameId() {
    const jsonObject = localStorage.getItem('memoryObject');
    const gameId = jsonObject ? JSON.parse(jsonObject).gameId : null;
    return gameId;
  }

  static getPlayerId() {
    const jsonPlayer = localStorage.getItem('memoryObject');
    const playerId = jsonPlayer ? JSON.parse(jsonPlayer).playerId : null;
    return playerId;
  }


  // Define other DTOs here...
}
