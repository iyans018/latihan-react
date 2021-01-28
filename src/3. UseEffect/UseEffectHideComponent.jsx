import React, { useState, useEffect } from 'react';
import './UseEffect.css';

function UseEffectHideComponent() {
    const [show, setShow] = useState(false)

    return (
        <div className="container">
            <button style={{margin:'0 auto', display:'block'}} className="btn-primary" onClick={() => setShow(!show)}>Show/Hide</button>
            { show && <WindowSize /> }
            { show ? <WindowSize /> : '' }
        </div>
    )
}

const WindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkWindowSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        }
    },[])

    return (
        <div className="container">
            <h2 style={{textAlign:'center'}}>Window Size</h2>
            <h3 style={{textAlign:'center'}}>{size} px</h3>
        </div>
    )
}

export default UseEffectHideComponent;
