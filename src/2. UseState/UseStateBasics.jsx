import React, {useState} from 'react';
import './UseState.css'

function UseStateBasics() {
    const [text, setText] = useState('hello bitch!')

    const handleClick = () => {
        if (text === 'hello bitch!') {
            setText('fuck off bitch!')
        } else {
            setText('hello bitch!')
        }
    }

    return (
        <div className="container">
            <h1>{text}</h1>
            <input type="button" onClick={handleClick} className="btn-primary" value="Change Title"/>
        </div>
    )
}

export default UseStateBasics;
