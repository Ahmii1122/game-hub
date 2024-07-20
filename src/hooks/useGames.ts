import { gameQuery } from "../App";
import useData from "./useData";
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
    rating_top:number;
  }
  
 
const  useGames = (gamequery:gameQuery)=>useData<Game>('/games',
    {params:
        {genres:gamequery.genre?.id,platforms:gamequery.platform?.id,ordering:gamequery.sortOrder,search:gamequery.searchText}},
        [gamequery])
   
export default useGames;