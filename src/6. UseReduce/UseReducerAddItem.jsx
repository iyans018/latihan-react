import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import './UseReduce.css';

// reducer function
const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const newItems = [...state.items, action.payload]
        return {
            ...state,
            items: newItems,
            isModalOpen: true,
            modalContent: 'item added',
        }
    }
    if(action.type === 'NULL_VALUE'){
        return { ...state, isModalOpen: true, modalContent: "input field can't be empty",}
    }
    if(action.type === 'CLOSE_MODAL'){
        return { ...state, isModalOpen: false };
    }
    if(action.type === 'REMOVE_ITEM'){
        const newItems = state.items.filter((item) => item.id !== action.payload)
        return {...state, items: newItems};
    }
    throw new Error('no matching action type');
}
const initialState = {
    items: [],
    isModalOpen: false,
    modalContent: '',
};

const UseReducerAddItem = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            const newItems = {id:Date.now(), text};
            dispatch({ type: 'ADD_ITEM', payload:newItems });
            setText('');
        } else{
            dispatch({ type: 'NULL_VALUE' });
        }
    }
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    return (
        <div className="container">
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
            <form className="form" onSubmit={handleSubmit}>
                <h3>UseReducer Add Item</h3>
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
                    <div key={item.id} className="item">
                        <h3>{item.text}</h3>
                        <button onClick={() => dispatch({type:'REMOVE_ITEM',payload:item.id})} className="btn-invicible">remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default UseReducerAddItem;
