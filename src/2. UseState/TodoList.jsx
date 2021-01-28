import React, { useState } from 'react';
import './UseState.css';

const TodoList = () => {
    const [todos, setTodos] = useState("");
    const [id, setId] = useState("");
    const [items, setItem] = useState([])

    const handleChangeTodos = (e) => {
        setTodos(e.target.value)
    }

    const handleChangeId = (e) => {
        setId(e.target.value)
    }

    const handleSubmit = (e, id, todos) => {
        e.preventDefault()
        setItem([...items, {id:parseInt(id), todo:todos}])
        setId("")
        setTodos("")
        console.log(items)
    }

    const removeItem = (id) => {
        const newItem = items.filter((item) => item.id !== id)
        setItem(newItem)
    }

    const clearAllItems = () => {
        setItem([])
    }

    return (
        <div className="container">
            <h2>Todo List</h2>
            <form onSubmit={(e) => handleSubmit(e, id, todos)} className="item">
                <div>
                    <label>Id: </label>
                    <input type="text" value={id} onChange={handleChangeId} />
                </div>
                <div>
                    <label>ToDo: </label>
                    <input type="text" value={todos} onChange={handleChangeTodos} />
                </div>
                <button className="btn-invicible" type="submit">Add</button>
            </form>
            {
                items.map((item) => {
                    const {id, todo} = item;
                    return (
                        <div key={id} className="item">
                            <h4>{id}</h4>
                            <h4>{todo}</h4>
                            <button className="btn-invicible" onClick={() => removeItem(id)}>Done</button>
                        </div>
                    )
                })
            }
            <button onClick={clearAllItems} className="btn-primary">Clear All Items</button>
        </div>
    )
}

export default TodoList;
