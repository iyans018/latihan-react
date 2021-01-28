import React, { useState } from 'react'
import './UseState.css'

function UseStateObjects() {
    const [person, setPerson] = useState({
        name: 'mamat',
        age: 22,
        message: 'random message'
    });

    const setMessage = () => {
        // menggunakan spread operator
        setPerson({...person, message: 'kajshdjshd!'})
    }

    return (
        <div className="container">
            <h2>Change Objects</h2>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <input className="btn-primary" type="button" value="change message" onClick={setMessage} />
        </div>
    )
}

export default UseStateObjects;
