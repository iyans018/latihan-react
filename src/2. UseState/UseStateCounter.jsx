import React, {useState} from 'react';
import './UseState.css'

function UseStateCounter() {
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);

    const complexIncrease = () => {
        setTimeout(() => {
            setNumber1((prevState) => {
                return prevState + 1;
            })
        }, 2000)
    }

    const complexDecrease = () => {
        setTimeout(() => {
            setNumber1((prevState) => {
                return prevState - 1;
            })
        }, 2000)
    }

    const complexReset = () => {
        setTimeout(() => {
            setNumber1(0)
        }, 2000)
    }

    return (
        <div className="container">
            <h2>Simple Counter</h2>
            <h2>{number}</h2>
            <button className="btn-primary" onClick={() => setNumber(number - 1)}>-</button>
            <button className="btn-primary" onClick={() => setNumber(0)}>Reset</button>
            <button className="btn-primary" onClick={() => setNumber(number + 1)}>+</button>
            <h2>Complex Counter</h2>
            <h2>{number1}</h2>
            <button className="btn-primary" onClick={complexDecrease}>-</button>
            <button className="btn-primary" onClick={complexReset}>Reset</button>
            <button className="btn-primary" onClick={complexIncrease}>+</button>
        </div>
    )
}

export default UseStateCounter;
