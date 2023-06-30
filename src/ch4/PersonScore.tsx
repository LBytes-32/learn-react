import { useEffect, useReducer, useRef } from 'react';
import { getPerson } from './getPerson';
import css from "./PersonScore.module.css";

/*  This version uses the Reducer Hook.
    You may compare this with the State Hook, found in "PersonScoreDEPRECATED.tsx".
    
    The Reducer Hook is appropriate for complex state management.
    The State Hook is appropriate for primitive values, each of which are independent of any other state.
*/

type State = {
    name    : string | undefined;
    score   : number;
    loading : boolean;
};

type Action = | { type: 'initialize', name: string }
              | { type: 'increment' }
              | { type: 'decrement' }
              | { type: 'reset' };

function reducer(state: State, action: Action): State {
    
    switch (action.type) {
        case 'initialize':
            return {
                name    : action.name,
                score   : 0,
                loading : false
            };
        
        case 'increment':
            return {
                ...state,
                score: state.score + 1
            };
            
        case 'decrement':
            return {
                ...state,
                score: state.score - 1
            };
            
        case 'reset':
            return {
                ...state,
                score: 0
            };
    }
    
}



function PersonScore() {
    
    const [{ name, score, loading }, dispatch] = useReducer(reducer, {
        name: undefined,
        score: 0,
        loading: true
    });
    
    // Create a hook to eventually reference the '+' button. (Will reference an HTMLButtonElement)
    const addButtonRef = useRef<HTMLButtonElement>(null);
    
    /*  You may notice the effect has been executed twice, according to the console.
        This happens when running development mode + react strict mode.
        Documented at https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors.
    */
    
    // Fetch and log the person object. This effect does not depend on other variables.
    useEffect(() => {
        getPerson().then((person) => {
            dispatch({ type: 'initialize', name: person.name })
            
            /*  ODDITY:
                    This outputs " loading: FALSE, name: UNDEFINED "
                    This takes place AFTER setting loading=false, name=bob.
                
                REASON:
                    Updating state values is not immediate!
                    They are batched and updated before the next render.
                    It isn't until the NEXT RENDER, where these changes take effect.
            */ 
            console.log("Is loading?", loading, "\nThe name:  ", name);
        });
    }, []);
    
    // Focus the '+' button when finished loading.
    // This could be combined with the first useEffect, but this tightens coupling.
    useEffect(() => {
        if (!loading) {
            addButtonRef.current?.focus();
        }
    }, [loading]);
    
    // If loading, then say so.
    if (loading) {
        return (<div className={css.Loading}> Loading... </div>);
    }
    
    // Fun detail of making the name possessive.
    let namePossessive = name + (name?.slice(-1).toUpperCase() !== "S" ? "'s" : "'");
    
    // Once loaded, display the name and score.
    return (
        <>
            <h3 className={css.header}> {namePossessive} Score: {score} </h3>
            
            <div className={css.ButtonLayout}>
                { /* "ref" will be associated with "addButtonRef" */ }
                <button
                    className = { css.Button + ' ' + css.ButtonLeft }
                    onClick   = { () => dispatch({ type: 'increment' }) }
                    ref       = { addButtonRef }>
                    +  
                </button>
                    
                <button
                    className = { css.Button }
                    onClick   = { () => dispatch({ type: 'decrement' }) }>
                    -
                </button>
                
                <button
                    className = { css.Button + ' ' + css.ButtonRight }
                    onClick   = { () => dispatch({ type: 'reset' }) }>
                    Reset
                </button>
            </div>
        </>
    );
}

export default PersonScore;