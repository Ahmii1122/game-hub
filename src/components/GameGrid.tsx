import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[]; // Ensure this matches the API response field
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient.get<FetchGameResponse>('/games')
      .then(res => {
        console.log('API response:', res.data); // Log API response
        if (res.data && res.data.results) {
          setGames(res.data.results);
        } else {
          throw new Error('Invalid API response structure');
        }
      })
      .catch(err => {
        console.error('API error:', err.message); // Log error message
        setError(err.message);
      });
  }, []); // Add dependency array here

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {games.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
    </>
  );
};

export default GameGrid;
