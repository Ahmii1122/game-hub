import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconslist from "./PlatformIconslist"
import CriticScore from "./CriticScore"
import getcroppedimagesurl from "../services/image-url"
import Emoji from "./Emoji"
interface Props{
    game : Game
}

const GameCards = ({game}:Props) => {
  return (
    <Card >
        <Image  src={getcroppedimagesurl(game.background_image)}/>
        <CardBody>
            <HStack justify='space-between' marginBottom={3}>
            <PlatformIconslist platform={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl' marginY={2}>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCards