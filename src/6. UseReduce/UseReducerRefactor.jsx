import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import './UseReduce.css';

// reducer function
const reducer = (state, action) => {

}
const initialState = {
    items: [],
    isModalOpen: false,
    modalContent: 'berhasil',
};

const UseReducerRefactor = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setText('');
        } else{
            
        }
    }

    return (
        <div className="container">
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form className="form" onSubmit={handleSubmit}>
                <h3>UseReducer Refactor</h3>
                <div>
                    <input 
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {state.items.map((item) => {
                return (
                    <div className="item">
                        <h3>{item.name}</h3>
                        <button className="btn-invicible">remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default UseReducerRefactor;
