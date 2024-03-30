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
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static getAllCards = async () => {
    try {
      const response = await axios.get(`${url}/api/cards`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static getGameRoles = async (gameId) => {
    try {
      const response = await axios.get(`${url}/api/games/${gameId}/roles`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };
 
  static assignRolesToPlayer = async (gameId) => {
    try {
      const response = await axios.put(`${url}/api/games/${gameId}`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static getPlayerRole = async (playerId) => {
    try {
      const response = await axios.get(`${url}/api/players/${playerId}/role`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static creqteVotingSession = async (request) => {
    try {
      const response = await axios.post(`${url}/api/votingSessions`, request);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };
}
