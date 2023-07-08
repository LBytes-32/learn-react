import { useEffect, useMemo, useReducer, useRef } from 'react';
import { getPerson } from './getPerson';
import Reset from './Reset';
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
              | { type: 'reset' }
              | { type: 'loading' }

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

        case 'loading':
            return {
                ...state,
                loading: true
            };
    }
    
}




function expensiveCalculation(): number {

    const start = new Date()

    console.warn("Expensive function invoked.");
    let sum = 0;
    
    for (let i=1; i<10000000; i++) {
        sum += Math.sqrt(i) + Math.random();
    }
    
    console.warn("Expensive function complete.");

    const end = new Date()

    console.log('expensive = ', end.getTime() - start.getTime())
    return sum;
}


type TPersonScoreProps = {
    person?: string
}


function PersonScore({person}: TPersonScoreProps) {

    console.log('person score called with', person)
    
    // Initialize state
    const [{ name, score, loading }, dispatch] = useReducer(reducer, {
        name    : undefined,
        score   : 0,
        loading : true
    });
    
    // Create a hook to eventually reference the '+' button. (Will reference an HTMLButtonElement)
    const ref = {
        addButton: useRef<HTMLButtonElement>(null)
    }
    
    /*  You may notice the effect has been executed twice, according to the console.
        This happens when running development mode + react strict mode.
        Documented at https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors.
    */
    
    // Fetch and log the person object. This effect does not depend on other variables.
    useEffect(() => {
        dispatch({type: 'loading'})
        getPerson(person).then((person) => {
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
    }, [person]);
    
    // Focus the '+' button when finished loading.
    // This could be combined with the first useEffect, but this tightens coupling.
    useEffect(() => {
        if (!loading) {
            ref.addButton.current?.focus();
        }
    }, [loading]);
    
    const expensiveSum = useMemo(
        () => expensiveCalculation(),
        []
    )
    
    // If loading, then say so.
    if (loading) {
        return (<div className={css.Loading}> Pending... </div>);
    }
    
    // Fun detail of making the name possessive.
    let namePossessive = name + (name?.slice(-1).toUpperCase() !== "S" ? "'s" : "'");
    
    // Once loaded, display the name and score.
    return (
        <>
            <div className={css.Note}> Expensive Calculation = </div> { expensiveSum }
            
            <h3 className={css.header}> {namePossessive} Score: {score} </h3>
            
            <div className={css.ButtonLayout}>
                { /* "ref" will be associated with "ref.addButton" */ }
                <button
                    className = { css.Button + ' ' + css.ButtonLeft }
                    onClick   = { () => dispatch({ type: 'increment' }) }
                    ref       = { ref.addButton }>
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
            
            <Reset onClick={() => dispatch({ type: 'reset' })} />
        </>
    );
}

export default PersonScore;