import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

/*  DEPRECATED VERSION.
    
    This version used the useState hook.
    This was refactored to use the reducer hook.
*/

function PersonScore() {
    
    const [name, setName] = useState<string | undefined>();
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    
    /*  You may notice the effect has been executed twice, according to the console.
        This happens when running development mode + react strict mode.
        Documented at https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors.
    */
    
    // Fetch and log the person object. This effect does not depend on other variables.
    useEffect(() => {
        getPerson().then((person) => {
            setLoading(false);
            setName(person.name);
            
            /*  ODDITY:
                    This outputs " loading: FALSE, name: UNDEFINED "
                    This takes place AFTER setting loading:false, name:bob.
                
                REASON:
                    Updating state values is not immediate!
                    They are batched and updated before the next render.
                    It isn't until the NEXT RENDER, where these changes take effect.
            */ 
            console.warn("Is loading?", loading, "\nThe name:  ", name);
        });
    }, []);
    
    // If loading, then say so.
    if (loading) {
        return (<div> Loading... </div>);
    }
    
    // Unnecessary detail of making the name possessive.
    let namePossessive = name + "'" + (name?.slice(-1).toUpperCase() !== "S" ? "s" : "");
    
    // Once loaded, display the name and score.
    return (
        <div>
            <h3> {namePossessive} Score: {score} </h3>
            
            <button onClick={() => setScore(score + 1)}> + </button>
            <button onClick={() => setScore(score - 1)}> - </button>
            <button onClick={() => setScore(0)}> Reset </button>
        </div>
    );
}

export default PersonScore;