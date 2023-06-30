
import { useState } from "react"
import css from "./Alert.module.css"

// Name props for the functional component
interface AlertProps {
    type?     : string
    heading   : string
    children  : React.ReactNode
    closable? : boolean
    onClose?  : () => void
}

/*  Functional-components include the following
        - useState
        - handler functions
        - returned elements
*/

export function Alert({type="information", heading, children, closable, onClose}: AlertProps) {
    const [visible, setVisible] = useState(true)
    
    // Updates are only applied if something else happens after setVisible(...) (Such as a log)
    // Warnings are tracked using the "react dev-tools" extension. This may be why an update occurs with a simple console.warn(...)
    console.warn("UPDATE APPLIED!")
    
    // function to close the window
    function handleCloseClick() {
        setVisible(false)
        
        console.log("CLOSED")
        
        if (onClose)
            onClose()
    }
    
    // function to reopen the window
    function handleReopenClick() {
        console.log("OPENED")
        setVisible(true)
    }
    
    // Return the "hidden" element if not visible
    if (!visible) {
        return (
            <div>
                <span> Hidden! </span>
                
                <button onClick={handleReopenClick}>
                    Click to reopen!
                </button>
            </div>
        )
    }    
    // Return the "alert box" element if visible
    else {
        
        // Icon that represents "warning" or "information"
        let icon = (
            <span role="img" aria-label={type === "warning" ? "Warning" : "Information"}>
                {type === "warning" ? "⚠" : "ℹ️"}
            </span>
        )
        
        // Close button is only visible if it is "closable"
        let closeButton = (
            <>
                {closable && (
                    <button aria-label="Close" onClick={handleCloseClick}>
                        <span role="img" aria-label="Close"> ❌ </span>
                    </button>
                )}
            </>
        )
        
        // Return the alert box.
        return (
            <div className={css['alert-base']}>
                
                <div className={css['alert-header']}>
                    {icon}
                    <span> {heading} </span>
                    {closeButton}
                </div>
                
                <div className={css['alert-content']}>
                    {children}
                </div>
                
            </div>
        )
    }
}

