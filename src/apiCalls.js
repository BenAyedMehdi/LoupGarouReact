import axios from 'axios';

const url = 'https://localhost:7074';


export default class apiCalls {
  static createGame = async () => {
    try {
      const response = await axios.post(`${url}/api/games`);
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
}
