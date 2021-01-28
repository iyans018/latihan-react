import React, {useState, useContext, createContext} from 'react';
import './UseContext.css';

const Data = [
    {id:1, name:'john'},
    {id:2, name:'marry'},
    {id:3, name:'alex'},
    {id:4, name:'beni'},
]

const PersonContext = createContext();

const UseContext = () => {
    const [items, setItems] = useState(Data);
    const handleRemove = (id) => {
        setItems((items) => {
            return items.filter((person) => person.id !== id);
        })
    }
    return (
        <PersonContext.Provider value={{handleRemove, items}}>
            <div className="container">
                <h2 style={{marginBottom:'2rem'}}>Context API / Use Context</h2>
                <List />
            </div>
        </PersonContext.Provider>
    )
}

const List = () => {
    const mainItems = useContext(PersonContext);

    return (
        <>
            {mainItems.items.map((person) => {
                return (
                    <SinglePerson 
                        id={person.id} 
                        name={person.name}
                    />
                )
            })}
        </>
    )
}

const SinglePerson = ({id, name}) => {
    const {handleRemove} = useContext(PersonContext)

    return (
        <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={() => handleRemove(id)} className="btn-invicible">remove</button>
        </div>
    )
}

export default UseContext;
