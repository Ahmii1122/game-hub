import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
interface Props{
    platform: platform[]
}
const PlatformIconslist = ({platform}:Props) => {
  const iconsmap : {[key:string]:IconType} = {
    pc:FaWindows,
    playstation : FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web:BsGlobe,
    android:FaAndroid
    
  }
    return (
    <HStack marginY={1}>
    {platform.map((platform)=>
    <Icon as={iconsmap[platform.slug]} color='gray.500' />
    )}
    </HStack>
  )
}

export default PlatformIconslist