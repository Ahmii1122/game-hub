import { gameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";
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
  
 
const  useGames = (gamequery:gameQuery)=>useData<Game>('/games',{params:{genres:gamequery.genre?.id,platforms:gamequery.platform?.id}},[gamequery])
   
export default useGames;