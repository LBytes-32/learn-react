import {useContext} from 'react'
import GuyContext from './context'

export default function GuyStats() {

    const {state} = useContext(GuyContext)

    return <div>
        <div>
            <span>Stronkth</span>
            <span>{state.strokth}</span>
        </div>
        <div>
            <span>Daxterity</span>
            <span>{state.daxterity}</span>
        </div>
        <div>
            <span>Wizard</span>
            <span>{state.wizard}</span>
        </div>
    </div>
}