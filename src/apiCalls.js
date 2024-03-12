import axios from 'axios';

const url = 'https://localhost:7074';

export default class apiCalls {
  static createGame = async (request) => {
    try {
      const response = await axios.post(`${url}/api/games`, request);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static addPlayer = async (createPlayerRequest) => {
    try {
      const response = await axios.post(`${url}/api/players`, createPlayerRequest);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
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

  static getAllCards = async () => {
    try {
      const response = await axios.get(`${url}/api/cards`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  static getGameRoles = async (gameId) => {
    try {
      const response = await axios.get(`${url}/api/games/${gameId}/roles`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };
}
