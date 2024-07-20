import { Grid,GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
export interface gameQuery{
  genre: Genre | null;
  platform : platform |null;
  sortOrder:string;
  searchText:string;
}
function App() {
  const[gamequery,setgamequery]=useState<gameQuery>({} as gameQuery);
return <Grid templateAreas={{
  base : `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}
templateColumns={
  {
    base:'1fr',
    lg:'200px 1fr'
  }
}
>
  <GridItem area='nav'><NavBar onSearch={(searchText)=>setgamequery({...gamequery,searchText})}/></GridItem>
  <Show above="lg">
<GridItem area='aside' paddingX={5}><GenreList selectedgenre={gamequery.genre} onselectedgenre={(genre)=>setgamequery({...gamequery,genre})}/></GridItem>
  </Show>
  <GridItem area='main'>
    <HStack spacing={5} paddingLeft={2} marginBottom={5}>
    <PlatformSelector selectedplatform={gamequery.platform} onselectPlatform={(platform)=>setgamequery({...gamequery,platform})} />
    <SortSelector sortorder={gamequery.sortOrder} onselectsortorder={(sortOrder)=> setgamequery({...gamequery,sortOrder})} />
    </HStack>
     <GameGrid gamequery={gamequery} /></GridItem>

</Grid>
}

export default App
