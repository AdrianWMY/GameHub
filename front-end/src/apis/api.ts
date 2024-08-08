import axios, { AxiosResponse } from 'axios';
import { Game } from '../interfaces/game'; // Import the Game interface
import { GameScreenshot } from '../interfaces/gameScreenshot'; 
import { GameLinks } from '../interfaces/gameLink'; 
const API_URL = 'http://localhost:3000/api';


export const getAllGames = async (): Promise<Game[] | undefined> => {
  try {
    const response: AxiosResponse<Game[]> = await axios.get(
      `${API_URL}/games`
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
export const getGameScreenshots = async (gameId: string): Promise<GameScreenshot | undefined> => {
  try {
    const response: AxiosResponse<GameScreenshot> = await axios.get(
      `${API_URL}/games/media/${gameId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching game data for gameId ${gameId}:`, error);
  }
}

export const getStoreLinksByGameId = async (gameId: string): Promise<GameLinks | undefined> => {
  try {
    const response: AxiosResponse<GameLinks> = await axios.get(
      `${API_URL}/games/store-links/${gameId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching game data for gameId ${gameId}:`, error);
  }
}

