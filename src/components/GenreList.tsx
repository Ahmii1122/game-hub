import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from '../hooks/useGenre';
import getcroppedimagesurl from "../services/image-url";

interface Props {
    onselectedgenre: (genre: Genre) => void;
    selectedgenre: Genre | null;
}

const GenreList = ({ selectedgenre, onselectedgenre }: Props) => {
    const { data, loading, error } = useGenres();

    if (error) return null;
    if (loading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map((genre: Genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image 
                                objectFit='cover' 
                                boxSize='32px' 
                                borderRadius={8} 
                                src={getcroppedimagesurl(genre.image_background)} 
                            />
                            <Button 
                                whiteSpace={"normal"} 
                                textAlign='left' 
                                fontWeight={genre.id === selectedgenre?.id ? 'bold' : 'normal'} 
                                onClick={() => onselectedgenre(genre)} 
                                fontSize='lg' 
                                variant='link'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default GenreList;
