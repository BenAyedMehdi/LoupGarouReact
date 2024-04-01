export default class storage {
  static getGame() {
    const jsonObject = localStorage.getItem('memoryObject');
    const game = jsonObject ? JSON.parse(jsonObject) : null;
    return game;
  }

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

  static getGameCode() {
    const gameJson = localStorage.getItem('memoryObject');
    const gameCode = gameJson ? JSON.parse(gameJson).gameCode : 'XYZK';
    return gameCode;
  }

  // Define other storage functions here...
}
