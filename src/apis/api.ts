import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000/api';

interface GetDataResponse {
  gameName: string;
  platforms: string;
  genre: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  ageRating: string;
  about: string;
}

// interface PostDataResponse {
//   receivedData: any;
//   // Define the shape of the received data based on your API
// }

export const getData = async (): Promise<GetDataResponse | undefined> => {
  try {
    const response: AxiosResponse<GetDataResponse> = await axios.get(
      `${API_URL}/data`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
