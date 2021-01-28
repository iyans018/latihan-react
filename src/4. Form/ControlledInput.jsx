import React, { useState } from 'react';
import './Form.css';

function ControlledInput() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);

    const hendleSubmit = (e) => {
        e.preventDefault()
        if(firstName && email) {
            const person = {id: Date.now(), firstName, email}
            setPeople((people) => {
                return [...people, person];
            })
            setFirstName("")
            setEmail("")
        } else {
            alert('jangan kosong cuk!')
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={hendleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">    
                    <button type="submit">Add Data</button>
                </div>
            </form>
            {
                people.map((person) => {
                    const {id, firstName, email} = person;
                    return (
                        <div key={id} className="item">
                            <h3>{firstName}</h3>
                            <h3>{email}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ControlledInput;
