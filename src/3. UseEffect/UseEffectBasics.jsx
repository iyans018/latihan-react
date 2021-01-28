import React, { useState, useEffect } from 'react';
import './UseEffect.css'

// by default runs after every re-render
// cleanup function
// second parameter

/* empty array in second parameter can make useEffect 
just called when initial render */

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    
    // default useEffect it's runs after every re-render
    useEffect(() => {
        console.log('default useEffect')
    })

    // useEffect dependency list in second parameter
    useEffect(() => {
        console.log('dependency useEffect')
        // useEffect Conditional
        if(value >= 1) {
            document.title = `New Messages(${value})`;
        } else {
            document.title = 'React App';
        }
    }, [value])

    /* useEffect called when initial render 
    using empty array in second parameter */
    useEffect(() => {
        console.log('initial render useEffect')
    }, [])

    console.log('render component')

    return (
        <div className="container">
            <h1>{value}</h1>
            <button className="btn-primary" onClick={() => setValue(value + 1)}>Click Me!</button>
            <button className="btn-primary" onClick={() => setValue(0)}>Reset</button>
        </div>
    )
}

export default UseEffectBasics;
