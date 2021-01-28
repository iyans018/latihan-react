import React, { useState, useEffect } from 'react';
import './UseEffect.css'

function UseEffectCleanup() {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', checkSize)
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize', checkSize);
        }
    }, [])
    console.log('render')

    return (
        <div className="container">
            <h2>Window Width</h2>
            <h2>{size}</h2>
        </div>
    )
}

export default UseEffectCleanup
