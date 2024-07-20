import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
    onselectsortorder: (sortOrder:string) =>void;
    sortorder:string;
}
const SortSelector = ({onselectsortorder,sortorder}:Props) => {
    const sortOrder = [
        {value : '', label: 'Relevance' },
        {value : '-added', label: 'Date added' },
        {value : 'name', label: 'Name' },
        {value : '-released', label: 'Released Date' },
        {value : '-metacritic', label: 'Popularity' },
        {value : '-rating', label: 'Average Rating' }
    ]
    const currentsortorder = sortOrder.find(order => order.value === sortorder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentsortorder?.label || 'Relevance' }</MenuButton>
            <MenuList>
             {sortOrder.map(order => <MenuItem onClick={()=>onselectsortorder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
      )
}

export default SortSelector