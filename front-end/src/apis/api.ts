import axios, { AxiosResponse } from 'axios';
import { Game } from '../interfaces/game'; // Import the Game interface
const API_URL = 'http://localhost:3000/api';


export const getAllGames = async (): Promise<Game[] | undefined> => {
  try {
    const response: AxiosResponse<Game[]> = await axios.get(
      `${API_URL}/data`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getSingleGame = async (gameId: string): Promise<Game | undefined> => {
  try {
    const response: AxiosResponse<Game> = await axios.get(
      `${API_URL}/games/${gameId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching game data for gameId ${gameId}:`, error);
  }
}
