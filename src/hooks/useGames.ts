import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
 export interface platform{
    id:number;
    name:string;
    slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image :string;
    parent_platforms:{platform:platform}[];
    metacritic:number;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[]; // Ensure this matches the API response field
  }
const useGames = ()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
        const controller =new AbortController()
        setLoading(true);
      apiClient.get<FetchGameResponse>('/games',{signal:controller.signal})
        .then(res => {
          console.log('API response:', res.data); // Log API response
          if (res.data && res.data.results) {
            setGames(res.data.results);
          } else {
            throw new Error('Invalid API response structure');
          }
          setLoading(false)
        })
        .catch(err => {
          if(err instanceof CanceledError) return
          setError(err.message);
          setLoading(false)
        });
        return ()=>controller.abort();
    }, []); // Add dependency array here
    return {games,error,loading}
}
export default useGames;