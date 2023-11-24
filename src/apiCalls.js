import axios from 'axios';

const url = 'https://localhost:7074';


export default class apiCalls {
  static createGame = async (gameData) => {
    const response = await axios.post(`${url}/api/games`, gameData).catch((e) => console.log(e));
    console.log(response);
    return response.data;
  };
}
