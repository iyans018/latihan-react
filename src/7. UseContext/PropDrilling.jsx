import React, {useState, useContext} from 'react';
import './UseContext.css';

const Data = [
    {id:1, name:'john'},
    {id:2, name:'marry'},
    {id:3, name:'alex'},
    {id:4, name:'beni'},
]

const PropDrilling = () => {
    const [items, setItems] = useState(Data);
    const handleRemove = (id) => {
        setItems((items) => {
            return items.filter((person) => person.id !== id);
        })
    }
    return (
        <div className="container">
            <h2 style={{marginBottom:'2rem'}}>Prop Drilling</h2>
            <List people={items} removePerson={handleRemove} />
        </div>
    )
}

const List = ({people, removePerson}) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson 
                        id={person.id} 
                        name={person.name}
                        removePerson={removePerson}
                    />
                )
            })}
        </>
    )
}

const SinglePerson = ({id, name, removePerson}) => {
    return (
        <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={() => removePerson(id)} className="btn-invicible">remove</button>
        </div>
    )
}

export default PropDrilling;
