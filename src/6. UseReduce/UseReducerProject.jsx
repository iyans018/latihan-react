import React, { useReducer, useState, Fragment } from 'react';
import Modal from './Modal';
import './UseReducerProject.css';

const reducer = (state, action) => {
    if(action.type === "ADD_ITEM") {
        const newItems = [...state.items, action.payload];
        return {
            items: newItems,
            isModalOpen: true,
            modalContent: 'List items has been added',
            modalClass: 'modal-success',
        }
    }
    if(action.type === "NO_ITEM") {
        return {
            ...state, 
            isModalOpen: true, 
            modalContent: "Input field can't be empty",
            modalClass: 'modal-danger',
        }
    }
    if(action.type === "CLEAR_ITEMS") {
        return {...state, items: []}
    }
    if(action.type === "REMOVE_ITEM"){
        const newItems = state.items.filter((item) => item.id !== action.payload)
        return {...state, items:newItems}
    }
    if(action.type === "COMPLETE") {
        const newItems = state.items.map((item) => item.id === action.payload ? {...item, status:'complete'} : item)
        return {...state, items:newItems}
    }
    if(action.type === "CLOSE_MODAL"){
        return {...state, isModalOpen: false}
    }
}
const initialState = {
    items: [],
    isModalOpen: false,
    modalContent: '',
    modalClass: '',
}

const UseReducerProject = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            const newItems = {id:Date.now(), status:'pending', text}
            dispatch({ type:'ADD_ITEM', payload:newItems })
            setText('')
        } else{
            dispatch({ type:'NO_ITEM' })
        }
    }
    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'})
    }
    return (
        <Fragment>
            <h2 className="title">To Do List App by Oktavian Aji</h2>
            <div className="container">
                { state.isModalOpen && <Modal modalContent={state.modalContent} modalClass={state.modalClass} modalClose={closeModal} /> }
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input 
                            className="outline-input" 
                            type="text"
                            placeholder="What do you want to do?"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button className="btn-outline" type="submit">Add</button>
                    </div>
                </form>
                {state.items.length > 0 ? '' : <h2 className="no-item">No List Added</h2>}
                {state.items.map((item) => {
                    return (
                        <div key={item.id} className="list-item">
                            <h3 className={item.status === 'complete' ? "complete" : ""}>{item.text}</h3>
                            <div>
                                <button className="btn-done" onClick={() => dispatch({type:'COMPLETE', payload:item.id})}>Done</button>
                                <button className="btn-remove" onClick={() => dispatch({type:'REMOVE_ITEM', payload:item.id})}>Remove</button>
                            </div>
                        </div>
                    )
                })}
                <button className="btn-clear" onClick={() => dispatch({ type:'CLEAR_ITEMS' })}>Clear All Items</button>
            </div>
        </Fragment>
    )
}

export default UseReducerProject;
