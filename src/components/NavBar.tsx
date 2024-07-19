import { HStack, Image} from "@chakra-ui/react"
import logo1 from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding='10px'>
        <Image src={logo1} boxSize="50px"/>
       <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar