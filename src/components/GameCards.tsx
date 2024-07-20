import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconslist from "./PlatformIconslist"
import CriticScore from "./CriticScore"
import getcroppedimagesurl from "../services/image-url"
interface Props{
    game : Game
}

const GameCards = ({game}:Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow={"hidden"}>
        <Image src={getcroppedimagesurl(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl' marginY={2}>{game.name}</Heading>
            <HStack justify='space-between'>
            <PlatformIconslist platform={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCards