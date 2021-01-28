import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import './UseReduce.css'

const UseReduceSetup = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setShowModal(true)
            const newItems = [...items, {id:Date.now(), name:text}];
            setItems(newItems);
            setText('');
        } else{
            setShowModal(true)
        }
    }

    return (
        <div className="container">
            {showModal && <Modal />}
            <form className="form" onSubmit={handleSubmit}>
                <h3>UseReducer</h3>
                <div>
                    <input 
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {
                items.map((item) => {
                    return (
                        <div className="item">
                            <h3>{item.name}</h3>
                            <button className="btn-invicible">remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseReduceSetup;
