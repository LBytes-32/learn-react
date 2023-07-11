
export type TItem = {
    name: string
    weight: number
}

export type TGuy = {
    name: string,
    strokth: number,
    daxterity: number,
    wizard: number,
    items: Array<TItem>
}

export type TAction = 
    {
        name: 'change'
        data: Partial<TGuy>
    } | 
    {
        name: 'drop'
        data: string
    }
