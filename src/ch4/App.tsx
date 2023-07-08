import React, { useState } from "react";
import PersonScore from "./PersonScore";
import PersonInput from "./InputBox";
import css from "./App.module.css"

function App() {

    const [name, setName] = useState<string>()
    
    function submit(input: string) {
        setName(input)
    }
    
    return (
        <>
            <div className={css["app"]}>
                
                <PersonInput label="Name" onsubmit={submit}/>
                <div>{name}</div>
                <PersonScore person={name}/>
                
            </div>
        </>
    );
}

export default App;