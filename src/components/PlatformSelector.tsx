import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { platform } from "../hooks/useGames"
interface Props{
    onselectPlatform:(platform:platform)=>void;
    selectedplatform : platform|null
}
const PlatformSelector = ({onselectPlatform,selectedplatform}:Props) => {
    const {data ,error}=usePlatforms();
    if(error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedplatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={()=>onselectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector