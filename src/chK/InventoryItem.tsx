type TInventoryItemProps = {
    name: string
    weight: number
    drop: ()=>void
}

export default function InventoryItem({name, weight, drop}: TInventoryItemProps) {
    return <tr>
        <td>{name}</td>
        <td>{weight}</td>
        <td><button onClick={drop}>Drop</button></td>
    </tr>
}