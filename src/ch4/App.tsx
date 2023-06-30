import React from "react";
import PersonScore from "./PersonScore";
import css from "./App.module.css"

function App() {
    return (
        <div className={css["app"]}>
            <PersonScore />
        </div>
    );
}

export default App;