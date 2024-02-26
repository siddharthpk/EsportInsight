import axios from 'axios';

interface MatchData {
  // Define the structure of the match data you expect
  // This should mirror what your backend sends, which might be a subset of PandaScore's data
  id: number;
  name: string;
  game: string;

}

const url = process.env.REACT_APP_BASE_URL;

const fetchLiveMatches = async (): Promise<MatchData[]> => {
  try {
    const response = await axios.get(`${url}/livematches`);
    return response.data; // Assuming the backend sends the data in the response body directly
  } catch (error) {
    console.error("Error fetching live matches:", error);
    throw new Error('Failed to fetch live matches');
  }
};

export { fetchLiveMatches };
