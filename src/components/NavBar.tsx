import { HStack, Image, Text } from "@chakra-ui/react"
import logo1 from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo1} boxSize="50px"/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar