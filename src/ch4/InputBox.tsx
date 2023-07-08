import { useEffect, useRef, useState } from "react";
import css from "./InputBox.module.css"

type InputBoxProps = {
    label    : string
    onsubmit : (input: string) => void
}

function InputBox(props: InputBoxProps) {
    
    const [input, setInput] = useState("")
    
    const ref = {
        inputBox: useRef<HTMLInputElement>(null)
    }
    
    useEffect(() => {
        function submit(e: KeyboardEvent) {
            if (ref.inputBox.current !== null && e.key === 'Enter') {
                props.onsubmit(ref.inputBox.current.value)
            }
        }
        
        ref.inputBox.current?.addEventListener("keypress", submit)
        
        return () => {
            // Remove the event listener upon unmount
            ref.inputBox.current?.removeEventListener("keypress", submit)
        }
    }, [])
    
    function onContainerClick() {
        if (ref.inputBox.current != null && document.activeElement !== ref.inputBox.current) {
            var len = ref.inputBox.current.value.length;
            ref.inputBox.current.focus();
            ref.inputBox.current.setSelectionRange(len, len);
        }
    }
    
    return (
        <div className={css.Container} onClick={onContainerClick}>
            
            <div
                className={css.Label}>
                {props.label}
            </div>
                
            <input
                className = {css.TextBox}
                type      = "text"
                ref       = {ref.inputBox}
            />
            
        </div>
    );
}

export default InputBox;