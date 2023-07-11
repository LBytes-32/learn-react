import { createContext } from 'react'
import { TAction } from './types'

const GuyContext = createContext(
    {
        state: {
            name: 'guy',
            strokth: 10,
            daxterity: 11,
            wizard: 50,
            items: [
                {
                    name: 'magic juice',
                    weight: 5
                },
                {
                    name: 'magic stick',
                    weight: 30
                }
            ]
        },
        action: (action: TAction) => { }
    }
)

export default GuyContext