import React, { useState } from 'react';
import './UseStateProjects.css';

const UseStateProjects = () => {
    const [text, setText] = useState("");
    const [items, setItem] = useState([]);

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const submitHandler = (e, inputText) => {
        e.preventDefault()
        if (text) {            
            const item = {id: Date.now, todoText: inputText, status: 'pending'};
            // setItem((items) => {
            //     return [...items, item];
            // })
            setItem([...items, {id:Date.now(), todoText:inputText, status:'pending'}])
        } else {
            alert('Tidak dapat menambahkan list!')
        }
        setText("")
    }

    const removeHandler = (id) => {
        setItem((oldItems) => {
            let newItems = oldItems.filter((item) => item.id !== id)
            return newItems
        })
    }

    const completedHandler = (id) => {
        setItem((oldItems) => {
            let newItems = oldItems.map((item) => item.id === id ? { ...item, status:'completed' } : item)
            return newItems
        })
    }

    return (
        <>
            {console.log(items)}
            <h2 className="title">To Do List App by Oktavian Aji</h2>
            <div className="container">
                <form onSubmit={(e) => submitHandler(e, text)}>
                    <div className="form-container">
                        <input type="text" value={text} onChange={changeHandler} placeholder="What do you want to do!"/>
                        <button type="submit">Add</button>
                    </div>
                </form>
                {items.length === 0 ? <p className="empty-list">There is no list added</p> : ""}
                {
                    items.map((item) => {
                        const {id, todoText, status} = item;
                        return (
                            <div key={id} className="todo-item">
                                <p className={`todo-text ${status === 'completed' ? "completed" : ""}`}>{todoText}</p>
                                <div>
                                    <button className="btn-done" onClick={() => completedHandler(id)}>Done</button>
                                    <button className="btn-remove" onClick={() => removeHandler(id)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="btn-clear" onClick={() => setItem([])}>Clear Items</button>
            </div>
        </>
    )
}

export default UseStateProjects;
