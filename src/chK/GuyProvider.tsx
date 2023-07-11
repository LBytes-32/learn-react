import GuyContext from "./context";
import {PropsWithChildren, useReducer} from 'react'
import GuyReducer from "./reducer";


export default function GuyProvider({children}: PropsWithChildren) {

    const [guy, dispatch] = useReducer(GuyReducer, {
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
        ]})


    return <GuyContext.Provider value=
        {{state: guy, action: dispatch}}
    >
        {children}
    </GuyContext.Provider>

}