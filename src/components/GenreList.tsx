import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getcroppedimagesurl from "../services/image-url";
interface Props{
    onselectedgenre : (genre:Genre) =>void;
    selectedgenre:Genre|null;
}

const GenreList = ({selectedgenre,onselectedgenre}:Props) => {
    const {data, loading,error}=useGenre();
    if(error) return null;
    if(loading) return <Spinner />
  return (
    <List>
        {data.map(genre=><ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getcroppedimagesurl(genre.image_background)}/>
            <Button fontWeight={genre.id === selectedgenre?.id ? 'bold' :'normal'} onClick={()=>onselectedgenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList