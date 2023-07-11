import {useContext} from 'react'
import GuyContext from './context'
import InventoryItem from './InventoryItem'

export default function Inventory() {

    const {state, action} = useContext(GuyContext)

    const items = state.items.map((v)=> {
        return <InventoryItem 
        name={v.name} 
        weight={v.weight} 
        key={v.name}
        drop={()=>action({
            name: 'drop',
            data: v.name
        })}
        />
    })

    return <table>
        {items}
    </table>
}