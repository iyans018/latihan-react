import React, { useState } from 'react'
import './UseState.css'

const data = [
    {id:1, name:'john'},
    {id:2, name:'mamat'},
    {id:3, name:'asep'},
    {id:4, name:'tono'},
    {id:5, name:'toni'},
    {id:7, name:'mikasa'},
    {id:8, name:'eren'},
    {id:9, name:'reiner'}
];

function UseStateArray() {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        console.log(id)
        const newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }

    const addItem = () => {
        console.log('berhasil')
    }

    return (
        <div className="container">
            <h2>List of People</h2>
            {
                people.map((person) => {
                    const { id, name} = person;     
                    return (     
                        <div key={id} className="item">
                            <h4>{name}</h4>
                            <input className="btn-invicible" type="button" value="remove" onClick={() => removeItem(id)} />
                        </div>
                    )
                })
            }
            <input className="btn-primary" type="button" value="Clear All Item" onClick={() => setPeople([])} />
        </div>
    )
}

export default UseStateArray
