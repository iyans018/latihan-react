import React, { useState } from 'react';
import './Form.css';

const MultipleInput = () => {
    const [person, setPerson] = useState({firstName:'', email:'', age:''});
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (person.firstName && person.email && person.age) {
            const newPerson = {...person, id:Date.now().toString()};
            setPeople([...people, newPerson]);
            setPerson({firstName:'', email:'', age:''});
        } else {
            alert('input form tidak boleh kosong!');
        }
    }

    return (
        <div className="container">
            <form className="form">
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={person.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="text" 
                        name="age" 
                        id="age"
                        value={person.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">    
                    <button type="submit" onClick={handleSubmit}>Add Person</button>
                </div>
            </form>
            {
                people.map((person) => {
                    const {id, firstName, email, age} = person;
                    return (
                        <div key={id} className="item">
                            <h3>{firstName}</h3>
                            <h3>{email}</h3>
                            <h3>{age}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MultipleInput;
