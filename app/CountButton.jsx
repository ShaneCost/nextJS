import { useState, useEffect } from "react"
import "./countButton.css"

export default function CountButton() {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect (rollOverCount, [count])
    return (  
        <>
        <button onClick={handleClick}> +1 </button>
        <div id="output"> {count} </div>
        </>  
    );
  }3