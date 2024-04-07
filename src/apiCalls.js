import axios from 'axios';

const url = 'https://localhost:7074';
// const url = 'https://loupgarou.azurewebsites.net/';

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

  static createVotingSession = async (request) => {
    try {
      const response = await axios.post(`${url}/api/votingSessions`, request);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };
  
  static getCurrentVotingSession = async (gameId) => {
    try {
      const response = await axios.get(`${url}/api/games/${gameId}/votingSessions/current`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static createVote = async (request) => {
    try {
      const response = await axios.post(`${url}/api/votes`, request);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static getVotingSession = async (sessionId) => {
    try {
      const response = await axios.get(`${url}/api/votingSessions/${sessionId}`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };

  static getPlayer = async (playerId) => {
    try {
      const response = await axios.get(`${url}/api/players/${playerId}`);
      return { data: response.data, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  };
  
}
