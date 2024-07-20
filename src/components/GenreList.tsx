import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getcroppedimagesurl from "../services/image-url";


const GenreList = () => {
    const {data}=useGenre();
  return (
    <List>
        {data.map(genre=><ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getcroppedimagesurl(genre.image_background)}/>
            <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList