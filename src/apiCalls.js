import axios from 'axios';

const url = 'https://localhost:7074';


export default class apiCalls {
  static createGame = async (request) => {
    try {
      const response = await axios.post(`${url}/api/games`, request);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  static addPlayer = async (createPlayerRequest) => {
    try {
      const response = await axios.post(`${url}/api/players`, createPlayerRequest);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  static getGamePlayers = async (gameId) => {
    try {
      const response = await axios.get(`${url}/api/games/${gameId}/players`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  static getAllRoles = async () => {
    try {
      const response = await axios.get(`${url}/api/roles`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };
}
