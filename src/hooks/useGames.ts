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
  
 
const  useGames = (selectedgenre:Genre|null,selectedplatform:platform|null)=>useData<Game>('/games',{params:{genres:selectedgenre?.id,platforms:selectedplatform?.id}},[selectedgenre?.id,selectedplatform?.id])
   
export default useGames;