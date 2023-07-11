import {TGuy, TAction, TItem} from './types'

export default function GuyReducer(state: TGuy, action: TAction) {
    if(action.name == 'change') {
        return {
            ...state,
            ...action.data
        }
    }
    if(action.name == 'drop') {
        let index = -1
        for(let i = 0; i < state.items.length; i++) {
            const item = state.items[i]
            if(item.name == action.data) {
                index = i
                break
            }
        }
        if(index < 0) return state
        const new_items : Array<TItem> = []
        for(let i = 0; i < state.items.length; i++) {
            if(i !== index) {
                new_items.push(state.items[i])
            }
        }
        const ns = {...state}
        ns.items = new_items
        return ns
    }
    return state
}