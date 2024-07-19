import { Card, CardBody, Heading, Image, Text} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconslist from "./PlatformIconslist"

interface Props{
    game : Game
}

const GameCards = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconslist platform={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCards