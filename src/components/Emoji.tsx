import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.webp"
import meh from '../assets/meh.png'
import thumbsup from '../assets/thumbsup.jpg'
interface Props{
    rating:number;
}
const Emoji = ({rating}:Props) => {
    if(rating <3) return null;
    const emojimap:{[key:number]:ImageProps} ={
        3:{src:meh,alt:'meh' ,boxSize:'25px'},
        4:{src:thumbsup,alt:'recomended',boxSize:'25px'},
        5:{src:bullseye,alt:'exceptional',boxSize:'35px'}
    }

  return (
    <Image {...emojimap[rating]} boxSize='25px' marginTop={1  } />
  )
}

export default Emoji