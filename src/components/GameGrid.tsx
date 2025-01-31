import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { gameQuery } from "../App";
interface props{
  gamequery :gameQuery
  }
  const GameGrid = ({gamequery}:props) => {
 const {data,error ,loading}=useGames(gamequery)
const skeletons = [1,2,3,4,5,6,7,8];
if(error) return <Text>{error}</Text> 
  return (

    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={6}>
    {loading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
      {data.map(game => (
        <GameCardContainer key={game.id}><GameCards  game={game}/></GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
