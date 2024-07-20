import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
interface props{
  selectedgenre:Genre |null
}
  const GameGrid = ({selectedgenre}:props) => {
 const {data,error ,loading}=useGames(selectedgenre)
const skeletons = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={3}>
    {loading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
      {data.map(game => (
        <GameCardContainer key={game.id}><GameCards  game={game}/></GameCardContainer>
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
