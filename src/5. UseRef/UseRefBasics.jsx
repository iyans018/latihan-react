import React, { useEffect, useRef } from 'react';
import './UseRef.css'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }
    return (
        <>
            <form className="container" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div ref={divContainer}>This a div</div>
        </>
    )
}

export default UseRefBasics;
